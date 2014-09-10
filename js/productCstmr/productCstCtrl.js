angular.module("productCst")
  .controller("productCstCtrl", function ($rootScope, $scope, $location, $routeParams, productCstService) {

    productSvc.getProds().then(function(prods){

      $scope.prods = prods.data;
      console.log(prods.data);

    })

    productSvc.getProd($routeParams.id).then(function (response){
      $scope.singleProd = response.data;
    })

  });
