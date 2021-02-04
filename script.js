const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

/* Our cards */
cards.forEach(card => {  
    card.addEventListener("dragstart", dragstart)
    card.addEventListener("drag", drag)
    card.addEventListener("dragend", dragend)
})



function dragstart() {  
    
    dropzones.forEach(dropzone => dropzone.classList.add("highlight"))

    // this aqui é o card
    this.classList.add("is-dragging");
    
}

function drag() {
    
}

function dragend() {
    dropzones.forEach(dropzone => dropzone.classList.remove("highlight"));

    // this aqui é o card
    this.classList.remove("is-dragging");    
}

/* Place to drop cards */
dropzones.forEach(dropzone => {
    dropzone.addEventListener("dragenter", dragenter)
    dropzone.addEventListener("dragover", dragover)
    dropzone.addEventListener("dragleave", dragleave)
    dropzone.addEventListener("dragdrop", dragdrop)
})

function dragenter() {

}

function dragover() {
    // this é o dropzone

    this.classList.add('over');

    // get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging');
    this.appendChild(cardBeingDragged);
}

function dragleave() {
    // this é o dropzone

    this.classList.remove('over');
}

function dragdrop() {
    this.classList.remove('over');
}