module App.Directives {
    "use strict";
    //fixes bug with using ngAnimate and ui.bootstrap's carousel at once.
    //animation needs to be disabled for carousels
    export class DisableNgAnimateDirective implements ng.IDirective {
        private $animate;

        public restrict = "A";
        public link =
        (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
            this.$animate.enabled(false, element);
        };
        constructor($animate: ng.IAnimateService) {
            this.$animate = $animate;
        }
        public static Factory() {
            var directive = ($animate: ng.IAnimateService) => {
                return new DisableNgAnimateDirective($animate);
            }
            directive.$inject = ['$animate'];
            return directive;
        }
    }
}