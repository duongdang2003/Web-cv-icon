var cv = document.querySelector(".CV");
console.log(parseInt(cv.offsetWidth*(254/300)), parseInt(cv.offsetHeight*(254/300)));
cvWidth = parseInt(cv.offsetWidth*(254/300));
cvHeight = parseInt(cv.offsetHeight*(254/300));
function download(){
    const element = document.querySelector(".CV");
    var opt = {
        margin:       1,
        filename:     'CV.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, width: 2300, height: 1500},
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
    html2pdf().set(opt).from(element).save();
}