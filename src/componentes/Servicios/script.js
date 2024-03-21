cargarTarjetas()

async function cargarTarjetas(){
    const response =  await fetch("../../../resources/jsons/Servicios.json")
    const json = await response.json()
    const servicios =  await json.data
    const cardContainer = document.getElementById("container")


    for (const servicio of servicios){
        const attributes=servicio.attributes

        const tarjeta = document.createElement("a")
        tarjeta.classList.add("card")
        tarjeta.href = "../../templates/Página servicio/index.html"

        tarjeta.innerHTML = `
            <img src="${attributes.imagen}" alt="Imagen de servicio" />
            <div class="card-content">
                <p class="card-title">${attributes.Title}</p>
                <em class="card-price">${attributes.Precio}</em>
            </div>
        `
        cardContainer.appendChild(tarjeta)
    }
}