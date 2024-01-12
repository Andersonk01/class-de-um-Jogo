interface HeroInterface {
    nome: string;
    idade: number;
    tipo: string;
    atacar(): void;
}

class Hero implements HeroInterface {
    nome: string;
    idade: number;
    tipo: string;

    constructor(nome: string, idade: number, tipo: string) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(): void {
        let ataque: string;

        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou ataque desconhecido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroiMago: HeroInterface = new Hero('Merlin', 100, 'mago');
const heroiGuerreiro: HeroInterface = new Hero('Aragorn', 35, 'guerreiro');

heroiMago.atacar(); // "O mago atacou usando usou magia"
heroiGuerreiro.atacar(); // "O guerreiro atacou usando usou espada"
