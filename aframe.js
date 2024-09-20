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
        console.log("printer hide");
      } else {
        panel.setAttribute("visible", true);
        console.log("printer show");
      }
    });
  },
});

//便利貼
AFRAME.registerComponent("passwordnote", {
  init: function () {
    var passwordnote = this.el;
    var panel = document.querySelector("#html-panel3");
    passwordnote.addEventListener("mouseenter", function () {
      passwordnote.object3D.scale.set(1, 1, 1);
    });

    passwordnote.addEventListener("mouseleave", function () {
      passwordnote.object3D.scale.set(0.494, 0.494, 0.494);
    });
    passwordnote.addEventListener("click", function () {
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        console.log("printer hide");
      } else {
        panel.setAttribute("visible", true);
        console.log("printer show");
      }
    });
  },
});

//螢幕畫面
AFRAME.registerComponent("windows", {
  init: function () {
    var windows = this.el;
    var panel = document.querySelector("#html-panel4");
    var unlockdevicesound = document.querySelector("#udsound");
    windows.addEventListener("mouseenter", function () {
      windows.object3D.position.set(0.1, 0.954, -2.146);
      windows.object3D.scale.set(0.492, 0.541, 0.477);
      console.log("size changed to 3, 3, 3");
    });

    windows.addEventListener("mouseleave", function () {
      windows.object3D.position.set(0.1, 0.823, -2.378);
      windows.object3D.scale.set(0.265, 0.291, 0.257);
    });

    windows.addEventListener("click", function () {
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        // console.log(typeof(unlockdevicesound))
        unlockdevicesound.components.sound.stopSound();
        console.log("printer hide");
        
      } else {
        panel.setAttribute("visible", true);
        unlockdevicesound.components.sound.playSound();
        console.log("printer show");
      }
    });

    // unlockdevicesound.addEventListener;
  },
});

//詐騙電話
AFRAME.registerComponent("unkownphonecall", {
  init: function () {
    var phone = this.el;
    var panel = document.querySelector("#html-panel5");
    var phonesound = document.querySelector("#phsound");
    phone.addEventListener("mouseenter", function () {
      phone.object3D.scale.set(0.5, 0.5, 0.5);
      phone.object3D.position.set(1.089, 0.494, -2.073);
      phonesound.components.sound.playSound();
    });

    phone.addEventListener("mouseleave", function () {
      phone.object3D.position.set(1.089, 0.561, -2.073);
      phone.object3D.scale.set(0.265, 0.291 ,0.257);
           phonesound.components.sound.stopSound();
    });

    phone.addEventListener("click", function () {
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        // console.log(typeof(unlockdevicesound))
        // unlockdevicesound.components.sound.stopSound();
        console.log("phone hide");
        
      } else {
        panel.setAttribute("visible", true);
        // unlockdevicesound.components.sound.playSound();
        console.log("phone show");
      }
    });
  },
});



//手機
AFRAME.registerComponent("unlockedcellphone", {
  init: function () {
    var phone = this.el;
    var panel = document.querySelector("#html-panel6");
    phone.addEventListener("mouseenter", function () {
      phone.object3D.scale.set(1.5,1.5,1.5);
      // phone.object3D.position.set(1.089, 0.494, -2.073);
      // phonesound.components.sound.playSound();
    });

    phone.addEventListener("mouseleave", function () {
      phone.object3D.position.set(1.341,0.616,0.685);
      phone.object3D.scale.set(1,1,1);
          // wa phonesound.components.sound.stopSound();
    });

    phone.addEventListener("click", function () {
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        // console.log(typeof(unlockdevicesound))
        // unlockdevicesound.components.sound.stopSound();
        console.log("phone hide");
        
      } else {
        panel.setAttribute("visible", true);
        // unlockdevicesound.components.sound.playSound();
        console.log("phone show");
      }
    });
  },
});

