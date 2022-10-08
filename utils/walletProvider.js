import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';

export const connector = new WalletConnect({
  bridge: 'https://bridge.walletconnect.org',
  qrcodeModal: QRCodeModal,
});

// こっから下は見なくていい。

connector.on('connect', (error, payload) => {
  if (error) {
    throw error;
  }
  console.log('connected');

  const { accounts, chainId } = payload.params[0];
  console.log(accounts, chainId, connector);
});

connector.on('session_update', (error, payload) => {
  if (error) {
    throw error;
  }

  const { accounts, chainId } = payload.params[0];
  console.log(accounts, chainId);
});

connector.on('disconnect', (error, payload) => {
  if (error) {
    throw error;
  }
});
