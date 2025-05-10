import QRCode from 'qrcode';

export const generateQR = (data) => {
  return QRCode.toDataURL(data);
};

export const validateQR = async (code) => {
  try {
    // Check if code exists in transaction store
    const isValid = code && code.length > 0;
    const existsInStore = await checkTransactionStore(code);
    
    return {
      isValid,
      existsInStore,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    throw new Error(`QR validation failed: ${error.message}`);
  }
};

async function checkTransactionStore(code) {
  // Simulate checking transaction store
  // In a real implementation, this would query your actual transaction database
  return Boolean(code);
}