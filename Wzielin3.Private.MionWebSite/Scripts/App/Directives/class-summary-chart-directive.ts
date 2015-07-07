module App.Directives {
    "use strict";
    export class ClassSummaryChartDirective implements ng.IDirective {
        public link: (scope: Scopes.IClassSummaryChartScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        public templateUrl = "../../../Views/ClassSummaryChart.html";
        public restrict = "E";
        public scope: {
            classes: string;
        };

        constructor() {
            this.scope = { classes: "=" };
            ClassSummaryChartDirective.prototype.link =
            (scope: Scopes.IClassSummaryChartScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
                scope.name = "Aaron";
            };
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
        name: string;
    }
} 