let bonus = [
    {
        icon: "priority",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore facere voluptatum dolores aliquid sint fugiat eveniet."
    },
    {
        icon: "priority",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore facere voluptatum dolores aliquid sint fugiat eveniet."
    },
    {
        icon: "priority",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore facere voluptatum dolores aliquid sint fugiat eveniet."
    },
    {
        icon: "priority",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore facere voluptatum dolores aliquid sint fugiat eveniet."
    },
]

const premium = document.getElementById("premium")

for (let i = 0; i < bonus.length; i++) {

    const vantagens = document.createElement("div")

    vantagens.innerHTML = `
    <span class="stroke-green-400 material-symbols-outlined">
        ${bonus[i].icon}
    </span>

    <h1>${bonus[i].desc}</h1>
    `

    premium.appendChild(vantagens)

}