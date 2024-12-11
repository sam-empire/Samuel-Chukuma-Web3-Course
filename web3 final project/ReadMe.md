# SendETH DApp

This is a simple Ethereum Decentralized Application (DApp) that allows users to connect their Ethereum wallet (MetaMask), view their account balance, and send ETH.

## Prerequisites

Before running the DApp, make sure you have the following installed:

- **Node.js**: Make sure Node.js is installed on your machine. You can check by running:
  ```bash
  node -v


An Ethereum Test Network (e.g., Rinkeby, Sepolia, or Goerli) or the Ethereum Mainnet. You will need test ETH to use the test networks. You can obtain test ETH from various faucets.

## Steps to Run the DApp
Follow these steps to set up and run the DApp locally:

1. Clone or Download the Project
Clone or download the project files to your local machine.

bash
Copy code
git clone <repository-url>
cd sendeth-dapp
Or simply download the sendeth-dapp folder as a zip file.

2. Install Dependencies
Make sure you're in the project directory, then install the necessary dependencies:

bash
Copy code
npm install ethers
3. Run the DApp Locally
To run the DApp locally, you can use a simple static server like live-server or http-server.

Option 1: Using live-server

If you don't have live-server installed, you can install it globally:

bash
Copy code
npm install -g live-server
Then, run the following command to start a local server:

bash
Copy code
live-server
This will automatically open the DApp in your default browser.

4. Connect Your Wallet
Once the DApp is running, click the "Connect Wallet" button to connect your MetaMask (or other Ethereum wallet). MetaMask will ask you to approve the connection. After successful connection, your Ethereum account address and balance will be displayed.

5. Send ETH
Enter a recipient Ethereum address and the amount of ETH to send, then click "Send ETH". MetaMask will prompt you to confirm the transaction. After confirmation, the transaction will be sent to the network.

6. Test Networks
Make sure you are connected to an Ethereum test network (e.g., Rinkeby, Sepolia, Goerli) in MetaMask. You can get test ETH from various faucet sites (e.g., Rinkeby Faucet).

Troubleshooting
MetaMask Not Detected: Ensure that MetaMask is installed in your browser and is unlocked.

Transaction Issues: Ensure that you are connected to the correct network and have enough ETH (or test ETH) to send the transaction.

No Accounts Found: If MetaMask is not asking to connect, ensure that you are logged in and that MetaMask is connected to the correct network.
