let conteudos = [
    {
        category: "Art & Desing",
        id: "Jorge",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-ReueMPKBxNiQp9_hvZGxf09igt3OHVozi2hOMsNdq4psdK7r4zjh0FeL6i4pGO1RwM&usqp=CAU",
        title: "I will mix your film or animation in 5,1 surround sound or stereo",
        price: 97384,
        desc: "(0-1:00min) Foley & Sound Effects,Audio Cleanup, Sound Design and Mix",
        banner: "https://ntvb.tmsimg.com/assets/p161918_v_h10_aa.jpg?w=960&h=540",
        deliveryTime: "7-days delivery",
        revisions: "2 Revision",
        projectSize: "Medium project",
        avaliacoes: [
            {
                avaliador: "Ambrosio",
                foto: "",
                comentario: "Muito bom, estou satisfeito!",
                nota: 5,
            },
            {
                avaliador: "Rogerio",
                foto: "",
                comentario: "Excelente, todos gostaram!",
                nota: 4,
            }
        ],

    },

    {
        category: "Video & Animation",
        id: "Bremer",
        profilePic: "https://randomuser.me/api/portraits/men/35.jpg",
        title: "I will create a professional logo animation for your brand",
        price: 104990,
        desc: "Custom logo animation in 1080p or 4K with sound effects.",
        banner: "https://mir-s3-cdn-cf.behance.net/project_modules/source/61f6a044363915.5810bd2c10570.jpg",
        deliveryTime: "4-days-delivery",
        revisions: "3 Revisions",
        projectSize: "Large project",
        avaliacoes: [
            {
                avaliador: "Camila",
                foto: "",
                comentario: "Ficou incrível, deu vida ao nosso logo!",
                nota: 5,
            },
            {
                avaliador: "Renan",
                foto: "",
                comentario: "Muito bom, mas poderia ter entregue um pouco antes.",
                nota: 4,
            }
        ]
    },
    {
        category: "Writing & Translation",
        id: "Marta",
        profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
        title: "I will write SEO optimized blog articles in English or Portuguese",
        price: 65700,
        desc: "SEO writing, grammar-checked, engaging style for blogs or websites.",
        banner: "https://img.odcdn.com.br/wp-content/uploads/2025/05/marketing.jpg",
        deliveryTime: "3-days-delivery",
        revisions: "Unlimited Revisions",
        projectSize: "Small project",
        avaliacoes: [
            {
                avaliador: "Thiago",
                foto: "",
                comentario: "Texto bem escrito e com ótima fluidez.",
                nota: 5,
            },
            {
                avaliador: "Luciana",
                foto: "",
                comentario: "Bom conteúdo, mas veio com alguns erros de digitação.",
                nota: 3,
            }
        ]
    }
]

const url = new URLSearchParams(window.location.search)
const id = url.get("name")

//Pagina do produto dinamica

