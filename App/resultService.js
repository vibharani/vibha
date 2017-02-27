/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 10/21/16
 * Time: 2:12 PM
 * To change this template use File | Settings | File Templates.
 */
var myApp = angular.module('myApp', ['ngRoute','ngMessages','ui.bootstrap']);
myApp.config(function($routeProvider){
 $routeProvider
        .when("/login", {
            templateUrl : "loginPage/view/1stpage.html",
         controller:'myCtrl'
        })
    /* .when("/",
     {
         templateUrl:"header/header.html",
         controller:'myCtrl'
     })*/

        .when("/2ndpage", {
         templateUrl : "dashBoard/view/2ndpage.html" ,
         controller:'controller'

    })
     .when("/member", {
         templateUrl : "dashBoard/view/member.html"
     }).when("/login", {
         templateUrl : "dashBoard/view/member.html"
     });
    ;
});




