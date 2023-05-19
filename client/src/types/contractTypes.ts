import { BigNumber,Contract,ContractTransaction } from "ethers";

export interface TransferStruct {
  receiver: string;
  sender: string;
  timestamp: {
    toNumber: () => number;
  };
  message: string;
  amount: {
    _hex: string;
  };
}
export interface StructuredTransaction {
  addressTo: string,
  addressFrom: string,
  timestamp: string,
  message: string,
  amount: number
}

export interface InputData {
  placeholder: string,
  name: keyof FormData,
  type: string,
  value?: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: keyof FormData) => void,
  disabled: boolean
}
export interface FormData {
  addressTo: string;
  amount: string;
  message: string;
}

export interface TransactionContextInterface  {
  connectWallet: () => void,
  transactions: StructuredTransaction[],
  currentAccount: string,
  isLoading: boolean,
  sendTransaction: () => void,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>,name: keyof FormData) => void,
  formData: FormData,
}

export interface TransactionsInterface extends Contract{
  addToBlockchain(receiver: string, amount: BigNumber | number, message: string): Promise<ContractTransaction>;
  getAllTransactions(): Promise<TransferStruct[]>;
}
