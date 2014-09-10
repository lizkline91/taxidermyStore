angular.module("product")
    .factory("productSvc", function ($http, $rootScope, $log) {

        var urlBase = "http://tiy-fee-rest.herokuapp.com/collections/NatFlipbook";

        var getProds = function(){
          return $http.get(urlBase);
        };

        var getProd = function(id){
          return $http.get(urlBase + "/" + id);
        }
        var addProd = function (prod) {
          return $http.post(urlBase, prod).then(function (response) {
                $rootScope.$broadcast("prod:added");
                $log.info("prod:added");
            });
        };

        var editProd = function (prod) {
            return $http.put(urlBase + "/" + prod._id, prod).then(function (response) {
                $rootScope.$broadcast("prod:updated");
                $log.info("prod:updated");
            })
        };
        var deleteProd = function (id) {
            return $http.delete(urlBase + "/" + id).then(function (response) {
                $rootScope.$broadcast("prod:deleted");
                $log.info("prod:deleted");
            })
        };

        return {
          getProds: getProds,
          getProd: getProd,
          addProd: addProd,
          editProd: editProd,
          deleteProd: deleteProd
        };
    });
