module App.Directives {
    "use strict";
    export class ClassSummaryChartDirective implements ng.IDirective {
        private chartData: LinearChartData;
        public restrict = "AE";
        public scope = {
            classes: "="
        };
        public link =
        (scope: Scopes.IClassSummaryChartScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
            var canvas = document.createElement("canvas");
            canvas.style.width = "100%";
            canvas.className = "chart";
            element[0].appendChild(canvas);
            var ctx = canvas.getContext("2d");
            new Chart(ctx).Bar(this.chartData);
        };
        public controller = ($scope: Scopes.IClassSummaryChartScope) => {
            this.chartData = {
                labels: ["2", "3", "3.5", "4", "4.5", "5"],
                datasets: [{
                    label: "My First dataset",
                    fillColor: "rgba(100,100,220,0.5)",
                    strokeColor: "rgba(100,100,220,0.8)",
                    highlightFill: "rgba(100,100,220,0.75)",
                    highlightStroke: "rgba(100,100,220,1)",
                    data: [0, 0, 0, 0, 0, 0]
                }]
            }
            for (var i = 0; i < $scope.classes.length; ++i) {
                var currentGrade = $scope.classes[i].grade;
                var index = currentGrade === 2 ? 0 : currentGrade * 2 - 5;
                this.chartData.datasets[0].data[index]++;
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
        classes: Models.Education.Classes[];
    }
}