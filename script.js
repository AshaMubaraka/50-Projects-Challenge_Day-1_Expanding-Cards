const panels = document.querySelectorAll(".panel")

const removeActiveClass = event => {
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClass();
        panel.classList.add('active')
})
})