module App.Directives {
    export class SemestersAccordionDirective implements ng.IDirective {
        public restrict = "E";
        public templateUrl = "../../Views/SemestersAccordion.html";
        public scope = {
            school: "="
        }
        public controller = () => {

        }
    }
}

module App.Directives.Scopes {
    "use strict";
    export interface ISemestersAccordionScope extends ng.IScope {
        school: App.Services.Model.School;
        extended: boolean[];
        collapseAll: () => void;
        extendAll: () => void;
    }
}