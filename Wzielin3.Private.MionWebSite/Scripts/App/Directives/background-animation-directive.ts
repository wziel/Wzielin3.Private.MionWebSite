module App.Directives {
    "use strict";
    export class BackgroundAnimationDirective implements ng.IDirective {
        public templateUrl = "Views/BackgroundAnimation.html";
        public restrict = "E";
        public scope = {};
        public link = (scope: Scopes.IBackgroundAnimationScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => { };
        public controller = ($scope: Scopes.IBackgroundAnimationScope) => {
            var texts = [".NET", "C#", "SharePoint", "JavaScript", "TypeScript", "HTML", "CSS", "AngularJS", "ASP.NET",
                "Visual Studio", "GIT", "TFS", "Windows", "MVC", "Algorithms"]
            var animateContainer = document.getElementById("background-animation-container");
            var avrgFontSize = 70;
            var avrgTextMoveAwayTime = calculateAvrgTextMoveAwayTime();
            var checkForRemovalIntervalMs = 21000;
            var drawElement = function () {
                var animateElement = document.createElement("span");
                animateElement.classList.add("background-animation-element-look");
                animateElement.innerHTML = texts[Math.floor(Math.random() * texts.length)];
                animateElement.style.opacity = (Math.random() * 0.4 + 0.3).toString();
                animateElement.style.fontSize = (Math.random() * 60 - 30 + avrgFontSize).toString() + "px";
                animateContainer.appendChild(animateElement);

                animateElement.style.top = (Math.random() * (window.innerHeight - animateElement.offsetHeight)).toString() + "px";
                animateElement.style.left = (-animateElement.offsetWidth).toString() + "px";
                animateElement.style.width = (animateElement.offsetWidth + 10).toString() + "px";

                animateElement.classList.add("background-animation-element-animate");

                var nextElementIntervalMs = 5 * avrgTextMoveAwayTime * avrgFontSize / window.innerHeight;
                setTimeout(drawElement, nextElementIntervalMs);
                setTimeout(checkForRemoval, checkForRemovalIntervalMs, animateElement);
            };
            drawElement();

            function checkForRemoval(element: HTMLSpanElement) {
                if (element.getBoundingClientRect().left >= window.outerWidth) {
                    animateContainer.removeChild(element);
                }
                else {
                    setTimeout(checkForRemoval, checkForRemovalIntervalMs, element);
                }
            };

            ///calculate the average time in which texts moves it's whole length
            function calculateAvrgTextMoveAwayTime(): number {
                var sumLength = 0;
                var element = document.createElement("span");
                element.classList.add("background-animation-element-look");
                element.style.fontSize = avrgFontSize.toString() + "px";
                element.style.position = "absolute";
                element.style.visibility = "hidden";
                document.body.appendChild(element);
                for (var i = 0; i < texts.length; ++i) {
                    element.innerHTML = texts[i];
                    sumLength += element.offsetWidth;
                }
                document.body.removeChild(element);
                var avrgLength = sumLength / texts.length;
                var avrgSpeed = (2000 + avrgLength) / 60000;
                var avrgTime = avrgLength / avrgSpeed;
                return avrgTime;
            }
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