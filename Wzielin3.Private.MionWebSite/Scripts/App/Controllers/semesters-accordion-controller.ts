module App.Controllers {
    "use strict";

    export class SemestersAccordionController {
        static $inject = ["$scope"];

        constructor($scope: Scopes.ISemestersAccordionScope) {
            $scope.extended = [];
            $scope.chartCollapsed = true;
            $scope.filterValue = "";
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

            for (var i = 0; i < $scope.school.semesters.length; ++i) {
                $scope.extended.push(true);
            }

            var classes: Services.Model.Classes[];
            classes = [];
            for (var i = 0; i < $scope.school.semesters.length; ++i) {
                if ($scope.school.semesters[i].graded) {
                    classes = classes.concat($scope.school.semesters[i].classes);
                }
            }
            $scope.allClasses = classes;
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
        filterValue: string;
        chartCollapsed: boolean;
        allClasses: Services.Model.Classes[];
    }
}