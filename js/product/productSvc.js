angular.module("product")
    .factory("productSvc", function ($rootScope, $log) {
        var prods = [
            {
                title: "Ernest",
                year: "1946",
                image: "http://www.williamcurtisrolf.com/data/photos/49_1deyrollemonkey.jpg",
                price: "$2,100",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: "Borris",
                year: "1932",
                image: "http://www.collectorsweekly.com/articles/wp-content/uploads/2011/09/L450xH487_jpg_DSC_9014-5ac32.jpg",
                price: "$1,200",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              title: "Wilhem",
              year: "1965",
              image: "http://media-cache-ec0.pinimg.com/736x/20/d9/fa/20d9fa7cefd95630bea9f5ff299d3946.jpg",
              price: "$1,000",
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              title: "Lief",
              year: "1998",
              image: "http://www.homeharmonizing.com/wp-content/uploads/2014/02/Salvador-Dali%E2%80%99s-Xai-taxidermy-lamb-side-table_1.jpg",
              price: "$3,000",
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ];

        var getProds = function(){
          return prods;
        };

        var addProd = function (newProd) {
          prods.push(newProd);
        };

        var deleteProd = function(index) {
          prods.splice(index);
        };

        var editProd = function (idx, prod) {
          prods[idx] = prod;
        }

        var findIndex = function (idx) {
          return prods[idx];
        }

        return {
          getProds: getProds,
          findIndex: findIndex,
          addProd: addProd,
          deleteProd: deleteProd,
          editProd: editProd
        };
    });
