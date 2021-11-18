let cv = document.querySelector(".CV");
let availableDisplay = true;
let page = 1;
let dynamicAlignRight = document.getElementById("dynamicAlignRight");
let dynamicAlignCenter = document.getElementById("dynamicAlignCenter");
let dynamicAlignLeft = document.getElementById("dynamicAlignRight");
let alignSection = document.getElementById("align");

// Download
function download() {
	const element = document.querySelector(".CV");
	var opt = {
		margin: 0,
		filename: "CV.pdf",
		image: { type: "jpeg", quality: 1 },
		html2canvas: { scale: 3 },
		jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
	};
	html2pdf().set(opt).from(element).save();
}

// Direct change on CV
let deleteElement;
function addProject() {
	let wrapDiv = document.createElement("div");
	let projectName = document.createElement("h3");
	let project = document.createElement("div");
	let projectDiscription = document.createElement("h3");
	let discription = document.createElement("div");
	let deleteButton = document.createElement("div");
	wrapDiv.style.width = "95%";
	wrapDiv.style.height = "fit-content";
	wrapDiv.style.border = "2px solid black";
	wrapDiv.style.margin = "10px";
	wrapDiv.style.padding = "5px";
	wrapDiv.style.position = "relative";
	wrapDiv.setAttribute("class", "wrapDiv");
	wrapDiv.addEventListener("mouseover", function () {
		wrapDiv.style.border = "2px dashed black";
		deleteButton.style.display = "block";
	});
	wrapDiv.addEventListener("mouseout", function (e) {
		wrapDiv.style.border = "2px solid black";
		deleteButton.style.display = "none";
		if (e.target.getAttribute("class") === "wrapDiv") {
			deleteElement = e.target;
		}
	});
	projectName.innerHTML = "Tên dự án:";
	projectName.style.color = "black";
	projectName.style.paddingLeft = "10px";
	project.setAttribute("contenteditable", "true");
	project.style.width = "98%";
	project.style.height = "fit-content";
	project.style.border = "1px solid #F8EDEB";
	project.style.margin = "5px 10px 10px 10px";
	project.style.padding = "10px";
	project.style.fontSize = "15px";
	project.style.color = "black";
	project.setAttribute("class", "test");

	projectDiscription.innerHTML = "Mô tả dự án:";
	projectDiscription.style.color = "black";
	projectDiscription.style.paddingLeft = "10px";
	discription.setAttribute("contenteditable", "true");
	discription.style.width = "98%";
	discription.style.height = "fit-content";
	discription.style.border = "1px solid #F8EDEB";
	discription.style.margin = "5px 10px 10px 10px";
	discription.style.padding = "10px";
	discription.style.fontSize = "15px";
	discription.style.color = "black";

	deleteButton.style.position = "absolute";
	deleteButton.style.width = "30px";
	deleteButton.style.height = "20px";
	deleteButton.style.top = "-20px";
	deleteButton.style.right = "-2px";
	deleteButton.innerText = "X";
	deleteButton.style.textAlign = "center";
	deleteButton.style.color = "white";
	deleteButton.style.backgroundColor = "red";
	deleteButton.style.cursor = "pointer";
	deleteButton.style.display = "none";
	deleteButton.addEventListener("click", function () {
		deleteElement.remove();
	});

	document.querySelector(".sectionTitleBodyLeftCV #duan").appendChild(wrapDiv);
	wrapDiv.appendChild(projectName);
	wrapDiv.appendChild(project);
	wrapDiv.appendChild(projectDiscription);
	wrapDiv.appendChild(discription);
	wrapDiv.appendChild(deleteButton);
}
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

