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
