var rootStyle = document.documentElement.style;
const pickr = Pickr.create({
  el: '.color-picker',
  theme: 'classic', // or 'monolith', or 'nano'
  // default: '#ffffff',

  swatches: [
      '#333333',
      'rgba(244, 67, 54, 1)',
      'rgba(233, 30, 99, 0.95)',
      'rgba(156, 39, 176, 0.9)',
      'rgba(103, 58, 183, 0.85)',
      'rgba(63, 81, 181, 0.8)',
      'rgba(33, 150, 243, 0.75)',
      'rgba(3, 169, 244, 0.7)',
      'rgba(0, 188, 212, 0.7)',
      'rgba(0, 150, 136, 0.75)',
      'rgba(76, 175, 80, 0.8)',
      'rgba(139, 195, 74, 0.85)',
      'rgba(205, 220, 57, 0.9)',
      'rgba(255, 235, 59, 0.95)',
      'rgba(255, 193, 7, 1)'
  ],

  components: {

      // Main components
      preview: true,
      opacity: true,
      hue: true,

      // Input / output Options
      interaction: {
          hex: true,
          rgba: true,
          input: true,
      }
  }
});
pickr.on('change', (color, source, instance) => {
  dynamicColor = color.toRGBA().toString();
  activeElement.style.color =color.toRGBA().toString();
  console.log(dynamicColor)
  if (chunao==0){
    activeElementKhoa.style.color = color.toRGBA().toString();
  } else if (chunao==1){
    activeElementKhoa.forEach(function (a){
      a.style.color = color.toRGBA().toString();
    })
  } else {
    activeElementKhoa.forEach(function (a,b,c){
      a.style.color = color.toRGBA().toString();
      if (b>=c.length/2){
        a.style.backgroundColor = color.toRGBA().toString();
        a.style.borderColor = color.toRGBA().toString();
      }
    })
  }
})

const pickr2 = Pickr.create({
  el: '.color-picker2',
  theme: 'classic', // or 'monolith', or 'nano'
  // default: '#ffffff',

  swatches: [
      '#333333',
      'rgba(244, 67, 54, 1)',
      'rgba(233, 30, 99, 0.95)',
      'rgba(156, 39, 176, 0.9)',
      'rgba(103, 58, 183, 0.85)',
      'rgba(63, 81, 181, 0.8)',
      'rgba(33, 150, 243, 0.75)',
      'rgba(3, 169, 244, 0.7)',
      'rgba(0, 188, 212, 0.7)',
      'rgba(0, 150, 136, 0.75)',
      'rgba(76, 175, 80, 0.8)',
      'rgba(139, 195, 74, 0.85)',
      'rgba(205, 220, 57, 0.9)',
      'rgba(255, 235, 59, 0.95)',
      'rgba(255, 193, 7, 1)'
  ],

  components: {

      // Main components
      preview: true,
      opacity: true,
      hue: true,

      // Input / output Options
      interaction: {
          hex: true,
          rgba: true,
          input: true,
      }
  }
});
pickr2.on('change', (color, source, instance) => {
  if (sttCV ==0){
    if (trynenphai ==1){
      document.querySelectorAll(".rightCV").forEach(function(a){
        a.style.backgroundColor = color.toRGBA().toString();
      })
    } else if (trynentrai ==1 ){
      document.querySelectorAll(".leftCV").forEach(function(a){
        a.style.backgroundColor = color.toRGBA().toString();
      })
    } else if (tryneninfo==1){
      document.querySelectorAll(".sectionInfoTitle").forEach(function(a){
        a.style.backgroundColor = color.toRGBA().toString();
      })
    } else if (trytitle==1){
      document.querySelectorAll(".headleftCV").forEach(function(a){
        a.style.backgroundColor = color.toRGBA().toString();
      })
      document.querySelectorAll(".titleLeftCVsection hr").forEach(function(a){
        a.style.borderColor = color.toRGBA().toString();
        a.style.backgroundColor = color.toRGBA().toString();
        // a.style.border ="2px "
        rootStyle.setProperty('--pseudo-color', color.toRGBA().toString());
      })
    }
    } else if (sttCV ==1){

      if (trynenphai ==1){
        document.querySelectorAll(".rightCV").forEach(function(a){
          rootStyle.setProperty("--color-rightCV", color.toRGBA().toString());
        })
      } else if (trynentrai ==1 ){
        document.querySelectorAll(".leftCV").forEach(function(a){
          rootStyle.setProperty("--color-leftCV", color.toRGBA().toString());
        })
      } else if (tryneninfo==1){

				document.querySelectorAll(".CV2 hr").forEach(function (a){
					a.style.borderColor = color.toRGBA().toString();
					a.style.backgroundColor = color.toRGBA().toString();
          rootStyle.setProperty("--peusdoColor-leftCVboder", color.toRGBA().toString());
				})
        document.querySelector(".CV2 .ava").style.borderColor = color.toRGBA().toString();
        document.querySelector(".miniCV2 .Miniava").style.borderColor = color.toRGBA().toString();
				document.querySelectorAll(".miniCV2 .titleLeftCVsection h3").forEach(function (a){
					a.style.borderLeftColor = color.toRGBA().toString();
				})
        document.querySelectorAll(".CV2 .titleLeftCVsection h3").forEach(function (a){
					a.style.borderLeftColor = color.toRGBA().toString();
				})
				document.querySelector(".miniCV2 .thongTinCV2").style.borderColor = color.toRGBA().toString();
				document.querySelectorAll(".thongTinCV2")[1].style.borderColor = color.toRGBA().toString();
				document.querySelectorAll(".miniCV2 .dotLeftCV2").forEach(function (a){
					a.style.backgroundColor = color.toRGBA().toString();
				})
        document.querySelectorAll(".CV2 .dotLeftCV2").forEach(function (a){
					a.style.backgroundColor = color.toRGBA().toString();
				})

      } else if (trytitle==1){
        document.querySelectorAll(".headleftCV").forEach(function(a){
          a.style.backgroundColor = color.toRGBA().toString();
        })
			document.querySelectorAll(".CV2 .titleLeftCVsection h3").forEach(function (a){
				a.style.backgroundColor = color.toRGBA().toString();
			})
      }

  }
})