function deleteButtonFunction(a) {
	let deleteButton = document.createElement("div");
	deleteButton.style.position = "absolute";
	deleteButton.style.width = "30px";
	deleteButton.style.height = "20px";
	deleteButton.style.top = "-20px";
	deleteButton.style.right = "-2px";
	deleteButton.innerText = "X";
	deleteButton.style.textAlign = "center";
	deleteButton.style.color = "white";
	deleteButton.style.backgroundColor = "red";
	deleteButton.style.cursor = "pointer";
	deleteButton.style.display = "block";
	a.appendChild(deleteButton);
	deleteButton.addEventListener("click", function () {
		a.remove();
	});
	a.addEventListener("mouseover", function () {
		deleteButton.style.display = "block";
		a.style.border = "1px dashed white";
	});
	a.addEventListener("mouseout", function () {
		deleteButton.style.display = "none";
		a.style.border = "none";
	});
}

// Add break
let constWidth = 793.70078740157;
let constHeight = 880.5196850394;
let scale = 210 / 297;
setInterval(() => {
	// console.log(cv.offsetWidth, cv.offsetHeight, page);
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
		// console.log("--------------------------");

		page++;
	}
}, 100);

// console.log((1 * cv.offsetWidth * constHeight) / constWidth);

//SETTING
// align
let activeElement;
setInterval(() => {
	if (
		(document.activeElement.tagName !== "BODY" &&
			document.activeElement.tagName !== "BUTTON" &&
			document.activeElement.tagName == "DIV") ||
		document.activeElement.getAttribute("class") === "editableInput"
	) {
		activeElement = document.activeElement;
	}
}, 100);

let right = document.getElementById("dynamicAlignRight");
let left = document.getElementById("dynamicAlignLeft");
let center = document.getElementById("dynamicAlignCenter");
left.style.color = "black";
center.style.color = "rgb(148, 148, 148)";
right.style.color = "rgb(148, 148, 148)";
cv.style.textAlign = "left";
alignSection.addEventListener("click", function (e) {
	if (e.target.getAttribute("id") === "dynamicAlignRight") {
		right.style.color = "black";
		left.style.color = "rgb(148, 148, 148)";
		center.style.color = "rgb(148, 148, 148)";
		if (activeElement != undefined) {
			activeElement.style.textAlign = "right";
		}
	} else if (e.target.getAttribute("id") === "dynamicAlignCenter") {
		center.style.color = "black";
		left.style.color = "rgb(148, 148, 148)";
		right.style.color = "rgb(148, 148, 148)";
		if (activeElement != undefined) {
			activeElement.style.textAlign = "center";
		}
	} else if (e.target.getAttribute("id") === "dynamicAlignLeft") {
		left.style.color = "black";
		center.style.color = "rgb(148, 148, 148)";
		right.style.color = "rgb(148, 148, 148)";
		if (activeElement != undefined) {
			activeElement.style.textAlign = "left";
		}
	}
});

