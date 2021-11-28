let cv = document.querySelector(".CV");
let availableDisplay = true;
let page = 1;
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
// Download
function download(stringClassCV) {
	const element = document.querySelector(stringClassCV); // Khỏi chỉnh lại
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
let projectButton = document.querySelector("#duanTitle");
projectButton.addEventListener("mouseover", function () {
	document.querySelector("#duan + #addButton").style.display = "block";
});
projectButton.addEventListener("mouseout", function () {
	document.querySelector("#duan + #addButton").style.display = "none";
});
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
	project.setAttribute("contenteditable", "true");
	project.style.width = "98%";
	project.style.height = "fit-content";
	project.style.border = "1px solid #F8EDEB";
	project.style.margin = "5px 10px 10px 10px";
	project.style.padding = "10px";
	project.style.fontSize = "15px";
	project.style.color = "black";
	project.setAttribute("class", "test");
	project.setAttribute("spellcheck", "false");

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
	discription.setAttribute("class", "test");
	discription.setAttribute("spellcheck", "false");

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
		a.style.border = "none";
	});
}

// Add break
let constWidth = 800;
let constHeight = 1111;
let scale = 210 / 297;
setInterval(() => {
	console.log(cv.offsetWidth, cv.offsetHeight, page);
	if (
		cv.offsetWidth / cv.offsetHeight <= constWidth / (constHeight * page) &&
		cv.offsetHeight >= constWidth * page
	) {
		// console.log((cv.offsetWidth * constHeight) / constWidth) * page;
		ruler = document.createElement("p");
		ruler.innerHTML = `----------------------------------- Trang ${page} -----------------------------------`;
		ruler.style.position = "absolute";
		ruler.style.top = `${
			((1 * cv.offsetWidth * constHeight) / constWidth) * page
		}px`;
		ruler.style.left = "-50%";
		ruler.style.zIndex = "99999";
		cv.appendChild(ruler);
		page++;
	}
}, 1000);

//SETTING
// align
let activeElement = document.getElementById("socialNetwork");
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
		activeElement.getAttribute("class") !== "" &&
		activeElement.getAttribute("class") !== null
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
let skillCount = 0;
let skill = document.querySelectorAll('div[name="kiNang"]')[parseInt(sttCV)];
let skillButton = document.querySelector("#addSkill");
let nothing = document.querySelector("#nothing");
skill.addEventListener("mouseover", function () {
	skillButton.style.display = "block";
});
skill.addEventListener("mouseout", function () {
	skillButton.style.display = "none";
});
function addSkill() {
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
	skillWrap.style.position = "relative";
	skillWrap.style.margin = "2px";
	skillWrap.setAttribute("bordercolor", "white");
	skillLevel.addEventListener("click", function (e) {
		if (e.target.hasAttribute("index") === true) {
			index = parseInt(e.target.getAttribute("index"));

			divParent = e.target.parentElement;
			arrayLevel = divParent.childNodes;
			for (let i = 0; i <= 9; i++) {
				if (i <= index && arrayLevel[i].getAttribute("index") != null) {
					arrayLevel[i].style.backgroundColor = window.getComputedStyle(
						document.querySelectorAll(".headleftCV")[0]
					).backgroundColor;
				} else if (arrayLevel[i].getAttribute("index") != null) {
					arrayLevel[i].style.backgroundColor = "white";
				}
			}
		}
	});
	skillName.addEventListener("click", function (e) {
		if (e.target.innerHTML == "") {
			e.target.innerHTML = "Tên kỹ năng";
			e.target.style.color = "grey";
		} else if (e.target.innerHTML === "Tên kỹ năng") {
			e.target.innerHTML = "";
			e.target.style.color = "white";
		}
		skillName.addEventListener("focusout", function (e) {
			if (e.target.innerHTML == "") {
				e.target.innerHTML = "Tên kỹ năng";
				e.target.style.color = "grey";
			}
		});
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
		level.style.cursor = "pointer";
		skillLevel.appendChild(level);
	}
}
// ADD SOCIAL NETWORK
let socialNetwork = document.querySelector("#socialNetwork");
socialNetwork.addEventListener("mouseover", function () {
	document.querySelector("#socialNetwork #addButton").style.display = "block";
});
socialNetwork.addEventListener("mouseout", function () {
	document.querySelector("#socialNetwork #addButton").style.display = "none";
});
function addSocialNetwork() {
	let wrapDiv = document.createElement("div");
	let icon = document.createElement("div");
	let socialNetworkLink = document.createElement("div");

	wrapDiv.style.display = "flex";
	deleteButtonFunction(wrapDiv);
	wrapDiv.style.marginTop = "10px";
	wrapDiv.style.position = "relative";
	wrapDiv.style.marginLeft = "-15%";
	icon.style.width = "27%";
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
	socialNetworkLink.style.width = "70%";
	document.querySelectorAll(".mangxahoi")[parseInt(sttCV)].appendChild(wrapDiv);
	wrapDiv.appendChild(icon);
	wrapDiv.appendChild(socialNetworkLink);
}
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
			activeElement.style.color = "white";

			switch (value) {
				case "Facebook":
				case "facebook":
					activeElement.innerHTML = `<i class="fab fa-facebook"><i>`;
					activeElement.style.fontSize = "20px";
					break;
				case "Instagram":
				case "instagram":
					activeElement.innerHTML = `<i class="fab fa-instagram"></i>`;
					activeElement.style.fontSize = "20px";
					break;
				case "Github":
				case "github":
					activeElement.innerHTML = `<i class="fab fa-github"></i>`;
					activeElement.style.fontSize = "20px";
					break;
				case "Twitter":
				case "twitter":
					activeElement.innerHTML = `<i class="fab fa-twitter"></i>`;
					activeElement.style.fontSize = "20px";
					break;
				case "Linkedin":
				case "linkedin":
					activeElement.innerHTML = `<i class="fab fa-linkedin-in"></i>`;
					activeElement.style.fontSize = "20px";
					break;
				case "Youtube":
				case "youtube":
					activeElement.innerHTML = `<i class="fab fa-youtube"></i>`;
					activeElement.style.fontSize = "20px";
					break;
			}
		}
	});
