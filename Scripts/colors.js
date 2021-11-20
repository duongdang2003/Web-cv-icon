var rootStyle = document.documentElement.style;
// Simple example, see optional options for more configuration.
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
      rootStyle.setProperty('--pseudo-color', color.toRGBA().toString());
    })
  }
})