module App.Directives {
    "use strict";
    export class ClassSummaryChartDirective implements ng.IDirective {
        public templateUrl = "Views/ClassSummaryChart.html";
        public restrict = "AE";
        public scope = {
            classes: "="
        };
        public link =
        (scope: Scopes.IClassSummaryChartScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
        };
        public controller = ($scope: Scopes.IClassSummaryChartScope) => {
            $scope.chartData = new Services.Model.ClassSummaryChartModel();
            $scope.chartData.data = [{
                key: "Grades summary",
                values: []
            }];
            var values = [];
            for (var i = 2; i <= 5; i += 0.5) {
                    values[i] = 0;
            }
            for (var i = 0; i < $scope.classes.length; ++i) {
                var currentGrade = $scope.classes[i].grade;
                if (values[currentGrade] === undefined) {
                    values[currentGrade] = 0;
                }
                values[currentGrade]++;
            }
            for (var i = 2; i <= 5; i += 0.5) {
                $scope.chartData.data[0].values.push([i, values[i]]);
            }
        }

        public static Factory() {
            var directive = () => {
                return new ClassSummaryChartDirective();
            }
            directive.$inject = [];
            return directive;
        }
    }
}

module App.Directives.Scopes {
    "use strict";
    export interface IClassSummaryChartScope extends ng.IScope {
        classes: App.Services.Model.Classes[];
        chartData: Services.Model.ClassSummaryChartModel;
    }
} 

module App.Services.Model {
    export class ClassSummaryChartModel {
        data: {
            key: string;
            values: any[];
        }[];
    }
}