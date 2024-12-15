# 🏦 ENS Treasury Utils

> Making treasury management a bit less scary! 🎉

A collection of utilities for managing ENS DAO treasury transactions, starting with a handy USDC transfer calldata builder.

## 🌟 Features

Currently featuring:

- **USDC Transfer Builder**: Generate accurate calldata for USDC transfers without breaking a sweat!
- **Input Validation**: Because nobody likes failed transactions 😅
- **Interactive CLI**: For when you prefer typing to coding

## 🚀 Quick Start

### Installation

```bash
npm install
```

### CLI Usage

Run the interactive prompt:

```bash
node buildUSDCTransfer.js
```

Follow the prompts to enter:

1. Destination address
2. USDC amount (supports comma formatting!)

### Programmatic Usage

```javascript
const { buildUSDCTransferData } = require("./buildUSDCTransfer");

const calldata = buildUSDCTransferData(
  "0x690F0581eCecCf8389c223170778cD9D029606F2", // recipient
  "1,218,669.76" // amount (commas are fine!)
);

console.log(calldata);
```

## 🔍 Example Transaction

Here's a real-world example from the ENS DAO:

```javascript
// Recipient: ENS Labs
// Amount: 1,218,669.76 USDC
// Generated calldata:
0xa9059cbb000000000000000000000000690f0581ececcf8389c223170778cd9d029606f20000000000000000000000000000000000000000000000000000011bbe60ce00;
```

## 🛠 Technical Details

- Uses ethers.js for robust Ethereum interactions
- Handles USDC's 6 decimal places automatically
- Validates Ethereum addresses and amounts
- Supports human-readable number formatting (with commas)

## 🤝 Contributing

Found a bug? Want to add a feature? PRs are welcome!

## 📜 License

MIT License - feel free to use this in your own projects!

## 🙋‍♂️ Support

Having trouble? Open an issue, and we'll figure it out together!

---

Built with ❤️ for the ENS community
