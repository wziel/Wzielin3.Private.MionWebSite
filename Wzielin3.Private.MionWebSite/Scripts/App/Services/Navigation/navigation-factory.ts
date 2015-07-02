module App.Services {
    "use strict";

    export class NavigationFactory {
        public getAll(): Model.Navigation[] {
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
                {
                    displayName: "Contact",
                    path: "/contact"
                },
            ]
        }
    }
}

module App.Services.Model {
    export class Navigation {
        displayName: string;
        path: string;
    }
}