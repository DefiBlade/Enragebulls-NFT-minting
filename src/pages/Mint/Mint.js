import './Mint.scss';
import { useState, useRef, useEffect } from 'react';
import { calculateTimeLeft } from '../../helpers/timer';
import { mintNFT } from "../../helpers/interact";
import { connectWallet, getCurrentWalletConnected } from "../../helpers/wallet";
import { getIsWhiteList,getIsSaleActive } from "../../helpers/contract";
import { NotificationManager } from "react-notifications";

const nfts = [
    '1 NFT',
    '2 NFTs',
    '3 NFTs'
]
const Mint = () => {

    const nftList = useRef(null);
    const [selMint, setSelMint] =  useState('1 NFT');
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    const [mintLoading, setMintLoading] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");
    const [status, setStatus] = useState("");
    const [number, setNumber] = useState(1);

    useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft])



   useEffect(() => {
    const initDatas = async () => {
      if (window.ethereum) {
        const { address, status } = await getCurrentWalletConnected();
        setWalletAddress(address);
        setStatus(status);
        onChangeWalletListener();
        onConnectWalletHandler();
      }
    };

    initDatas();
  }, []);

    useEffect( () => {
        document.addEventListener('mousedown', onHide)
    } )


  const onConnectWalletHandler = async () => {
    if (window.ethereum) {
      const walletResponse = await connectWallet();
      setStatus(walletResponse.status);
      setWalletAddress(walletResponse.address);
    } else {
      NotificationManager.success(
        "🦊 You must install Metamask in your browser"
      );
    }
  };

  const onChangeWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length) {
          setWalletAddress(accounts[0]);
          setStatus("Get your NodeStones, 0.1ETH");
        } else {
          setWalletAddress("");
          setStatus("Connect Metamask");
        }
      });

      window.ethereum.on("chainChanged", (chainId) => {
        onConnectWalletHandler();
      });
    } else {
      setStatus(
        <p>
          🦊 You must install Metamask, a virtual Ethereum wallet, in your
          browser.(https://metamask.io/download.html)
        </p>
      );
    }
  };

    const onMintHandler = async (amount) => {
    
    if (!!walletAddress) {
      let saleIsActive = await getIsSaleActive();

      if (saleIsActive) {
        
        setMintLoading(true);
        const { success, status } = await mintNFT(
          walletAddress,
          setMintLoading,
          amount
        );
        if (success) {
          NotificationManager.success(
            "Congratulations. Enraged Bull are  successfully minted !"
          );
        } else if (status.indexOf("insufficient fund") >= 0) {
          NotificationManager.info(
            "Info. You don't have enough eths to mint Enraged Bull!"
          );
        } else if (status.indexOf("presale is not open") >= 0) {
          NotificationManager.info("Presale is not open !");
        } else if (
          status.indexOf("Not whitelist") >= 0
        ) {
          NotificationManager.info(
            "Your wallet address is not whitelisted. Please wait for the Public Sale at 1PM GMT !"
          );
        }  else {
          NotificationManager.info("Transaction is failed !");
        }

      } else {
        NotificationManager.info("Sale is not Open!");
      }
    }
  };

    
    const onSelect = () => {
        nftList.current.style.display = 'block'
    }

    const onChoose = (index) => {
        nftList.current.style.display = 'none';
        setSelMint(nfts[index])
        setNumber(index + 1)
    }

    const onHide = (e) => {
        if(nftList.current && !nftList.current.contains(e.target)) {
            nftList.current.style.display = 'none';
        }
    }

    return (
        <div className="mint">
            <div className="date">
                <div className="date-title">Public Mint</div>
                <div className="date-clock">
                    <div className="clock-item">
                        <div className="clock-item-title">{timeLeft.days}</div>
                        <div className="clock-item-unit">Days</div>
                    </div>
                    <div className="clock-item">
                        <div className="clock-item-title">{timeLeft.hours}</div>
                        <div className="clock-item-unit">Hours</div>
                    </div>
                    <div className="clock-item">
                        <div className="clock-item-title">{timeLeft.minutes}</div>
                        <div className="clock-item-unit">Minutes</div>
                    </div>
                    <div className="clock-item">
                        <div className="clock-item-title">{timeLeft.seconds}</div>
                        <div className="clock-item-unit">Seconds</div>
                    </div>
                </div>
                <div className="mint-select" onBlur={onHide}>
                    <div className="select" onClick={onSelect}>
                        <div className="icon" aria-hidden="true"><i className="fas fa-angle-down"></i></div>
                        <div className="placeholder">{selMint}</div>
                    </div>
                    <nav className="mint-list" ref={nftList}>
                        <div className="mint-link" onClick={ () => onChoose(0) }>1 NFT</div>
                        <div className="mint-link" onClick={ () => onChoose(1) }>2 NFTs </div>
                        <div className="mint-link" onClick={ () => onChoose(2) }>3 NFTs</div>
                    </nav>
                </div>
                <button className="mint-operation" onClick={() => {onMintHandler(number)}}>Mint Now</button>
            </div>
            <div className="mint-description">
                <div className="title">
                    ENRAGED BULLS NFT OWNERS ARE PIONEERS
                </div>
                <div className="description">
                    Enraged Bulls NFT owners get control over community fund, exclusive whitelists and presale events for NFT projects within the incubator programme.
                </div>
            </div>
        </div>
    );
}

export default Mint;