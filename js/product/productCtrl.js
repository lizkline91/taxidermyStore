angular.module("product")
  .controller("productCtrl", function ($rootScope, $scope, $location, $routeParams, productSvc) {

    $scope.prods = productSvc.getProds();

    $scope.goToAdd = function () {
      $location.path("/prod/add");
    };

    $scope.singleProd = productSvc.findIndex($routeParams.idx);

    $scope.addProd = function (newProd) {
      productSvc.addProd(newProd);

      $location.path("/prod");
    };

    $scope.removeProd = function (idx) {
      productSvc.deleteProd(idx);
    };

    $scope.editProd = function (idx, prod) {
      productSvc.editProd(idx, prod);

      $location.path("/prod");
    };

  });
