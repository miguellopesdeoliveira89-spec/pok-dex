const form = document.querySelector('#form-pokemon')
const feedback = document.querySelector('#feedback')
const listaCards = document.querySelector('#lista-cards') // não existe
const dadomokado = {
    name: 'pikachu',
    base_experience: 100,
    types: [
        { slot: 1, type: {name: 'electric' } }
    ],
    sprites: {
        front_default: './025.png',
        other: {
            'official-artwork': {
                front_default: './025.png'
            }
        }
    }
}

console.log('script')

const URL_POKEAPI = 'https://pokeapi.co/api/v2/pokemon'

async function buscarDadosPokemon(nome)
{

    
    const nomeFormatado = nome.toLowerCase().trim()

    try{
        const resposta  = await fetch(`${URL_POKEAPI}/${nomeFormatado}`)

        if(!resposta.ok)
        {
           throw new Error('Pokemon não encontrado na PokeAPI')
        }

        const dados = dadomokado //await resposta.json();
        return dados
    }
    catch(error){
        console.log(" Não foi possivel carregar os dados do pokemon solicitado na PokeAPI",error)
        return [];
    }

}

function extrairImagemPokemon(dadosPokemon)
{
    if(!dadosPokemon || !dadosPokemon.base_experience)
    {
        console.log("Dados Vazios")
        return null
    }
    return xp = dadosPokemon.base_experience
}
function verificaAntes(listaCards, id)
{
    const listaCards = doument.querySelectorAll('.card-pokemon')
    let id = dadosPokemon.id = array.forEach(element => {
        if(element.id === id)
        {
            console.log("Pokemon já cadastrado")
        }
    });
    console.log("listaCards", listaCards)
    if(!listaCards || listaCards.length === 0)
    {
        console.log("ListaCards vazia")
    }
    listaCards.array.forEach(element => {
        if(element.id === id)
        {
            console.log("Pokemon já cadastrado")
        }
    });
}
function verificaAntes(id) 
{
    const listaCards = document.querySelectorAll('.card-pokemon')
    Array.from(listaCards).forEach (card => {
        if (card.dataset.id === id) {
            console.log("Pokemon já cadastrado")
            return true
        }
    })
    return false
}
listaCards.addEventListener ('fullscreenchange', function() {
    console.log("Mudança de tela cheia")
})

function criarCardPokemon(nome, imagem, tipo, combatPower, treinador)
{
    const card = document.createElement('div')
    card.className = 'card-pokemon'

    const img = document.createElement('img')
    img.className = 'card-pokemon-img'
    img.src = imagem || 'https://placeholf.co/96x96?text=?'
    img.alt = nome

    const nomeCard = document.createElement('h3')
    nomeCard.className = 'card-element-nome'
    nomeCard.textContent = nome

    const infoTipo = document.createElement('p')
    infoTipo.className = 'card-element-info'
    infoTipo.textContent = 'Tipo:${tipo || "Desconhecido"}'
    tipo = tipo.TextContent.replace(",",", ")

    const cp = document.createElement('p')
    cp.className = 'card-pokemon-info'
    cp.textContent = 'CP: ${combatPower|| "000"}'

    treinador = treinador!=null ?treinador : "Sem Treinador"
    const treinadorName = document.createElement('p')
    treinadorName.className = 'card-pokemon-info'
    treinadorName.textContent = 'Treinador: ${treinador}'


    card.append(img,nomeCard,infoTipo,cp,treinadorName)
    aplicarEstiloporTipo(card,tipo)
    listaCards.appendChild(card)

    console.log(card,img)
}

    apagarCards() {
        while (listaCards.firstChild) 
            listaCards.removeChild(listaCards.firstChild)
            addEventListner('click', function())
            feedback.textContent = "Card apagado";
};
                

    function aplicarEstiloporTipo(card, tipo)
    {
        const estiloCard = [
            {tipo: 'fire', borda: '#FF6B35', fundo: '#FF6B35', },
            {tipo: 'water', borda: '#4ECDC4', fundo: '#4ECDC4',},
            {tipo: 'grass', borda: '#45B7D1', fundo: '#45B7D1',},
            {tipo: 'electric', borda: '#F9E79F', fundo: '#F9E79F',},
            {tipo: 'poison', borda: '#9B59B6', fundo: '#9B59B6',},
            {tipo: 'normal', borda: '#ECF0F1', fundo: '#ECF0F1',},
        ]
    }
        let tipo1 = tipo.length > 0 ? tipo[0] : null
        let tipo2 = tipo.length > 1 ? tipo[1] : null

        for(let i = 0; i < estiloCard.length; i++)
        {
            if(tipo2 == null) 
            {
                if(estiloCard[i].tipo == tipo1)
                {
                    card.style.backgroundColor = estiloCard[i].borda
                    card.style.borderColor = estiloCard[i].fundo
                    break
                }
            }
            else
            {
                if (tipo1 == estiloCard[i].tipo || tipo2 == estiloCard[i].tipo)
                {
                console.log("estiloCard[i].tipo", estiloCard[i].tipo)
                card.style.background = linear-gradient(`linear-gradient(${estiloCard[i].borda}, ${estiloCard[i].fundo})`)
            }
        }
    }
    if(cor_2 !== null)
    {
        card.style.background = linear-gradient(`linear-gradient(${cor_1}.borda, ${cor_2}).fundo)`)
        return
    }
        card.style.borderColor = cor_1.fundo
        card.style.backgroundColor = cor_1.borda

    const artWorkOfficial = dadosPokemon.sprites?.other?.['official-artwork']?.front_default
    const spriteDefault = dadosPokemon.sprites?.front_default   
    return artWorkOfficial || spriteDefault || null


