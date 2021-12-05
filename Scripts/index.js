let cv = document.querySelector(".CV");
let availableDisplay = true;
let page = 1;
let pageFull = 1;
let dynamicAlignRight = document.getElementById("dynamicAlignRight");
let dynamicAlignCenter = document.getElementById("dynamicAlignCenter");
let dynamicAlignLeft = document.getElementById("dynamicAlignRight");
let alignSection = document.getElementById("align");
let sttCV = 0; // xem coi qua CV mấy
let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");
let statuss = document.querySelectorAll("#status i");
let sta = ["boldjs", "italicjs", "underlinejs"];
let activeElementKhoa = [];
let duanTitle = [];
let duanTitleCV2 = [];
let ruler = [],
	ruler2 = [];
// let titleLeftCV1 = document.querySelectorAll(
// 	".CV.jsCV .sectionTitleLeftCV1 .titleLeftCVsection h3"
// );
// let titleLeftCV2 = document.querySelectorAll(
// 	".CV2.main .titleLeftCVsection h3"
// );
let glass = document.getElementById("glass");
let turtorialModal = document.getElementById("turtorial");
if (sessionStorage.getItem("playVideo") === null) {
	playVideo();
	turtorialModal.style.display = "block";
} else {
	document.querySelector("#video").style.display = "none";
	document.querySelector("#Modalvideo").style.display = "none";
	turtorialModal.style.transform = "translate(-120%)";
	glass.style.display = "none";
}
// Download
function download(stringClassCV) {
	const element = document.querySelector(stringClassCV); // Khỏi chỉnh lại
	var opt = {
		margin: 0,
		filename: "AuriCV.pdf",
		image: { type: "jpeg", quality: 1 },
		html2canvas: { scale: 3 },
		jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
	};
	html2pdf().set(opt).from(element).save();
}
// Direct change on CV
// console.log(
// 	document.querySelectorAll('div[key="projectButton"]')[parseInt(sttCV)]
// );
let deleteElement;
function addButtonProject() {
	let projectButton = document.querySelectorAll('div[key="duanTitle"]')[
		parseInt(sttCV)
	];
	projectButton.addEventListener("mouseover", function () {
		document.querySelectorAll('div[key="projectButton"]')[
			parseInt(sttCV)
		].style.display = "block";
	});
	projectButton.addEventListener("mouseout", function () {
		document.querySelectorAll('div[key="projectButton"]')[
			parseInt(sttCV)
		].style.display = "none";
	});
}
addButtonProject();
function addProject() {
	let wrapDiv = document.createElement("div");
	let projectName = document.createElement("h3");
	let project = document.createElement("div");
	let projectDiscription = document.createElement("h3");
	let discription = document.createElement("div");
	let deleteButton = document.createElement("div");

	wrapDiv.style.width = "95%";
	wrapDiv.style.height = "fit-content";
	wrapDiv.style.border = "2px solid transparent";
	wrapDiv.style.borderBottom = "2px solid black";
	wrapDiv.style.margin = "10px";
	wrapDiv.style.padding = "5px";
	wrapDiv.style.position = "relative";
	wrapDiv.setAttribute("class", "wrapDiv");
	wrapDiv.addEventListener("mouseover", function () {
		wrapDiv.style.border = "2px dashed black";
		deleteButton.style.display = "block";
	});
	wrapDiv.addEventListener("mouseout", function (e) {
		wrapDiv.style.border = "2px solid transparent";
		wrapDiv.style.borderBottom = "2px solid black";
		deleteButton.style.display = "none";
		if (e.target.getAttribute("class") === "wrapDiv") {
			deleteElement = e.target;
		}
	});
	projectName.innerHTML = "Tên dự án:";
	projectName.style.color = "black";
	projectName.style.paddingLeft = "10px";
	projectName.style.color = dynamicColor;
	project.innerHTML = "Nhập vào đây";
	project.setAttribute("contenteditable", "true");
	project.style.width = "98%";
	project.style.height = "fit-content";
	project.style.border = "none";
	project.style.margin = "5px 10px 10px 10px";
	project.style.padding = "10px";
	project.style.fontSize = "15px";
	project.style.color = "black";
	project.setAttribute("class", "test");
	project.setAttribute("isProject", true);
	project.setAttribute("spellcheck", false);

	projectDiscription.innerHTML = "Mô tả dự án:";
	projectDiscription.style.color = "black";
	projectDiscription.style.paddingLeft = "10px";
	projectDiscription.style.color = dynamicColor;
	discription.setAttribute("contenteditable", "true");
	discription.style.width = "98%";
	discription.style.height = "fit-content";
	discription.style.border = "none";
	discription.style.margin = "5px 10px 10px 10px";
	discription.style.padding = "10px";
	discription.style.fontSize = "15px";
	discription.setAttribute("isProject", true);

	discription.innerHTML = "Nhập vào đây";

	discription.style.color = "black";
	discription.setAttribute("class", "test");
	discription.setAttribute("spellcheck", false);

	deleteButtonFunction(wrapDiv);

	document
		.querySelectorAll('div[key="project"]')
		[parseInt(sttCV)].appendChild(wrapDiv);
	wrapDiv.appendChild(projectName);
	wrapDiv.appendChild(project);
	wrapDiv.appendChild(projectDiscription);
	wrapDiv.appendChild(discription);
	wrapDiv.appendChild(deleteButton);

	if (sttCV == 0)
		document.querySelectorAll(".CV.jsCV .wrapDiv h3").forEach(function (a) {
			duanTitle.push(a);
		});
	else
		document.querySelectorAll(".CV2.main .wrapDiv h3").forEach(function (a) {
			duanTitleCV2.push(a);
		});
}
// console.log(document.querySelectorAll("div[key='duanTitle']"));
function placeholderOfProject() {
	document
		.querySelectorAll("div[key='duanTitle']")
		[parseInt(sttCV)].addEventListener("focusin", function (e) {
			if (
				e.target.getAttribute("isProject") === "true" &&
				e.target.innerHTML === "Nhập vào đây"
			) {
				e.target.innerHTML = "";
			}
		});
	document
		.querySelectorAll("div[key='duanTitle']")
		[parseInt(sttCV)].addEventListener("focusout", function (e) {
			if (
				e.target.getAttribute("isProject") === "true" &&
				e.target.innerHTML === ""
			) {
				e.target.innerHTML = "Nhập vào đây";
			}
		});
}
placeholderOfProject();
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
// dipsplay cv background review
function CvBackground() {
	let available = document.querySelector("#Cv-background > div");
	let arrowDown = document.querySelector("#Cv-background i:first-child");
	let arrowUp = document.querySelector("#Cv-background i:nth-child(2)");
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
	deleteButton.style.display = "none";
	deleteButton.style.zIndex = "9999";
	if (a != undefined) {
		a.style.position = "relative";
		a.appendChild(deleteButton);
		deleteButton.addEventListener("click", function () {
			a.remove();
		});
		let borderColor = a.getAttribute("bordercolor");
		if (borderColor === null) {
			borderColor = "black";
		}
		a.addEventListener("mouseover", function () {
			deleteButton.style.display = "block";
			a.style.border = `1px dashed ${borderColor}`;
		});
		a.addEventListener("mouseout", function () {
			deleteButton.style.display = "none";
			a.style.border = "1px solid transparent";
		});
	}
}

// Add break
let constWidth = 800;
let constHeight = 1111;
let scale = 210 / 297;
setInterval(() => {
	if (pageFull >= 2) constHeight = 1117;
	if (sttCV == 0) {
		currenCV = cv;
	} else if (sttCV == 1) {
		currenCV = document.querySelectorAll(".CV2")[1];
	}
	// console.log(currenCV.offsetWidth, currenCV.offsetHeight, page);

	if (
		currenCV.offsetWidth / currenCV.offsetHeight <=
			constWidth / (constHeight * page) &&
		currenCV.offsetHeight >= constWidth * page
	) {
		ruler.push(document.createElement("p"));
		ruler[
			pageFull - 1
		].innerHTML = ` Hết trang ${page} ở đây -----------------------------------------------------------`;
		ruler[pageFull - 1].style.position = "absolute";
		ruler[pageFull - 1].style.color = "rgba(200, 200, 200, 0.8)";
		ruler[pageFull - 1].style.overflow = "hidden";
		ruler[pageFull - 1].style.height = "20px";
		ruler[pageFull - 1].style.cursor = "pointer";
		ruler[pageFull - 1].style.top = `${
			((1 * currenCV.offsetWidth * constHeight) / constWidth) * page + 1
		}px`;
		ruler[pageFull - 1].style.left = "-50%";
		ruler[pageFull - 1].style.zIndex = "99999";
		cv.appendChild(ruler[pageFull - 1]);
		ruler.forEach(function (a, b) {
			a.onmouseover = function () {
				this.style.color = "#ffffff";
				this.innerHTML = ` Hết trang ${
					b + 1
				} ở đây ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`;
			};
		});
		ruler.forEach(function (a, b) {
			a.onmouseleave = function () {
				this.style.color = "rgba(200, 200, 200, 0.8)";
				this.innerHTML = ` Hết trang ${
					b + 1
				} ở đây -----------------------------------------------------------`;
			};
		});

		//ruler 2
		ruler2[pageFull - 1] = document.createElement("p");
		ruler2[
			pageFull - 1
		].innerHTML = ` Hết trang ${page} ở đây --------------------------------------------------------------`;
		ruler2[pageFull - 1].style.position = "absolute";
		ruler2[pageFull - 1].style.color = "rgba(200, 200, 200, 0.8)";
		ruler2[pageFull - 1].style.overflow = "hidden";
		ruler2[pageFull - 1].style.height = "20px";
		ruler2[pageFull - 1].style.cursor = "pointer";
		ruler2[pageFull - 1].style.top = `${
			((1 * currenCV.offsetWidth * constHeight) / constWidth) * page + 1
		}px`;
		ruler2[pageFull - 1].style.left = "-50%";
		ruler2[pageFull - 1].style.zIndex = "99999";
		//
		document.querySelectorAll(".CV2")[1].appendChild(ruler2[pageFull - 1]);
		ruler2.forEach(function (a, b) {
			a.onmouseover = function () {
				this.style.color = "#ffffff";
				this.innerHTML = ` Hết trang ${
					b + 1
				} ở đây ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`;
			};
		});
		ruler2.forEach(function (a, b) {
			a.onmouseleave = function () {
				this.style.color = "rgba(200, 200, 200, 0.8)";
				this.innerHTML = ` Hết trang ${
					b + 1
				} ở đây -----------------------------------------------------------`;
			};
		});
		page++;
	}
}, 1000);
// console.log(document.querySelectorAll(".CV2"));

