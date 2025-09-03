import { useState } from "react";
import { ethers } from "ethers";
import factoryABI from "../artifacts/MemeFactory.json";

const FACTORY_ADDRESS = "0xFactory1234567890abcdef1234567890abcdef1234";

export default function Demo() {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("");

  async function createToken() {
    if (!window.ethereum) return alert("Install MetaMask!");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const factory = new ethers.Contract(FACTORY_ADDRESS, factoryABI.abi, signer);
    const tx = await factory.createMeme(name, symbol, supply);
    await tx.wait();
    alert("Meme Token Created!");
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>MemeXLaunch 🚀</h2>
      <input placeholder="Token Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Symbol" onChange={e => setSymbol(e.target.value)} />
      <input placeholder="Initial Supply" onChange={e => setSupply(e.target.value)} />
      <button onClick={createToken}>Create Meme Token</button>
    </div>
  );
}
