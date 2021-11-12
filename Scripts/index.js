var cv = document.querySelector(".CV");
function download(){
    const element = document.querySelector(".CV");
    var opt = {
        margin:       1,
        filename:     'CV.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 3 /*, width: 2580*/},
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
    html2pdf().set(opt).from(element).save();
}

function addElement(){
var div = document.createElement("input");
var input = document.querySelector(".information input");
div.style.width = "fit-content";
div.style.height = "fit-content";
div.style.border = "1px solid black";
div.style.color = "black";
div.style.margin = "10px";
div.style.padding = "10px";
div.innerHTML = input.value;
cv.appendChild(div);
div.value = input.value;
var clock = setInterval(() => {
  setTimeout(() => {
    if (input === document.activeElement) {
        div.value = input.value;
  } else if(div === document.activeElement){
        input.value = div.value;
  }
  }, 100);
}, 100);

};

