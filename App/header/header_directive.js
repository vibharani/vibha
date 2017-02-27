/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 10/25/16
 * Time: 5:21 PM
 * To change this template use File | Settings | File Templates.
 */
angular.module('myApp').directive("w3TestDirective", function() {

    return {
        restrict : "E",
        templateUrl :"header/header.html",
        controller:'myCtrl'
    }});