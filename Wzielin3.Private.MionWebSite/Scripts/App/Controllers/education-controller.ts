module App.Controllers {
    "use strict";

    export class EducationController {
        static $inject = ["$scope", "education"];

        constructor($scope: Scopes.IEducationScope, education: Services.EducationFactory) {
            $scope.education = education.get();
            $scope.activeSchool = $scope.education.schools[0];
            $scope.setActiveSchool = (school) => {
                $scope.activeSchool = school;
            }
        }
    }
}

module App.Controllers.Scopes {
    "use strict";
    export interface IEducationScope extends ng.IScope {
        education: App.Services.Model.EducationHistory;
        activeSchool: App.Services.Model.School;
        setActiveSchool: (school: App.Services.Model.School) => void;
    }
}