//SETTING
// align
let activeElement = document.getElementById("hocVan");
let activeElementContainNull;
let activeElement2;
let tempActiveElement;
setInterval(() => {
	if (
		(document.activeElement.tagName !== "BODY" &&
			document.activeElement.tagName !== "BUTTON" &&
			document.activeElement.tagName == "DIV") ||
		document.activeElement.getAttribute("class") === "editableInput"
	) {
		activeElement = document.activeElement;
		activeElementContainNull = document.activeElement;
		italic.style.pointerEvents = "auto";
		bold.style.pointerEvents = "auto";
		italic.style.cursor = "pointer";
		bold.style.cursor = "pointer";
		if (tempActiveElement != document.activeElement) {
			activeElement2 = document.activeElement;
			tempActiveElement = activeElement2;
		}
		if (activeElement.style.textAlign === "left") {
			left.style.color = "black";
			center.style.color = "rgb(148, 148, 148)";
			right.style.color = "rgb(148, 148, 148)";
			justify.style.color = "rgb(148, 148, 148)";
		} else if (activeElement.style.textAlign === "right") {
			right.style.color = "black";
			left.style.color = "rgb(148, 148, 148)";
			center.style.color = "rgb(148, 148, 148)";
			justify.style.color = "rgb(148, 148, 148)";
		} else if (activeElement.style.textAlign === "center") {
			center.style.color = "black";
			left.style.color = "rgb(148, 148, 148)";
			right.style.color = "rgb(148, 148, 148)";
			justify.style.color = "rgb(148, 148, 148)";
		} else if (activeElement.style.textAlign === "justify") {
			justify.style.color = "black";
			center.style.color = "rgb(148, 148, 148)";
			right.style.color = "rgb(148, 148, 148)";
			left.style.color = "rgb(148, 148, 148)";
		} else if (activeElement.style.textAlign === "") {
			left.style.color = "black";
			center.style.color = "rgb(148, 148, 148)";
			right.style.color = "rgb(148, 148, 148)";
			justify.style.color = "rgb(148, 148, 148)";
		}
	} else if (document.activeElement.tagName === "BODY") {
		activeElementContainNull = null;
	}
	if (
		activeElement != null &&
		activeElement.getAttribute("class") !== "" &&
		activeElement.getAttribute("class") !== null &&
		activeElement.getAttribute("class") !== undefined
	) {
		textStatus = activeElement.getAttribute("class");
		if (textStatus.indexOf("boldjs") != -1) {
			bold.style.color = "black";
		} else {
			italic.style.color = "rgb(148, 148, 148)";
			bold.style.color = "rgb(148, 148, 148)";
		}
		if (textStatus.indexOf("italicjs") != -1) {
			italic.style.color = "black";
		} else {
			italic.style.color = "rgb(148, 148, 148)";
		}
		if (textStatus.indexOf("underlinejs") != -1) {
			underline.style.color = "black";
		} else {
			underline.style.color = "rgb(148, 148, 148)";
		}
	}
	if (activeElement.getAttribute("name") === "onlyAllowU") {
		italic.style.color = "rgb(148, 148, 148)";
		bold.style.color = "rgb(148, 148, 148)";
		italic.style.pointerEvents = "none";
		bold.style.pointerEvents = "none";
	}
	document.getElementById("showFont").innerHTML = window
		.getComputedStyle(activeElement, null)
		.getPropertyValue("font-size")
		.replace("px", "");
	dynamicSize = window
		.getComputedStyle(activeElement, null)
		.getPropertyValue("font-size")
		.replace("px", "");
	document.getElementById("seclectFont").value = window
		.getComputedStyle(activeElement, null)
		.getPropertyValue("font-family")
		.split(", ")[0]
		.replace(`"`, "")
		.replace(`"`, "");
}, 100);
let right = document.getElementById("dynamicAlignRight");
let left = document.getElementById("dynamicAlignLeft");
let center = document.getElementById("dynamicAlignCenter");
let justify = document.getElementById("dynamicAlignJustify");
left.style.color = "black";
center.style.color = "rgb(148, 148, 148)";
right.style.color = "rgb(148, 148, 148)";
justify.style.color = "rgb(148, 148, 148)";
cv.style.textAlign = "left";
alignSection.addEventListener("click", function (e) {
	if (e.target.getAttribute("id") === "dynamicAlignRight") {
		right.style.color = "black";
		left.style.color = "rgb(148, 148, 148)";
		center.style.color = "rgb(148, 148, 148)";
		justify.style.color = "rgb(148, 148, 148)";
		if (activeElement != undefined) {
			activeElement.style.textAlign = "right";
		}
	} else if (e.target.getAttribute("id") === "dynamicAlignCenter") {
		center.style.color = "black";
		left.style.color = "rgb(148, 148, 148)";
		right.style.color = "rgb(148, 148, 148)";
		justify.style.color = "rgb(148, 148, 148)";
		if (activeElement != undefined) {
			activeElement.style.textAlign = "center";
		}
	} else if (e.target.getAttribute("id") === "dynamicAlignLeft") {
		left.style.color = "black";
		center.style.color = "rgb(148, 148, 148)";
		right.style.color = "rgb(148, 148, 148)";
		justify.style.color = "rgb(148, 148, 148)";
		if (activeElement != undefined) {
			activeElement.style.textAlign = "left";
		}
	} else if (e.target.getAttribute("id") === "dynamicAlignJustify") {
		justify.style.color = "black";
		center.style.color = "rgb(148, 148, 148)";
		right.style.color = "rgb(148, 148, 148)";
		left.style.color = "rgb(148, 148, 148)";
		if (activeElement != undefined) {
			activeElement.style.textAlign = "justify";
		}
	}
});

// ADD SKILL

function addButtonSkill() {
	document
		.querySelectorAll('div[name="kiNang"]')
		[parseInt(sttCV)].addEventListener("mouseover", function () {
			document.querySelectorAll(".addSkill")[parseInt(sttCV)].style.display =
				"block";
		});
	document
		.querySelectorAll('div[name="kiNang"]')
		[parseInt(sttCV)].addEventListener("mouseout", function () {
			document.querySelectorAll(".addSkill")[parseInt(sttCV)].style.display =
				"none";
		});
}
let skillCount = 0;

