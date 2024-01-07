document.addEventListener('DOMContentLoaded', function () {
    var colorPicker = document.getElementById('color-picker');
    var selectedColor = document.getElementById('selected-color');
    var colorValue = document.getElementById('color-value');
  
    colorPicker.addEventListener('input', function () {
      var color = colorPicker.value;
      selectedColor.style.color = color;
      colorValue.textContent = color;
  
      hideColorPickerPopup();
    });
  
    colorValue.addEventListener('click', function () {
      var color = colorValue.textContent;
      copyToClipboard(color);
      showCopiedMessage(color);
    });
  
    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).catch(function (err) {
        console.error('Unable to copy color', err);
      });
    }
  
    function showCopiedMessage(color) {
      var popup = document.createElement('div');
      popup.textContent = 'Color copied!';
      popup.classList.add('copied-popup');
      popup.style.backgroundColor = color;
      document.body.appendChild(popup);
  
      setTimeout(function () {
        document.body.removeChild(popup);
      }, 1000);
    }
  
  });
  