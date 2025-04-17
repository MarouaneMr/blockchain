let contract;
let signer;

const contractAddress = "0x5939748d9DBCba14f83f11dF51e86698f50DaB9D";
const abi = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)",
];

async function connectWallet() {
  if (typeof window.ethereum === 'undefined') {
    return alert("🦊 MetaMask is not installed.");
  }

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();

    const userAddress = await signer.getAddress();
    document.getElementById("walletAddress").innerText = `✅ Connected: ${userAddress}`;

    const message = "Sign to verify ownership.";
    await signer.signMessage(message);

    contract = new ethers.Contract(contractAddress, abi, signer);
  } catch (err) {
    console.error(err);
    alert("⚠️ Wallet connection failed.");
  }
}

function sanitizeAddress(addr) {
  const pattern = /^0x[a-fA-F0-9]{40}$/;
  return pattern.test(addr) ? addr : null;
}

async function getBalance() {
  const addressInput = document.getElementById("balanceAddress").value.trim();
  const cleanAddress = sanitizeAddress(addressInput);
  if (!cleanAddress) return alert("❌ Invalid address.");

  try {
    const balance = await contract.balanceOf(cleanAddress);
    document.getElementById("balanceResult").innerText =
      `Balance: ${ethers.utils.formatUnits(balance, 18)} MRN`;
  } catch {
    document.getElementById("balanceResult").innerText = "⚠️ Error fetching balance.";
  }
}

async function transferTokens() {
  const toInput = document.getElementById("toAddress").value.trim();
  const amountInput = document.getElementById("transferAmount").value.trim();
  const cleanTo = sanitizeAddress(toInput);
  const amount = parseFloat(amountInput);

  if (!cleanTo || isNaN(amount) || amount <= 0)
    return alert("❌ Invalid input.");

  try {
    const tx = await contract.transfer(cleanTo, ethers.utils.parseUnits(amount.toString(), 18));
    await tx.wait();
    document.getElementById("transferResult").innerText = "✅ Transfer successful!";
  } catch {
    document.getElementById("transferResult").innerText = "❌ Transfer failed.";
  }
}
