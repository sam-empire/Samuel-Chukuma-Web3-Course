// Initialize ethers.js
let provider;
let signer;
let account;

async function connectWallet() {
    if (window.ethereum) {
        try {
            // Request wallet connection through MetaMask
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Set provider using window.ethereum (MetaMask)
            provider = new ethers.providers.Web3Provider(window.ethereum); // Use Web3Provider for MetaMask
            signer = provider.getSigner();

            // Get the connected account
            account = await signer.getAddress();
            displayAccountInfo();
        } catch (error) {
            alert("Connection failed: " + error.message);
        }
    } else {
        alert("Please install MetaMask or another Ethereum wallet.");
    }
}

async function displayAccountInfo() {
    // Display account address
    document.getElementById("account").textContent = `Account: ${account}`;

    // Get balance in ETH
    const balanceInWei = await provider.getBalance(account);
    const balanceInEth = ethers.utils.formatEther(balanceInWei);
    document.getElementById("balance").textContent = `Balance: ${balanceInEth} ETH`;

    // Show the transaction interface
    document.getElementById("walletInfo").style.display = "block";
}

async function sendTransaction() {
    const recipient = document.getElementById("recipient").value;
    const amount = document.getElementById("amount").value;

    if (!ethers.utils.isAddress(recipient)) {
        alert("Invalid recipient address.");
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    try {
        // Convert amount to Wei
        const amountInWei = ethers.utils.parseEther(amount);

        // Send ETH transaction
        const tx = await signer.sendTransaction({
            to: recipient,
            value: amountInWei
        });

        // Wait for transaction to be mined
        await tx.wait();

        alert(`Transaction successful! Hash: ${tx.hash}`);
        displayAccountInfo(); // Refresh account balance
    } catch (error) {
        alert("Transaction failed: " + error.message);
    }
}
