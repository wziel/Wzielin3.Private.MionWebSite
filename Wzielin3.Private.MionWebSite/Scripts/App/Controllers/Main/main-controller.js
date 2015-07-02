var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var MainController = (function () {
            function MainController($scope, projects) {
                $scope.carousel = {
                    interval: 5000,
                    slides: projects.getAll()
                };
            }
            MainController.$inject = ["$scope", "projects"];
            return MainController;
        })();
        Controllers.MainController = MainController;
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
//# sourceMappingURL=main-controller.js.map