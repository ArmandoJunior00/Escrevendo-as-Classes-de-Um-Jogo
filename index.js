class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo.toLowerCase()) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "ataque desconhecido";
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Teste a classe
  const mago = new Heroi("Gandalf", 1000, "Mago");
  mago.atacar(); // Saída: O Mago Gandalf atacou usando magia
  
  const guerreiro = new Heroi("Zelda", 30, "Guerreiro");
  guerreiro.atacar(); // Saída: O Guerreiro Zelda atacou usando espada
  
  const monge = new Heroi("Avatar", 40, "Monge");
  monge.atacar(); // Saída: O Monge Avatar atacou usando artes marciais
  
  const ninja = new Heroi("Naruto", 20, "Ninja");
  ninja.atacar(); // Saída: O Ninja Naruto atacou usando shuriken
  