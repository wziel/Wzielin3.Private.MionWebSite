/// <reference path="../../typings/angularjs/angular.d.ts" />
var App;
(function (App) {
    "use strict";
    var AppBuilder = (function () {
        function AppBuilder() {
        }
        AppBuilder.prototype.start = function () {
            this.app = angular.module("main", ['ngRoute', 'ui.bootstrap']);
            this.app.config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/home', { templateUrl: 'Views/Main.html', controller: 'MainController' }).when('/about', { templateUrl: 'Views/About.html', controller: 'AboutController' }).when('/projects', { templateUrl: 'Views/Projects.html', controller: 'ProjectsController' }).when('/projects/:id', { templateUrl: 'Views/ProjectDetails.html', controller: 'ProjectDetailsController' }).when('/education', { templateUrl: 'Views/Education.html', controller: 'EducationController' }).otherwise({ redirectTo: '/home' });
            }]);
            this.app.controller("AboutController", ["$scope", function ($scope) { return new App.Controllers.AboutController($scope); }]);
            this.app.controller("MainController", ["$scope", "projects", function ($scope, projects) { return new App.Controllers.MainController($scope, projects); }]);
            this.app.controller("IndexController", ['$scope', '$route', '$routeParams', '$location', 'navigation', function ($scope, $route, $routeParams, $location, navigation) { return new App.Controllers.IndexController($scope, $route, $routeParams, $location, navigation); }]);
            this.app.controller("ProjectDetailsController", ['$scope', '$routeParams', '$location', 'projects', function ($scope, $routeParams, $location, projects) { return new App.Controllers.ProjectDetailsController($scope, $routeParams, $location, projects); }]);
            this.app.controller("ProjectsController", ["$scope", "projects", function ($scope, projects) { return new App.Controllers.ProjectsController($scope, projects); }]);
            this.app.controller("EducationController", ["$scope", "education", function ($scope, education) { return new App.Controllers.EducationController($scope, education); }]);
            this.app.factory("education", function () { return new App.Services.EducationFactory(); });
            this.app.factory("projects", function () { return new App.Services.ProjectsFactory(); });
            this.app.factory("navigation", function () { return new App.Services.NavigationFactory(); });
        };
        return AppBuilder;
    })();
    App.AppBuilder = AppBuilder;
})(App || (App = {}));
new App.AppBuilder().start();
//# sourceMappingURL=app.js.map