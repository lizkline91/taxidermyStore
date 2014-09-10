 angular.module("mainController", ["product", "productSvc", "productCtrl",  "ngRoute"])

.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "views/main.html",
            controller: "homeCtrl"
        })

});

angular.module("productSvc", []);
angular.module("productCtrl", []);
