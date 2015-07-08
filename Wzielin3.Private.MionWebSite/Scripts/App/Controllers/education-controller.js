var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var EducationController = (function () {
            function EducationController($scope, education) {
                $scope.education = education.get();
            }
            EducationController.$inject = ["$scope", "education"];
            return EducationController;
        })();
        Controllers.EducationController = EducationController;
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
//# sourceMappingURL=education-controller.js.map