console.log(document.querySelectorAll(".thongtinkhac")[parseInt(sttCV)]);
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
	titleAI.style.border = "1px solid #F8EDEB";
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
	detail.style.border = "1px solid #F8EDEB";
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
	wrapDiv.appendChild(titleAI);
	wrapDiv.appendChild(detail);
	wrapDiv.appendChild(ruler);
	deleteButtonFunction(wrapDiv);
}
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
function addIndex() {
	let bigDiv = document.querySelectorAll(".divOfAddIndex")[parseInt(sttCV)];
	let wrapDiv = document.createElement("div");
	let title = document.createElement("div");
	let titleDiscription = document.createElement("div");
	let ruler = document.createElement("hr");
	wrapDiv.style.marginBottom = "30px";
	title.setAttribute("contenteditable", true);
	title.style.padding = "4px";
	title.style.fontSize = "180%";
	title.style.fontWeight = "bold";
	title.style.textTransform = "uppercase";
	title.style.width = "95%";
	title.style.color = "grey";
	title.innerHTML = "TÊN MỤC";
	title.setAttribute("spellcheck", "false");

	ruler.style.color = "black";
	ruler.style.borderColor = "black";
	ruler.style.backgroundColor = "black";
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
}
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

// Add certificate
function getOffset(el) {
	const rect = el.getBoundingClientRect();
	console.log(
		"top = " + rect.top,
		"left = " + rect.left,
		"right = " + rect.right,
		"bottom = " + rect.bottom
	);
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
	wrapDiv.style.marginTop = "10px";
	wrapDiv.style.marginBottom = "10px";
	wrapDiv.style.border = "1px solid transparent";
	wrapDiv.setAttribute("borderColor", "white");
	certificateName.contentEditable = "true";
	certificateName.style.width = "90%";
	certificateName.style.color = "grey";
	certificateName.spellcheck = "false";
	certificateName.style.padding = "5px";
	certificateName.setAttribute("spellcheck", "false");
	certificateName.innerHTML = "Tên chứng chỉ";

	labelFrom.innerHTML = "Từ";
	labelFrom.style.color = "grey";
	labelFrom.style.marginRight = "10px";
	labelFrom.style.width = "30px";
	fromWrapper.style.alignItems = "center";
	fromWrapper.style.justifyContent = "center";
	fromWrapper.style.marginBottom = "5px";

	fromDate.type = "date";
	fromDate.style.backgroundColor = "transparent";
	fromDate.style.color = "white";
	fromDate.style.padding = "5px";
	toWrapper.style.alignItems = "center";
	toWrapper.style.justifyContent = "center";
	toWrapper.style.marginLeft = "1px";
	toWrapper.setAttribute("bordercolor", "white");

	labelTo.innerHTML = "Đến";
	labelTo.style.color = "grey";
	labelTo.style.marginRight = "10px";
	toDate.type = "date";
	toDate.style.backgroundColor = "transparent";
	toDate.style.color = "white";
	toDate.style.padding = "5px";
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
getOffset(document.querySelectorAll(".certificate")[parseInt(sttCV)]);
console.log(document.querySelectorAll(".certificate")[parseInt(sttCV)]);

let CVbackground = document.querySelector("#backgroundOfCV");
function getBackground(e) {
	document
		.querySelector(".backgroundContainer")
		.addEventListener("click", function (e) {
			backgroundID = e.target.getAttribute("id");
			switch (backgroundID) {
				case "1":
					// CVbackground.src = "https://files.fm/thumb_show.php?i=truaf92w7";
					CVbackground.src =
						"/Images/pawel-czerwinski-Qiy4hr18aGs-unsplash.jpg";
					break;
				case "2":
					CVbackground.src = "https://imgur.com/CE3gdP0";
					break;
				case "3":
					CVbackground.src = "https://files.fm/thumb_show.php?i=ntee6brya";
					break;
				case "4":
					CVbackground.src = "https://files.fm/thumb_show.php?i=x5nh8qeah";
					break;
				default:
					break;
			}
			console.log(backgroundID);
			console.log(CVbackground);
		});
}
getBackground();
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
	console.log(src);
	avatarCVs[sttCV].src = src;
	if (sttCV == 1) {
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
	console.log(this.value);
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
		document.querySelectorAll('span[key="skill"]')[parseInt(sttCV)].outerHTML
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
	localStorage.setItem(
		"header left color",
		window.getComputedStyle(document.querySelector(".headleftCV"))
			.backgroundColor
	);
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
	localStorage.setItem("lock load", "false");
	document.querySelector("#save i").style.animation = "saved 1s linear 1";
	setTimeout(function () {
		document.querySelector("#save i").style.animation = "none";
	}, 1000);
}
console.log(document.querySelectorAll(".headleftCV"));
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
		document.querySelectorAll('span[key="skill"]')[parseInt(sttCV)].outerHTML =
			localStorage.getItem("skill");
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
		document.querySelector("#load i").style.animation = "load 1s linear 1";
		setTimeout(function () {
			document.querySelector("#load i").style.animation = "none";
		}, 1000);
	} else {
		document.getElementById("load").style.cursor = "not-allowed";
	}
}
// setInterval(function () {
// 	console.log(activeElement)
// 	console.log(activeElementContainNull)
// },1000)

