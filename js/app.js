 angular.module("mainController",
    ["product","ngRoute"])

.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "views/main.html",
            controller: "homeCtrl"
        })

        .otherwise({
            redirectTo: "/"
        });
});

angular.module("productSvc", []);
