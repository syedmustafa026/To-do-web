function add() {
    var data = document.getElementById('text').value;
if (data === "") {
        swal("Nothing To Add!", "", "warning");

    }
 else {
var div = document.createElement("div")
 div.setAttribute('class', 'input-group p-3')
  var inp = document.createElement("input");
        inp.value = data
 inp.setAttribute('class', 'form-control bg-darl')
        inp.setAttribute('disabled', 'disabled')
        // inp.setAttribute('autofocus', 'autofocus')
  var editBtn = document.createElement('button')
             var edittext = document.createTextNode('Edit')
        editBtn.appendChild(edittext)
        var deltext = document.createTextNode('Delete')

     
     
     
     
     
     
     
