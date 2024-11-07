function calcularRank(vitorias, derrotas) {
    // Calcular o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;
    let nivel;
  
    // Encontrar o nível de acordo com a quantidade de vitórias
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else if (vitorias >= 101) {
      nivel = "Imortal";
    }
  
    // Mensagem de saída
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}`);
  }
  
  // Testando 
  calcularRank(65, 20); // Exemplo com 65 vitórias e 20 derrotas
  