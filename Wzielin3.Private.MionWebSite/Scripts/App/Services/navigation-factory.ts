module App.Services {
    "use strict";

    export class NavigationFactory {
        public getAll(): App.Models.Navigation.Navigation[] {
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
                }
            ]
        }
    }
}