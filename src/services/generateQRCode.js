const generateQRCode = async (produtos) => {
  try {
    const dataStringProdutos = (JSON.stringify(produtos));
 
    const response = await fetch(`http://api.qrserver.com/v1/create-qr-code/?data=${dataStringProdutos};&size=100x100`);
    return response;
  } catch (error) {
    console.error('Erro ao gerar QR Code:', error);
  }
};
export default generateQRCode; 