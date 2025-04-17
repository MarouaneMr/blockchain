# MyToken Frontend Interface

## 🧩 Overview

This is a simple HTML + JavaScript + Ethers.js frontend that connects to the deployed `MyToken` ERC-20 contract and allows:

- 🔌 Wallet connection (MetaMask)
- 👀 Balance checking
- 💸 Sending MRN tokens

---

## 🚀 How to Run the Frontend

### ✅ Option 1: Live Server (Recommended)

1. Open the `frontend/` folder in **VS Code**
2. Install the **Live Server** extension
3. Right-click `index.html` → Click **"Open with Live Server"**

> It will open the app at:
http://127.0.0.1:5500/frontend/

### ✅ Option 2: Using `npx serve`

If you have Node.js installed, you can use:

```bash
cd frontend
npx serve

DO NOT FORGET:
Edit app.js → Paste your deployed contract address:
const contractAddress = "0xYourDeployedAddressHere";

Requirements:

MetaMask browser extension

Ethers.js (already included via CDN)

Ganache running locally

Smart contract deployed via Remix