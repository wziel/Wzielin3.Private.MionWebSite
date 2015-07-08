module App.Directives {
    "use strict";
    export class SemestersAccordionDirective implements ng.IDirective {
        public templateUrl = "Views/SemestersAccordion.html";
        public restrict = "AE";
        public scope = {
            school: "="
        };
        public link =
        (scope: Scopes.ISemestersAccordionScpoe, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
        };
        public controller = ($scope: Scopes.ISemestersAccordionScpoe) => {
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

        public static Factory() {
            var directive = () => {
                return new SemestersAccordionDirective();
            }
            directive.$inject = [];
            return directive;
        }
    }
}

module App.Directives.Scopes {
    "use strict";
    export interface ISemestersAccordionScpoe extends ng.IScope {
        school: App.Services.Model.School;
        extended: boolean[];
        collapseAll: () => void;
        extendAll: () => void;
        filterValue: string;
        chartCollapsed: boolean;
        allClasses: Services.Model.Classes[];
    }
}