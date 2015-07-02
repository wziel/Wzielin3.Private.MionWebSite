

module App.Controllers {
    "use strict";

    export class ProjectsController {
        static $inject = ["$scope", "projects"];

        constructor($scope: Scopes.IProjectsScope, projects: Services.ProjectsFactory) {
            $scope.projects = projects.getAll();
        }
    }
}

module App.Controllers.Scopes {
    "use strict";
    export interface IProjectsScope extends ng.IScope {
        projects: Services.Model.Project[];
    }
}