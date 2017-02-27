/*
var myApp=angular.module('myApp');
 myApp.controller('myCtrl', function($scope,$http,$location,$modal) {
    $scope.check=function()
     {   console.log($scope.firstname);
         sessionStorage.setItem("Firstname",$scope.firstname);
         sessionStorage.setItem("Lastname",$scope.second);
         sessionStorage.setItem("E-mail",$scope.emailid);
         sessionStorage.setItem("country",$scope.selectedName);
         sessionStorage.setItem("states",$scope.selectedName1);
         $location.path('/2ndpage');
     }

     $http.get("http://localhost:3000/countries").then(function(response)
     {
         $scope.country = response.data;
     });
      $scope.submit=function(){
        */
/* console.log($scope.FirstName);*//*

         if(($scope.FirstName.length>0))
         {
            sessionStorage.setItem("FirstName",$scope.FirstName);
            $location.path('/2ndpage');
        }
         else{
             $location.path('/');
         }
     }

 });*/
