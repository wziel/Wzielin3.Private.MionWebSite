module App.Controllers {
    "use strict";

    export class SemestersAccordionController {
        static $inject = ["$scope"];

        constructor($scope: Scopes.ISemestersAccordionScope) {
            $scope.school = (<Controllers.Scopes.IEducationScope>$scope.$parent).activeSchool;
            $scope.extended = [];
            for (var i = 0; i < $scope.school.semesters.length; ++i) {
                $scope.extended.push(false);
            }
            $scope.collapseAll = function () {
                for (var i = 0; i < $scope.school.semesters.length; ++i) {
                    $scope.extended[i] = false;
                }
            }
            $scope.extendAll = function () {
                for (var i = 0; i < $scope.school.semesters.length; ++i) {
                    $scope.extended[i] = true;
                }
            }
        }
    }
}

module App.Controllers.Scopes {
    "use strict";
    export interface ISemestersAccordionScope extends ng.IScope {
        school: App.Services.Model.School;
        extended: boolean[];
        collapseAll: () => void;
        extendAll: () => void;
    }
}