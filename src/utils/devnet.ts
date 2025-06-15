
export async function simulateDevnetCheck(address: string): Promise<boolean> {
  try {
    const response = await fetch(`https://api.devnet.solana.com`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'getTokenSupply',
        params: [address]
      })
    });

    const result = await response.json();
    return result?.result?.value?.uiAmount !== undefined;
  } catch (error) {
    console.error("Devnet simulation error:", error);
    return false;
  }
}