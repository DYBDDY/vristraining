AFRAME.registerComponent('toggle-panel', {
  init: function () {
    var button = this.el;
    var panel = document.querySelector('#html-panel');

    button.addEventListener('click', function () {
      console.log("Button clicked");
      var isVisible = panel.getAttribute('visible') === true;

      if (isVisible) {
        panel.setAttribute('visible', false);
      } else {
        panel.setAttribute('visible', true);
      }
    });
  }
});