// Code luu du lieu save lai de xem dung xóa nha

// function load() {
// 	saveValue = localStorage.getItem("saveValue");
// 	document.getElementById("saveField").value = saveValue;
// }
// function save() {
// 	saveValue = document.getElementById("saveField").value;
// 	localStorage.setItem("saveValue", saveValue);
// }
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
						a.style.backgroundColor = val.getAttribute("value");
					});
					document
						.querySelectorAll(".CV2 .titleLeftCVsection h3")
						.forEach(function (a) {
							a.style.backgroundColor = val.getAttribute("value");
						});
				}
			}
		});
	};
}

function chuyenCV() {
	document.getElementById("CVchung").onclick = function () {
		sttCV = 0;
		setTimeout(function () {
			kiemtraSTTCV();
		}, 100);
	};
	document.getElementById("CVKTCN").onclick = function () {
		sttCV = 1;
		setTimeout(function () {
			kiemtraSTTCV();
		}, 100);
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
		// Bỏ hàm vào đây
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
let tryUL = 0,
	tryOL = 0;
document.getElementById("AddlistUl").onclick = () => {
	var stringUOL = activeElement.innerHTML;
	var stringUOL2 = stringUOL.replace("div", "li");
	console.log(stringUOL2);
	activeElement.innerHTML = stringUOL2;
};
document.getElementById("AddlistOl").onclick = () => {
	var stringUOL = activeElement.innerHTML;
	var stringUOL2 = stringUOL.replace("div", "lo");
	console.log(stringUOL2);
	activeElement.innerHTML = stringUOL2;
};
