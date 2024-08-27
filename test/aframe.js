AFRAME.registerComponent('toggle-panel', {
  init: function () {
    var button = this.el;
    var panel = document.querySelector('#html-panel');
    // var panelContent = document.querySelector('#panel-content');

    button.addEventListener('click', function () {
      console.log("Button clicked");
      var isVisible = panel.getAttribute('visible') === true;

      if (isVisible) {
        panel.setAttribute('visible', false);
        // panelContent.style.display = 'none';
      } else {
        panel.setAttribute('visible', true);
        // panelContent.style.display = 'block';
      }
    });
  }
});