function itstoste(text,time,color) {
        var x = document.getElementById("toast");
        x.className = "show";
        var y = document.getElementById("desc");
        y.innerHTML=text;
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, time);
       
      }

      var bi = $('.cate_btn').width();
        $('.cate_btn').css({
          'height': bi + 10 + 'px', 'line-height': bi + 'px'
        });

          function onFail(message) {
      //alert('Failed because: ' + message);
    localStorage.ims=0;
    var tick = document.getElementById('tick');
      tick.style.display = 'none';
    }
  function myFunction() {
    location.href="index.html";
}
  function win1(r)
     {
    //alert(JSON.stringify(r));
    itstoste("Issue Placed successfully",3000,"green");

          setTimeout(myFunction, 2000);
        }

        function fail1(error)
    {
   // alert(JSON.stringify(error));

               itstoste("Issue add failed",1000,"red");
    }
 function uploadPhoto(imageURI)
  {
    
    var dept= document.getElementById("dpt").value;
  	let str = dept;
	str.toString();
	
	var s=str.replace("string:","");
	//alert(s);
  	if(dept=="")
  	{
  		itstoste("department is required",3000,"red");

      return false;
  	}
  	else
  	{
  		//alert(s);
  	}
      var title= document.getElementById("title").value;
if(title=="")
  	{
  		itstoste("Title is required",3000,"red");

      return false;
  	}
  	var description= document.getElementById("description").value;
   // alert(imageURI);
     if(localStorage.ims != 1)
     {
         //itstoste("Issue Picture is required",3000,"red");
         document.getElementById("sbmt").style.display="none";
             document.getElementById("sbmtnxt").style.display="block";
             
           //$.post("https://cityinfo.host/city/insert_new_content_app.php",
           $.post(baseurl + appconfig.FileUpload.request.url.raw ,
  {
    tname1: "cityinfo_issue",
    Update: "1",
    name: localStorage.Name,
    email: localStorage.email,
    phone: localStorage.mobile,
    department: s,
     title: title,
      description: description,
      address: localStorage.address,
       lattitude:localStorage.latitude,
        longitude: localStorage.longitude

  },
  function(data, status){
    if(status=="success")
    {
      localStorage.im="";
             localStorage.lattitude="";
             localStorage.ims=0;
             localStorage.setloc=0;
             itstoste("Issue Placed successfully",3000,"green");

          setTimeout(myFunction, 2000);
    }
    
  });

      return false;
     }
      else if(imageURI=="null")
     {
         //itstoste("Issue Picture is required",3000,"red");
     // return false;
     }
     if(localStorage.latitude=="")
     {
        itstoste("Picture is required",3000,"red");
        return false
     }
     else
     {

     }
      var all_ok=1;
//alert (all_ok);
if(all_ok)
{

       



       //alert(imageURI);

            var options = new FileUploadOptions();
            options.fileKey="image";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";

            var params = new Object();
            params.tname1 = "cityinfo_issue";
            params.Update = "1";
 params.name = localStorage.name;
      params.email = localStorage.email;
      params.address = localStorage.address;
      params.phone = localStorage.mobile;
       params.department = s;
       params.title = title;
       params.description = description;
        params.lattitude = localStorage.latitude;
         params.longitude = localStorage.longitude;

     // params.notes = document.getElementById("notes").value;
      

            options.params = params;
            options.chunkedMode = false;

            var ft = new FileTransfer();
            //ft.upload(imageURI,"https://cityinfo.host/city/insert_new_content_app.php", win1, fail1, options);
            ft.upload(imageURI,baseurl + appconfig.FileUpload.request.url.raw , win1, fail1, options);
             document.getElementById("sbmt").style.display="none";
             document.getElementById("sbmtnxt").style.display="block";
             localStorage.im="";
             localStorage.lattitude="";
             localStorage.ims=0;
             localStorage.setloc=0;

      //alert();
    }
}
     
var app = angular.module('myApp', []);
app.controller('IssueCtrl', function($scope, $http) {
    //$http.get("https://cityinfo.host/city/sync_tname_new.php?tname=cityinfo_department")
    $http.get(baseurl + appconfig.Departments.request.url.raw )
    .then(function (response) {$scope.names = response.data;
     
 $scope.dpts = angular.copy($scope.names[0]);
    });

    
});