addButtonSkill();
function addSkill() {
	let nothing = document.querySelectorAll(".nothing")[parseInt(sttCV)];
	let skillName = document.createElement("div");
	let skillLevel = document.createElement("div");
	let skillWrap = document.createElement("div");

	skillName.setAttribute("contenteditable", "true");
	skillName.style.color = "grey";
	skillName.style.border = "none";
	skillName.style.backgroundColor = "transparent";
	skillName.style.marginTop = "5px";
	skillName.style.padding = "5px";
	skillName.style.width = "90%";
	skillName.setAttribute("class", "editableInput");
	skillName.setAttribute("spellcheck", "false");
	skillName.style.fontSize = "17px";
	skillName.innerHTML = "Tên kỹ năng";
	skillLevel.style.display = "flex";
	skillLevel.setAttribute("class", "skillLevel");
	skillWrap.style.position = "relative";
	skillWrap.style.margin = "2px";
	skillWrap.style.zIndex = "4";
	skillWrap.setAttribute("bordercolor", "white");

	skillLevel.addEventListener("click", function (e) {
		if (e.target.hasAttribute("index") === true) {
			index = parseInt(e.target.getAttribute("index"));

			divParent = e.target.parentElement;
			arrayLevel = divParent.childNodes;
			for (let i = 0; i <= 9; i++) {
				if (i <= index && arrayLevel[i].getAttribute("index") != null) {
					if (sttCV == 0) {
						arrayLevel[i].style.backgroundColor = window.getComputedStyle(
							document.querySelectorAll(".jsCV .headleftCV")[sttCV]
						).backgroundColor;
					} else if (sttCV == 1) {
						arrayLevel[i].style.backgroundColor = window.getComputedStyle(
							document.querySelectorAll(".CV2 .titleLeftCVsection h3")[sttCV]
						).backgroundColor;
					}
					if (i === index) {
						arrayLevel[i].setAttribute("isEnd", "yes");
					} else {
						arrayLevel[i].setAttribute("isEnd", "no");
					}
				} else if (arrayLevel[i].getAttribute("index") != null) {
					arrayLevel[i].style.backgroundColor = "white";
				}
			}
		}
	});

	placeholderOfSkill();
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
		level.style.cursor = "pointer";
		skillLevel.appendChild(level);
	}
}
function skillLevel() {
	document.querySelectorAll(".skillLevel").forEach(function (item, index) {
		item.addEventListener("click", function (e) {
			if (e.target.hasAttribute("index") === true) {
				index = parseInt(e.target.getAttribute("index"));
				divParent = e.target.parentElement;
				arrayLevel = divParent.childNodes;
				for (let i = 0; i <= 9; i++) {
					if (i <= index && arrayLevel[i].getAttribute("index") != null) {
						arrayLevel[i].style.backgroundColor = window.getComputedStyle(
							// document.querySelectorAll(".jsCV .headleftCV")[parseInt(sttCV)]
							document.querySelectorAll(".headleftCV")[parseInt(sttCV) + 2]
						).backgroundColor;
					} else if (arrayLevel[i].getAttribute("index") != null) {
						arrayLevel[i].style.backgroundColor = "white";
					}
				}
			}
		});
	});
}
function placeholderOfSkill() {
	document
		.querySelectorAll('div[key="skill"]')
		[parseInt(sttCV)].addEventListener("click", function (e) {
			if (e.target.innerHTML === "Tên kỹ năng") {
				e.target.innerHTML = "";
				e.target.style.color = "white";
			}
			document
				.querySelectorAll('div[key="skill"]')
				[parseInt(sttCV)].addEventListener("focusout", function (e) {
					if (e.target.innerHTML == "") {
						e.target.innerHTML = "Tên kỹ năng";
						e.target.style.color = "grey";
					}
				});
		});
}
// ADD SOCIAL NETWORK
function addButtonSocialNetwork() {
	document
		.querySelectorAll("div[name='socialNetwork']")
		[parseInt(sttCV)].addEventListener("mouseover", function () {
			document.querySelectorAll("div[name='socialNetwork'] #addButton")[
				parseInt(sttCV)
			].style.display = "block";
		});
	document
		.querySelectorAll("div[name='socialNetwork']")
		[parseInt(sttCV)].addEventListener("mouseout", function () {
			document.querySelectorAll("div[name='socialNetwork'] #addButton")[
				parseInt(sttCV)
			].style.display = "none";
		});
}
addButtonSocialNetwork();
function addSocialNetwork() {
	let wrapDiv = document.createElement("div");
	let icon = document.createElement("div");
	let socialNetworkLink = document.createElement("div");

	wrapDiv.style.display = "flex";
	deleteButtonFunction(wrapDiv);
	wrapDiv.style.marginTop = "10px";
	wrapDiv.style.position = "relative";
	wrapDiv.style.marginLeft = "-15%";
	wrapDiv.setAttribute("bordercolor", "white");
	icon.setAttribute("contenteditable", "true");
	icon.setAttribute("name", "iconSocialNetwork");
	icon.style.padding = "5px";
	icon.style.marginLeft = "0";
	icon.style.textAlign = "right";
	icon.style.fontSize = "15px";
	icon.style.border = "none";
	icon.innerHTML = "Tên MXH";
	icon.style.color = "grey";
	icon.setAttribute("spellcheck", "false");
	icon.setAttribute("class", "test");
	socialNetworkLink.setAttribute("name", "socialNetworkLink");
	socialNetworkLink.style.color = "grey";
	socialNetworkLink.style.padding = "5px";
	socialNetworkLink.innerHTML = "Link";
	socialNetworkLink.setAttribute("contenteditable", "true");
	socialNetworkLink.setAttribute("spellcheck", "false");
	socialNetworkLink.setAttribute("class", "test");

	icon.style.width = "27%";
	socialNetworkLink.style.width = "70%";
	document.querySelectorAll(".mangxahoi")[parseInt(sttCV)].appendChild(wrapDiv);
	wrapDiv.appendChild(icon);
	wrapDiv.appendChild(socialNetworkLink);
}
function placeholderOfSocialNetwork() {
	document
		.querySelectorAll(".mangxahoi")
		[parseInt(sttCV)].addEventListener("click", function () {
			if (
				activeElement.innerHTML === "Tên MXH" ||
				activeElement.innerHTML === "Link"
			) {
				activeElement.innerHTML = "";
				activeElement.style.color = "white";
			}
		});
	document
		.querySelectorAll(".mangxahoi")
		[parseInt(sttCV)].addEventListener("focusout", function () {
			if (
				activeElement.innerHTML === "" &&
				activeElement.getAttribute("name") === "iconSocialNetwork"
			) {
				activeElement.innerHTML = "Tên MXH";
				activeElement.style.color = "grey";
			}
			if (
				activeElement.innerHTML === "" &&
				activeElement.getAttribute("name") === "socialNetworkLink"
			) {
				activeElement.innerHTML = "Link";
				activeElement.style.color = "grey";
			}
			if (
				activeElement.getAttribute("name") === "iconSocialNetwork" &&
				activeElement.innerHTML != ""
			) {
				value = activeElement.innerHTML;
				value = value.replaceAll("\n", "");
				value = value.replaceAll("<div>", "");
				value = value.replaceAll("</div>", "");
				value = value.replaceAll("<br>", "");

				// console.log(value);
				for (let i = 0; i < value.length; i++) {
					let code = value[i].charCodeAt(0);
					if (
						code < 65 ||
						(code > 90 && code < 97) ||
						code > 122 ||
						value[i] === "\n" ||
						value[i] === "\r"
					) {
						value = value.replace(value[i], "");
						i--;
					}
				}
				value = value.toLowerCase();
				activeElement.style.color = "white";
				// console.log(value);
				switch (value) {
					case "facebook":
						activeElement.innerHTML = `<i class="fab fa-facebook"><i>`;
						activeElement.style.fontSize = "20px";
						break;
					case "instagram":
						activeElement.innerHTML = `<i class="fab fa-instagram"></i>`;
						activeElement.style.fontSize = "20px";
						break;
					case "github":
						activeElement.innerHTML = `<i class="fab fa-github"></i>`;
						activeElement.style.fontSize = "20px";
						break;
					case "twitter":
						activeElement.innerHTML = `<i class="fab fa-twitter"></i>`;
						activeElement.style.fontSize = "20px";
						break;
					case "linkedin":
						activeElement.innerHTML = `<i class="fab fa-linkedin-in"></i>`;
						activeElement.style.fontSize = "20px";
						break;
					case "youtube":
						activeElement.innerHTML = `<i class="fab fa-youtube"></i>`;
						activeElement.style.fontSize = "20px";
						break;
				}
			}
		});
}
placeholderOfSocialNetwork();
addAnotherInfor();
function addAnotherInfor() {
	let wrapDiv = document.createElement("div");
	wrapDiv.style.marginTop = "10px";
	wrapDiv.setAttribute("id", "test2");
	wrapDiv.style.border = "1px solid transparent";
	document
		.querySelectorAll(".thongtinkhac")
		[parseInt(sttCV)].appendChild(wrapDiv);
	let titleAI = document.createElement("div");
	let detail = document.createElement("div");

	titleAI.setAttribute("contenteditable", "true");
	titleAI.style.width = "93%";
	titleAI.style.height = "fit-content";
	titleAI.style.border = "none";
	titleAI.style.margin = "5px 10px 10px 10px";
	titleAI.style.padding = "10px";
	titleAI.style.fontSize = "1.17em";
	titleAI.style.color = "grey";
	titleAI.style.fontWeight = "bold";
	titleAI.innerHTML = "Tiêu đề thông tin";
	titleAI.setAttribute("class", "titleAI");
	titleAI.setAttribute("spellcheck", "false");

	detail.contentEditable = true;
	detail.style.width = "93%";
	detail.innerHTML = "Chi tiết";
	detail.style.height = "fit-content";
	detail.style.border = "none";
	detail.style.margin = "5px 10px 10px 10px";
	detail.style.padding = "10px";
	detail.style.fontSize = "15px";
	detail.style.color = "grey";
	detail.setAttribute("class", "test");
	detail.setAttribute("spellcheck", "false");

	let ruler = document.createElement("hr");
	ruler.style.color = "black";
	ruler.style.borderColor = "black";
	ruler.style.backgroundColor = "black";
	wrapDiv.style.border = "1px solid transparent";
	wrapDiv.style.zIndex = 10;
	wrapDiv.appendChild(titleAI);
	wrapDiv.appendChild(detail);
	wrapDiv.appendChild(ruler);
	deleteButtonFunction(wrapDiv);
}
function placeholderAnotherInfor() {
	document
		.querySelectorAll(".thongtinkhac")
		[parseInt(sttCV)].addEventListener("focusin", function (e) {
			if (
				e.target.innerHTML === "Tiêu đề thông tin" ||
				e.target.innerHTML === "Chi tiết"
			) {
				e.target.innerHTML = "";
				e.target.style.color = "black";
			}
		});
	document
		.querySelectorAll(".thongtinkhac")
		[parseInt(sttCV)].addEventListener("focusout", function (e) {
			if (
				e.target.innerHTML === "" &&
				e.target.getAttribute("class") === "titleAI"
			) {
				e.target.innerHTML = "Tiêu đề thông tin";
				e.target.style.color = "grey";
			} else if (e.target.innerHTML === "") {
				e.target.innerHTML = "Chi tiết";
				e.target.style.color = "grey";
			}
		});
}
placeholderAnotherInfor();
function addIndex() {
	let bigDiv = document.querySelectorAll(".divOfAddIndex")[parseInt(sttCV)];
	let wrapDiv = document.createElement("div");
	let title = document.createElement("div");
	let titleDiscription = document.createElement("div");
	let ruler = document.createElement("hr");
	let mau, mau2;
	if (sttCV == 0) {
		mau = window.getComputedStyle(
			document.querySelectorAll(".CV.jsCV .sectionTitleBodyLeftCV h1")[0]
		).color;
		mau2 = window.getComputedStyle(
			document.querySelectorAll(".CV.jsCV .sectionTitleBodyLeftCV h1")[0]
		).color;
	} else {
		mau = window.getComputedStyle(
			document.querySelector(".CV2.main .sectionTitleBodyLeftCV h1")
		).color;
		mau2 = window.getComputedStyle(
			document.querySelectorAll(".CV2.main .sectionTitleBodyLeftCV hr")[0]
		).backgroundColor;
	}
	wrapDiv.style.marginBottom = "30px";
	title.setAttribute("contenteditable", true);
	title.style.padding = "4px";
	title.style.fontSize = "180%";
	title.style.fontWeight = "bold";
	title.style.textTransform = "uppercase";
	title.style.width = "95%";
	title.style.color = mau;
	title.innerHTML = "TÊN MỤC";
	title.setAttribute("spellcheck", "false");

	ruler.style.color = mau2;
	ruler.style.borderColor = mau2;
	ruler.style.backgroundColor = mau2;
	titleDiscription.style.padding = "5px";
	titleDiscription.style.marginTop = "10px";
	titleDiscription.contentEditable = "true";
	titleDiscription.style.width = "95%";
	titleDiscription.innerHTML = "Mô tả";
	titleDiscription.style.color = "grey";
	titleDiscription.setAttribute("spellcheck", "false");
	titleDiscription.setAttribute("class", "titleDiscription");
	bigDiv.appendChild(wrapDiv);
	deleteButtonFunction(wrapDiv);
	wrapDiv.appendChild(title);
	wrapDiv.appendChild(ruler);
	wrapDiv.appendChild(titleDiscription);
	document.querySelectorAll(".divOfAddIndex")[parseInt(sttCV)].scrollIntoView();
	placeholderOfAddIndex();
	RightCv1Themmucphai();
	RightCv2Themmucphai();
}
function placeholderOfAddIndex() {
	document
		.querySelectorAll(".divOfAddIndex")
		[parseInt(sttCV)].addEventListener("focusin", function (e) {
			if (e.target.innerHTML === "TÊN MỤC" || e.target.innerHTML === "Mô tả") {
				e.target.innerHTML = "";
				e.target.style.color = "black";
			}
		});
	document
		.querySelectorAll(".divOfAddIndex")
		[parseInt(sttCV)].addEventListener("focusout", function (e) {
			if (
				e.target.innerHTML === "" &&
				e.target.getAttribute("class") === "titleDiscription"
			) {
				e.target.innerHTML = "Mô tả";
				e.target.style.color = "grey";
			} else if (e.target.innerHTML === "") {
				e.target.innerHTML = "TÊN MỤC";
				e.target.style.color = "grey";
			}
		});
}
function addButtonOfCertificate() {
	document
		.querySelectorAll('div[name="chungChi"]')
		[parseInt(sttCV)].addEventListener("mouseover", function () {
			document.querySelectorAll('div[key="certificate"] #addButton')[
				parseInt(sttCV)
			].style.display = "block";
		});
	document
		.querySelectorAll('div[name="chungChi"]')
		[parseInt(sttCV)].addEventListener("mouseout", function () {
			document.querySelectorAll('div[key="certificate"] #addButton')[
				parseInt(sttCV)
			].style.display = "none";
		});
}
addButtonOfCertificate();
// Add certificate
function getOffset(el) {
	const rect = el.getBoundingClientRect();
	// console.log(
	// 	"top = " + rect.top,
	// 	"left = " + rect.left,
	// 	"right = " + rect.right,
	// 	"bottom = " + rect.bottom
	// );
}
function addCertificate() {
	let wrapDiv = document.createElement("div");
	let certificateName = document.createElement("div");
	let labelFrom = document.createElement("div");
	let fromDate = document.createElement("input");
	let labelTo = document.createElement("div");
	let toDate = document.createElement("input");
	let fromWrapper = document.createElement("div");
	let toWrapper = document.createElement("div");
	let mau;
	if (sttCV == 0) {
		window.getComputedStyle(
			document.querySelectorAll(".CV.jsCV .titleLeftCVsection h3")[0]
		).color;
	} else {
		mau = window.getComputedStyle(
			document.querySelectorAll(".CV2.main .sectionInfo .sectionInfoTitle")[0]
		).color;
	}
	wrapDiv.style.marginTop = "10px";
	wrapDiv.style.marginBottom = "10px";
	wrapDiv.style.border = "1px solid transparent";
	wrapDiv.setAttribute("borderColor", "white");
	certificateName.contentEditable = "true";
	certificateName.style.width = "90%";
	certificateName.style.color = mau;
	certificateName.spellcheck = "false";
	certificateName.style.padding = "5px";
	certificateName.setAttribute("spellcheck", "false");
	certificateName.innerHTML = "Tên chứng chỉ";

	labelFrom.innerHTML = "Từ";
	labelFrom.style.color = mau;
	labelFrom.style.marginRight = "10px";
	labelFrom.style.width = "30px";
	fromWrapper.style.alignItems = "center";
	fromWrapper.style.justifyContent = "center";
	fromWrapper.style.marginBottom = "5px";

	fromDate.type = "date";
	fromDate.style.backgroundColor = "transparent";
	fromDate.style.color = mau;
	fromDate.style.padding = "5px";
	toWrapper.style.alignItems = "center";
	toWrapper.style.justifyContent = "center";
	toWrapper.style.marginLeft = "1px";
	fromDate.style.border = "none";
	toWrapper.setAttribute("bordercolor", mau);

	labelTo.innerHTML = "Đến";
	labelTo.style.color = mau;
	labelTo.style.marginRight = "10px";
	toDate.type = "date";
	toDate.style.backgroundColor = "transparent";
	toDate.style.color = mau;
	toDate.style.padding = "5px";
	toDate.style.border = "none";
	fromWrapper.style.display = "flex";
	toWrapper.style.display = "flex";

	document
		.querySelectorAll(".certificate")
		[parseInt(sttCV)].appendChild(wrapDiv);
	wrapDiv.appendChild(certificateName);
	wrapDiv.appendChild(fromWrapper);
	fromWrapper.appendChild(labelFrom);
	fromWrapper.appendChild(fromDate);
	wrapDiv.appendChild(toWrapper);
	toWrapper.appendChild(labelTo);
	toWrapper.appendChild(toDate);
	deleteButtonFunction(wrapDiv);
	deleteButtonFunction(toWrapper);
}
function placeholderOfAddCertificate() {
	document
		.querySelectorAll(".certificate")
		[parseInt(sttCV)].addEventListener("focusin", function (e) {
			if (e.target.innerHTML === "Tên chứng chỉ") {
				e.target.innerHTML = "";
				e.target.style.color = "white";
			}
		});
	document
		.querySelectorAll(".certificate")
		[parseInt(sttCV)].addEventListener("focusout", function (e) {
			if (e.target.innerHTML === "" && e.target.tagName !== "INPUT") {
				e.target.innerHTML = "Tên chứng chỉ";
				e.target.style.color = "grey";
			}
		});
}
placeholderOfAddCertificate();
getOffset(document.querySelectorAll(".certificate")[parseInt(sttCV)]);

