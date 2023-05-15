import { BigNumber,ContractTransaction } from "ethers";

export interface TransferStruct {
  receiver: string;
  sender: string;
  timestamp: {
    toNumber: () => number;
  };
  message: string;
  keyword: string;
  amount: {
    _hex: string;
  };
}
export interface FormData {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
}

export interface TransactionContextInterface  {
  transactionCount : string | null,
  connectWallet: () => void,
  transactions: TransferStruct[],
  currentAccount: string,
  isLoading: boolean,
  sendTransaction: () => void,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>,name: keyof FormData) => void,
  formData: FormData,
}

export interface TransactionsInterface {
  
  addToBlockchain(receiver: string, amount: BigNumber | number, message: string, keyword: string): Promise<ContractTransaction>;
  getAllTransactions(): Promise<TransferStruct[]>;
  getTransactionCount(): Promise<BigNumber | number>;
  
}
