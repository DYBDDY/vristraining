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


AFRAME.registerComponent('thumbstick-movement', {
  init: function () {
    this.el.addEventListener('thumbstickmoved', this.handleThumbstick);
  },
  
  handleThumbstick: function (evt) {
    const speed = 0.1; 
    
    if (evt.detail.y > 0.95) { 
      // 向後移動
      this.el.object3D.position.x -= speed;
    }
    if (evt.detail.y < -0.95) {
      // 向前移動 
      this.el.object3D.position.x += speed;  
    }
  }
});