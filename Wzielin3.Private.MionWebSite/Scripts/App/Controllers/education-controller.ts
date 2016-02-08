module App.Controllers {
    "use strict";

    export class EducationController {
        static $inject = ["$scope", "education"];

        constructor($scope: Scopes.IEducationScope, education: Services.EducationFactory) {
            $scope.education = education.get();

            $scope.getAverageScoreForSemester = (semester: Services.Model.Semester): string => {
                return this.getAverageScoreFor(semester.classes).toFixed(2).toString();
            }

            $scope.getAverageScorForSchool = (school: Services.Model.School): string => {
                var classes: Services.Model.Classes[] = [];
                for (var i = 0; i < school.semesters.length; ++i) {
                    classes = classes.concat(school.semesters[i].classes);
                }
                return this.getAverageScoreFor(classes).toFixed(2).toString();
            }

        }

        getAverageScoreFor = (classes: Services.Model.Classes[]): number => {
            var sum = 0;
            var weight = 0;
            for (var i = 0; i < classes.length; ++i) {
                sum += classes[i].grade * classes[i].weight;
                weight += classes[i].weight;
            }
            return sum / weight;
        }
    }
}

module App.Controllers.Scopes {
    "use strict";
    export interface IEducationScope extends ng.IScope {
        education: App.Services.Model.EducationHistory;
        getAverageScoreForSemester: (semester: Services.Model.Semester) => string;
        getAverageScorForSchool: (school: Services.Model.School) => string;
    }
}