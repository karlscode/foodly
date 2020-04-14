const recipes = require("./database/recipes")

const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const recipeId = card.getAttribute("id")
        modalOverlay.classList.add('active')

        for (const recipeId of recipes) {
            if (recipeId == recipes.id) {
                modalOverlay.querySelector("iframe").src = recipes.recipe
            }
        }
    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})