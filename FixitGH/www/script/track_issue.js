var app = angular.module('myApp', []);
app.controller('IssueCtrl', function($scope, $http) {
    //$http.get("https://cityinfo.host/city/sync_tname_new.php?tname=cityinfo_department")
    $http.get(baseurl + appconfig.Departments.request.url.raw )
    .then(function (response) {$scope.names = response.data;
 $scope.dpts = angular.copy($scope.names[0]);
    });

    somethingChanged = function(v) {
    	//alert(v);
    	let str = v;
	str.toString();
	//alert(str);
	var s=str.replace("string:","");
	//alert("https://cityinfo.host/city/sync_tname_new.php?tname=cityinfo_issue&cond= where department="+s);
        //$http.get("https://cityinfo.host/city/sync_tname_new.php?tname=cityinfo_issue&cond=  where is_approve=1 and department='"+s+"' order by id desc")
        $http.get(baseurl + appconfig.TrackIssue.request.url.raw + s +"' order by id desc")
        .then(function (response) {
          $scope.issue = response.data;
        });
    };
});

 var bi = $('.cate_btn').width();
        $('.cate_btn').css({
          'height': bi + 10 + 'px', 'line-height': bi + 'px'
        });