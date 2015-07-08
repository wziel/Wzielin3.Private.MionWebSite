/// <reference path="../typings/angularjs/angular.d.ts" />

module App {
    "use strict";
    export class AppBuilder {
        private app: ng.IModule;

        public start() {
            this.app = angular.module("main", ['ngRoute', 'ui.bootstrap', 'nvd3ChartDirectives'])
                .config(['$routeProvider', function ($routeProvider) {
                $routeProvider
                    .when('/home', { templateUrl: 'Views/Main.html', controller: 'MainController' })
                    .when('/about', { templateUrl: 'Views/About.html', controller: 'AboutController' })
                    .when('/projects', { templateUrl: 'Views/Projects.html', controller: 'ProjectsController' })
                    .when('/projects/:id', { templateUrl: 'Views/ProjectDetails.html', controller: 'ProjectDetailsController' })
                    .when('/education', { templateUrl: 'Views/Education.html', controller: 'EducationController' })
                    .otherwise({ redirectTo: '/home' });
            }])
                .controller("AboutController", ["$scope", ($scope) => new Controllers.AboutController($scope)])
                .controller("MainController", ["$scope", "projects", ($scope, projects) => new Controllers.MainController($scope, projects)])
                .controller("IndexController", ['$scope', '$route', '$routeParams', '$location', 'navigation', ($scope, $route, $routeParams, $location, navigation) => new Controllers.IndexController($scope, $route, $routeParams, $location, navigation)])
                .controller("ProjectDetailsController", ['$scope', '$routeParams', '$location', 'projects', ($scope, $routeParams, $location, projects) => new Controllers.ProjectDetailsController($scope, $routeParams, $location, projects)])
                .controller("ProjectsController", ["$scope", "projects", ($scope, projects) => new Controllers.ProjectsController($scope, projects)])
                .controller("EducationController", ["$scope", "education", ($scope, education) => new Controllers.EducationController($scope, education)])
                .factory("education",() => new Services.EducationFactory())
                .factory("projects",() => new Services.ProjectsFactory())
                .factory("navigation",() => new Services.NavigationFactory())
                .directive('classSummary', Directives.ClassSummaryChartDirective.Factory())
                .directive('semestersAccordion', Directives.SemestersAccordionDirective.Factory())
        }
    }
}

new App.AppBuilder().start();