// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Transactions {

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp);
  
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message) public {
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getBalance(address walletAddress) public view returns (uint256) {
        return address(walletAddress).balance;
    }
}