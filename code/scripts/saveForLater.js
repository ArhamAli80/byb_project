let ingredients = ['Olive oil','Onion','Carrot','Flour','Milk','Butter','Cheese','Lasagne sheets', 'Mince meat']
// array that will be in session storage to save all the items
let saved = []

let listIngredients = document.querySelector('#ingredients')

function updatePage(){
    // adding list of ingredients to the webpage
    for (i=0; i < ingredients.length; i++){

        let listItem = document.createElement('li')
        listItem.style.padding = "5px"
        listItem.innerHTML = (i+1) + ": " + ingredients[i] + " "
        button = document.createElement('button')
        button.className = "close"
        button.innerHTML = "Save for later"

        listItem.appendChild(button)
        // adding the list item to the ul tag
        listIngredients.appendChild(listItem)

        // if the user saves the item for later the item is stored in the saved array 
        // and displyed to the frontend
        button.addEventListener('click', function(e){
            let parent = this.parentElement.textContent
            saved.push(parent.replace("Save for later", ""))
            window.sessionStorage.setItem("saved", JSON.stringify(saved))
            let savedItems = document.querySelector('#saved-items')
            let newItem = document.createElement('li')
            newItem.innerHTML = parent.replace("Save for later", "")
            savedItems.appendChild(newItem)
            alert(`You have saved ${saved.length} items to your save for later`)
        })
    }
    // display items saved for later even after the page is refreshed
    storedItems = JSON.parse(sessionStorage.getItem("saved"))
    for (i=0; i<storedItems.length; i++){
        let savedItems = document.querySelector('#saved-items')
        let newItem = document.createElement('li')
        newItem.innerHTML = storedItems[i]
        savedItems.appendChild(newItem)
    } 
}

