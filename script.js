console.log("running scripts")

const renderCards = (dataArray) => {
    const cardContainer = document.getElementById("card-container")
    dataArray.forEach(cardInfo => {
        const img = document.createElement("img")
        img.src = cardInfo.image

        cardContainer.appendChild(img)
    })
}

fetch("https://bobsburgers-api.herokuapp.com/characters?")
.then(response => response.json())
.then(info => renderCards(info))