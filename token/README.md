# MyToken — ERC-20 Smart Contract

## 📄 Overview

This project contains an ERC-20 compatible token called **MyToken (MRN)**, deployed on a **local Ganache blockchain** using **Remix** and **MetaMask**.

---

## 🚀 How to Compile and Deploy the Contract (Using Remix + Ganache + MetaMask)

### 1. Open Remix IDE
Go to: [https://remix.ethereum.org](https://remix.ethereum.org)

### 2. Create and Paste the Contract
- Create a new file `MyToken.sol`
- Paste in the ERC-20 contract code

### 3. Compile
- Go to the **Solidity Compiler** tab
- Select version `0.8.18`
- Click **Compile MyToken.sol**

### 4. Connect MetaMask (Ganache Wallet)
- Open **Ganache**
- Copy a private key from one of the accounts
- Import it into MetaMask
- Add a new network:
Network Name: Ganache Local RPC URL: http://127.0.0.1:7545 Chain ID: 1337 Currency Symbol: ETH
- Switch MetaMask to this network

### 5. Deploy Contract
- Go to **Deploy & Run Transactions** tab in Remix
- Set **Environment** to `Injected Provider - MetaMask`
- Select contract: `MyToken`
- Enter initial supply: `1000000`
- Click **Deploy**
- Confirm in MetaMask

✅ Copy the deployed **contract address** for use in the frontend.

---

## 🔧 Notes

- Token Symbol: **MRN**
- Decimals: **18**
- Standard ERC-20 functions: `transfer`, `balanceOf`, `approve`, `transferFrom`