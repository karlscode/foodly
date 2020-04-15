const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const recipeModal = card.getAttribute("recipes_modal")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = recipeModal
    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})