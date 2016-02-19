/// <reference path="../helpers.ts" />


module App.Controllers {
    "use strict";

    export class AboutController {
        static $inject = ["$scope", "personal"];

        constructor($scope: Scopes.IAboutScope, personal: Services.PersonalFactory) {
            $scope.aboutMe = personal.getAboutMe();
            $scope.contactInfos = personal.getContactInfos();
        }
    }
}

module App.Controllers.Scopes {
    "use strict";
    export interface IAboutScope extends ng.IScope {
        aboutMe: string;
        contactInfos: Models.Personal.ContactInfo[];
    }
}