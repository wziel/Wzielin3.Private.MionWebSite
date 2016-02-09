/// <reference path="../helpers.ts" />


module App.Controllers {
    "use strict";

    export class EducationController {
        static $inject = ["$scope", "education"];

        constructor($scope: Scopes.IEducationScope, education: Services.EducationFactory) {
            $scope.education = education.get();

            $scope.getAverageScoreForSchool = (school: Models.Education.School): string => {
                var classes: Models.Education.Classes[] = [];
                for (var i = 0; i < school.semesters.length; ++i) {
                    classes = classes.concat(school.semesters[i].classes);
                }
                return App.Helpers.Education.getAverageScoreFor(classes).toFixed(2).toString();
            }
        }
    }
}

module App.Controllers.Scopes {
    "use strict";
    export interface IEducationScope extends ng.IScope {
        education: Models.Education.EducationHistory;
        getAverageScoreForSchool: (school: Models.Education.School) => string;
    }
}