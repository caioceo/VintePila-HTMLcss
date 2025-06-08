
const form = document.getElementById("formData")

form.addEventListener("submit", function (event) {

    event.preventDefault()

    const nomeForm = document.getElementById("nomeForm").value
    const descForm = document.getElementById("descForm").value
    const priceForm = document.getElementById("priceForm").value

    const formData = {
        nome: nomeForm,
        preco: priceForm,
        descricao: descForm,
        img: "imagens/editor de video.webp"
    }

    info.push(formData)

    localStorage.setItem("infoCards", JSON.stringify(info))

    createCard(info)

    dialog.close();
})