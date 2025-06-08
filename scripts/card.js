//Banco de Dados
let info = [
    {
        nome: "Jorge",
        preco: 31232,
        descricao: "Edito videos profissionalmente.",
        img: "imagens/editor de video.webp"
    },
    {
        nome: "Marta",
        preco: 321,
        descricao: "Faço anuncios publicitarios virais",
        img: "imagens/anuncio comercial.jpg"
    },
    {
        nome: "Bremer",
        preco: 3212,
        descricao: "Faço Thumbnails virais",
        img: "imagens/thumbail service.jpg",
        titulo: "",
    },
    
]


//Cards no inde
const inicioCard = document.getElementById("cards")

for (let i = 0; i < info.length; i++) {

    const card = document.createElement("div")

    card.innerHTML = `
    <img class="rounded-xl w-full h-64 overflow-hidden" src="${info[i].img}" alt="">
        <div class="items-center">
            <h5 class="text-2xl md:text-2xl font-medium mt-3">${info[i].nome}</h5>
            <h5 class="ml-auto text-2xl md:text-xl font-medium mt-3">R$${(info[i].preco/100).toFixed(2)}</h5>
        </div>
    <p class="text-gray-800 text-lg mt-3">${info[i].descricao}</p>
    <a href="produto.html?name=${info[i].nome}"
                    class="focus:sclae-95 transition-all duration-300 ease-out flex mt-4 bg-green-600 hover:bg-green-700 rounded-lg py-2 items-center justify-center">Comprar</a>
    `
    
    inicioCard.appendChild(card)
}

