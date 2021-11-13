var cv = document.querySelector(".CV");
function download() {
  const element = document.querySelector(".CV");
  var opt = {
    margin: 1,
    filename: "CV.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 3 /*, width: 2580*/ },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };
  html2pdf().set(opt).from(element).save();
}

function addElement() {
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
      } else if (div === document.activeElement) {
        input.value = div.value;
      }
    }, 100);
  }, 100);
}

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
  var src = saveFile;
  saveFile = [];
  console.log(src);
  document.getElementById("ava").src= src;
  document.getElementById("ava").style.border = "1px solid black";
  document.getElementById("OCModal").classList.remove("OpenModal");
}