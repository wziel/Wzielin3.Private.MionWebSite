module App.Services {
    "use strict";

    export class ProjectsFactory {
        public getById(id: number): App.Models.Projects.Project{
            var projects = this.getAll();
            if (id < 0 || id >= projects.length) {
                return null;
            }
            return projects[id];
        }
        public getAll(): App.Models.Projects.Project[]{
            return [
                {
                    id: 0,
                    path: '#/projects/0',
                    title: "Polish Olympiad in Informatics tasks",
                    description: "This project contains solutions to 85 tasks from numerous editions of Polish Olympiad in Informatics. Most of them got 100% points in tests of correctness and speed. Those were solved during my highschool education and were one of my first contacs with programming and algorithms. This code is not of the best quality and usually when I look at it I don't believe that is was me who wrote it... but back then object-oriented programming was a mystery to me, c++ basics was all I knew and the only important thing was that the code worked :) So the quality is not the most important thing here, more important is the quantity - I spent a few months working on these tasks and it resulted in me getting to the final of XX Polish Olympiad in Informatics.",
                    images: {
                        main: "Data/Projects/OI/projects-oi1.png",
                        getAll: function () {
                            return ["Data/Projects/OI/projects-oi1.png",
                                "Data/Projects/OI/projects-oi2.png", "Data/Projects/OI/projects-oi3.png"]
                        }
                    },
                    githubLink: "https://github.com/wziel/Wzielin3.Private.OlimpiadaInformatyczna"
                },
                {
                    id: 1,
                    path: '#/projects/1',
                    title: "This website",
                    description: "This website is completely written in front-end technologies and all the logic is written in AngularJS. I started working on this website just to see how fun AngularJS is... and it turned out to be pretty fun :) I also combined it with TypeScript to get some power of strong-typing and compile-time validation and I believe it worked out very well. For me AngularJS is an awesome framework because it provides modularity, separation of concerns, the binding mechanism, which is pretty great because it simply makes some things work by themselves.",
                    images: {
                        main: "Data/Projects/WebSite/projects-website1.png",
                        getAll: function () {
                            return ["Data/Projects/WebSite/projects-website1.png",
                                "Data/Projects/WebSite/projects-website2.png"]
                        }
                    },
                    githubLink: "https://github.com/wziel/Wzielin3.Private.MionWebSite"
                },
                {
                    id: 2,
                    path: '#/projects/2',
                    title: "Java communicator",
                    description: "This one was a project for event-oriented programming classes (pl. Programowanie Zdarzeniowe). It is writted in Java using swing framework. Consists of two projects - client and server. This app enables multiple users to connect to the server and send messages. It has no permament storage / database connection, so users connect via freely selected usernames. This is my first and probably the biggest application written in Java and despite the fact that I'm a .NET guy (Microsoft forever <3) I believe that it is written in a pretty neat way. But still I prefer .NET - this Java app just showcases that I can learn new stuff and write good code using it!",
                    images: {
                        main: "Data/Projects/Proz/projects-proz3.png",
                        getAll: function () {
                            return ["Data/Projects/Proz/projects-proz1.png", "Data/Projects/Proz/projects-proz2.png",
                                "Data/Projects/Proz/projects-proz3.png", "Data/Projects/Proz/projects-proz4.png"]
                        }
                    },
                    githubLink: "https://github.com/wziel/Wzielin3.Proz.ChatRoom"
                }
            ];
        }
    }
}