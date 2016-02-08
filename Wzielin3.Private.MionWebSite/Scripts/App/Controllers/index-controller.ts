module App.Controllers {
    "use strict";

    export class IndexController {
        static $inject = ['$scope', '$route', '$routeParams', '$location', 'navigation'];

        constructor($scope: Scopes.IIndexScope,
            $route: ng.route.IRouteService,
            $routeParams: ng.route.IRouteParamsService,
            $location: ng.ILocationService,
            navigation: Services.NavigationFactory) {

            $scope.navigation = navigation.getAll();
            $scope.$on('$routeChangeSuccess', function (e, current, previous) {
                $scope.activeViewPath = $location.path();
            });
        }
    }
}

module App.Controllers.Scopes {
    "use strict";
    export interface IIndexScope extends ng.IScope {
        navigation: App.Models.Navigation.Navigation[];
        activeViewPath: string;
    }
}