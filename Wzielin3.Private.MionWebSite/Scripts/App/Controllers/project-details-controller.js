var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var ProjectDetailsController = (function () {
            function ProjectDetailsController($scope, $routeParams, $location, projects) {
                var id = parseInt($routeParams["id"]);
                var project = projects.getById(id);
                if (project === null) {
                    $location.path('#/home');
                }
                else {
                    $scope.project = project;
                    $scope.carousel = {
                        interval: 5000,
                        slides: project.images.getAll()
                    };
                }
            }
            ProjectDetailsController.$inject = ['$scope', '$routeParams', '$location', 'projects'];
            return ProjectDetailsController;
        })();
        Controllers.ProjectDetailsController = ProjectDetailsController;
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
//# sourceMappingURL=project-details-controller.js.map