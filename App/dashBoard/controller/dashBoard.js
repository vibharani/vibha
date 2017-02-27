var myApp=angular.module('myApp');
 var url="http://localhost:3000/names";




myApp.filter('myFormat', function() {

    return function(y,x) {
        var i, c, txt = "";
        //console.log(y);
       // console.log(x);
        // console.log(t);
    };  });
/*for (i = 0; i < y.length; i++) {
         c = y[i];
         if (i % 2 == 0) {c = c.toUpperCase();
         }
         txt += c;
         }
         return txt;*//*


});

myApp.controller('myController2', function ($scope,serviceFactory,myFormatFilter) {
    console.log("pageTwo.jss running");
    //$scope.name="t";
    // console.log() ;

    //$scope.name="";

    // console.log($scope.name);
    $scope.$watch('name', function (newValue, oldValue, scope) {
        //Do anything with $scope.letters
        //   console.log(newValue) ;
        myFormatFilter(newValue);
     */















    myApp.controller('controller', function($scope,$http,myFormatFilter,$rootScope) {
        $scope.name="";

        $scope.$watch('name', function (newValue, oldValue, scope) {

            myFormatFilter(newValue);


        });


        $scope.x="";


    $http.get(url).then(function(response) {

        $scope.data = response.data;
        x=$scope.data[0].song;
        console.log(x);

    });
        $scope.FirstName =JSON.parse(sessionStorage.getItem("user"));
    /*$scope.lastname=sessionStorage.getItem("Lastname");*/
});