//USB
AFRAME.registerComponent("usbdrive", {
  init: function () {
    var usb = this.el;
    var panel = document.querySelector("#html-panel7");
    usb.addEventListener("mouseenter", function () {
      usb.object3D.scale.set(0.2,0.2,0.2);
      // phone.object3D.position.set(1.089, 0.494, -2.073);
      // phonesound.components.sound.playSound();
    });

    usb.addEventListener("mouseleave", function () {
      // phone.object3D.position.set(1.341,0.616,0.685);
      usb.object3D.scale.set(0.096 ,0.096, 0.096);
          //  phonesound.components.sound.stopSound();
    });

    usb.addEventListener("click", function () {
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        // console.log(typeof(unlockdevicesound))
        // unlockdevicesound.components.sound.stopSound();
        console.log("usb hide");
        
      } else {
        panel.setAttribute("visible", true);
        // unlockdevicesound.components.sound.playSound();
        console.log("usb show");
      }
    });
  },
});

//office CARD
AFRAME.registerComponent("officecard", {
  init: function () {
    var card = this.el;
    var panel = document.querySelector("#html-panel8");
    card.addEventListener("mouseenter", function () {
      card.object3D.scale.set(0.1,0.1,0.1);
      // phone.object3D.position.set(1.089, 0.494, -2.073);
      // phonesound.components.sound.playSound();
    });

    card.addEventListener("mouseleave", function () {
      // phone.object3D.position.set(1.341,0.616,0.685);
      card.object3D.scale.set(0.073,0.073,0.073);
          //  phonesound.components.sound.stopSound();
    });

    card.addEventListener("click", function () {
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        // console.log(typeof(unlockdevicesound))
        // unlockdevicesound.components.sound.stopSound();
        console.log("card hide");
        
      } else {
        panel.setAttribute("visible", true);
        // unlockdevicesound.components.sound.playSound();
        console.log("card show");
      }
    });
  },
});

//White Board
AFRAME.registerComponent("whiteboard", {
  init: function () {
    var whiteboard = this.el;
    var panel = document.querySelector("#html-panel9");
    whiteboard.addEventListener("mouseenter", function () {
      whiteboard.object3D.scale.set(0.1,0.1,0.1);
      // phone.object3D.position.set(1.089, 0.494, -2.073);
      // phonesound.components.sound.playSound();
    });

    whiteboard.addEventListener("mouseleave", function () {
      // phone.object3D.position.set(1.341,0.616,0.685);
      whiteboard.object3D.scale.set(0.090, 0.090, 0.090);
          //  phonesound.components.sound.stopSound();
    });

    whiteboard.addEventListener("click", function () {
      var isVisible = panel.getAttribute("visible") === true;
      if (isVisible) {
        panel.setAttribute("visible", false);
        // console.log(typeof(unlockdevicesound))
        // unlockdevicesound.components.sound.stopSound();
        console.log("board hide");
        
      } else {
        panel.setAttribute("visible", true);
        // unlockdevicesound.components.sound.playSound();
        console.log("board show");
      }
    });
  },
});

//順移按鈕1
AFRAME.registerComponent("teleport", {
  init: function () {
    var teleport = this.el;
    var you = document.querySelector("#rig")
    // var camera = document.querySelector("#camera")
    teleport.addEventListener("mouseenter", function () {
      teleport.object3D.scale.set(0.018,0.018,0.018);
    });
    teleport.addEventListener("mouseleave", function () {
      teleport.object3D.scale.set(0.012,0.012,0.012);
    });
    teleport.addEventListener("click", function () {
      you.object3D.position.set(0 ,1.264, -0.502);
      console.log(camera.object3D.position)
      // camera.object3D.rotation.set(0,10.547,0)
    });
  },
});

//順移按鈕2
AFRAME.registerComponent("teleport2", {
  init: function () {
    var teleport = this.el;
    var you = document.querySelector("#rig")
    var camera = document.querySelector("#camera")
    teleport.addEventListener("mouseenter", function () {
      teleport.object3D.scale.set(0.018,0.018,0.018);
    });
    teleport.addEventListener("mouseleave", function () {
      teleport.object3D.scale.set(0.012,0.012,0.012);
    });
    teleport.addEventListener("click", function () {
      you.object3D.position.set(0.618 ,1.206,-4.409);
      // camera.object3D.position.set(0.317 ,-0.070,-3.684);
      console.log(camera.object3D.position)
      // camera.object3D.rotation.set(0,10.547,0)
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

//panel4sound
// AFRAME.registerComponent("unlockdevicesound", {});

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