if (conteudos.find(conteudo => conteudo.id === id) !== undefined) {
    const conteudoPagina = document.getElementById("conteudo-pagina")

    const pagina = conteudos.find(conteudo => conteudo.id === id)

    conteudoPagina.innerHTML = `

    <nav class="flex justify-center align-baseline gap-3 items-center mt-10 w-full">
            <img class="h-14"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuf0CNLCmGf5kI_viGSFH2CBixDb_-HV5ddA&s"
                alt="">
            <input class="bg-zinc-300 h-10 rounded-md focus:outline-none p-4 w-full" type="text"
                placeholder="Qual serviço você precisa? ">
            <button
                class="focus:sclae-95  transition-all duration-300 ease-out hover:bg-green-700 hover:font-medium bg-green-600 rounded-md px-4 py-2 text-white">
                Singin </button>
            <button
                class="focus:sclae-95 transition-all duration-300 ease-out hover:bg-green-700 hover:font-medium bg-green-600 rounded-md px-4 py-2 text-white">
                Singup </button>
        </nav>

        <div class="gap-1 flex mx-24 text-zinc-500 flex mt-16">
            <a href="index.html"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-undo-2">
                    <path d="M9 14 4 9l5-5" />
                    <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
                </svg></a>
            <h1 class="font-semibold">/</h1>
            <a href="index.html">${pagina.category}</a>
        </div>




        <section class="mt-8 mx-24 grid grid-cols-2">

            <div>
                <h1 class="text-3xl font-semibold">${pagina.title}
                </h1>
                <div class="mt-3 flex items-center gap-4">
                    <img class="rounded-full w-16"
                        src="${pagina.profilePic}"
                        alt="">
                    <div class="">
                        <a class="font-medium text-2xl" href="">${pagina.id}</a>
                        <h1 id="estrelas"></h1>
                    </div>
                </div>
                <img class="mt-3" src="${pagina.banner}" alt="">
                <div class="font-medium flex justify-between mt-12">
                    <h1>What people loved about this freelancer</h1>
                    <a href="">See all reviews</a>
                </div>



                <div class="flex justify-end py-8 gap-5 text-zinc-500">
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="lucide lucide-chevron-left">
                            <path d="m15 18-6-6 6-6" />
                        </svg></button>

                    <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="lucide lucide-chevron-right">
                            <path d="m9 18 6-6-6-6" />
                        </svg></button>
                    </div>



                <div class="flex gap-2">

                    <div class="flex flex-col gap-5" id="TodasAvaliacoes">
                    </div>


                </div>

            </div>

            <div class="mx-24">

                <div class="bg-gray-200 shadow-2xl py-10 rounded-2xl">

                    <div class=" font-medium px-6 mb-4 grid grid-cols-3 items-center align-center text-lg text-zinc-500">
                        <button class="hover:text-black">Basic</button>
                        <button class="hover:text-black">Standard</button>
                        <button class="hover:text-black">Premium</button>
                    </div>
    
                    <div class="mx-10 flex flex-col gap-4">
                        <div class="py-6 justify-between flex text-lg">
                            <h1 class="font-medium">${pagina.projectSize}</h1>
                            <div class="flex gap-1 text-zinc-800 items-center">
                                <h1 class="font-lighter font-medium">R$${(pagina.price) / 100}</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-circle-alert">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" x2="12" y1="8" y2="12" />
                                    <line x1="12" x2="12.01" y1="16" y2="16" />
                                </svg>
                            </div>
                        </div>
    
                        <p class="text-zinc-500 font-medium">${pagina.desc}</p>
    
                        <div class="flex items-center gap-2 font-semibold   ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-clock">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <h1>${pagina.deliveryTime}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-refresh-ccw">
                                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                <path d="M3 3v5h5" />
                                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                                <path d="M16 16h5v5" />
                            </svg>
                            <h1>${pagina.revisions}</h1>
                        </div>
                        <div class="font-medium">
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-check">
                                    <path d="M20 6 9 17l-5-5" />
                                </svg>
                                <h1 class="text-zinc-500">1 sound effect</h1>
                            </div>
    
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-check">
                                    <path d="M20 6 9 17l-5-5" />
                                </svg>
                                <h1 class="text-zinc-500">Custom-made</h1>
                            </div>
                        </div>
    
                        <div class="flex flex-col gap-2">
                            <button class="text-xl text-white font-semibold bg-black py-2 rounded-md">Request to
                                order</button>
                            <button class="py-2 rounded-md">Compare packages</button>
                        </div>
    
                        <button class="flex flex-col items-center stroke rounded-2xl border-black border-2 mt-4 font-medium py-2">Contact
                            me</button>
                        <div class="items-center flex gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-alarm-clock-check">
                                <circle cx="12" cy="13" r="8" />
                                <path d="M5 3 2 6" />
                                <path d="m22 6-3-3" />
                                <path d="M6.38 18.7 4 21" />
                                <path d="M17.64 18.67 20 21" />
                                <path d="m9 13 2 2 4-4" />
                            </svg>
                            <h1>Offers hourly rates</h1>
                        </div>
                </div>





                </div>
            </div>

        </section>
    `

    const qntEstrelas = document.getElementById("estrelas")


    if (pagina.avaliacoes.length > 0) {
        const media = pagina.avaliacoes.reduce((acc, curr) => acc + curr.nota, 0) / pagina.avaliacoes.length;
        const estrelas = "★".repeat(Math.round(media));
        qntEstrelas.innerHTML = estrelas;
    } else {
        qntEstrelas.innerHTML = "Sem avaliações";
    }

    const TodasAvaliacoes = document.getElementById("TodasAvaliacoes")


    for (let i = 0; i < pagina.avaliacoes.length; i++) {
        const cardAvaliacao = document.createElement("div")
        console.log(pagina.avaliacoes[i])

        const estrela = "★".repeat(pagina.avaliacoes[i].nota)
        cardAvaliacao.innerHTML =
            `
            
        <div class="flex items-center gap-3">
        <img class="rounded-full w-10 h-10"
                        src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                        alt="">
                            <h1>${pagina.avaliacoes[i].avaliador}</h1>
                            <img class="w-4 h-4" src="https://images.emojiterra.com/twitter/v14.0/512px/1f1fa-1f1f8.png"
                                alt="">
                            <h1 class="text-zinc-500">United States</h1>
                            <h1 id="estrelasInd">${estrela}</h1>
                        </div>
                        <p>${pagina.avaliacoes[i].comentario}</p>        

        `
        TodasAvaliacoes.appendChild(cardAvaliacao)

    }
} else {
    console.log("dwmkpaiopawdj")
}
