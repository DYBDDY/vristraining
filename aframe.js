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


// AFRAME.registerComponent('thumbstick-logging',{
//   init: function () {
//     this.el.addEventListener('thumbstickmoved', this.logThumbstick);
//   },
//   logThumbstick: function (evt) {
//     if (evt.detail.y > 0.95) { console.log("DOWN"); }
//     if (evt.detail.y < -0.95) { console.log("UP"); }
//     if (evt.detail.x < -0.95) { console.log("LEFT"); }
//     if (evt.detail.x > 0.95) { console.log("RIGHT"); }
//   }
// });


AFRAME.registerComponent('thumbstick-click', {
  init: function () {
    this.el.addEventListener('triggerdown', this.handleTriggerDown.bind(this));
  },

  handleTriggerDown: function (evt) {
    var camera = document.querySelector('a-camera');
    var cursor = document.querySelector('a-cursor');

    var intersection = cursor.components.raycaster.getIntersection(this.el);

    if (intersection) {
      this.el.emit('click');
    }
  }  
});
