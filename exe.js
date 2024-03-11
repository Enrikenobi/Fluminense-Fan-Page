// Classe Funcionario

class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }
  
    trabalhar() {
      console.log(`Trabalhando duro!`);
    }
  }
  
  // Classe Gerente
  
  class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
      super(nome, idade, cargo);
      this.departamento = departamento;
    }
  
    gerenciar() {
      console.log(`Gerenciando a equipe do departamento ${this.departamento}.`);
    }
  }
  
  // Classe Desenvolvedor
  
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
      super(nome, idade, cargo);
      this.linguagem = linguagem;
    }
  
    programar() {
      console.log(`Programando em ${this.linguagem}.`);
    }
  }
  
  // Criação de instâncias
  
  const gerente = new Gerente('Ana', 35, 'Gerente', 'Vendas');
  const desenvolvedor = new Desenvolvedor('João', 28, 'Desenvolvedor', 'JavaScript');
  
  // Chamada de métodos
  
  gerente.seApresentar();
  gerente.trabalhar();
  gerente.gerenciar();
  
  desenvolvedor.seApresentar();
  desenvolvedor.trabalhar();
  desenvolvedor.programar();
  