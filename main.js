const modal = document.getElementById("modal")
const modalButton = document.getElementById("open-modal")
const addButton = document.getElementById("submit-button")
const form = document.getElementById("form")
    .addEventListener('submit', handleForm)
modalButton.addEventListener('click', openModal)

let myLibrary = []

function setLibrary (array) {
    document.getElementById('book-display')
        .innerHTML = ''
    array.forEach((element, index) => { 
    addBook(element, index)
});
}


function openModal () {
    modal.showModal()
}

function handleForm (e) {
    let myForm = e.target
    let fd = new FormData(myForm)
   let obj = {}
    for (let key of fd.keys()) {
        obj[key] = fd.get(key)   
    }
    console.log(obj)
    myLibrary.push(obj) 
    setLibrary(myLibrary)
    document.getElementById('form').reset()  
}

function removeBook (ind) {
    console.log(ind)
    document.getElementById('book-display')
        .innerHTML = ''
        myLibrary.splice(ind, 1)
    setLibrary(myLibrary)
    
}

function toggleRead (ind) {
    document.getElementById('book-display')
        .innerHTML = ''
        let newObj = myLibrary[ind]
        newObj.read = 'true'
        myLibrary.splice(ind, 1, newObj)
        setLibrary(myLibrary)
}


function addBook (book, ind) {
let parent = document.getElementById("book-display")
   let div = document.createElement("div");
   let title = document.createElement("h3");
   let author = document.createElement("p")
   let genre = document.createElement('p')
   let isRead = document.createElement('p')
   let button = document.createElement('button')
   let index = document.createElement('p')
   let toggle = document.createElement('button')


   div.classList.add('book')
   title.classList.add('title')
   author.classList.add('author')
   genre.classList.add('genre')
   isRead.classList.add('is-read')
   button.classList.add('delete-button')
   index.setAttribute('hidden', 'true')
   index.setAttribute('id', 'index')
   toggle.onclick = () => toggleRead(ind)
   toggle.textContent = 'Read'
   toggle.classList.add('toggle')

   title.textContent =  book.title;
   author.textContent = "By: " + book.author;
   genre.textContent = "Genre: " +  book.genre;
   if (book.read ) {
    isRead.textContent = "Book Read"
   } else {
    isRead.textContent = "Not Read"
   }
   button.textContent = 'Delete'
   button.onclick = () => removeBook(ind)
   index.textContent = ind
  
   
   div.appendChild(title)
   div.appendChild(author)
   div.appendChild(genre)
   div.appendChild(isRead)
   if (isRead.textContent === "Not Read") {
    div.appendChild(toggle)
   }
   div.appendChild(button)
   div.appendChild(index)
   parent.appendChild(div)
   

}