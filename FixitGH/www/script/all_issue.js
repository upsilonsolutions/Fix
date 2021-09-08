var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  //  $http.get("https://cityinfo.host/city/sync_tname_new.php?tname=cityinfo_issue&cond= where is_approve=1 order by id desc")
  $http.get(baseurl + appconfig.Home.request.url.raw)
    .then(function (response) {$scope.names = response.data;});
});
var bi = $('.cate_btn').width();
        $('.cate_btn').css({
          'height': bi + 10 + 'px', 'line-height': bi + 'px'
        });