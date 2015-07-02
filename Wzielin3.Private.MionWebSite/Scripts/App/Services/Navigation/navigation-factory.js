var App;
(function (App) {
    var Services;
    (function (Services) {
        "use strict";
        var NavigationFactory = (function () {
            function NavigationFactory() {
            }
            NavigationFactory.prototype.getAll = function () {
                return [
                    {
                        displayName: "Home",
                        path: "/home"
                    },
                    {
                        displayName: "My work",
                        path: "/projects"
                    },
                    {
                        displayName: "Education",
                        path: "/education"
                    },
                    {
                        displayName: "About",
                        path: "/about"
                    },
                ];
            };
            return NavigationFactory;
        })();
        Services.NavigationFactory = NavigationFactory;
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Services;
    (function (Services) {
        var Model;
        (function (Model) {
            var Navigation = (function () {
                function Navigation() {
                }
                return Navigation;
            })();
            Model.Navigation = Navigation;
        })(Model = Services.Model || (Services.Model = {}));
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=navigation-factory.js.map