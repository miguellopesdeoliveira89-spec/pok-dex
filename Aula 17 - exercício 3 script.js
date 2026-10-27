const pokemonContainer = document.querySelector('#pokemon')
const feedback = document.querySelector('#feedback')
const form = document.querySelector('#formulario')

function criarCardPokemon(dadosPokemon)

    if(!dadosPokemon)
    {
        feedback.textContent = "❌ Dados do Pokémon não encontrados."
        feedback.style.color = 'red'
        return;
    }
    else if(!dadosPokemon.nome || !dadosPokemon.tipo || !dadosPokemon.imagemURL)
    {
        feedback.textContent = "❌ Dados do Pokémon incompletos."
        feedback.style.color = 'red'
        return;
    }

if(!dadosPokemon || !dadosPokemon.nome || !dadosPokemon.tipo || !dadosPokemon.imagemURL)
    {
        feedback.textContent = "❌ Dados do Pokémon incompletos."
        feedback.style.color = 'red'
        return;
    }
    else if(!dadosPokemon || !dadosPokemon.nome || !dadosPokemon.tipo || !dadosPokemon.imagemURL)
    {
        feedback.textContent = "❌ Dados do Pokémon incompletos."
        feedback.style.color = 'red'
        return;
    }

let requisicaoAtual = 0;