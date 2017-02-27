/**
 * Created with JetBrains WebStorm.
 * User: DPanda
 * Date: 10/26/16
 * Time: 2:27 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('myApp').factory('dataFactory',['$http', function($http) {

    var urlBase = 'http://localhost:3000';
    var dataFactory = {};


    dataFactory.getNames = function () {
        return $http.get(urlBas + '/names');
    };
    dataFactory.getCountry = function () {
        return $http.get(urlBase +'/countries');
    };
    return dataFactory;
}]);
