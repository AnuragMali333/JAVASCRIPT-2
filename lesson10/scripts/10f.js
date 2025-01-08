function isToggled(button) {
      
  if (button.classList.contains('toggled-css')) {
    button.classList.remove('toggled-css')
  }

  else {
    button.classList.add('toggled-css');
  }
}