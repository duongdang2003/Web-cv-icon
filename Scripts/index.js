var cv = document.querySelector(".CV");
function download(){
    const element = document.querySelector(".CV");
    var opt = {
        margin:       1,
        filename:     'CV.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 1, width: 2580},
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
    html2pdf().set(opt).from(element).save();
}
//                                phan download CV 👆

document.getElementById("files").onchange = function () {
  var reader = new FileReader();

  reader.onload = function (e) {
      // get loaded data and render thumbnail.
      document.getElementById("image").src = e.target.result;
  };

  // read the image file as a data URL.
  reader.readAsDataURL(this.files[0]);
};

document.getElementById("ava").onclick = function () {
  document.getElementById("OCModal").classList.add("OpenModal");
}
document.getElementById("js-closeModalAva").onclick = function () {
  document.getElementById("OCModal").classList.remove("OpenModal");
}
document.getElementById("opaModal").onclick = function () {
  document.getElementById("OCModal").classList.remove("OpenModal");
}
