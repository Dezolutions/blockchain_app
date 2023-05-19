const { expect } = require("chai");
const { ethers } = require("hardhat");

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Transactions, TransferStruct } from "../types/contractTypes";

describe("Transactions Contract", function () {
  let transactionsContract: Transactions;
  let owner: SignerWithAddress;
  let receiver: SignerWithAddress;
  const amount = 100;
  const message = "Test message";

  beforeEach(async function () {
    [owner, receiver] = await ethers.getSigners();

    const Transactions = await ethers.getContractFactory("Transactions");
    transactionsContract = await Transactions.deploy();
    await transactionsContract.deployed();
  });

  it("should add a transaction to the blockchain", async function () {
    await transactionsContract.addToBlockchain(receiver.address, amount, message);

    const transactions = await transactionsContract.getAllTransactions();
    expect(transactions.length).to.equal(1);

    const transaction = transactions[0] as TransferStruct;
    expect(transaction.sender).to.equal(owner.address);
    expect(transaction.receiver).to.equal(receiver.address);
    expect(transaction.amount).to.equal(amount);
    expect(transaction.message).to.equal(message);
  });

  it("should emit a Transfer event", async function () {
    const tx = await transactionsContract.addToBlockchain(receiver.address, amount, message);
    const receipt = await tx.wait();

    expect(receipt.events?.length).to.equal(1);

    const event = receipt.events?.[0];
    expect(event?.event).to.equal("Transfer");
    expect(event?.args?.from).to.equal(owner.address);
    expect(event?.args?.receiver).to.equal(receiver.address);
    expect(event?.args?.amount).to.equal(amount);
    expect(event?.args?.message).to.equal(message);
  });
});