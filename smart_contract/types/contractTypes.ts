import { BigNumber,ContractTransaction, ContractReceipt } from "ethers";

export interface TransferStruct {
  sender: string;
  receiver: string;
  amount: BigNumber | number;
  message: string;
  timestamp: BigNumber;
}

export interface Transactions extends TransactionsInterface, TransactionsOverrides {
    deployed(): Promise<Transactions>;
    wait(): Promise<ContractReceipt>;
}

export interface TransactionsInterface {
  addToBlockchain(receiver: string, amount: BigNumber | number, message: string): Promise<ContractTransaction>;
  getAllTransactions(): Promise<TransferStruct[]>;
  getBalance(walletAddress: string): Promise<number>
}

export interface TransactionsOverrides {
  addToBlockchain(receiver: string, amount: BigNumber | number, message: string): Promise<ContractTransaction>;
  getAllTransactions(): Promise<TransferStruct[]>;
  getBalance(walletAddress: string): Promise<number>
}