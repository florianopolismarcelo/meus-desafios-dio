// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'Jeziel':
                ataque = 'luta';
                break;
            case 'Pelete':
                ataque = 'espada';
                break;
            case 'Eluzai':
                ataque = 'machado';
                break;
            case 'Davi':
                ataque = 'pedra';
                break;
            default:
                ataque = 'realizou um ataque';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias da classe Heroi
const heroi1 = new Heroi('Azmavete', 3017, 'Jeziel');
const heroi2 = new Heroi('Jerimote', 2000, 'Pelete');
const heroi3 = new Heroi('Jozabade', 2024, 'Eluzai');
const heroi4 = new Heroi('Azareel', 2500, 'Davi');

// Chamando o método atacar para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();