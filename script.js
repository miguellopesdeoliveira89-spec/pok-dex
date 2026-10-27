const titulo = document.querySelector('#titulo');
const saida = document.querySelector('#saida');
const botao = document.querySelector('#btn');

const Pokemon = [
    {nome:'Pikachu', tipo:"Elétrico"},
    {nome:'Charmander', tipo:"Fogo"},
    {nome:'Squirtle', tipo:"Água"},
    {nome:'Bullbassaur', tipo:"Planta"},
]

botao.addEventListener('click',
    function(){
        saida.textContent = 'Clicou às ' + new Date()
    }
)
console.log(botao)

function sortearPokemon()
{
    const indiceSorteado = Math.floor(Math.random() * Pokemon.length)
    return Pokemon[indiceSorteado]
}
if (botao) {
    botao.addEventListener('click',
        function() {
            const pokemonSorteado = sortearPokemon()
            titulo.textContent = pokemonSorteado.nome
            saida.textContent = `Tipo: ${pokemonSorteado.tipo}`
        }
    )
}
else {
    console.error("Botão não encontrado no DOM.")
    const saida = document.querySelector('#saida');
    saida.textContent = "Erro: Botão não encontrado no DOM."
}