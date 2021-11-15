let cv = document.querySelector(".CV");
let availableDisplay = true;
let page = 1;
let dynamicAlignRight = document.getElementById("dynamicAlignRight");
let dynamicAlignCenter = document.getElementById("dynamicAlignCenter");
let dynamicAlignLeft = document.getElementById("dynamicAlignRight");
let alignSection = document.getElementById("align");
// Download 
function download(){
    const element = document.querySelector(".CV");
    var opt = {
        margin:       0,
        filename:     'CV.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 3},
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
    html2pdf().set(opt).from(element).save();
}

// Direct change on CV
function addProject() {
  let wrapDiv = document.createElement("div");
  let projectName = document.createElement("h3");
  let project = document.createElement("textarea");
  let title = document.createElement("h1");
  title.innerHTML = "Dự án";
  title.style.color = "black";
  title.style.margin = "0 10px 20px 10px";
  wrapDiv.style.width = "95%";
  wrapDiv.style.height = "fit-content";
  wrapDiv.style.border = "2px solid black";
  wrapDiv.style.margin = "auto 10px";
  project.style.padding = "5px";
  wrapDiv.setAttribute("id", "wrapDiv");
  wrapDiv.addEventListener("mouseover", function () {
  wrapDiv.style.border = "2px dashed black";
  });
  wrapDiv.addEventListener("mouseout", function () {
    wrapDiv.style.border = "2px solid black";
  });
  projectName.innerHTML = "Tên dự án:";
  projectName.style.color = "black";
  projectName.style.paddingLeft = "10px";
  project.style.width = "98%";
  project.style.height = "30px";
  project.style.border = "1px solid #F8EDEB";
  project.style.margin = "5px 10px 10px 10px";
  project.style.padding = "10px";
  project.style.fontSize = "15px";
  project.style.wordBreak = "normal";
  project.setAttribute("class", "test");
  // project.style.resize = "none";
  cv.appendChild(wrapDiv);
  wrapDiv.appendChild(title);
  wrapDiv.appendChild(projectName);
  wrapDiv.appendChild(project);
};
// display available
function displayAvailable() {
  let available = document.querySelector("#available > div");
  let arrowDown = document.querySelector("#available i:first-child");
  let arrowUp = document.querySelector("#available i:nth-child(2)");
  if (availableDisplay === true) {
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

// Add break
let constWidth = 793.70078740157;
let constHeight = 880.5196850394;
let scale = 210 / 297;
setInterval(() => {
  console.log(cv.offsetWidth, cv.offsetHeight, page);
  if (
    cv.offsetWidth / cv.offsetHeight <= constWidth / (constHeight * page) &&
    cv.offsetHeight >= constWidth * page
  ) {
    console.log((cv.offsetWidth * constHeight) / constWidth) * page;
    ruler = document.createElement("p");
    ruler.innerHTML = `---------- Trang ${page} ----------`;
    ruler.style.position = "absolute";
    ruler.style.top = `${(1 * cv.offsetWidth * constHeight) / constWidth}px`;
    ruler.style.left = "-30%";
    cv.appendChild(ruler);
    console.log("--------------------------");

    page++;
  }
}, 100);

console.log((1 * cv.offsetWidth * constHeight) / constWidth);

//SETTING
// align
let right = document.getElementById("dynamicAlignRight");
let left = document.getElementById("dynamicAlignLeft");
let center = document.getElementById("dynamicAlignCenter");
left.style.color = "black";
center.style.color = "rgb(148, 148, 148)";
right.style.color = "rgb(148, 148, 148)";
cv.style.textAlign = "left";
alignSection.addEventListener("click", function(e){
let test = document.querySelectorAll(".test");

  if(e.target.getAttribute("id") === 'dynamicAlignRight'){
      right.style.color = "black";
      left.style.color = "rgb(148, 148, 148)";
      center.style.color = "rgb(148, 148, 148)";
      test[0].style.textAlign = "right";
    } else if(e.target.getAttribute("id") === 'dynamicAlignCenter'){
      center.style.color = "black";
      left.style.color = "rgb(148, 148, 148)";
      right.style.color = "rgb(148, 148, 148)";
    } else if(e.target.getAttribute("id") === 'dynamicAlignLeft'){
      left.style.color = "black";
      center.style.color = "rgb(148, 148, 148)";
      right.style.color = "rgb(148, 148, 148)";
    }
})


//                                phan download CV 👆




//                                khoa 👇
var saveFile = [];
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
function addFile() {
  var src;
  src = saveFile;
  saveFile = [];
  console.log(src);
  document.getElementById("ava").src = src;
  document.getElementById("ava").style.border = "1px solid black";
  document.getElementById("OCModal").classList.remove("OpenModal");
  document.getElementById("imageCV").src = "./Images/no_avatar.jpg";
  document.getElementById("files").value = "";
}

var listFont = document.getElementById("listFontSize"),
  showFont = document.getElementById("showFont"),
  trys = 0;
showFont.addEventListener("click", function (e) {
  if (trys == 0) {
    listFont.classList.add("OpenModal");
    setTimeout(() => {
      trys = 1;
    }, 100);
  }
  if (trys == 1) listFont.classList.remove("OpenModal");
});

document.addEventListener("click", function (e) {
  if (trys == 1) {
    listFont.classList.remove("OpenModal");
    trys = 0;
  }
});
//                                             cỡ chữ
var dynamicSize = 16;
document.getElementById("leftSize").addEventListener("click", function () {
  if (dynamicSize > 2) dynamicSize--;
  showFont.innerText = dynamicSize;
});
document.getElementById("rightSize").addEventListener("click", function () {
  if (dynamicSize < 800) dynamicSize++;
  showFont.innerText = dynamicSize;
});
var listLi = document.querySelectorAll("#listUl li");
listFont.addEventListener("click", function (e) {
  listLi.forEach(function (a, b) {
    if (e.target.value == a.value) {
      dynamicSize = a.value;
      showFont.innerText = dynamicSize;
    }
  });
});
//                                             mặc định   nếu có chỉnh thì chỉnh trên cái dòng phía dưới
showFont.innerText = dynamicSize;

//                                     bắt sự kiên scroll
function onScroll() {
  window.addEventListener("scroll", callbackFunc);
  function callbackFunc() {
    var y = window.scrollY;
    if (y >= 200) {
      document.getElementById("editContent").classList.add("fixEditContent");
    } else {
      document.getElementById("editContent").classList.remove("fixEditContent");
    }
  }
}
window.onload = function () {
  onScroll();
};
//                          table color
var tryTable = 0,
    tableColor =document.getElementById("tableColor");
document.getElementById("color").addEventListener("click", function () {
  if (tryTable == 0) {
    tableColor.classList.add("openTableColor");
    tableColor.classList.remove("closeTableColor");
    setTimeout(function () {
      tryTable = 1;
    }, 400);
  } else if (tryTable == 1) {
    setTimeout(function () {
      tableColor.classList.remove("openTableColor");
      tryTable = 0;
    }, 400);
    tableColor.classList.add("closeTableColor");
  }
});
document.body.onclick = function (e) {
  if (tryTable == 1 && e.clientX/window.innerWidth*100>25) {
    setTimeout(function () {
      tableColor.classList.remove("openTableColor");
      tryTable = 0;
    }, 400);
    tableColor.classList.add("closeTableColor");
  }
}

var demoDynamicColor,dynamicColor;
var inputColor = document.getElementById("color-search"),
  userColor = document.getElementById("useColor");
inputColor.oninput = function (e){
  demoDynamicColor =e.target.value;
  document.getElementById("demoColor").style.color = e.target.value;
}
