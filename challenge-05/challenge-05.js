/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myvar = ['Jorge', 25, null, 1.80, false];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var myArry = [3,2,1];

var myFunction = function (arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myArry)[1]); 

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

var myFunction2 = function (arg1, arg2) {
    return (arg1[arg2]);
} 

myFunction2(myArry, 1);

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar = ['Mustang', true, 1000, undefined, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(myArry, 0));
console.log(myFunction2(myArry, 1));
console.log(myFunction2(myArry, 2));
console.log(myFunction2(myArry, 3));
console.log(myFunction2(myArry, 4));
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
var book = function(NomeLivro) {
    var objLivro = {
        'A arte de SEO': {
            quantidadePaginas: 500,
            autor: "João",
            editora: "O'Reilly",
        },
        'Marketing': {
            quantidadePaginas: 600,
            autor: "Juca",
            editora: "Novatec",
        },
        'HTML 5 moblie': {
            quantidadePaginas: 700,
            autor: "Pedro",
            editora: "O'Reilly",
        }
    }

    return !NomeLivro ? objLivro : objLivro[NomeLivro];
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro A arte de SEO tem ' + book('A arte de SEO').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var NomeLivro = "A arte de SEO";
console.log("O autor do livro " + NomeLivro + " é " + book(NomeLivro).autor + ".")

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + NomeLivro + ' foi publicado pela editora '+ book(NomeLivro).editora + '.');
