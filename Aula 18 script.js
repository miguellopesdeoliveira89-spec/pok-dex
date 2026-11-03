const form = document.getElementById("formPokemon");
const treinadorInput = document.getElementById("treinador");
const pokemonSelect = document.getElementById("pokemon");
const tipoSelect = document.getElementById("tipo");
const cpInput = document.getElementById("cp");

const listaPokemon = document.getElementById("listaPokemon");
const mensagem = document.getElementById("mensagem");

const pokemons = {
    Pikachu: {
        id: 25,
        tipos: ["Elétrico"]
    },
    Charmander: {
        id: 4,
        tipos: ["Fogo"]
    },
    Squirtle: {
        id: 7,
        tipos: ["Água"]
    },
    Bulbasaur: {
        id: 1,
        tipos: ["Planta", "Venenoso"]
    },
    Eevee: {
        id: 133,
        tipos: ["Normal"]
    },
    Gengar: {
        id: 94,
        tipos: ["Fantasma", "Venenoso"]
    },
    Dragonite: {
        id: 149,
        tipos: ["Dragão", "Voador"]
    },
    Lucario: {
        id: 448,
        tipos: ["Lutador", "Aço"]
    }
};

const classesTipo = {
    "Elétrico": "tipo-eletrico",
    "Fogo": "tipo-fogo",
    "Água": "tipo-agua",
    "Planta": "tipo-planta",
    "Normal": "tipo-normal",
    "Venenoso": "tipo-venenoso",
    "Fantasma": "tipo-fantasma",
    "Dragão": "tipo-dragao",
    "Voador": "tipo-voador",
    "Lutador": "tipo-lutador",
    "Aço": "tipo-aco",
    "Psíquico": "tipo-psiquico"
};

pokemonSelect.addEventListener("change", () => {
    const pokemon = pokemons[pokemonSelect.value];

    tipoSelect.replaceChildren();

    const inicial = document.createElement("option");
    inicial.value = "";
    inicial.textContent = "Selecione o tipo";
    tipoSelect.appendChild(inicial);

    if (!pokemon) return;

    pokemon.tipos.forEach(tipo => {
        const option = document.createElement("option");
        option.value = tipo;
        option.textContent = tipo;
        tipoSelect.appendChild(option);
    });
});

function criarCarta(nome, treinador, tipo, cp) {
    const dados = pokemons[nome];

    const carta = document.createElement("article");
    carta.className = "carta-pokemon";

    const classe = classesTipo[tipo] || "tipo-normal";
    carta.classList.add(classe);

    const topo = document.createElement("div");
    topo.className = "carta-topo";

    const titulo = document.createElement("h3");
    titulo.textContent = nome;

    const poder = document.createElement("span");
    poder.className = "carta-cp";
    poder.textContent = `${cp} CP`;

    topo.append(titulo, poder);

    const areaImagem = document.createElement("div");
    areaImagem.className = "carta-imagem";

    const imagem = document.createElement("img");

    imagem.src =
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dados.id}.png`;

    imagem.alt = `Imagem do Pokémon ${nome}`;
    imagem.loading = "lazy";

    
    imagem.onerror = () => {
        imagem.removeAttribute("src");
        imagem.alt = `Imagem indisponível: ${nome}`;
    };

    areaImagem.appendChild(imagem);

    const info = document.createElement("div");
    info.className = "carta-info";

    const textoTreinador = document.createElement("p");
    textoTreinador.textContent = `Treinador: ${treinador}`;

    const textoTipo = document.createElement("p");
    textoTipo.textContent = "Tipo: ";

    dados.tipos.forEach(tipoPokemon => {
        const etiqueta = document.createElement("span");
        etiqueta.className = "etiqueta-tipo";
        etiqueta.textContent = tipoPokemon;
        textoTipo.appendChild(etiqueta);
    });

    const textoCP = document.createElement("p");
    textoCP.textContent = `Combat Power: ${cp} CP`;

    info.append(
        textoTreinador,
        textoTipo,
        textoCP
    );

    const remover = document.createElement("button");
    remover.type = "button";
    remover.className = "btn-remover";
    remover.textContent = "Remover carta";

    remover.addEventListener("click", () => {
        carta.remove();

        if (listaPokemon.children.length === 0) {
            mensagem.hidden = false;
        }
    });

    carta.append(
        topo,
        areaImagem,
        info,
        remover
    );

    return carta;
}

function ordenarCartas() {
    const cartas = Array.from(
        listaPokemon.querySelectorAll(".carta-pokemon")
    );

    const ordem = ordenarCP.value;

    cartas.sort((a, b) => {
        const cpA = Number(a.dataset.cp);
        const cpB = Number(b.dataset.cp);

        if (ordem === "maior") {
            return cpB - cpA;
        }

        return cpA - cpB;
    });

    const ordenarCP = document.getElementById("ordenarCP");

    const carta = document.createElement("article");
    carta.className = "carta-pokemon";
    carta.dataset.cp = cp;
    ordenarCP.addEventListener("change", ordenarCartas);

    listaPokemon.prepend(carta);
    ordenarCartas();

    cartas.forEach(carta => {
        listaPokemon.appendChild(carta);
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const treinador = treinadorInput.value.trim();
    const nome = pokemonSelect.value;
    const tipo = tipoSelect.value;
    const cp = Number(cpInput.value);

    if (!treinador || !pokemons[nome] || !tipo) {
        alert("Preencha todos os campos!");
        return;
    }

    const dados = pokemons[nome];

    if (!dados.tipos.includes(tipo)) {
        alert("Tipo inválido para esse Pokémon!");
        return;
    }

    if (!Number.isInteger(cp) || cp < 1 || cp > 10000) {
        alert("Digite um CP inteiro de 1 a 10000.");
        return;
    }

    const carta = criarCarta(
        nome,
        treinador,
        tipo,
        cp
    );

    listaPokemon.prepend(carta);

    mensagem.hidden = true;

    form.reset();

    tipoSelect.replaceChildren();

    const opcao = document.createElement("option");
    opcao.value = "";
    opcao.textContent = "Selecione o tipo";
    tipoSelect.appendChild(opcao);

    alert("Carta Pokémon criada!");
});
