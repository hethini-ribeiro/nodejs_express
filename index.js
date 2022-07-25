const chalk = require('chalk');

console.log(chalk.blue('Vamos começar o sábado!'));

const paragrafo = 'Texto retornado por uma função';

function texto(string) {
    return string;    
}

console.log(texto(paragrafo));
