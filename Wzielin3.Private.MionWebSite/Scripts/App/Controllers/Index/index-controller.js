var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var IndexController = (function () {
            function IndexController($scope, $route, $routeParams, $location, navigation) {
                $scope.navigation = navigation.getAll();
                $scope.$on('$routeChangeSuccess', function (e, current, previous) {
                    $scope.activeViewPath = $location.path();
                });
            }
            IndexController.$inject = ['$scope', '$route', '$routeParams', '$location', 'navigation'];
            return IndexController;
        })();
        Controllers.IndexController = IndexController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var Scopes;
        (function (Scopes) {
            "use strict";
        })(Scopes = Controllers.Scopes || (Controllers.Scopes = {}));
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=index-controller.js.map