angular.module("product",["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/prod", {
                templateUrl: "views/product/list.html",
                controller: "productCtrl"
            })

            .when("/prod/add", {
              templateUrl: "views/product/create.html",
              controller: "productCtrl"
            })
            .when("/prod/:id", {
              templateUrl: "views/product/id.html",
              controller: "productCtrl"
            })

            .when("/prod/:id/edit", {
              templateUrl: "views/product/edit.html",
              controller: "productCtrl"
            })

    });
