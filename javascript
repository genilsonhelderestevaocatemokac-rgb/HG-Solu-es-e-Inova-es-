// Função chamada assim que o QR code é escaneado
function processarLeituraQRCode(textoLidoDoQRCode) {
    // Verifica se o texto contém a base oficial da empresa
    if (textoLidoDoQRCode.includes("HG Soluções e Inovações/original")) {
        console.log("Produto Original!");
        alert("Produto Original - Proveniente da HG Soluções e Inovações");
    } else {
        console.log("Produto Falso!");
        alert("Atenção: Produto Falso ou não reconhecido!");
    }
}
