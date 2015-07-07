module App.Controllers {
    "use strict";

    export class EducationController {
        static $inject = ["$scope", "education"];

        constructor($scope: Scopes.IEducationScope, education: Services.EducationFactory) {
            $scope.education = education.get();
            $scope.getAllClasses = (school) => {
                var classes: Services.Model.Classes[];
                classes = [];
                for (var i = 0; i < school.semesters.length; ++i) {
                    classes = classes.concat(school.semesters[i].classes);
                }
                return classes;
            }
        }
    }
}

module App.Controllers.Scopes {
    "use strict";
    export interface IEducationScope extends ng.IScope {
        education: App.Services.Model.EducationHistory;
        getAllClasses: (school: Services.Model.School) => Services.Model.Classes[];
    }
}