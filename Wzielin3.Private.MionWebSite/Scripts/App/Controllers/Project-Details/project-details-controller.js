var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var ProjectDetailsController = (function () {
            function ProjectDetailsController($scope, $routeParams, $location, projects) {
                var projectsList = projects.getAll();
                var id = parseInt($routeParams["id"]);
                if (id < 0 || id >= projectsList.length) {
                    $location.path('#/home');
                }
                else {
                    $scope.project = projectsList[id];
                    $scope.carousel = {
                        interval: 5000,
                        slides: $scope.project.images.getAll()
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