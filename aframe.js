// AFRAME.registerComponent("toggle-panel", {
//   init: function () {
//     var button = this.el;
//     var panel = document.querySelector("#html-panel");
//     var you = document.querySelector('#you');

//     button.addEventListener("click", function () {
//       console.log("Button clicked");
//       console.log(you)
//       // you.setAttribute('position', {x: 1, y: 2, z: 3});
//       you.object3D.position.set(1, 2, 3)
//       var isVisible = panel.getAttribute("visible") === true;

//       if (isVisible) {
//         panel.setAttribute("visible", false);
//       } else {
//         panel.setAttribute("visible", true);
//       }
//     });
//   },
// });

function setupButtonListener(button, panel, you) {
  button.addEventListener("click", function () {
    console.log("Button clicked");
    var isVisible = panel.getAttribute("visible") === true;
    if (isVisible) {
      panel.setAttribute("visible", false);
    } else {
      panel.setAttribute("visible", true);
    }
  });
}

AFRAME.registerComponent("toggle-panel", {
  init: function () {
    var button = this.el;
    var panel = document.querySelector("#html-panel");
    // var you = document.querySelector("#you");
    setupButtonListener(button, panel);
  },
});



AFRAME.registerComponent("thumbstick-logging", {
  init: function () {
    this.el.addEventListener("thumbstickmoved", this.logThumbstick);
  },

  logThumbstick: function (evt) {
    var you = document.querySelector("#rig");
    if (evt.detail.y > 0.95) {
      // you.object3D.position.x += 1;
      you.object3D.position.z += 0.01;
      console.log("DOWN");
      // you.object3D.position.set(1, 2, 3);
    }
    if (evt.detail.y < -0.95) {
      you.object3D.position.z -= 0.01;
      console.log("UP");
    }
    if (evt.detail.x < -0.95) {
      you.object3D.position.x -= 0.01;
      console.log("LEFT");
    }
    if (evt.detail.x > 0.95) {
      you.object3D.position.x += 0.01;
      console.log("RIGHT");
    }
  },
});