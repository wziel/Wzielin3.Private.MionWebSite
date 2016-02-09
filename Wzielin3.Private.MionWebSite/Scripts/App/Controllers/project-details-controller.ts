module App.Controllers {
    "use strict";

    export class ProjectDetailsController {
        static $inject = ['$scope', '$routeParams', '$location', 'projects'];

        constructor($scope: Scopes.IProjectDetailsScope,
            $routeParams: ng.route.IRouteParamsService,
            $location: ng.ILocationService,
            projects: Services.ProjectsFactory) {

            var id = parseInt($routeParams["id"]);
            var project = projects.getById(id);
            if (project === null) {
                $location.path('#/home');
            }
            else {
                $scope.project = project;
                $scope.carousel = {
                    interval: 4000,
                    slides: project.images.getAll()
                };
            }
        }
    }
}

module App.Controllers.Scopes {
    "use strict";
    export interface IProjectDetailsScope extends ng.IScope {
        project: App.Models.Projects.Project;
        carousel: {
            interval: number;
            slides: string[];
        }
    }
}