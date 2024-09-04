//按鈕
function setupButtonListener(button, panel) {
  button.addEventListener("click", function () {
    console.log("Button clicked");
    var isVisible = panel.getAttribute("visible") === true;
    // var size = computer.getAttribute("scale") === "2.5,2.5,2.5";
    if (isVisible) {
      panel.setAttribute("visible", false);
    } else {
      panel.setAttribute("visible", true);
    }
    // computer.object3D.scale.set(3, 3, 3);
    // console.log("sizechanged");
  });
}

AFRAME.registerComponent("toggle-panel", {
  init: function () {
    var button = this.el;
    var panel = document.querySelector("#html-panel1");
    // var computer = document.querySelector("#officecomputermodel1");
    var you = document.querySelector("#you");
    setupButtonListener(button, panel);
  },
});

//電腦桌
AFRAME.registerComponent("computerdesk", {
  init: function () {
    var computer = this.el;
    computer.addEventListener("mouseenter", function () {
      computer.object3D.scale.set(3, 3, 3);
      console.log("size changed to 3, 3, 3");
    });

    computer.addEventListener("mouseleave", function () {
      computer.object3D.scale.set(2.5, 2.5, 2.5);
      console.log("size changed to 2.5, 2.5, 2.5");
    });
  },
});

//印表機
AFRAME.registerComponent("printer", {
  init: function () {
    var printer = this.el;
    var panel = document.querySelector("#html-panel2");
    printer.addEventListener("mouseenter", function () {
      printer.object3D.scale.set(2.1, 2.1, 2.1);
      console.log("size changed to 3, 3, 3");
    });

    printer.addEventListener("mouseleave", function () {
      printer.object3D.scale.set(1.759, 1.759, 1.759);
      console.log("size changed to 1.759 1.759 1.759");
    });
    printer.addEventListener("click", function () {
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        console.log("printer hide")
      } else {
        panel.setAttribute("visible", true);
        console.log("printer show")
      }
    });
  },
});

//印表機
AFRAME.registerComponent("passwordnote", {
  init: function () {
    var passwordnote = this.el;
    var panel = document.querySelector("#html-panel3");
    passwordnote.addEventListener("mouseenter", function () {
      passwordnote.object3D.scale.set(1, 1, 1);
    });

    passwordnote.addEventListener("mouseleave", function () {
      passwordnote.object3D.scale.set(0.494 ,0.494 ,0.494);
    });
    passwordnote.addEventListener("click", function () {
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        console.log("printer hide")
      } else {
        panel.setAttribute("visible", true);
        console.log("printer show")
      }
    });
  },
});

//螢幕畫面
AFRAME.registerComponent("windows", {
  init: function () {
    var windows = this.el
    var panel = document.querySelector("#html-panel4");
    windows.addEventListener("mouseenter", function () {
      windows.object3D.position.set(0.100, 0.954, -2.146);
      windows.object3D.scale.set(0.492, 0.541, 0.477);
      console.log("size changed to 3, 3, 3");
    });

    windows.addEventListener("mouseleave", function () {
      windows.object3D.position.set(0.100 ,0.823, -2.378);
      windows.object3D.scale.set(0.265 ,0.291, 0.257);
    });

    windows.addEventListener("click", function () {
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        console.log("printer hide")
      } else {
        panel.setAttribute("visible", true);
        console.log("printer show")
      }
    });
  },
});


// 移動
AFRAME.registerComponent("thumbstick-logging-move", {
  init: function () {
    this.el.addEventListener("thumbstickmoved", this.logThumbstick.bind(this));

    // Initialize direction
    this.direction = { x: 0, y: 0 };
  },

  logThumbstick: function (evt) {
    // Update direction based on thumbstick position
    this.direction.x = evt.detail.x;
    this.direction.y = evt.detail.y;
  },

  tick: function () {
    var you = document.querySelector("#rig");
    var moveSpeed = 0.01;
    var worldPosition = new THREE.Vector3();

    // Check thumbstick direction and move accordingly
    if (this.direction.y > 0.95) {
      you.object3D.position.z += moveSpeed;
      console.log("DOWN");
      console.log(you.object3D.getWorldPosition(worldPosition));
    } else if (this.direction.y < -0.95) {
      you.object3D.position.z -= moveSpeed;
      console.log("UP");
    }

    if (this.direction.x < -0.95) {
      you.object3D.position.x -= moveSpeed;
      console.log("LEFT");
    } else if (this.direction.x > 0.95) {
      you.object3D.position.x += moveSpeed;
      console.log("RIGHT");
    }
  },
});

// 轉動
AFRAME.registerComponent("thumbstick-logging-look", {
  init: function () {
    this.el.addEventListener("thumbstickmoved", this.logThumbstick.bind(this));

    // Initialize direction
    this.direction = { x: 0, y: 0 };
  },

  logThumbstick: function (evt) {
    // Update direction based on thumbstick position
    this.direction.x = evt.detail.x;
    this.direction.y = evt.detail.y;
  },

  tick: function () {
    var you = document.querySelector("#rig");
    var rotate = 0.01;

    // Check thumbstick direction and move accordingly
    if (this.direction.y > 0.95) {
      you.object3D.rotation.x += rotate;
      console.log("look DOWN");
    }
    if (this.direction.y < -0.95) {
      you.object3D.rotation.x -= rotate;
      console.log("look UP");
    }

    if (this.direction.x < -0.95) {
      you.object3D.rotation.y += rotate;
      console.log("look LEFT");
    }
    if (this.direction.x > 0.95) {
      you.object3D.rotation.y -= rotate;
      console.log("look RIGHT");
    }
  },
});
