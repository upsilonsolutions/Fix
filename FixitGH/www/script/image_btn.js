var bi = $('.cate_btn').width();
        $('.cate_btn').css({
          'height': bi + 10 + 'px', 'line-height': bi + 'px'
        });

         var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
    var fileTransfer;
var uri;
var fileURL;

    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // device APIs are available
    //
    function onDeviceReady() {
    if(window.MobileAccessibility){
      //alert("hi1");
      MobileAccessibility.setTextZoom(80);
       // window.MobileAccessibility.usePreferredTextZoom(false);//Dont Scale Text
    }
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    localStorage.ims=0;
    var tick = document.getElementById('tick');
      tick.style.display = 'none';
      console.log(navigator.camera);
    }
  function onPhotoDataSuccess(imageURI) {
      //alert(imageURI);
      localStorage.im = imageURI;

    localStorage.ims = 1;
   // var tick = document.getElementById('tick');
      //tick.style.display = 'block';
    document.getElementById("displayimg").innerHTML ="<img src='"+imageURI+"' class='display_img' style='width:50px'/>";
    location.href="prepare_issue_btn.html";

    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
    //  alert(imageURI);
      localStorage.im = imageURI;

    localStorage.ims = 1;
   // var tick = document.getElementById('tick');
      //tick.style.display = 'block';
    document.getElementById("displayimg").innerHTML ="<img src='"+imageURI+"' class='display_img' style='width:50px'/>";
    location.href="prepare_issue_btn.html";



    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string

    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URI });
    }

    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    //
    function onFail(message) {
      //alert('Failed because: ' + message);
    localStorage.ims=0;
    var tick = document.getElementById('tick');
      tick.style.display = 'none';
    }
  function myFunction() {
    location.href="order_placed.html";
}
  function win1(r)
     {
    //alert(JSON.stringify(r));
    itstoste("Order by prescription Placed successfully",3000,"green");

          setTimeout(myFunction, 2000);
        }

        function fail1(error)
    {
    //alert();

               itstoste("Prescription add failed",1000,"red");
    }
 function uploadPhoto(imageURI)
  {

     if(imageURI=="")
     {
         itstoste("Prescription Picture is required",3000,"red");

      return false;
     }
      else if(imageURI=="null")
     {
         itstoste("Prescription Picture is required",3000,"red");
      return false;
     }
      var all_ok=1;
//alert (all_ok);
if(all_ok)
{

       var radios = document.getElementsByName('select_address');
        var select_address=0;

for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        // do whatever you want with the checked radio

        //select_address=radios[i].value;
        select_address = localStorage.select_address;
         

    }
  }
  if(select_address==0)
  {

    itstoste("Please Select Address Or add address by clicking address icon",3000,"red");
      return false;
  }



       //alert(imageURI);

            var options = new FileUploadOptions();
            options.fileKey="image";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";

            var params = new Object();
            params.tname1 = "cityinfo_issue";
            params.Update = "1";

            params.email = localStorage.email;
            params.address = localStorage.address;
            params.notes = document.getElementById("notes").value;
      

            options.params = params;
            options.chunkedMode = false;

            var ft = new FileTransfer();
            //ft.upload(imageURI,"https://cityinfo.host/city/insert_new_content_app.php", win1, fail1, options);
            ft.upload(imageURI,baseurl + appconfig.FileUpload.request.url.raw, win1, fail1, options);
      //alert();
    }
}