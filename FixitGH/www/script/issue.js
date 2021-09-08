 var bi = $('.cate_btn').width();
        $('.cate_btn').css({
          'height': bi + 10 + 'px', 'line-height': bi + 'px'
        });

        function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
 localStorage.id=getQueryVariable("id");
 var app = angular.module('myApp', []);
app.controller('IssueCtrl', function($scope, $http) {
   // $http.get("https://cityinfo.host/city/sync_tname_new.php?tname=cityinfo_issue&cond= where id="+localStorage.id)
   $http.get(baseurl + appconfig.Issue.request.url.raw + localStorage.id)
    .then(function (response) {$scope.names = response.data;});
});