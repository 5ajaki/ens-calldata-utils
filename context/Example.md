## Specification

This executable proposal will initiate a transfer of 1,218,669.76 USDC from the ENS DAO treasury to ENS Labs. This amount represents the final total of all legal expenses related to the eth.link litigation.

### Transaction Details

- **From:** ENS DAO Treasury (0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7)
- **To:** USDC Token Contract (0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48)
- **Recipient:** ENS Labs (0x690F0581eCecCf8389c223170778cD9D029606F2)
- **Amount:** 1,218,669.76 USDC (1218669760000 considering USDC's 6 decimal places)
- **Purpose:** Reimbursement for legal fees in eth.link litigation

#### Transaction Data (edit on 9/24 - thanks clowes.eth)

```
To: 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48
Data: 0xa9059cbb000000000000000000000000690f0581ececcf8389c223170778cd9d029606f20000000000000000000000000000000000000000000000000000011bbe60ce00
```

Breakdown of the transaction data:

- `0xa9059cbb`: Function selector for the `transfer(address,uint256)` function
- `000000000000000000000000690f0581ececf8389c223170778cd9d029606f2`: Padded recipient address
- `0000000000000000000000000000000000000000000000000000011bbe60ce00`: Padded amount (1218669760000 in hexadecimal)

This transaction calls the `transfer` function of the USDC contract, transferring 1,218,669.76 USDC to ENS Labs' address.
