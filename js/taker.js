let addbtn = document.getElementById('addbtn');
showNotes();
addbtn.addEventListener('click', addbtnfun);

function addbtnfun(e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        console.log("null running");
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
}
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="col-md-6">
        <div class="card noteCard bg-primary p-2 text-white h-100 overflow-hidden">
                            <div class="card-body">
                                 <h5 class="card-title">Card title ${index + 1}</h5>
                                <p class="card-text">${element}</p>
                                <a href="#" id=${index} onclick="deleteNote(this.id)" class="card-link anc">Delete</a>
                            </div>
                        </div>
                        </div>
                         `;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `<h3 class="text-center">Please add notes</h3>`;
    }
}

function deleteNote(index) {
    console.log(index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();


}

let search = document.getElementById("searchTxt");
search.addEventListener('input', function () {


    let inputVal = search.value.toLowerCase();
    console.log('input event fire ', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardText = element.getElementsByTagName("p")[0].innerText;
        if (cardText.includes(inputVal)) {
            element.style.display = "block";
            console.log("element")
        }
        else {
            element.style.display = "none";
        }
    })

})