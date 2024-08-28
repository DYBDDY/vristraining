AFRAME.registerComponent("toggle-panel", {
  init: function () {
    var button = this.el;
    var panel = document.querySelector("#html-panel");

    button.addEventListener("click", function () {
      console.log("Button clicked");
      var isVisible = panel.getAttribute("visible") === true;

      if (isVisible) {
        panel.setAttribute("visible", false);
      } else {
        panel.setAttribute("visible", true);
      }
    });
  },
});

AFRAME.registerComponent("thumbstick-moved", {
  schema: {
    distance: { type: "number", default: 0.1 },
  },
  init: function () {
    var self = this;
    this.el.addEventListener("thumbstickmoved", function (evt) {
      var vectors = self.boxEl.getAttribute("position");
      if (evt.detail.y > 0.95) {
        console.log("Down");
        self.boxEl.setAttribute("position", {
          x: vectors.x,
          y: vectors.y - self.data.distance,
          z: vectors.z,
        });
      }

      if (evt.detail.x < -0.95) {
        console.log("UP");
        self.boxEl.setAttribute("position", {
          x: vectors.x,
          y: vectors.y + self.data.distance,
          z: vectors.z,
        });
      }

      if (evt.detail.x < -0.95) {
        console.log("LEFT");
        self.boxEl.setAttribute("position", {
          x: vectors.x - self.data.distance,
          y: vectors.y ,
          z: vectors.z,
        });
      }

      if (evt.detail.x > -0.95) {
        console.log("RIGHT");
        self.boxEl.setAttribute("position", {
          x: vectors.x + self.data.distance,
          y: vectors.y ,
          z: vectors.z,
        });
      }
    });
  },
  update:function(){
    this.boxEl = this.el.sceneEl.querySelector("#you")
  }
});
