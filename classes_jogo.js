//DEFINIÇÃO DAS CLASSES 

class Heroi {
  constructor(nome,idade){
      this.nome = nome;
      this.idade = idade;
      this.ataque = "vassoura";
      this.tipo = "NPC"
  }
  atacar() {
    console.log("O " + this.tipo + " atacou usando " + this.ataque)
  }
}

class Mago extends Heroi {
  constructor(nome,idade) {
      super(nome,idade);
      this.tipo = "Mago";
      this.ataque = "magia";
  }
}

class Guerreiro extends Heroi {
  constructor(nome,idade) {
      super(nome,idade);
      this.tipo = "Guerreiro";
      this.ataque = "espada";
  }
}

class Monge extends Heroi {
  constructor(nome,idade) {
      super(nome,idade);
      this.tipo = "Monge";
      this.ataque = "artes marciais";
  }
}

class Ninja extends Heroi {
  constructor(nome,idade) {
      super(nome,idade);
      this.tipo = "Ninja";
      this.ataque = "shuriken";
  }
}

a = new Mago("Nome",18);
a.atacar();
b = new Guerreiro("Nome",18);
b.atacar();
c = new Monge("Nome",18);
c.atacar();
d = new Ninja("Nome",18);
d.atacar();
e = new Heroi("Nome",18);
e.atacar();
