let paginas = [
    {
        categoria: "Institucional",
        links: [
            "Sobre nós",
            "Nossa história",
            "Carreiras",
            "Sustentabilidade",
            "Blog"
        ]
    },
    {
        categoria: "Ajuda",
        links: [
            "Central de atendimento",
            "Dúvidas frequentes",
            "Política de trocas",
            "Rastreamento de pedidos",
            "Fale conosco"
        ]
    },
    {
        categoria: "Produtos",
        links: [
            "Novidades",
            "Mais vendidos",
            "Em promoção",
            "Coleção 2025",
            "Exclusivos online"
        ]
    },
    {
        categoria: "Serviços",
        links: [
            "Consultoria personalizada",
            "Entrega expressa",
            "Cartão presente",
            "Programa de fidelidade",
            "Lista de desejos"
        ]
    },
    {
        categoria: "Minha conta",
        links: [
            "Entrar",
            "Cadastrar",
            "Meus pedidos",
            "Meus dados",
            "Meus cupons"
        ]
    },
    {
        categoria: "Categorias populares",
        links: [
            "Moda feminina",
            "Moda masculina",
            "Calçados",
            "Acessórios",
            "Beleza"
        ]
    },
    {
        categoria: "Tecnologia",
        links: [
            "Celulares",
            "Notebooks",
            "Fones de ouvido",
            "Smartwatches",
            "Ofertas tech"
        ]
    },
]


const PaiFooter = document.getElementById("footer")

for (let i=0; i<paginas.length; i++){

const DivFooter = document.createElement("div")
    DivFooter.innerHTML = ` 
    <h1 class="mb-6 font-semibold">${paginas[i].categoria}</h1>
            <div class="flex flex-col" id="links">
            </div>
    `
    
    for(let j = 0;j<paginas[i].links.length;j++) {
        const ALinks = document.createElement("div")
        ALinks.innerHTML = `<a href="">${paginas[i].links[j]}</a>`

        DivFooter.appendChild(ALinks)
    }
    PaiFooter.appendChild(DivFooter)
}
