import { ethers } from "ethers"
import contractABI from "./abis/abi.json";
import { ENVS } from "./configurations/index";
import { database } from "./firebase";

// Contract can be used to write Contract
export const getContractWithSigner = () => {
  const infuraProvider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = infuraProvider.getSigner()

  const contract = new ethers.Contract(
    ENVS.CONTRACT_ADDRESS,
    contractABI,
    signer
  )

  return contract
}

// Contract can be used to read Contract
const getContractWithoutSigner = () => {
  const infuraProvider = new ethers.providers.Web3Provider(window.ethereum)

  const contract = new ethers.Contract(
    ENVS.CONTRACT_ADDRESS,
    contractABI,
    infuraProvider
  )

  return contract
}

// Get Current Total Supply from the Contract
export const getCurrentTotalSupply = async () => {
  const contract = getContractWithoutSigner()

  try {
    let totalSupply = await contract.totalSupply()

    return ethers.BigNumber.from(totalSupply).toNumber()
  } catch (err) {
    return 0
  }
}

// Get Max Element Counts from the Contract
export const getCurrentMaxSupply = async () => {
  const contract = getContractWithoutSigner()

  try {
    let currentMaxSupply = await contract.maxSupply()

    return ethers.BigNumber.from(currentMaxSupply).toNumber()
  } catch (err) {
    return 0
  }
}

export const getIsSaleActive = async () => {
  const contract = getContractWithoutSigner();
  try {
    let isActive = await contract.saleIsActive();
    return isActive;
  } catch (err) {
    return false;
  }
};

export const getIsWhiteList = async (walletAddress) => {
  const address = ethers.utils.getAddress(walletAddress);
  let snapshot = await database.ref("/whitelist").get();
  if (snapshot.exists) {
    var walletList = [];
    const newArray = snapshot.val();
    let value;
    if (newArray) {
      Object.keys(newArray).map((key) => {
        value = newArray[key];
      });

      if (value.indexOf(address) > -1) return value;
      return "";
    }
  }
  return "empty";
};

