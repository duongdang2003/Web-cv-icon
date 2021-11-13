let cv = document.querySelector(".CV");
let availableDisplay = true;
// Download 
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

// Direct change on CV
function addElement(){
let subInput = document.createElement("input");
let input = document.querySelector(".information input");
subInput.style.width = "fit-content";
subInput.style.height = "fit-content";
subInput.style.border = "1px solid black";
subInput.style.color = "black";
subInput.style.margin = "10px";
subInput.style.padding = "10px";
subInput.innerHTML = input.value;
cv.appendChild(subInput);
subInput.value = input.value;
var clock = setInterval(() => {
  setTimeout(() => {
    if (input === document.activeElement) {
        subInput.value = input.value;
  } else if(subInput === document.activeElement){
        input.value = subInput.value;
  }
  }, 100);
}, 100);

};

function displayAvailable() {
  let available = document.querySelector("#available > div");
  let arrowDown = document.querySelector("#available i:first-child")
  let arrowUp = document.querySelector("#available i:nth-child(2)");
  if(availableDisplay === true){
    available.style.display = "grid";
    availableDisplay = false;
    arrowUp.style.display = "block";
    arrowDown.style.display = "none";
  } else {
    available.style.display = "none";
    arrowUp.style.display = "none";
    arrowDown.style.display = "block";
    availableDisplay = true;
  }
}


//                                phan download CV 👆

//                                khoa 👇
var saveFile=[];
document.getElementById("files").onchange = function () {
  var reader = new FileReader();

  reader.onload = function (e) {
    // get loaded data and render thumbnail.
    document.getElementById("imageCV").src = e.target.result;
    saveFile.push(e.target.result);
  };

  // read the image file as a data URL.
  reader.readAsDataURL(this.files[0]);
};

document.getElementById("ava").onclick = function () {
  document.getElementById("OCModal").classList.add("OpenModal");
};
document.getElementById("js-closeModalAva").onclick = function () {
  document.getElementById("OCModal").classList.remove("OpenModal");
};
document.getElementById("opaModal").onclick = function () {
  document.getElementById("OCModal").classList.remove("OpenModal");
};

function deleteFile() {
  document.getElementById("files").value = "";
  document.getElementById("imageCV").src = "./Images/no_avatar.jpg";
}
function cancleFile() {
  document.getElementById("files").value = "";
  document.getElementById("imageCV").src = "./Images/no_avatar.jpg";
  document.getElementById("OCModal").classList.remove("OpenModal");
}
function addFile(){
  var src;
    src = saveFile;
  saveFile = [];
  console.log(src);
  document.getElementById("ava").src= src;
  document.getElementById("ava").style.border = "1px solid black";
  document.getElementById("OCModal").classList.remove("OpenModal");
  document.getElementById("imageCV").src = "./Images/no_avatar.jpg";
  document.getElementById("files").value = "";
}