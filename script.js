let info = [
    {
        nome: "Jorge",
        preco: 200,
        descricao: "Edito videos profissionalmente.",
        img: "imagens/editor de video.webp"
    },
    {
        nome: "Matheus",
        preco: 200,
        descricao: "Faço anuncios publicitarios virais",
        img: "imagens/anuncio comercial.jpg"
    },
    {
        nome: "Bremer",
        preco: 200,
        descricao: "Faço Thumbnails virais",
        img: "imagens/thumbail service.jpg"
    },
    
]

const container = document.getElementById("cards")

for (let i = 0; i < info.length; i++) {
    const card = document.createElement("div")

    card.innerHTML = `
    <img class="rounded-xl w-full h-64 overflow-hidden" src="${info[i].img}" alt="">
        <div class="items-center">
            <h5 class="text-2xl md:text-2xl font-medium mt-3">${info[i].nome}</h5>
            <h5 class="ml-auto text-2xl md:text-xl font-medium mt-3">${info[i].preco}</h5>
        </div>
    <p class="text-gray-800 text-lg mt-3">${info[i].descricao}</p>
    <a href="Editor.html"
                    class="focus:sclae-95 transition-all duration-300 ease-out flex mt-4 bg-green-600 hover:bg-green-700 rounded-lg py-2 items-center justify-center">Comprar</a>
    `

    container.appendChild(card)
}






let footer = [
    {
        nome: "",
        links: [
            {
                link: "",
                nome: ""
            }
        ]
    },
]