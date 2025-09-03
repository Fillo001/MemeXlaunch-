const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  // Deploy Mock OKB
  const MockOKB = await hre.ethers.getContractFactory("MockOKB");
  const mockOKB = await MockOKB.deploy();
  await mockOKB.deployed();
  console.log("MockOKB deployed to:", mockOKB.address);

  // Deploy MemeFactory
  const MemeFactory = await hre.ethers.getContractFactory("MemeFactory");
  const factory = await MemeFactory.deploy();
  await factory.deployed();
  console.log("MemeFactory deployed to:", factory.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
