/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 10/25/16
 * Time: 10:18 AM
 * To change this template use File | Settings | File Templates.
 */
var myApp=angular.module('myApp');
myApp.controller('myCtrl', [ '$scope','$modal','$location','$http','dataFactory',

    function($scope, $modal,$location,$http,dataFactory) {


    $scope.open = function() {
        $scope.hide=true;

        $modal.open({
            templateUrl: 'loginPage/view/1stpage.html',
            backdrop: true,
            windowClass: 'modal',
            controller: function ($scope,$modalInstance,$log){
               function country()
               {
                   dataFactory.getCountry().then(function(response)
                   {
                       console.log("4");
                       $scope.country = response.data;

                   },function(error){
                       console.log(error);
                   });
               }
                country();
                   console.log("hi");
                $scope.check = function(user)
                {
                    console.log(user);
                    sessionStorage.setItem('user',JSON.stringify(user));
                    $log.log('Submiting user info.');
                    $modalInstance.dismiss('cancel');
                    $location.path('/2ndpage');
                }
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
               /* $http.get("http://localhost:3000/countries").then(function(response)
                {
                    $scope.country = response.data;
                });*/


            }
        });
    }
                $scope.submit=function()
                {
                     console.log($scope.FirstName);
                    if(($scope.FirstName).length>0)
                    {
                        sessionStorage.setItem("FirstName",$scope.FirstName);
                        $location.path('/2ndpage');
                    }
                    else
                    {

                        $location.path('/');
                    }
                };



}]);