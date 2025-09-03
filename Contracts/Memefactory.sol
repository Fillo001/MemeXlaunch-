// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./MemeToken.sol";

contract MemeFactory {
    address[] public deployedTokens;

    event MemeCreated(address tokenAddress, string name, string symbol);

    function createMeme(string memory name, string memory symbol, uint256 initialSupply) external {
        MemeToken token = new MemeToken(name, symbol, initialSupply, msg.sender);
        deployedTokens.push(address(token));
        emit MemeCreated(address(token), name, symbol);
    }

    function getDeployedTokens() external view returns (address[] memory) {
        return deployedTokens;
    }
}