// ADD SKILL
let skillCount = 0;
let skill = document.querySelector("#kiNang");
let skillButton = document.querySelector("#addSkill");
let nothing = document.querySelector("#nothing");
skill.addEventListener("mouseover", function () {
	skillButton.style.display = "block";
});
skill.addEventListener("mouseout", function () {
	skillButton.style.display = "none";
});
function addSkill() {
	let skillName = document.createElement("input");
	let skillLevel = document.createElement("div");
	let skillWrap = document.createElement("div");

	skillName.setAttribute("contenteditable", "true");
	skillName.style.color = "white";
	skillName.style.border = "none";
	skillName.style.backgroundColor = "transparent";
	skillName.style.marginTop = "5px";
	skillName.style.padding = "5px";
	skillName.style.width = "90%";
	skillName.placeholder = "Tên kỹ năng";
	skillName.setAttribute("class", "editableInput");
	skillLevel.style.display = "flex";
	skillWrap.style.position = "relative";
	skillWrap.style.margin = "2px";
	skillLevel.addEventListener("click", function (e) {
		if (e.target.hasAttribute("index") === true) {
			index = parseInt(e.target.getAttribute("index"));

			divParent = e.target.parentElement;
			arrayLevel = divParent.childNodes;
			for (let i = 0; i <= 9; i++) {
				if (i <= index && arrayLevel[i].getAttribute("index") != null) {
					arrayLevel[i].style.backgroundColor = "rgb(170, 9, 170)";
				} else if (arrayLevel[i].getAttribute("index") != null) {
					arrayLevel[i].style.backgroundColor = "white";
				}
			}
		}
	});
	nothing.appendChild(skillWrap);
	skillWrap.appendChild(skillName);
	skillWrap.appendChild(skillLevel);
	deleteButtonFunction(skillWrap);
	for (let i = 0; i <= 9; i++) {
		let level = document.createElement("div");
		level.style.width = "15px";
		level.style.height = "15px";
		level.style.margin = "3px";
		level.style.backgroundColor = "white";
		level.style.borderRadius = "2px";
		level.setAttribute("index", i);
		skillLevel.appendChild(level);
	}
}
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
	activeElement.style.fontSize = dynamicSize + "px";
});
document.getElementById("rightSize").addEventListener("click", function () {
	if (dynamicSize < 800) dynamicSize++;
	showFont.innerText = dynamicSize;
	activeElement.style.fontSize = dynamicSize + "px";
});
var listLi = document.querySelectorAll("#listUl li");
listFont.addEventListener("click", function (e) {
	listLi.forEach(function (a, b) {
		if (e.target.value == a.value) {
			dynamicSize = a.value;
			showFont.innerText = dynamicSize;
			activeElement.style.fontSize = dynamicSize + "px";
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
	tableColor = document.getElementById("tableColor");
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
	if (tryTable == 1 && (e.clientX / window.innerWidth) * 100 > 25) {
		setTimeout(function () {
			tableColor.classList.remove("openTableColor");
			tryTable = 0;
		}, 400);
		tableColor.classList.add("closeTableColor");
	}
};
//           choice color
var dynamicColor = "black";
var inputColor = document.getElementById("color-search"),
	userColor = document.getElementById("useColor");
inputColor.oninput = function (e) {
	dynamicColor = e.target.value;
	document.getElementById("demoColor").style.color = e.target.value;
	console.log(dynamicColor);
};

//                     khoa -> đăng
document.getElementById("useThisColor").onclick = function () {
	activeElement.style.color = dynamicColor;
};
saveColorDefaults();
function saveColorDefaults() {
	document.getElementById("basicColor").onclick = function (e) {
		if (tryTable == 1) {
			document.querySelectorAll(".sectionBasicColors").forEach(function (a) {
				if (a == e.target) {
					a.style.border = "2px solid rgb(255, 255, 255)";
					a.style.outline = "3px solid rgb(184, 0, 184)";
					dynamicColor = a.style.backgroundColor;
				} else {
					a.style.border = "1px solid rgba(187, 187, 187, 0.753)";
					a.style.outline = "none";
				}
			});
		}
	};
}
//                                   font size
document.querySelector("#seclectFont").onclick = function () {
	activeElement.style.fontFamily = this.value;
	console.log(this.value);
};

//              style status
let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");
// cv.style.textAlign = "left";
document.getElementById("status").addEventListener("click", function (e) {
	if (e.target.getAttribute("id") === "bold") {
		bold.style.color = "black";
		italic.style.color = "rgb(148, 148, 148)";
		underline.style.color = "rgb(148, 148, 148)";
		if (activeElement != undefined) {
			activeElement.style.fontStyle = "bold";
		}
	} else if (e.target.getAttribute("id") === "italic") {
		italic.style.color = "black";
		bold.style.color = "rgb(148, 148, 148)";
		underline.style.color = "rgb(148, 148, 148)";
		if (activeElement != undefined) {
			activeElement.style.fontStyle = "italic";
		}
	} else if (e.target.getAttribute("id") === "underline") {
		underline.style.color = "black";
		italic.style.color = "rgb(148, 148, 148)";
		bold.style.color = "rgb(148, 148, 148)";
		if (activeElement != undefined) {
			activeElement.style.fontStyle = "left";
		}
	}
});
