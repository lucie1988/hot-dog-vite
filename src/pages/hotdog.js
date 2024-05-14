export const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: false },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
];



export function renderToppings() {
    const toppingDiv = document.querySelector(".toppingContainer")
    toppingDiv.innerHTML = ""

    toppings.forEach((toppingElement) => {
        const toppingItem = document.createElement("div")
        toppingItem.classList.add("topping")

        if(toppingElement.selected) {
            toppingItem.classList.add("toppingSelected")
        }

        toppingItem.innerHTML += `
            <h3>${toppingElement.name}</h3>
            <p>${toppingElement.price}</p>
        `

        toppingDiv.appendChild(toppingItem)
    })




 const toppingAll = document.querySelectorAll(".topping")

    toppingAll.forEach((toppingAllElement, index) => {
        toppingAllElement.addEventListener("click", () => {
            toggleTopping(index)
            renderToppings()
        })
    })
}



export function toggleTopping(index) {
    toppings[index].selected = !toppings[index].selected; 
}