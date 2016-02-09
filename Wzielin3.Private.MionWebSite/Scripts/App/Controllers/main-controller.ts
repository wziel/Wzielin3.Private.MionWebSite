module App.Controllers {
    "use strict";

    export class MainController {
        static $inject = ["$scope", "personal"];

        constructor($scope: Scopes.IMainScope, personal: Services.PersonalFactory) {
            $scope.carousel = {
                interval: 4000,
                slides: personal.getAllImages()
            };
        }
    }
}

module App.Controllers.Scopes {
    "use strict";
    export interface IMainScope extends ng.IScope {
        carousel: {
            interval: number;
            slides: string[];
        }
    }
}