module App.Controllers {
    "use strict";

    export class MainController {
        static $inject = ["$scope", "projects"];

        constructor($scope: Scopes.IMainScope, projects: any) {
            $scope.carousel = {
                interval: 5000,
                slides: projects.getAll()
            };
        }
    }
}

module App.Controllers.Scopes {
    "use strict";
    export interface IMainScope extends ng.IScope {
        carousel: {
            interval: number;
            slides: any[];
        }
    }
}