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
function addProject(){
  let wrapDiv = document.createElement("div");
  let projectName = document.createElement('h3');
  let project = document.createElement("textarea");
  let title = document.createElement("h1");
  title.innerHTML = "Dự án";
  title.style.margin = "0 10px 20px 10px";
  wrapDiv.style.width = "95%";
  wrapDiv.style.height = "fit-content";
  wrapDiv.style.border = "2px solid black";
  wrapDiv.style.margin = "auto 10px";
  project.style.padding = "5px";
  wrapDiv.setAttribute("id","wrapDiv");
  wrapDiv.addEventListener("mouseover", function(){
    wrapDiv.style.border = "2px dashed black";
  })
  wrapDiv.addEventListener("mouseout", function(){
    wrapDiv.style.border = "2px solid black";
  })
  projectName.innerHTML = "Tên dự án:";
  projectName.style.paddingLeft = "10px";
  project.style.width = "98%";
  project.style.height = "fit-content";
  project.style.border = "1px solid #F8EDEB";
  project.style.margin = "5px 10px 10px 10px";
  project.style.padding = "10px";
  project.style.fontSize = "15px"
  project.style.wordBreak  = "normal";
  // project.style.resize = "none";
  cv.appendChild(wrapDiv);
  wrapDiv.appendChild(title);
  wrapDiv.appendChild(projectName)
  wrapDiv.appendChild(project);
  console.log(project.style)
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
  var src = saveFile;
  console.log(src);
  document.getElementById("ava").src= src;
}