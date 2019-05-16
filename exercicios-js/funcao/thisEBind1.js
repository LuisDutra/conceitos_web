const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar(); // conflito entre os paradigmas do OO e funcional

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();