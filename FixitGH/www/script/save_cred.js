var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
    //$scope.master = {firstName:"John", lastName:"Doe"};
    $scope.master = {Name:localStorage.Name, mobile:localStorage.mobile, email:localStorage.email};
    $scope.submit = function() {
         var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var ve= re.test($scope.user.email);
        var flag=1;
        if(ve)
        {

        }
        else
        {
            flag=0;
             $scope.toast("Please Enter Valid Email");
        }
        var phoneno = /^\d{10}$/;
        if(($scope.user.mobile.match(phoneno)))
        {

        }
        else
        {
            flag=0;
            $scope.toast("Please Enter Valid Mobile");
        }
        if($scope.user.Name=="")
        {
                flag=0;
                $scope.toast("Please Enter Valid Name");
        }
        else
        {
            
        }
        if(flag==1)
        {
    localStorage.Name=$scope.user.Name;
    localStorage.mobile=$scope.user.mobile;
    localStorage.email=$scope.user.email;
    $scope.toast("Saved");
     setTimeout(function(){ location.href="prepare_issue.html"; }, 4000);
}
       // alert($scope.user.Name);
    };
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.toast = function(text,time,color) {
        var x = document.getElementById("toast");
        x.className = "show";
         var y = document.getElementById("desc");
        y.innerHTML=text;
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        //setTimeout(function(){ location.href="index.html"; }, 4000);
    };
   $scope.reset();
});

var bi = $('.cate_btn').width();
        $('.cate_btn').css({
          'height': bi + 10 + 'px', 'line-height': bi + 'px'
        });
        function launch_toast(text,time,color) {
        var x = document.getElementById("toast");
        x.className = "show";
        var y = document.getElementById("desc");
        y.innerHTML=text;
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, time);
       
      }