let CVbackground = document.querySelectorAll(".backgroundOfCV");
// console.log(CVbackground);
function getBackground(e) {
	document
		.querySelector(".backgroundContainer")
		.addEventListener("click", function (e) {
			backgroundID = e.target.getAttribute("id");
			switch (backgroundID) {
				case "1":
					// CVbackground.src = "https://files.fm/thumb_show.php?i=truaf92w7";
					CVbackground[parseInt(sttCV)].src = "./Images/1.jpg";
					CVbackground[parseInt(sttCV) + 2].src = "./Images/1.jpg";
					break;
				case "2":
					CVbackground[parseInt(sttCV)].src = "./Images/2.jpg";
					CVbackground[parseInt(sttCV) + 2].src = "./Images/2.jpg";
					break;
				case "3":
					CVbackground[parseInt(sttCV)].src = "./Images/3.jpg";
					CVbackground[parseInt(sttCV) + 2].src = "./Images/3.jpg";
					break;
				case "4":
					CVbackground[parseInt(sttCV)].src = "./Images/4.jpg";
					CVbackground[parseInt(sttCV) + 2].src = "./Images/4.jpg";
					break;
				case "5":
					CVbackground[parseInt(sttCV)].src = "./Images/5.jpg";
					CVbackground[parseInt(sttCV) + 2].src = "./Images/5.jpg";
					break;
				case "6":
					CVbackground[parseInt(sttCV)].src = "./Images/6.jpg";
					CVbackground[parseInt(sttCV) + 2].src = "./Images/6.jpg";
					break;
				default:
					break;
			}
		});
}
getBackground();
function deleteBackground() {
	CVbackground[parseInt(sttCV)].src = "";
	CVbackground[parseInt(sttCV) + 2].src = "";
}
function addBackground() {
	let preview = document.createElement("img");
	preview.style.cursor = "pointer";
	let file = document.querySelector("input[type=file]").files[0];

	let reader = new FileReader();

	reader.onloadend = function () {
		preview.src = reader.result;
	};

	if (file) {
		reader.readAsDataURL(file);
	} else {
		preview.src = "";
	}
	reader.onload = function () {
		document.getElementById("userBackground").appendChild(preview);
	};
}
document
	.querySelector("#userBackground")
	.addEventListener("click", function (e) {
		if (e.target.tagName == "IMG") {
			CVbackground[parseInt(sttCV)].src = e.target.src;
			CVbackground[parseInt(sttCV) + 2].src = e.target.src;
		}
	});
function addLeftIndex() {
	let wrapDiv = document.createElement("div");
	let title = document.createElement("h3");
	let ruler = document.createElement("hr");
	let content = document.createElement("div");
	let rulerColor = window.getComputedStyle(
		document.querySelectorAll(".titleLeftCVsection hr")[0]
	).backgroundColor;
	let mau;
	if (sttCV == 0) {
		mau = window.getComputedStyle(
			document.querySelectorAll(".CV .titleLeftCVsection h3")[0]
		).color;
	} else {
		mau = window.getComputedStyle(
			document.querySelectorAll(".CV2.main .titleLeftCVsection h3")[0]
		).color;
	}
	wrapDiv.setAttribute("class", "titleLeftCVsection");
	wrapDiv.style.margin = "auto";
	title.contentEditable = "true";
	title.innerHTML = "Tiêu đề";
	title.spellcheck = false;
	title.style.color = mau;
	title.setAttribute("name", "titelLeftIndex");
	ruler.style.display = "block";
	ruler.style.backgroundColor = rulerColor;
	content.contentEditable = "true";
	content.style.color = "grey";
	content.style.margin = "10px 0 10px 0";
	content.style.color = "white";
	content.style.padding = "5px";
	content.style.width = "95%";
	content.spellcheck = false;
	content.innerHTML = "Nội dung";
	if (sttCV == 1) {
		ruler.style.display = "none";
	}
	document
		.querySelectorAll("div[name='addLeftIndex']")
		[parseInt(sttCV)].appendChild(wrapDiv);
	wrapDiv.appendChild(title);
	wrapDiv.appendChild(ruler);
	wrapDiv.appendChild(content);
	deleteButtonFunction(wrapDiv);
	if (sttCV == 0) LeftCv1Themmuctrai();
	else LeftCv2Themmuctrai();
	document
		.querySelectorAll("div[name='addLeftIndex']")
		[parseInt(sttCV)].scrollIntoView();
}
function placeholderOfAddLeftIndex() {
	document
		.querySelectorAll("div[name='addLeftIndex']")
		[parseInt(sttCV)].addEventListener("focusin", function (e) {
			if (
				e.target.innerHTML === "Tiêu đề" ||
				e.target.innerHTML === "Nội dung"
			) {
				e.target.innerHTML = "";
				e.target.style.color = "white";
			}
		});
	document
		.querySelectorAll("div[name='addLeftIndex']")
		[parseInt(sttCV)].addEventListener("focusout", function (e) {
			if (
				e.target.innerHTML === "" &&
				e.target.getAttribute("name") === "titelLeftIndex"
			) {
				e.target.innerHTML = "Tiêu đề";
				e.target.style.color = "grey";
			} else if (e.target.innerHTML === "") {
				e.target.innerHTML = "Nội dung";
				e.target.style.color = "grey";
			}
		});
}
placeholderOfAddLeftIndex();
function addOrRemoveRuler() {
	rulerArray = document.querySelectorAll("div[name='addLeftIndex'] hr");
	rulerArray.forEach(function (ruler) {
		if (sttCV === 0) {
			ruler.style.display = "block";
		} else if (sttCV === 1) {
			ruler.style.display = "none";
		}
	});
}
function addDeleteButtonForAll() {
	for (let i = 10; i <= 14; i++) {
		deleteButtonFunction(
			document.querySelectorAll(".bodyLeftCV .sectionBodyLeftCV")[i]
		);
		deleteButtonFunction(
			document.querySelectorAll(".bodyLeftCV .sectionBodyLeftCV")[i + 5]
		);
	}
	for (let i = 8; i <= 10; i++) {
		deleteButtonFunction(
			document.querySelectorAll(".leftCV .sectionTitleLeftCV1")[i]
		);
		deleteButtonFunction(
			document.querySelectorAll(".leftCV .sectionTitleLeftCV1")[i + 5]
		);
	}
}
addDeleteButtonForAll();
let backgroundSetting = true;
function displayBackgroundSetting() {
	if (backgroundSetting === true) {
		document.getElementById("isDisplay").style.display = "block";
		document.querySelector("#Cv-background i:nth-child(1)").style.display =
			"none";
		document.querySelector("#Cv-background i:nth-child(2)").style.display =
			"block";

		backgroundSetting = false;
	} else {
		document.getElementById("isDisplay").style.display = "none";
		document.querySelector("#Cv-background i:nth-child(1)").style.display =
			"block";
		document.querySelector("#Cv-background i:nth-child(2)").style.display =
			"none";
		backgroundSetting = true;
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
var avatarCVs = document.querySelectorAll(".ava");
// themHinhAnhNhieuCV(sttCV);
function themHinhAnhNhieuCV(sttCV) {
	avatarCVs[sttCV].onclick = function () {
		document.getElementById("OCModal").classList.add("OpenModal");
	};
	document.getElementById("js-closeModalAva").onclick = function () {
		document.getElementById("OCModal").classList.remove("OpenModal");
	};
	document.getElementById("opaModal").onclick = function () {
		document.getElementById("OCModal").classList.remove("OpenModal");
	};
}
avatarCVs[sttCV].onclick = function () {
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
	// console.log(src);
	avatarCVs[sttCV].src = src;
	if (sttCV == 0) {
		avatarCVs[sttCV].style.border = "none";
	}
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
			// document.querySelector(".information").classList.add("fixInformation");
		} else {
			document.getElementById("editContent").classList.remove("fixEditContent");
			// document.querySelector(".information").classList.remove("fixInformation");
		}
	}
}
window.onload = function () {
	onScroll();
};
//                          table color
var tryTable = 0,
	tableColor = document.getElementById("tableColor"),
	chunao = 0;
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
		// chunao=0;
	}
});
document.body.onclick = function (e) {
	if (tryTable == 1 && (e.clientX / window.innerWidth) * 100 > 25) {
		setTimeout(function () {
			tableColor.classList.remove("openTableColor");
			tryTable = 0;
		}, 400);
		tableColor.classList.add("closeTableColor");
		chunao = 0;
	}
};
//           choice color
var dynamicColor = "black";
var inputColor = document.getElementById("color-search"),
	userColor = document.getElementById("useColor");
inputColor.oninput = function (e) {
	dynamicColor = e.target.value;
	document.getElementById("demoColor").style.color = e.target.value;
	// console.log(dynamicColor);
};

