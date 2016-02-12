module App.Directives {
    "use strict";
    export class BackgroundAnimationDirective implements ng.IDirective {
        public templateUrl = "Views/BackgroundAnimation.html";
        public restrict = "E";
        public scope = { };
        public link = (scope: Scopes.IBackgroundAnimationScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => { };
        public controller = ($scope: Scopes.IBackgroundAnimationScope) => {
            var texts = [".NET", "C#", "SharePoint", "JavaScript", "TypeScript", "HTML", "CSS", "AngularJS", "ASP.NET",
                "Visual Studio", "GIT", "TFS", "Windows", "MVC"]
            var animateContainer = document.getElementById("background-animation-container");
            var drawElement = function () {
                var animateElement = document.createElement("span");
                animateElement.classList.add("background-animation-element-look");
                animateElement.innerHTML = texts[Math.floor(Math.random() * texts.length)];
                animateElement.style.opacity = (Math.random() * 0.4 + 0.2).toString();
                animateElement.style.fontSize = (Math.random() * 60 + 40).toString() + "px";
                animateContainer.appendChild(animateElement);

                animateElement.style.top = (Math.random() * (window.innerHeight - animateElement.offsetHeight - 52)+ 52).toString() + "px";
                animateElement.style.left = (-animateElement.offsetWidth - Math.random()*100).toString() + "px";
                animateElement.style.width = (animateElement.offsetWidth + 10).toString() + "px";

                animateElement.classList.add("background-animation-element-animate");

                setTimeout(drawElement, 2000);
                setTimeout(removeElement, 60000, animateElement);
            };
            var removeElement = function (element) {
                animateContainer.removeChild(element);
            };
            drawElement();
        };

        public static Factory() {
            var directive = () => {
                return new BackgroundAnimationDirective();
            }
            directive.$inject = [];
            return directive;
        }
    }
}

module App.Directives.Scopes {
    "use strict";
    export interface IBackgroundAnimationScope extends ng.IScope {
    }
}