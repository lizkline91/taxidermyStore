angular.module("product")
  .controller("productCtrl", function ($rootScope, $scope, $location, $routeParams, productSvc) {

    productSvc.getProds().then(function(prods){

      $scope.prods = prods.data;
      console.log(prods.data);

    })

    productSvc.getProd($routeParams.id).then(function (response){
      $scope.singleProd = response.data;
    })

    $scope.addProd = function (newProd) {
      productSvc.addProd(newProd)

        $location.path("/prod");


    };

    $scope.editProd = function (prod) {
      productSvc.editProd(prod)
        $location.path("/prod");

    };

    $scope.deleteProd = function (id) {
      productSvc.deleteProd(id)
        $location.path("/prod");

    };
    $rootScope.$on("prod:added", function () {
          $scope.prods = pfSvc.getProds();
    });

    $rootScope.$on("prod:updated", function () {
        $scope.prods = pfSvc.getProds();
    });

    $rootScope.$on("prod:deleted", function () {
        $scope.prods = pfSvc.getProds();
    });



  });