//                     khoa -> đăng
document.getElementById("useThisColor").onclick = function () {
	if (chunao == 0) {
		activeElement.style.color = dynamicColor;
	} else if (chunao == 1) {
		activeElementKhoa.forEach(function (a) {
			a.style.color = dynamicColor;
		});
		if (sttCV == 1)
			duanTitleCV2.forEach(function (a) {
				a.style.color = dynamicColor;
			});
	} else {
		activeElementKhoa.forEach(function (a, b, c) {
			if (b >= c.length / 2) {
				a.style.backgroundColor = dynamicColor;
				a.style.borderColor = dynamicColor;
			} else {
				a.style.color = dynamicColor;
				// bienmauRightCV1 = dynamicColor;
			}
		});
		if (sttCV == 0)
			duanTitle.forEach(function (a) {
				a.style.color = dynamicColor;
			});
	}
};
saveColorDefaults();
function saveColorDefaults() {
	document.querySelectorAll(".basicColor")[1].onclick = function (e) {
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

	document.querySelectorAll(".basicColor")[0].onclick = function (e) {
		if (tryTable == 0) {
			document.querySelectorAll(".sectionBasicColors2").forEach(function (a) {
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

//                                   font family
document.querySelector("#seclectFont").onclick = function () {
	if (activeElementContainNull == null) {
		cv.style.fontFamily = this.value;
	} else {
		activeElement.style.fontFamily = this.value;
	}
	// console.log(this.value);
};

//              style status

// cv.style.textAlign = "left";
document.getElementById("status").addEventListener("click", function (e) {
	statuss.forEach(function (a, b) {
		if (e.target == a) {
			e.target.classList.toggle("addBlackStatus");
			activeElement.classList.toggle(sta[b]);
		}
	});
});
function save() {
	localStorage.setItem(
		"education",
		document.querySelectorAll('div[key="education"]')[parseInt(sttCV)].outerHTML
	);
	localStorage.setItem(
		"certificate",
		document.querySelectorAll('div[key="certificate"]')[parseInt(sttCV)]
			.outerHTML
	);
	localStorage.setItem(
		"phone number",
		document.querySelectorAll('div[key="phoneNumber"]')[parseInt(sttCV)]
			.outerHTML
	);
	localStorage.setItem(
		"email",
		document.querySelectorAll('div[key="email"]')[parseInt(sttCV)].outerHTML
	);
	localStorage.setItem(
		"address",
		document.querySelectorAll('div[key="address"]')[parseInt(sttCV)].outerHTML
	);
	localStorage.setItem(
		"purpose",
		document.querySelectorAll('div[key="purpose"]')[parseInt(sttCV)].outerHTML
	);
	localStorage.setItem(
		"experience",
		document.querySelectorAll('div[key="experience"]')[parseInt(sttCV)]
			.outerHTML
	);
	localStorage.setItem(
		"activity",
		document.querySelectorAll('div[key="activity"]')[parseInt(sttCV)].outerHTML
	);
	localStorage.setItem(
		"skill",
		document.querySelectorAll('div[key="skill"]')[parseInt(sttCV)].outerHTML
	);
	localStorage.setItem(
		"social network",
		document.querySelectorAll('div[key="socialNetwork"]')[parseInt(sttCV)]
			.outerHTML
	);
	localStorage.setItem(
		"project",
		document.querySelectorAll('div[key="project"]')[parseInt(sttCV)].outerHTML
	);
	localStorage.setItem(
		"title",
		document.querySelectorAll('div[key="title"]')[parseInt(sttCV)].outerHTML
	);
	localStorage.setItem(
		"sub title",
		document.querySelectorAll('div[key="subTitle"]')[parseInt(sttCV)].outerHTML
	);
	// header color
	if (
		window.getComputedStyle(
			document.querySelectorAll(".headleftCV")[parseInt(sttCV)]
		).backgroundColor !== "rgb(170, 9, 170)" &&
		sttCV == 0
	) {
		localStorage.setItem(
			"header left color",
			window.getComputedStyle(
				document.querySelectorAll(".headleftCV")[parseInt(sttCV)]
			).backgroundColor
		);
	} else if (
		window.getComputedStyle(
			document.querySelectorAll(".headleftCV")[parseInt(sttCV)]
		).backgroundColor == "rgb(170, 9, 170)" &&
		sttCV == 0
	) {
		localStorage.setItem("header left color", "#2f4e50");
	}
	if (
		window.getComputedStyle(document.querySelectorAll(".headleftCV")[0])
			.backgroundColor == "rgb(47, 78, 80)" &&
		sttCV == 1
	) {
		localStorage.setItem("header left color", "rgb(170, 9, 170)");
	} else if (
		window.getComputedStyle(document.querySelectorAll(".headleftCV")[0])
			.backgroundColor !== "rgb(47, 78, 80)" &&
		sttCV == 1
	) {
		localStorage.setItem(
			"header left color",
			window.getComputedStyle(document.querySelectorAll(".headleftCV")[0])
				.backgroundColor
		);
	}
	//
	localStorage.setItem(
		"left color",
		window.getComputedStyle(document.querySelector(".leftCV")).backgroundColor
	);
	localStorage.setItem(
		"right color",
		window.getComputedStyle(document.querySelector(".rightCV")).backgroundColor
	);
	localStorage.setItem(
		"another information",
		document.querySelectorAll(".thongtinkhac")[parseInt(sttCV)].outerHTML
	);
	localStorage.setItem(
		"new index",
		document.querySelectorAll(".divOfAddIndex")[parseInt(sttCV)].outerHTML
	);
	localStorage.setItem(
		"left index",
		document.querySelectorAll("div[name='addLeftIndex']")[parseInt(sttCV)]
			.outerHTML
	);
	localStorage.setItem("lock load", "false");
	document.querySelector("#save i").style.animation = "saved 1s linear 1";
	setTimeout(function () {
		document.querySelector("#save i").style.animation = "none";
	}, 1000);
}
// console.log(document.querySelectorAll(".headleftCV")[0]);
function load() {
	if (localStorage.getItem("lock load") === "false") {
		document.getElementById("load").style.cursor = "pointer";
		document.querySelectorAll('div[key="education"]')[
			parseInt(sttCV)
		].outerHTML = localStorage.getItem("education");
		document.querySelectorAll('div[key="certificate"]')[
			parseInt(sttCV)
		].outerHTML = localStorage.getItem("certificate");
		document.querySelectorAll('div[key="phoneNumber"]')[
			parseInt(sttCV)
		].outerHTML = localStorage.getItem("phone number");
		document.querySelectorAll('div[key="email"]')[parseInt(sttCV)].outerHTML =
			localStorage.getItem("email");
		document.querySelectorAll('div[key="address"]')[parseInt(sttCV)].outerHTML =
			localStorage.getItem("address");
		document.querySelectorAll('div[key="purpose"]')[parseInt(sttCV)].outerHTML =
			localStorage.getItem("purpose");
		document.querySelectorAll('div[key="experience"]')[
			parseInt(sttCV)
		].outerHTML = localStorage.getItem("experience");
		document.querySelectorAll('div[key="activity"]')[
			parseInt(sttCV)
		].outerHTML = localStorage.getItem("activity");
		document.querySelectorAll('div[key="skill"]')[parseInt(sttCV)].outerHTML =
			localStorage.getItem("skill");
		document.querySelectorAll('div[key="socialNetwork"]')[
			parseInt(sttCV)
		].outerHTML = localStorage.getItem("social network");
		document.querySelectorAll('div[key="project"]')[parseInt(sttCV)].outerHTML =
			localStorage.getItem("project");
		document.querySelectorAll('div[key="title"]')[parseInt(sttCV)].outerHTML =
			localStorage.getItem("title");
		document.querySelectorAll('div[key="subTitle"]')[
			parseInt(sttCV)
		].outerHTML = localStorage.getItem("sub title");
		document.querySelectorAll(".thongtinkhac")[parseInt(sttCV)].outerHTML =
			localStorage.getItem("another information");
		document.querySelectorAll(".headleftCV")[
			parseInt(sttCV)
		].style.backgroundColor = localStorage.getItem("header left color");
		document.querySelectorAll(".headleftCV")[
			parseInt(sttCV) + 2
		].style.backgroundColor = localStorage.getItem("header left color");
		document.querySelectorAll(".leftCV")[
			parseInt(sttCV)
		].style.backgroundColor = localStorage.getItem("left color");
		document.querySelectorAll(".leftCV")[
			parseInt(sttCV) + 2
		].style.backgroundColor = localStorage.getItem("left color");
		document.querySelectorAll(".rightCV")[
			parseInt(sttCV)
		].style.backgroundColor = localStorage.getItem("right color");
		document.querySelectorAll(".rightCV")[
			parseInt(sttCV) + 2
		].style.backgroundColor = localStorage.getItem("right color");
		document.querySelectorAll(".divOfAddIndex")[parseInt(sttCV)].outerHTML =
			localStorage.getItem("new index");
		document.querySelectorAll("div[name='addLeftIndex']")[
			parseInt(sttCV)
		].outerHTML = localStorage.getItem("left index");
		document.querySelector("#load i").style.animation = "load 1s linear 1";
		setTimeout(function () {
			document.querySelector("#load i").style.animation = "none";
		}, 1000);
	} else {
		document.getElementById("load").style.cursor = "not-allowed";
	}
}
function addDeleteButtoAgain(array) {
	if (sttCV == 0) {
		for (let i = 0; i < array.length / 2; i++) {
			deleteButtonFunction(array[i]);
		}
	} else if (sttCV == 1) {
		for (let i = array.length / 2; i <= array.length; i++) {
			deleteButtonFunction(array[i]);
		}
	}
}
// setInterval(function () {
	// console.log(activeElement)
	// console.log(activeElementContainNull)
// },1000)
var trynenphai = 0,
	trynentrai = 0,
	tryneninfo = 0,
	trytitle = 0;
let sectionInfoTitle = document.querySelectorAll(
	".sectionInfoTitle.miniSectionInfoTitle"
);
function chinhnenCV1() {
	document.getElementById("miniHeadleftCV_js").onclick = function () {
		setTimeout(function () {
			document.getElementById("miniHeadleftCV_js").style.border =
				"10px dashed #02ebfc";
			document
				.querySelectorAll("#miniLeftCV_js .sectionTitleLeftCV1 hr")
				.forEach(function (a) {
					a.classList.add("addBorderColorForHr");
				});
			rootStyle.setProperty("--pseudo-boderColor", "#02ebfc");
			document.getElementById("MiniRightCV_js").style.border = "none";
			document.getElementById("miniLeftCV_js").style.border = "none";
			sectionInfoTitle.forEach(function (a) {
				a.style.border = "none";
				a.style.backgroundColor = "#333";
			});
			trytitle = 1;
			trynenphai = 0;
			trynentrai = 0;
			tryneninfo = 0;
		}, 100);
	};
	document.getElementById("MiniRightCV_js").onclick = function () {
		document.getElementById("MiniRightCV_js").style.border =
			"10px dashed rgb(253, 5, 100)";
		document
			.querySelectorAll("#miniLeftCV_js .sectionTitleLeftCV1 hr")
			.forEach(function (a) {
				a.classList.remove("addBorderColorForHr");
			});
		rootStyle.setProperty("--pseudo-boderColor", "none");
		document.getElementById("miniHeadleftCV_js").style.border = "none";
		document.getElementById("miniLeftCV_js").style.border = "none";
		sectionInfoTitle.forEach(function (a) {
			a.style.border = "none";
			a.style.backgroundColor = "#333";
		});
		trytitle = 0;
		trynenphai = 1;
		trynentrai = 0;
		tryneninfo = 0;
	};
	document.getElementById("miniLeftCV_js").onclick = function (e) {
		document.getElementById("miniLeftCV_js").style.border =
			"10px dashed rgb(0, 255, 0)";
		document
			.querySelectorAll("#miniLeftCV_js .sectionTitleLeftCV1 hr")
			.forEach(function (a) {
				a.classList.remove("addBorderColorForHr");
			});
		rootStyle.setProperty("--pseudo-boderColor", "none");
		document.getElementById("miniHeadleftCV_js").style.border = "none";
		document.getElementById("MiniRightCV_js").style.border = "none";
		sectionInfoTitle.forEach(function (a) {
			a.style.border = "none";
			a.style.backgroundColor = "#333";
		});
		trytitle = 0;
		trynenphai = 0;
		trynentrai = 1;
		tryneninfo = 0;

		sectionInfoTitle.forEach(function (a) {
			if (e.target == a) {
				setTimeout(function () {
					sectionInfoTitle.forEach(function (a) {
						a.style.border = "1px dashed white";
						a.style.backgroundColor = "#fc0202";
					});
					document
						.querySelectorAll("#miniLeftCV_js .sectionTitleLeftCV1 hr")
						.forEach(function (a) {
							a.classList.remove("addBorderColorForHr");
						});
					rootStyle.setProperty("--pseudo-boderColor", "none");
					document.getElementById("miniLeftCV_js").style.border = "none";
					document.getElementById("miniHeadleftCV_js").style.border = "none";
					document.getElementById("MiniRightCV_js").style.border = "none";
					trytitle = 0;
					trynenphai = 0;
					trynentrai = 0;
					tryneninfo = 1;
				}, 100);
			}
		});
	};

	document.querySelector(".miniFlexBasicColor").onclick = function (e) {
		document.querySelectorAll(".sectionBasicColors2").forEach(function (val) {
			if (val == e.target) {
				if (trynenphai == 1) {
					document.querySelectorAll(".rightCV").forEach(function (a, b) {
						if (b % 2 == 0) a.style.backgroundColor = val.getAttribute("value");
					});
				} else if (trynentrai == 1) {
					document.querySelectorAll(".leftCV").forEach(function (a, b) {
						if (b % 2 == 0) a.style.backgroundColor = val.getAttribute("value");
					});
				} else if (tryneninfo == 1) {
					document
						.querySelectorAll(".sectionInfoTitle")
						.forEach(function (a, b) {
							a.style.backgroundColor = val.getAttribute("value");
						});
				} else if (trytitle == 1) {
					document.querySelectorAll(".headleftCV").forEach(function (a, b) {
						if (b % 2 == 0) a.style.backgroundColor = val.getAttribute("value");
					});
					document
						.querySelectorAll(".titleLeftCVsection hr")
						.forEach(function (a) {
							a.style.borderColor = val.getAttribute("value");
							rootStyle.setProperty(
								"--pseudo-color",
								val.getAttribute("value")
							);
						});
					document
						.querySelectorAll(".CV.jsCV .skillLevel")
						.forEach(function (a, b) {
							let dung = 0;
							a.querySelectorAll("div").forEach(function (a1, b1) {
								if (a1.getAttribute("isend") == "yes" && dung == 0) {
									a1.style.backgroundColor = val.getAttribute("value");
									dung = 1;
								} else if (dung == 0) {
									a1.style.backgroundColor = val.getAttribute("value");
								} else if (dung == 1) return;
							});
						});
				}
			}
		});
	};
}
//                                  chinh nen CV 2
function chinhnenCV2() {
	document.getElementById("miniHeadleftCV2_js").onclick = function () {
		setTimeout(function () {
			document.getElementById("miniHeadleftCV2_js").style.border =
				"8px dashed #02ebfc";
			document
				.querySelectorAll(".miniCV2 .titleLeftCVsection h3")
				.forEach(function (a) {
					a.style.border = "8px dashed #02ebfc";
				});
			document.getElementById("MiniRightCV2_js").style.border = "none";
			document.getElementById("miniLeftCV2_js").style.border = "none";
			document.querySelector(".miniCV2 .Miniava").style.border =
				"3px solid #2ccdd7";
			document.querySelector(".miniCV2 #thongTin").style.border =
				"3px solid #2ccdd7";
			document
				.querySelectorAll(".miniCV2 .sectionTitleBodyLeftCV hr")
				.forEach(function (a) {
					a.style.border = "1px solid #2ccdd7";
				});
			document.querySelectorAll(".miniCV2 .dotLeftCV2").forEach(function (a) {
				a.style.backgroundColor = "#2ccdd7";
			});
			trytitle = 1;
			trynenphai = 0;
			trynentrai = 0;
			tryneninfo = 0;
		}, 100);
	};
	document.getElementById("MiniRightCV2_js").onclick = function () {
		document.getElementById("MiniRightCV2_js").style.border = "8px dashed red";
		document
			.querySelectorAll(".miniCV2 .titleLeftCVsection h3")
			.forEach(function (a) {
				a.style.border = "none";
				a.style.borderLeft = "3px solid #2ccdd7";
			});
		document.getElementById("miniHeadleftCV2_js").style.border = "none";
		document.getElementById("miniLeftCV2_js").style.border = "none";
		document.querySelector(".miniCV2 .Miniava").style.border =
			"3px solid #2ccdd7";
		document.querySelector(".miniCV2 #thongTin").style.border =
			"3px solid #2ccdd7";
		document
			.querySelectorAll(".miniCV2 .sectionTitleBodyLeftCV hr")
			.forEach(function (a) {
				a.style.border = "1px solid #2ccdd7";
			});
		document.querySelectorAll(".miniCV2 .dotLeftCV2").forEach(function (a) {
			a.style.backgroundColor = "#2ccdd7";
		});
		trytitle = 0;
		trynenphai = 1;
		trynentrai = 0;
		tryneninfo = 0;
	};
	document.getElementById("miniLeftCV2_js").onclick = function (e) {
		if (e.target == document.querySelector(".miniCV2 .Miniava")) {
			// rootStyle.setProperty("--peusdoColor-leftCVboder", "rgb(255, 0, 0)");
			// setTimeout(function () {
			document.querySelector(".miniCV2 .Miniava").style.border =
				"8px dashed rgb(255, 0, 0)";
			document
				.querySelectorAll(".miniCV2 .titleLeftCVsection h3")
				.forEach(function (a) {
					a.style.border = "none";
					a.style.borderLeft = "8px dashed rgb(255, 0, 0)";
				});
			document.querySelector(".miniCV2 #thongTin").style.border =
				"3px solid rgb(255, 0, 0)";
			document.querySelectorAll(".miniCV2 .dotLeftCV2").forEach(function (a) {
				a.style.backgroundColor = "rgb(255, 0, 0)";
			});
			document.querySelectorAll(".miniCV2 hr").forEach(function (a) {
				a.style.border = "2px dashed rgb(255, 0, 0)";
				a.style.backgroundColor = "transparent";
			});
			document.getElementById("miniHeadleftCV2_js").style.border = "none";
			document.getElementById("MiniRightCV2_js").style.border = "none";
			document.getElementById("miniLeftCV2_js").style.border = "none";

			trytitle = 0;
			trynenphai = 0;
			trynentrai = 0;
			tryneninfo = 1;
			// },100)
		} else {
			document.getElementById("miniLeftCV2_js").style.border =
				"8px dashed rgb(0, 255, 0)";
			document
				.querySelectorAll(".miniCV2 .titleLeftCVsection h3")
				.forEach(function (a) {
					a.style.border = "none";
					a.style.borderLeft = "3px solid #2ccdd7";
				});
			document.getElementById("miniHeadleftCV2_js").style.border = "none";
			document.getElementById("MiniRightCV2_js").style.border = "none";
			document.querySelector(".miniCV2 .Miniava").style.border =
				"3px solid #2ccdd7";
			document.querySelector(".miniCV2 #thongTin").style.border =
				"3px solid #2ccdd7";
			document
				.querySelectorAll(".miniCV2 .sectionTitleBodyLeftCV hr")
				.forEach(function (a) {
					a.style.border = "1px solid #2ccdd7";
				});
			document.querySelectorAll(".miniCV2 .dotLeftCV2").forEach(function (a) {
				a.style.backgroundColor = "#2ccdd7";
			});
			trytitle = 0;
			trynenphai = 0;
			trynentrai = 1;
			tryneninfo = 0;
		}
	};

	document.querySelector(".miniFlexBasicColor").onclick = function (e) {
		document.querySelectorAll(".sectionBasicColors2").forEach(function (val) {
			if (val == e.target) {
				if (trynenphai == 1) {
					document.querySelectorAll(".rightCV").forEach(function (a, b) {
						if (b % 2 != 0)
							rootStyle.setProperty(
								"--color-rightCV",
								val.getAttribute("value")
							);
					});
				} else if (trynentrai == 1) {
					document.querySelectorAll(".leftCV").forEach(function (a, b) {
						if (b % 2 != 0)
							rootStyle.setProperty(
								"--color-leftCV",
								val.getAttribute("value")
							);
					});
				} else if (tryneninfo == 1) {
					rootStyle.setProperty(
						"--peusdoColor-leftCVboder",
						val.getAttribute("value")
					);
					document.querySelectorAll(".CV2 hr").forEach(function (a, b) {
						a.style.borderColor = val.getAttribute("value");
						if (b % 2 != 0) a.style.backgroundColor = val.getAttribute("value");
					});
					document.querySelector(".CV2 .ava").style.borderColor =
						val.getAttribute("value");
					document.querySelector(".miniCV2 .Miniava").style.borderColor =
						val.getAttribute("value");
					document
						.querySelectorAll(".miniCV2 .titleLeftCVsection h3")
						.forEach(function (a) {
							a.style.borderLeftColor = val.getAttribute("value");
						});
					document
						.querySelectorAll(".CV2 .titleLeftCVsection h3")
						.forEach(function (a) {
							a.style.borderLeftColor = val.getAttribute("value");
						});
					document.querySelector(".miniCV2 .thongTinCV2").style.borderColor =
						val.getAttribute("value");
					document.querySelectorAll(".thongTinCV2")[1].style.borderColor =
						val.getAttribute("value");
					document
						.querySelectorAll(".miniCV2 .dotLeftCV2")
						.forEach(function (a) {
							a.style.backgroundColor = val.getAttribute("value");
						});
					document.querySelectorAll(".CV2 .dotLeftCV2").forEach(function (a) {
						a.style.backgroundColor = val.getAttribute("value");
					});
				} else if (trytitle == 1) {
					document.querySelectorAll(".headleftCV").forEach(function (a) {
						// let bien = val.getAttribute("value");
						// a.style.background = `linear-gradient(to right,${bien} 74%,transparent 26%)`;
						rootStyle.setProperty(
							"--TitleHeadRCV2-",
							val.getAttribute("value")
						);
					});
					document
						.querySelectorAll(".CV2 .titleLeftCVsection h3")
						.forEach(function (a) {
							a.style.backgroundColor = val.getAttribute("value");
						});
					document
						.querySelectorAll(".CV2.main .skillLevel")
						.forEach(function (a, b) {
							let dung = 0;
							a.querySelectorAll("div").forEach(function (a1, b1) {
								if (a1.getAttribute("isend") == "yes" && dung == 0) {
									a1.style.backgroundColor = val.getAttribute("value");
									dung = 1;
								} else if (dung == 0) {
									a1.style.backgroundColor = val.getAttribute("value");
								} else if (dung == 1) return;
							});
						});
				}
			}
		});
	};
}
function chuyenCV() {
	document.getElementById("CVchung").onclick = function () {
		save();
		setTimeout(function () {
			sttCV = 0;
			setTimeout(function () {
				kiemtraSTTCV();
			}, 100);
		}, 10);
	};
	document.getElementById("CVKTCN").onclick = function () {
		save();
		setTimeout(function () {
			sttCV = 1;
			setTimeout(function () {
				kiemtraSTTCV();
			}, 100);
		}, 10);
	};
}
function kiemtraSTTCV() {
	if (sttCV == 0) {
		cv.classList.remove("closeCV2");
		document.querySelector(".CV2.main").classList.add("closeCV2");
		document.querySelector(".miniCV2").classList.add("closeCV2");
		document.querySelector(".miniCV1").classList.remove("closeCV2");
		chinhnenCV1();
		themHinhAnhNhieuCV(sttCV);
	} else if (sttCV == 1) {
		document.querySelector(".CV2.main").classList.remove("closeCV2");
		cv.classList.add("closeCV2");
		document.querySelector(".miniCV1").classList.add("closeCV2");
		document.querySelector(".miniCV2").classList.remove("closeCV2");
		chinhnenCV2();
		themHinhAnhNhieuCV(sttCV);
	}
	load();
	placeholderOfProject();
	placeholderOfAddIndex();
	placeholderOfAddCertificate();
	addButtonOfCertificate();
	addButtonProject();
	placeholderOfSkill();
	addButtonSkill();
	addDeleteButtoAgain(document.querySelectorAll("div[key='project'] > div"));
	addDeleteButtoAgain(document.querySelectorAll(".nothing > div"));
	addDeleteButtoAgain(document.querySelectorAll(".certificate > div"));
	addDeleteButtoAgain(
		document.querySelectorAll("div[key='socialNetwork'] > div")
	);
	addDeleteButtoAgain(
		document.querySelectorAll("div[key='divOfAddIndex'] > div")
	);
	addDeleteButtoAgain(document.querySelectorAll(".thongtinkhac > div"));
	addDeleteButtoAgain(
		document.querySelectorAll("div[name='addLeftIndex'] > div")
	);
	addButtonSocialNetwork();
	placeholderOfSocialNetwork();
	skillLevel();
	placeholderAnotherInfor();
	placeholderOfAddLeftIndex();
	addOrRemoveRuler();
	//   đổi màu title duan khi chuyen CV1 CV2
	let titleRightCV2Add = document.querySelectorAll(
			".CV2.main  .divOfAddIndex div div:nth-child(2)"
		),
		hrRightCV2Add = document.querySelectorAll(
			".CV2.main  .divOfAddIndex div hr"
		),
		titleRightCV1Add = document.querySelectorAll(
			".CV.jsCV .divOfAddIndex div div:nth-child(2)"
		),
		hrRightCV1Add = document.querySelectorAll(
			".CV.jsCV  .divOfAddIndex div hr"
		);
	var mau;
	duanTitle = [];
	duanTitleCV2 = [];
	if (sttCV == 0) {
		RightCv1Themmucphai();
		mau = window.getComputedStyle(
			document.querySelectorAll(".CV.jsCV .sectionTitleBodyLeftCV h1")[0]
		).color;
		document.querySelectorAll(".CV.jsCV .skillLevel").forEach(function (a, b) {
			let dung = 0;
			a.querySelectorAll("div").forEach(function (a1, b1) {
				if (a1.getAttribute("isend") == "yes" && dung == 0) {
					a1.style.backgroundColor = window.getComputedStyle(
						document.querySelector(".CV.jsCV .headleftCV")
					).backgroundColor;
					dung = 1;
				} else if (dung == 0) {
					a1.style.backgroundColor = window.getComputedStyle(
						document.querySelector(".CV.jsCV .headleftCV")
					).backgroundColor;
				} else if (dung == 1) return;
			});
		});
		titleRightCV1Add.forEach(function (a) {
			a.style.color = mau;
		});
		hrRightCV1Add.forEach(function (a) {
			a.style.borderColor = window.getComputedStyle(
				document.querySelectorAll(".CV.jsCV .sectionTitleBodyLeftCV hr")[0]
			).backgroundColor;
			a.style.backgroundColor = window.getComputedStyle(
				document.querySelectorAll(".CV.jsCV .sectionTitleBodyLeftCV hr")[0]
			).backgroundColor;
		});
		//   kiemtra tilte du an
		document.querySelectorAll(".CV.jsCV .wrapDiv h3").forEach(function (a) {
			duanTitle.push(a);
		});
		LeftCv1Themmuctrai();
	} else {
		RightCv2Themmucphai();
		mau = window.getComputedStyle(
			document.querySelectorAll(".CV2.main .sectionTitleBodyLeftCV h1")[0]
		).color;
		document.querySelectorAll(".CV2.main .skillLevel").forEach(function (a, b) {
			let dung = 0;
			a.querySelectorAll("div").forEach(function (a1, b1) {
				if (a1.getAttribute("isend") == "yes" && dung == 0) {
					a1.style.backgroundColor = window.getComputedStyle(
						document.querySelector(".CV2.jsCV .titleLeftCVsection h3")
					).backgroundColor;
					dung = 1;
				} else if (dung == 0) {
					a1.style.backgroundColor = window.getComputedStyle(
						document.querySelector(".CV2.jsCV .titleLeftCVsection h3")
					).backgroundColor;
				} else if (dung == 1) return;
			});
		});
		titleRightCV2Add.forEach(function (a) {
			a.style.color = mau;
		});
		hrRightCV2Add.forEach(function (a) {
			a.style.borderColor = window.getComputedStyle(
				document.querySelectorAll(".CV2.main .sectionTitleBodyLeftCV hr")[0]
			).backgroundColor;
			a.style.backgroundColor = window.getComputedStyle(
				document.querySelectorAll(".CV2.main .sectionTitleBodyLeftCV hr")[0]
			).backgroundColor;
		});
		// kiem tra title du an
		document.querySelectorAll(".CV2.main .wrapDiv h3").forEach(function (a) {
			duanTitleCV2.push(a);
		});
		LeftCv2Themmuctrai();
	}
	if (sttCV == 0) {
		let titleLeftCV1 = document.querySelectorAll(
			".CV.jsCV .sectionTitleLeftCV1 .titleLeftCVsection h3"
		);
		duanTitle.forEach(function (a) {
			a.style.color = mau;
		});
		titleLeftCV1.forEach(function (a, b, c) {
			a.style.color = window.getComputedStyle(c[0]).color;
		});
	} else {
		let titleLeftCV2 = document.querySelectorAll(
			".CV2.main .titleLeftCVsection h3"
		);
		duanTitleCV2.forEach(function (a) {
			a.style.color = mau;
		});
		titleLeftCV2.forEach(function (a, b, c) {
			a.style.color = window.getComputedStyle(c[0]).color;
		});
	}
}
chinhnenCV1();
chuyenCV();

document.getElementById("download").onclick = function () {
	if (sttCV == 0) {
		let stringClassCV = ".CV";
		download(stringClassCV);
	} else if (sttCV == 1) {
		rootStyle.setProperty("--pseudo-TBLR", "-27px");
		rootStyle.setProperty("--pseudo-degreeB", "42deg");
		rootStyle.setProperty("--pseudo-degreeA", "38deg");
		rootStyle.setProperty("--pseudo-B2", "-30px");
		rootStyle.setProperty("--pseudo-L2", "-28px");

		setTimeout(() => {
			let stringClassCV = ".CV2.main";
			download(stringClassCV);
		}, 50);
		setTimeout(() => {
			rootStyle.setProperty("--pseudo-TBLR", "-26px");
			rootStyle.setProperty("--pseudo-degreeB", "46deg");
			rootStyle.setProperty("--pseudo-degreeA", "47deg");
			rootStyle.setProperty("--pseudo-B2", "-26px");
			rootStyle.setProperty("--pseudo-L2", "-26px");
		}, 100);
	}
};

// ul ol
let tryUOL = 0;
let addlistul = document.getElementById("AddlistUl");
document.getElementById("listEdit").onclick = (e) => {
	if (activeElement != null) {
		if (e.target == addlistul && tryUOL == 0) {
			tryUOL = 1;
			// console.log(activeElement.innerText);
			var string = activeElement.innerText;
			string = string.replaceAll("\n", "</li><li>");
			string = "<ul><li>" + string + "</li></ul>";
			activeElement.innerHTML = string;
			// console.log(string);
			e.target.style.color = "black";
		} else if (e.target == addlistul && tryUOL == 1) {
			tryUOL = 2;
			// console.log(activeElement.innerText);
			var string = activeElement.innerText;
			string = string.replaceAll("\n", "</li><li>");
			string = "<ol><li>" + string + "</li></ol>";
			activeElement.innerHTML = string;
			// console.log(string);
			e.target.style.color = "black";
		} else if (e.target == addlistul && tryUOL == 2) {
			tryUOL = 0;
			// console.log(activeElement.innerText);
			var string = activeElement.innerText;
			string = string.replaceAll("<ol><li>", "<div>");
			string = string.replaceAll("</li></ol>", "</div>");
			string = string.replaceAll("</li><li>", "</div><div>");
			activeElement.innerText = string;
			// console.log(string);
			e.target.style.color = "black";
		}
	}
};
//    CV1
//        title right Color
let titleRightCV1 = document.querySelectorAll(
		".CV.jsCV  .sectionTitleBodyLeftCV h1"
	),
	hrRightCV1 = document.querySelectorAll(
		".CV.jsCV  .sectionTitleBodyLeftCV hr"
	);
// bienmauRightCV1;
RightCv1Themmucphai();
function RightCv1Themmucphai() {
	let titleRightCV1Add = document.querySelectorAll(
			".CV.jsCV .divOfAddIndex div div:nth-child(2)"
		),
		hrRightCV1Add = document.querySelectorAll(
			".CV.jsCV  .divOfAddIndex div hr"
		),
		ButtonDuan = document.querySelector(
			".CV.jsCV .sectionTitleBodyLeftCV #addButton"
		);
	titleRightCV1.forEach(function (a) {
		let nho;
		a.onmouseover = function () {
			// console.log(duanTitle);
			nho = window.getComputedStyle(a).color;
			titleRightCV1.forEach(function (a) {
				a.style.color = "#555";
			});
			hrRightCV1.forEach(function (a) {
				a.style.borderColor = "#555";
				a.style.backgroundColor = "#555";
			});
			if (titleRightCV1Add.length != 0)
				titleRightCV1Add.forEach(function (a) {
					a.style.color = "#555";
				});
			if (hrRightCV1Add.length != 0)
				hrRightCV1Add.forEach(function (a) {
					a.style.borderColor = "#555";
					a.style.backgroundColor = "#555";
				});
			ButtonDuan.style.color = "#555";
			ButtonDuan.style.borderColor = "#555";
			if (duanTitle.length != 0)
				duanTitle.forEach(function (a) {
					a.style.color = "#555";
				});
		};
		a.onmouseleave = function () {
			titleRightCV1.forEach(function (a) {
				a.style.color = nho;
			});
			hrRightCV1.forEach(function (a) {
				a.style.borderColor = nho;
				a.style.backgroundColor = nho;
			});
			if (titleRightCV1Add.length != 0)
				titleRightCV1Add.forEach(function (a) {
					a.style.color = nho;
				});
			if (hrRightCV1Add.length != 0)
				hrRightCV1Add.forEach(function (a) {
					a.style.borderColor = nho;
					a.style.backgroundColor = nho;
				});
			ButtonDuan.style.color = nho;
			ButtonDuan.style.borderColor = nho;
			if (duanTitle.length != 0)
				duanTitle.forEach(function (a) {
					a.style.color = nho;
				});
		};
		a.onclick = function () {
			chunao = 2;
			activeElementKhoa = [...titleRightCV1];
			if (titleRightCV1Add.length != 0)
				titleRightCV1Add.forEach(function (a) {
					activeElementKhoa.push(a);
				});
			hrRightCV1.forEach(function (a) {
				activeElementKhoa.push(a);
			});
			if (hrRightCV1Add.length != 0)
				hrRightCV1Add.forEach(function (a) {
					activeElementKhoa.push(a);
				});
			// console.log(activeElementKhoa);
			tableColor.classList.add("openTableColor");
			tableColor.classList.remove("closeTableColor");
			setTimeout(function () {
				tryTable = 1;
			}, 400);
		};
	});
	titleRightCV1Add.forEach(function (a) {
		let nho;
		a.onmouseover = function () {
			// console.log(duanTitle);
			nho = window.getComputedStyle(a).color;
			titleRightCV1.forEach(function (a) {
				a.style.color = "#555";
			});
			hrRightCV1.forEach(function (a) {
				a.style.borderColor = "#555";
				a.style.backgroundColor = "#555";
			});
			if (titleRightCV1Add.length != 0)
				titleRightCV1Add.forEach(function (a) {
					a.style.color = "#555";
				});
			if (hrRightCV1Add.length != 0)
				hrRightCV1Add.forEach(function (a) {
					a.style.borderColor = "#555";
					a.style.backgroundColor = "#555";
				});
			ButtonDuan.style.color = "#555";
			ButtonDuan.style.borderColor = "#555";
			if (duanTitle.length != 0)
				duanTitle.forEach(function (a) {
					a.style.color = "#555";
				});
		};
		a.onmouseleave = function () {
			titleRightCV1.forEach(function (a) {
				a.style.color = nho;
			});
			hrRightCV1.forEach(function (a) {
				a.style.borderColor = nho;
				a.style.backgroundColor = nho;
			});
			if (titleRightCV1Add.length != 0)
				titleRightCV1Add.forEach(function (a) {
					a.style.color = nho;
				});
			if (hrRightCV1Add.length != 0)
				hrRightCV1Add.forEach(function (a) {
					a.style.borderColor = nho;
					a.style.backgroundColor = nho;
				});
			ButtonDuan.style.color = nho;
			ButtonDuan.style.borderColor = nho;
			if (duanTitle.length != 0)
				duanTitle.forEach(function (a) {
					a.style.color = nho;
				});
		};
		a.onclick = function () {
			chunao = 2;
			activeElementKhoa = [...titleRightCV1];
			if (titleRightCV1Add.length != 0)
				titleRightCV1Add.forEach(function (a) {
					activeElementKhoa.push(a);
				});
			hrRightCV1.forEach(function (a) {
				activeElementKhoa.push(a);
			});
			if (hrRightCV1Add.length != 0)
				hrRightCV1Add.forEach(function (a) {
					activeElementKhoa.push(a);
				});
			// console.log(activeElementKhoa);
			tableColor.classList.add("openTableColor");
			tableColor.classList.remove("closeTableColor");
			setTimeout(function () {
				tryTable = 1;
			}, 400);
		};
	});
}

//                             title left
LeftCv1Themmuctrai();
function LeftCv1Themmuctrai() {
	let titleLeftCV1 = document.querySelectorAll(
		".CV.jsCV .sectionTitleLeftCV1 .titleLeftCVsection h3"
	);
	titleLeftCV1.forEach(function (a) {
		let nho;
		a.onmouseover = function () {
			// console.log(titleLeftCV1);
			nho = window.getComputedStyle(a).color;
			titleLeftCV1.forEach(function (a) {
				a.style.color = "#555";
			});
			document
				.querySelectorAll(".CV.jsCV .nothing>div>div[contenteditable='true']")
				.forEach(function (a) {
					a.style.color = "#555";
				});
			document
				.querySelectorAll(".CV.jsCV .certificate div div:not(:last-child)")
				.forEach(function (a) {
					a.style.color = "#555";
				});
			document
				.querySelectorAll(".CV.jsCV .certificate div div input")
				.forEach(function (a) {
					a.style.color = "#555";
				});
			document.querySelector(
				".CV.jsCV .sectionTitleLeftCV1>div[key='certificate']>div[id='addButton']"
			).style.color = "#555";
			document.querySelector(
				".CV.jsCV .sectionTitleLeftCV1>div[key='certificate']>div[id='addButton']"
			).style.borderColor = "#555";
			document.querySelector(
				".CV.jsCV  .titleLeftCVsection .addSkill"
			).style.color = "#555";
			document.querySelector(
				".CV.jsCV  .titleLeftCVsection .addSkill"
			).style.borderColor = "#555";
			document.querySelector(
				".CV.jsCV .sectionInfo[name='socialNetwork'] div[id='addButton']"
			).style.color = "#555";
			document.querySelector(
				".CV.jsCV .sectionInfo[name='socialNetwork'] div[id='addButton']"
			).style.borderColor = "#555";
		};
		a.onmouseleave = function () {
			titleLeftCV1.forEach(function (a) {
				a.style.color = nho;
			});
			document
				.querySelectorAll(".CV.jsCV .nothing>div>div[contenteditable='true']")
				.forEach(function (a) {
					a.style.color = nho;
				});
			document
				.querySelectorAll(".CV.jsCV .certificate div div:not(:last-child)")
				.forEach(function (a) {
					a.style.color = nho;
				});
			document
				.querySelectorAll(".CV.jsCV .certificate div div input")
				.forEach(function (a) {
					a.style.color = nho;
				});
			document.querySelector(
				".CV.jsCV .sectionTitleLeftCV1>div[key='certificate']>div[id='addButton']"
			).style.color = nho;
			document.querySelector(
				".CV.jsCV .sectionTitleLeftCV1>div[key='certificate']>div[id='addButton']"
			).style.borderColor = nho;
			document.querySelector(
				".CV.jsCV  .titleLeftCVsection .addSkill"
			).style.color = nho;
			document.querySelector(
				".CV.jsCV  .titleLeftCVsection .addSkill"
			).style.borderColor = nho;
			document.querySelector(
				".CV.jsCV .sectionInfo[name='socialNetwork'] div[id='addButton']"
			).style.color = nho;
			document.querySelector(
				".CV.jsCV .sectionInfo[name='socialNetwork'] div[id='addButton']"
			).style.borderColor = nho;
		};
		a.onclick = function () {
			let pushke = [
				...document.querySelectorAll(
					".CV.jsCV .nothing>div>div[contenteditable='true']"
				),
			];
			chunao = 1;
			activeElementKhoa = [...titleLeftCV1];
			pushke.forEach((a) => {
				activeElementKhoa.push(a);
			});
			pushke = [
				...document.querySelectorAll(
					".CV.jsCV .certificate div div:not(:last-child)"
				),
			];
			pushke.forEach((a) => {
				activeElementKhoa.push(a);
			});
			pushke = [
				...document.querySelectorAll(".CV.jsCV .certificate div div input"),
			];
			pushke.forEach((a) => {
				activeElementKhoa.push(a);
			});
			pushke = [
				...document.querySelectorAll(".CV.jsCV .titleLeftCVsection>div>div "),
			];
			pushke.forEach((a) => {
				activeElementKhoa.push(a);
			});
			pushke = [
				...document.querySelectorAll(".CV.jsCV .titleLeftCVsection .addSkill"),
			];
			pushke.forEach((a) => {
				activeElementKhoa.push(a);
			});
			pushke = [
				...document.querySelectorAll(
					".CV.jsCV .sectionInfo[name='socialNetwork'] div[id='addButton']"
				),
			];
			pushke.forEach((a) => {
				activeElementKhoa.push(a);
			});
			// pushke = [...document.querySelectorAll(".CV.jsCV .titleLeftCVsection .editableDiv2")]
			// pushke.forEach((a)=>{
			// 	activeElementKhoa.push(a);
			// })
			// pushke = [...document.querySelectorAll(".CV.jsCV .sectionInfo .editableDiv2")]
			// pushke.forEach((a)=>{
			// 	activeElementKhoa.push(a);
			// })
			// console.log(activeElementKhoa);
			tableColor.classList.add("openTableColor");
			tableColor.classList.remove("closeTableColor");
			setTimeout(function () {
				tryTable = 1;
			}, 400);
		};
	});
}

//   title left bottom
let titleLeftBCV1 = document.querySelectorAll(".CV .sectionInfoTitle");
titleLeftBCV1.forEach(function (a) {
	let nho;
	a.onmouseover = function () {
		nho = window.getComputedStyle(a).color;
		titleLeftBCV1.forEach(function (a) {
			a.style.color = "#555";
		});
	};
	a.onmouseleave = function () {
		titleLeftBCV1.forEach(function (a) {
			a.style.color = nho;
		});
	};
	a.onclick = function () {
		chunao = 1;
		activeElementKhoa = [...titleLeftBCV1];
		// console.log(activeElementKhoa);
		tableColor.classList.add("openTableColor");
		tableColor.classList.remove("closeTableColor");
		setTimeout(function () {
			tryTable = 1;
		}, 400);
	};
});

//   CV2
//        title right Color
let titleRightCV2 = document.querySelectorAll(
	".CV2.main .sectionTitleBodyLeftCV h1"
);
function RightCv2Themmucphai() {
	let titleRightCV2Add = document.querySelectorAll(
			".CV2.jsCV  .divOfAddIndex div div:nth-child(2)"
		),
		ButtonDuan = document.querySelector(
			".CV2.main .sectionTitleBodyLeftCV #addButton"
		);

	titleRightCV2.forEach(function (a) {
		let nho;
		a.onmouseover = function () {
			// console.log(duanTitleCV2);
			nho = window.getComputedStyle(a).color;
			titleRightCV2.forEach(function (a) {
				a.style.color = "#555";
			});
			if (titleRightCV2Add.length != 0)
				titleRightCV2Add.forEach(function (a) {
					a.style.color = "#555";
				});
			ButtonDuan.style.color = "#555";
			ButtonDuan.style.borderColor = "#555";
			if (duanTitleCV2.length != 0)
				duanTitleCV2.forEach(function (a) {
					a.style.color = "#555";
				});
		};
		a.onmouseleave = function () {
			titleRightCV2.forEach(function (a) {
				a.style.color = nho;
			});
			if (titleRightCV2Add.length != 0)
				titleRightCV2Add.forEach(function (a) {
					a.style.color = nho;
				});
			ButtonDuan.style.color = nho;
			ButtonDuan.style.borderColor = nho;
			if (duanTitleCV2.length != 0)
				duanTitleCV2.forEach(function (a) {
					a.style.color = nho;
				});
		};
		a.onclick = function () {
			chunao = 1;
			activeElementKhoa = [...titleRightCV2];
			if (titleRightCV2Add.length != 0)
				titleRightCV2Add.forEach(function (a) {
					activeElementKhoa.push(a);
				});
			// console.log(activeElementKhoa);
			tableColor.classList.add("openTableColor");
			tableColor.classList.remove("closeTableColor");
			setTimeout(function () {
				tryTable = 1;
			}, 400);
		};
	});
	titleRightCV2Add.forEach(function (a) {
		let nho;
		a.onmouseover = function () {
			nho = window.getComputedStyle(a).color;
			titleRightCV2.forEach(function (a) {
				a.style.color = "#555";
			});
			if (titleRightCV2Add.length != 0)
				titleRightCV2Add.forEach(function (a) {
					a.style.color = "#555";
				});
			ButtonDuan.style.color = "#555";
			ButtonDuan.style.borderColor = "#555";
			if (duanTitleCV2.length != 0)
				duanTitleCV2.forEach(function (a) {
					a.style.color = "#555";
				});
		};
		a.onmouseleave = function () {
			titleRightCV2.forEach(function (a) {
				a.style.color = nho;
			});
			if (titleRightCV2Add.length != 0)
				titleRightCV2Add.forEach(function (a) {
					a.style.color = nho;
				});
			ButtonDuan.style.color = nho;
			ButtonDuan.style.borderColor = nho;
			if (duanTitleCV2.length != 0)
				duanTitleCV2.forEach(function (a) {
					a.style.color = nho;
				});
		};
		a.onclick = function () {
			chunao = 1;
			activeElementKhoa = [...titleRightCV2];
			if (titleRightCV2Add.length != 0)
				titleRightCV2Add.forEach(function (a) {
					activeElementKhoa.push(a);
				});
			// console.log(activeElementKhoa);
			tableColor.classList.add("openTableColor");
			tableColor.classList.remove("closeTableColor");
			setTimeout(function () {
				tryTable = 1;
			}, 400);
		};
	});
}
//                             title left
LeftCv2Themmuctrai();
function LeftCv2Themmuctrai() {
	let titleLeftCV2 = document.querySelectorAll(
		".CV2.main .titleLeftCVsection h3"
	);
	titleLeftCV2.forEach(function (a) {
		let nho;
		a.onmouseover = function () {
			nho = window.getComputedStyle(a).color;
			titleLeftCV2.forEach(function (a) {
				a.style.color = "#555";
			});
		};
		a.onmouseleave = function () {
			titleLeftCV2.forEach(function (a) {
				a.style.color = nho;
			});
		};
		a.onclick = function () {
			chunao = 1;
			activeElementKhoa = [...titleLeftCV2];
			// console.log(activeElementKhoa);
			tableColor.classList.add("openTableColor");
			tableColor.classList.remove("closeTableColor");
			setTimeout(function () {
				tryTable = 1;
			}, 400);
		};
	});
}
//   title left bottom
let titleLeftBCV2 = document.querySelectorAll(".CV2.main .sectionInfoTitle");
titleLeftBCV2.forEach(function (a) {
	let nho;
	a.onmouseover = function () {
		nho = window.getComputedStyle(a).color;
		titleLeftBCV2.forEach(function (a) {
			a.style.color = "#555";
		});
	};
	a.onmouseleave = function () {
		titleLeftBCV2.forEach(function (a) {
			a.style.color = nho;
		});
	};
	a.onclick = function () {
		chunao = 1;
		activeElementKhoa = [...titleLeftBCV2];
		// console.log(activeElementKhoa);
		tableColor.classList.add("openTableColor");
		tableColor.classList.remove("closeTableColor");
		setTimeout(function () {
			tryTable = 1;
		}, 400);
	};
});

//                them mau o nen va chu
document.querySelector(".pickr-container.sectionBasicColors").onclick =
	function () {
		rootStyle.setProperty("--leftPcr-", "0");
	};
document.querySelector(".pickr-container.sectionBasicColors2").onclick =
	function () {
		rootStyle.setProperty("--leftPcr-", "300px");
	};

setInterval(function () {
	let heightCV1 = window.getComputedStyle(
		document.querySelector(".jsCV .wrapCanvas")
	).height;
	let heightCV2 = window.getComputedStyle(
		document.querySelectorAll(".jsCV .wrapCanvas")[1]
	).height;
	heightCV1 = parseInt(heightCV1, 10);
	heightCV2 = parseInt(heightCV2, 10);
	var orgHeight = 1122;
	if (sttCV == 0) {
		if (heightCV1 > orgHeight * pageFull + 0.6 * pageFull) {
			orgHeight *= pageFull + 1;
			document
				.querySelectorAll(".body .jsCV .wrapCanvas")
				.forEach(function (a) {
					a.style.minHeight = orgHeight + "px";
				});
			pageFull++;
		}
	} else if (sttCV == 1) {
		if (heightCV2 > orgHeight * pageFull) {
			orgHeight *= pageFull + 1;
			document
				.querySelectorAll(".body .jsCV .wrapCanvas")
				.forEach(function (a) {
					a.style.minHeight = orgHeight + "px";
				});
			pageFull++;
		}
	}
}, 2500);

function playVideo() {
	setTimeout(function () {
		glass.style.display = "none";
		turtorialModal.style.transform = "translate(-120%)";
	}, 0);
	setTimeout(function () {
		document.querySelector("#video video").play();

		// console.log("run");
	}, 1500);
	setTimeout(function () {
		document.querySelector("#video").style.display = "none";
		document.querySelector("#video video").pause();
		document.querySelector("#Modalvideo").style.display = "none";
		// console.log("pause");
		glass.style.display = "block";
		turtorialModal.style.display = "block";
		openTurtorialModal();
	}, 7500);
	sessionStorage.setItem("playVideo", "false");
}
function closeTurtorialModal() {
	glass.addEventListener("click", function () {
		turtorialModal.style.animation = "closeModal 0.5s linear 1";
		setTimeout(function () {
			turtorialModal.style.transform = "translate(-120%)";
			glass.style.display = "none";
		}, 485);
	});
}
function openTurtorialModal() {
	turtorialModal.style.display = "block";
	turtorialModal.style.animation = "openModal 0.5s linear 1";
	glass.style.display = "block";

	setTimeout(function () {
		turtorialModal.style.transform = "translate(0)";
	}, 485);
}
function closeTurtorialModalByButton() {
	turtorialModal.style.animation = "closeModal 0.5s linear 1";
	setTimeout(function () {
		turtorialModal.style.transform = "translate(-120%)";
		glass.style.display = "none";
	}, 485);
}
closeTurtorialModal();
function autoSave() {
	let saveClock;
	if (document.querySelector("#autoSave input").checked === true) {
		saveClock = setInterval(function () {
			save();
		}, 60000);
	} else {
		clearInterval(saveClock);
	}
}
autoSave();
