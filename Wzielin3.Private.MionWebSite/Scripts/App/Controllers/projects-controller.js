var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var ProjectsController = (function () {
            function ProjectsController($scope, projects) {
                $scope.projects = projects.getAll();
            }
            ProjectsController.$inject = ["$scope", "projects"];
            return ProjectsController;
        })();
        Controllers.ProjectsController = ProjectsController;
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
//# sourceMappingURL=projects-controller.js.map