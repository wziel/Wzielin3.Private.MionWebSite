/// <reference path="../../typings/angularjs/angular.d.ts" />

module App {
    "use strict";
    export class AppBuilder {
        private app: ng.IModule;

        public start() {
            this.app = angular.module("main", ['ngRoute', 'ui.bootstrap'])
            this.app.config(['$routeProvider', function ($routeProvider) {
                $routeProvider
                    .when('/home', { templateUrl: 'Views/Main.html', controller: 'MainController' })
                    .when('/about', { templateUrl: 'Views/About.html', controller: 'AboutController' })
                    .when('/projects', { templateUrl: 'Views/Projects.html', controller: 'ProjectsController' })
                    .when('/projects/:id', { templateUrl: 'Views/ProjectDetails.html', controller: 'ProjectDetailsController' })
                    .when('/education', { templateUrl: 'Views/Education.html', controller: 'EducationController'})
                    .otherwise({ redirectTo: '/home' });
            }]);
            this.app.controller("AboutController", ["$scope", ($scope) => new Controllers.AboutController($scope)])
            this.app.controller("MainController", ["$scope", "projects", ($scope, projects) => new Controllers.MainController($scope, projects)]);
            this.app.controller("IndexController", ['$scope', '$route', '$routeParams', '$location', 'navigation', ($scope, $route, $routeParams, $location, navigation) => new Controllers.IndexController($scope, $route, $routeParams, $location, navigation)]);
            this.app.controller("ProjectDetailsController", ['$scope', '$routeParams', '$location', 'projects', ($scope, $routeParams, $location, projects) => new Controllers.ProjectDetailsController($scope, $routeParams, $location, projects)]);
            this.app.controller("ProjectsController", ["$scope", "projects", ($scope, projects) => new Controllers.ProjectsController($scope, projects)]);
            this.app.controller("EducationController", ["$scope", "education", ($scope, education) => new Controllers.EducationController($scope, education)]);
            this.app.factory("education",() => new Services.EducationFactory());
            this.app.factory("projects",() => new Services.ProjectsFactory());
            this.app.factory("navigation",() => new Services.NavigationFactory());
        }
    }
}

new App.AppBuilder().start();