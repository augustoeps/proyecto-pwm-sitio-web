cargarReseñas()
async function cargarReseñas(){
    const response =  await fetch("../../../resources/jsons/Reviews.json")
    const json = await response.json()
    const reviews =  await json.data
    const reviewsContainer = document.getElementById("reviews")


    let count = 0
    for (const review of reviews){
        const attributes= review.attributes

        const tarjetaReview = document.createElement("article")
        tarjetaReview.classList.add("card")

        tarjetaReview.innerHTML = `
            <header class="header-review">
					<img
						class="user-image"
						src="../../../resources/Portrait_Placeholder.webp"
					/>
					<h2>${attributes.Nombre}</h2>
					<ul class="stars" id="stars${count}">
					</ul>
				</header>
				<p class="comment">
					${attributes.Comentario}
				</p>
        `
        reviewsContainer.appendChild(tarjetaReview)
        const stars = document.getElementById(`stars${count}`)
        count++
        for (let i = 0; i < attributes.Valoracion; i++){
            const star = document.createElement("img");
            star.src ="../../../resources/Vector.webp"
            stars.appendChild(star)
        }
    }
}