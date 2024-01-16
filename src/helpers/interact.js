import { ethers } from "ethers"
import { getContractWithSigner } from "./contract"
import {MerkleTree} from "merkletreejs";
import keccak256 from "keccak256";


export const mintNFT = async (
  walletAddress,
  setMintLoading,
  numbers
) => {
  const contract = getContractWithSigner()

  try {

    
    var walletList = [
        "0x73BB63d20c665E0fE243C92FD69D7e595909bbd6",
        "0x211d4cc5805b6FAC8a9e4eD760Ae6f9e71E00D0C",
        "0xEE2D12d7318c0496a0C08227886F2C804B69d92e"
      ];

    let index = walletList.indexOf(ethers.utils.getAddress(walletAddress));
    let hexProof;
    
    if (index != -1) {
      const leafNodes = walletList.map(addr => keccak256(addr).toString('hex'));
      const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});
      const rootHash = merkleTree.getRoot();
      hexProof = merkleTree.getHexProof(leafNodes[index]);
    } else {
      hexProof = [
          "0x4b1c361c6c8ee4236a2509fc0c596140f86d5a49ec3bb9da97074421f8ded499",
          "0x928ae65c2e7bee6b7978217ffdb422e1b79b24f3e9032764590c0edec4687d8b"
      ];
    }

    let txhash = await contract.mintToken(numbers,hexProof, {
      value: ethers.BigNumber.from(1e9).mul(
        ethers.BigNumber.from(1e9).mul(9).div(100).mul(numbers)
      ),
      from: walletAddress,
    })

    let res = await txhash.wait()
    setMintLoading(false)

    if (res.transactionHash) {
      return {
        success: true,
        status: `Successfully minted ${numbers} Enraged Bull.`,
      }
    } else {

      return {
        success: false,
        status: "Transaction failed",
      }
    }
  } catch (err) {
    setMintLoading(false)
    console.log(err);
    return {
      success: false,
      status: err.message,
    }
  }
}
