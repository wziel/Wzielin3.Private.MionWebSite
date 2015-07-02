module App.Controllers {
    "use strict";

    export class AboutController {
        static $inject = ["$scope"];

        constructor($scope: Scopes.IAboutScope) {
        }
    }
}

module App.Controllers.Scopes {
    "use strict";
    export interface IAboutScope extends ng.IScope {
    }
}