import React from 'react'
import { ethers, Signer, providers } from 'ethers'
import { contractAddress, contractABI } from "../utils/constants";
import {TransferStruct,StructuredTransaction, FormData, TransactionContextInterface, TransactionsInterface} from '../types/contractTypes'

export const TransactionContext = React.createContext<TransactionContextInterface | any>(null)
const { ethereum }: any = window;

const createEthereumContract = () :TransactionsInterface => {
  const provider :providers.Web3Provider = new ethers.providers.Web3Provider(ethereum);
  const signer :Signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer) as TransactionsInterface;

  return transactionsContract;
};

export const TransactionProvider = ({children} :any) => {
  const [formData, setformData] = React.useState<FormData>({ addressTo: "", amount: "", message: "" });
  const [currentAccount, setCurrentAccount] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [balance, setBalance] = React.useState<number>()
  const [transactions, setTransactions] = React.useState<StructuredTransaction[]>([]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: keyof FormData) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const getBalance = async (walletAddress: string): Promise<void> => {
    try {
      if (ethereum) {
        
        const transactionsContract = createEthereumContract();
        const balanceWei = await transactionsContract.getBalance(walletAddress)
        setBalance(balanceWei / (10 ** 18))
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error)
    }
  }
  const getAllTransactions = async () :Promise<void> => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const availableTransactions = await transactionsContract.getAllTransactions();

        const structuredTransactions:StructuredTransaction[] = availableTransactions.map((transaction: TransferStruct):StructuredTransaction => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          message: transaction.message,
          amount: parseInt(transaction.amount._hex) / (10 ** 18)
        }));

        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnect = async () :Promise<void> => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getBalance(accounts[0])
        getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () :Promise<void> => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      setCurrentAccount(accounts[0]);
      getBalance(accounts[0])
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const sendTransaction = async () :Promise<void> => {
    try {
      if (ethereum) {
        const { addressTo, amount, message } : FormData = formData;
        const transactionsContract = createEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [{
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          }],
        });

        const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message);

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);
        getAllTransactions()
        getBalance(currentAccount)
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };
  React.useEffect(() => {
    checkIfWalletIsConnect()
  },[])
  return (
    <TransactionContext.Provider value={{connectWallet, balance, currentAccount, handleChange, sendTransaction, transactions, formData, isLoading}}>
      {children}
    </TransactionContext.Provider>
  )
}
