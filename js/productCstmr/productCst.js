angular.module("productCst", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
          .when("/custProducts", {
              templateUrl: "views/custView/list.html",
              controller: "productCstCtrl"
          })
          .when("/custProducts/:id", {
              templateUrl: "views/custView/show.html",
              controller: "productCstCtrl"
          })
          .when("/custProducts/:id/review", {
              templateUrl: "views/custView/review.html",
              controller: "productCstCtrl"
          });

    });
