const { buildUSDCTransferData } = require("./buildUSDCTransfer");

const TEST_CASES = [
  {
    name: "Metagov Transfer",
    amount: "254000",
    address: "0x91c32893216dE3eA0a55ABb9851f581d4503d39b",
    expectedCalldata:
      "0xa9059cbb00000000000000000000000091c32893216de3ea0a55abb9851f581d4503d39b0000000000000000000000000000000000000000000000000000003b23946c00",
  },
  {
    name: "Ecosystem Transfer",
    amount: "836000",
    address: "0x2686A8919Df194aA7673244549E68D42C1685d03",
    expectedCalldata:
      "0xa9059cbb0000000000000000000000002686a8919df194aa7673244549e68d42c1685d03000000000000000000000000000000000000000000000000000000c2a57ba800",
  },
  {
    name: "Public Goods Transfer",
    amount: "226000",
    address: "0xcD42b4c4D102cc22864e3A1341Bb0529c17fD87d",
    expectedCalldata:
      "0xa9059cbb000000000000000000000000cd42b4c4d102cc22864e3a1341bb0529c17fd87d000000000000000000000000000000000000000000000000000000349ea65400",
  },
];

function runTests() {
  console.log("Running USDC Transfer Calldata Tests\n");
  let passCount = 0;
  let failCount = 0;

  TEST_CASES.forEach((test) => {
    try {
      console.log(`Testing ${test.name}:`);
      console.log(`Amount: ${test.amount} USDC`);
      console.log(`Address: ${test.address}`);

      const generatedCalldata = buildUSDCTransferData(
        test.address,
        test.amount
      );
      const matches =
        generatedCalldata.toLowerCase() === test.expectedCalldata.toLowerCase();

      if (matches) {
        console.log("✅ PASS - Calldata matches exactly");
        passCount++;
      } else {
        console.log("❌ FAIL - Calldata mismatch");
        console.log("Expected:", test.expectedCalldata);
        console.log("Generated:", generatedCalldata);
        failCount++;
      }
      console.log("\n");
    } catch (error) {
      console.log("❌ FAIL - Test threw an error:", error.message);
      failCount++;
    }
  });

  console.log("Test Summary:");
  console.log(`Passed: ${passCount}`);
  console.log(`Failed: ${failCount}`);
  console.log(`Total: ${TEST_CASES.length}`);

  // Exit with error code if any tests failed
  if (failCount > 0) {
    process.exit(1);
  }
}

// Run tests if this script is executed directly
if (require.main === module) {
  runTests();
}

module.exports = { runTests };
