module App.Controllers {
    "use strict";

    export class ProjectDetailsController {
        static $inject = ['$scope', '$routeParams', '$location', 'projects'];

        constructor($scope: Scopes.IProjectDetailsScope,
            $routeParams: ng.route.IRouteParamsService,
            $location: ng.ILocationService,
            projects: Services.ProjectsFactory) {

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
    }
}

module App.Controllers.Scopes {
    "use strict";
    export interface IProjectDetailsScope extends ng.IScope {
        project: Services.Model.Project;
        carousel: {
            interval: number;
            slides: string[];
        }
    }
}