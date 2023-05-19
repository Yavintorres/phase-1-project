console.log("running scripts")

const renderCards = (infoArray) => {
    const cardContainer = document.getElementById("card-container")
    infoArray.forEach(cardInfo => {
        const img = document.createElement("img")
        img.src = cardInfo.img

        cardContainer.appendChild(img)
       
    })
}

fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(info => renderCards(info.results))
