import { BigNumber,ContractTransaction, ContractReceipt } from "ethers";

export interface TransferStruct {
  sender: string;
  receiver: string;
  amount: BigNumber | number;
  message: string;
  timestamp: BigNumber;
  keyword: string;
}

export interface Transactions extends TransactionsInterface, TransactionsOverrides {
    deployed(): Promise<Transactions>;
    wait(): Promise<ContractReceipt>;
}

export interface TransactionsInterface {
  addToBlockchain(receiver: string, amount: BigNumber | number, message: string, keyword: string): Promise<ContractTransaction>;
  getAllTransactions(): Promise<TransferStruct[]>;
  getTransactionCount(): Promise<BigNumber | number>;
}

export interface TransactionsOverrides {
  addToBlockchain(receiver: string, amount: BigNumber | number, message: string, keyword: string): Promise<ContractTransaction>;
  getAllTransactions(): Promise<TransferStruct[]>;
  getTransactionCount(): Promise<BigNumber | number>;
}