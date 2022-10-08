import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';

// Create a connector
export const connector = new WalletConnect({
  bridge: 'https://bridge.walletconnect.org', // Required
  qrcodeModal: QRCodeModal,
});

// Subscribe to connection events
connector.on('connect', (error, payload) => {
  if (error) {
    throw error;
  }
  console.log('connected');

  // Get provided accounts and chainId
  const { accounts, chainId } = payload.params[0];
  console.log(accounts, chainId, connector);
});

connector.on('session_update', (error, payload) => {
  if (error) {
    throw error;
  }

  // Get updated accounts and chainId
  const { accounts, chainId } = payload.params[0];
  console.log(accounts, chainId);
});

connector.on('disconnect', (error, payload) => {
  if (error) {
    throw error;
  }

  // Delete connector
});
