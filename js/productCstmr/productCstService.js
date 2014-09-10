angular.module("productCst")
    .factory("productCstService", function ($http, $rootScope, $log) {

        var urlBase = "http://tiy-fee-rest.herokuapp.com/collections/NatFlipbook";

        var getProds = function(){
          return $http.get(urlBase);
        };

        var getProd = function(id){
          return $http.get(urlBase + "/" + id);
        }

        return {
          getProds: getProds,
          getProd: getProd
        };
    });
