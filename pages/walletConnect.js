import { useState, useEffect } from 'react';
import { connector } from '/utils/walletProvider';
import { contract, address } from '/utils/contract';

function WalletConnect() {
  const [connected, setConnected] = useState(false);
  const onClick = async () => {
    if (connector.connected) {
      // もう一度 wallet Connect ボタンが押されたときに一度コネクションを削除する。
      await connector.killSession();
    }
    connector.createSession();
  };

  const txn = async () => {
    const tx = {
      from: connector._accounts[0],
      to: address,
      data: contract.methods
        .transfer(
          '0x46040DAa36e28Aa9B4bC89F5b69934E16D2621ad',
          BigInt(10 ** 18)
        )
        .encodeABI(),
    };
    connector
      .sendTransaction(tx)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(connector._accounts);
  };

  useEffect(() => {
    if (connector.connected) {
      setConnected(true);
    }
  }, [connector]);

  return (
    <>
      <button onClick={onClick}>
        {connected ? 'Reconnect' : 'Connect wallet'}
      </button>
      <button onClick={txn}>send Transaction</button>
    </>
  );
}

export default WalletConnect;