function extrairTipoPokemon(dadosPokemon)
{
    if(!dadosPokemon || !dadosPokemon.types)
    {   
        console.log("Dados vazios")
        return null
    }
    
    const  tipos = dadosPokemon.types.map(function(item){
        return item.type.name 
    })
    return tipos
}

function extrairCombatPower(dadosPokemon)
{
    if(!dadosPokemon || !dadosPokemon.base_experience)
    {
        console.log("Dados vazios")
        return null
    }
    return dadosPokemon.base_experience
}

function extrairTreinadorPokemon(dadosPokemon)
{
    if(!dadosPokemon || !dadosPokemon.trainer)  
    {
        console.log("Dados vazios")
        return null
    }
    return dadosPokemon.trainer
}

form.addEventListener('submit',
   async function(event)
    {
        event.preventDefault(); //impedindo de recarregar a pagina
        const nome = document.querySelector('#nome').value.trim();
        const tipo = document.querySelector('#tipo').value.trim();
        const cp = Number(document.querySelector('#cp').value.trim());
        const treinador = document.querySelector('#treinador').value.trim();

        if(nome.length < 3)
        {
            console.log("O campo precisa ter mais de 3 caracteres.")
            
            feedback.textContent = "❌ Nome deve conter ao menos 3 caracteres."
            feedback.style.color = 'red'
            return;
        }

        else if(cp <100)
        {
            feedback.textContent = "❌ O poder do pokemon precisa ser maior que 100."
            feedback.style.color = 'red'
            return;
        }
        else{
            const dadosApi = await buscarDadosPokemon(nome)
            if(!dadosApi)
            {
                feedback.textContent = "❌ Pokemon não encontrado na PokeAPI."
                feedback.style.color = 'red'
                return;
            }

            const imagemURL = extrairImagemPokemon(dadosApi)
            const tipoPokemon = extrairTipoPokemon(dadosApi)
            const combatPower = extrairCombatPower(dadosApi)
            const treinadorPokemon = extrairTreinadorPokemon(dadosApi)

            criarCardPokemon(nome, imagemURL, tipoPokemon, combatPower, treinadorPokemon);

            feedback.textContent = "✅ Pokemon cadastrado com sucesso."
            feedback.style.color = 'green'
        }
       
        // console.log("Dados do pokemon")
        // console.log(dadosApi)
        
    }
)
function limparCampos()
{
    document.querySelector('#nome').value = '';
    document.querySelector('#tipo').value = '';
    document.querySelector('#cp').value = '';
    document.querySelector('#treinador').value = '';
    document.querySelector('#feedback').textContent = '';
    document.querySelector('#feedback').style.color = '';
}

const nome = document.querySelector('#nome')
let debounceBusca = null;
let requisicaoEmAndamento = false;
nome.addEventListener('input',
    function()
    {
        const valor = nome.value.trim();

        clearTimeout(debounceBusca)
        requisicaoAtual++



        if(nome.value.trim().length < 3){

            feedback.textContent = "❌ Nome deve conter ao menos 3 caracteres."
            feedback.style.color = 'red'
        }
        else{

              feedback.textContent = ""
              const idRequisicaoAtual = requisicaoAtual;

        debounceBusca = setTimeout(
        async function()
        {
            console.log(nome.value);
        const dadosApi =  await buscarDadosPokemon(nome.value)
        if(idRequisicaoAtual !== requisicaoAtual)
        {
            return;
        }

        if(!dadosApi)
        {
            return;
        }
        const nomePokemon = dadosApi.name //
        const imagemURL = extrairImagemPokemon(dadosApi)
        const tipoPokemon = extrairTipoPokemon(dadosApi)
        const combatPower = extrairCombatPower(dadosApi)
        const id = dadosApi.id
        
        if(verificaAntes(id))
        {
            console.log("...verificando", id);
            const listaCards = document.querySelectorAll('article.card-pokemon')
        }
        if(nome == undefined) {
            feedback.textContent = "❌ Pokemon já existente."
            feedback.style.color = 'red'
            return;
        }
        else{
            feedback.textContent = "✅ Pokemon encontrado na PokeAPI."
            feedback.style.color = 'green'
            return;
        }
        criarCardPokemon(nomePokemon,imagemURL, tipoPokemon, combatPower, treinador); //
        const nome = document.querySelector('#nome').value.trim(); 
        const tipo = document.querySelector('#tipo').value.trim();
        const cp = Number(document.querySelector('#cp').value.trim());
        console.log = (tipoPokemon);

        nome.value = nomePokemon
        tipo.value = tipoPokemon
        cpValue.value = combatPower

        console.log("passou");
    }, 1000)
}
    }
);
