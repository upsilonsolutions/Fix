 document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        // Register the event listener
        document.addEventListener("backbutton", onBackKeyDown, false);
    }

    // Handle the back button
    //
    function onBackKeyDown() {
      navigator.app.exitApp();
    }