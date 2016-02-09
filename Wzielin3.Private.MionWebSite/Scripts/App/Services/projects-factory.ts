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
                    title: "3D Pacman game",
                    description: "This is a game created for Computer Graphics (pl. Grafika Komputerowa) classes at Warsaw University of Technology. It is a 3D Pacman Game. I guess that everyone knows what Pacman is so I won't explain the rules of the game :) The game is fully written in C++ and is using OpenGL and GLUT library. In the game you can steer Pacman with arrow keys. It is also possible to move the camera in every direction and change every angle. Pacman and the Ghosts are create procedurally - nothing in the game is a model from external tool! Everything is created using vertex arrays. In the pictures you can also see textures on the walls and on the ground. The background is also a texture which changes rapidly which gives if an effect of moving flames. The ligh source also changes it's position which shows how light reacts with different materials used on objects. I have to say that this one was one of the coolest projects on my university, and despite the fact that I'm not into game developement, I had a lot of fun working on this one.",
                    images: {
                        main: "Data/Images/Projects/Gkom/projects-gkom1.jpg",
                        getAll: function () {
                            return ["Data/Images/Projects/Gkom/projects-gkom1.jpg", "Data/Images/Projects/Gkom/projects-gkom2.jpg",
                                "Data/Images/Projects/Gkom/projects-gkom3.jpg", "Data/Images/Projects/Gkom/projects-gkom4.jpg"]
                        }
                    },
                    githubLink: "https://github.com/wziel/Wzielin3.Gkom.Pacman"
                },
                {
                    id: 1,
                    path: '#/projects/1',
                    title: "Full-Stack JavaScript Web App",
                    description: "This one is pretty awesome. It's a web application built fully using javascript! This stack is called MEAN from MongoDB, Express, AngularJS and Node.JS. MongoDB is used at the backend which gives us a fast, easy to use, document-oriented database. Express and Node are used at the backend (server), to parse requests and serve data to users. Angular is obviously used at the frontend to give us an amazing SPA experience. The purpouse of this application is to provide a simple blog-like engine, that enables you to create account, add posts, comment them, give them thumbs-up etc. It's a very simple solution and a lightweight stack like MEAN is just perfect for that. This was my first and only app written in Node and I loved it for it's simplicity. In my opinion if you have some experience in web development and javascript, you have to check out Node! It really gives you a different perspective on javascript, which can not only be a client-side language for providing user experience, but also an awesome tool for writing lightweight server code.",
                    images: {
                        main: "Data/Images/Projects/MEANApp/projects-meanapp1.png",
                        getAll: function () {
                            return ["Data/Images/Projects/MEANApp/projects-meanapp1.png", "Data/Images/Projects/MEANApp/projects-meanapp2.png",
                                "Data/Images/Projects/MEANApp/projects-meanapp3.png", "Data/Images/Projects/MEANApp/projects-meanapp4.png",
                                "Data/Images/Projects/MEANApp/projects-meanapp5.png", "Data/Images/Projects/MEANApp/projects-meanapp6.png"]
                        }
                    },
                    githubLink: "https://github.com/wziel/Impaq.Wziel.MeanApp"
                },
                {
                    id: 2,
                    path: '#/projects/2',
                    title: "Java communicator",
                    description: "This one was a project for event-oriented programming classes (pl. Programowanie Zdarzeniowe) at Warsaw University of Technology. It is writted in Java using swing framework. Consists of two projects - client and server. This app enables multiple users to connect to the server and send messages. It has no permament storage / database connection, so users connect via freely selected usernames. This is my first and probably the biggest application written in Java and despite the fact that I'm a .NET guy I believe that it is written in a pretty neat way.",
                    images: {
                        main: "Data/Images/Projects/Proz/projects-proz3.png",
                        getAll: function () {
                            return ["Data/Images/Projects/Proz/projects-proz1.png", "Data/Images/Projects/Proz/projects-proz2.png",
                                "Data/Images/Projects/Proz/projects-proz3.png", "Data/Images/Projects/Proz/projects-proz4.png"]
                        }
                    },
                    githubLink: "https://github.com/wziel/Wzielin3.Proz.ChatRoom"
                },
                {
                    id: 3,
                    path: '#/projects/3',
                    title: "Polish Olympiad in Informatics tasks",
                    description: "This project contains solutions to 85 tasks from numerous editions of Polish Olympiad in Informatics. Most of them got 100% points in tests of correctness and speed. Those were solved during my highschool education and were one of my first contacs with programming and algorithms. This code is not of the best quality and usually when I look at it I don't believe that is was me who wrote it... but back then object-oriented programming was a mystery to me, c++ basics was all I knew and the only important thing was that the code worked :) So the quality is not the most important thing here, more important is the quantity - I spent a few months working on these tasks and it resulted in me getting to the final of XX Polish Olympiad in Informatics.",
                    images: {
                        main: "Data/Images/Projects/OI/projects-oi1.png",
                        getAll: function () {
                            return ["Data/Images/Projects/OI/projects-oi1.png",
                                "Data/Images/Projects/OI/projects-oi2.png", "Data/Images/Projects/OI/projects-oi3.png"]
                        }
                    },
                    githubLink: "https://github.com/wziel/Wzielin3.Private.OlimpiadaInformatyczna"
                },
                {
                    id: 4,
                    path: '#/projects/4',
                    title: "This website",
                    description: "This website is completely written in front-end technologies and all the logic is written in AngularJS. I started working on this website just to see how fun AngularJS is... and it turned out to be pretty fun :) I also combined it with TypeScript to get some power of strong-typing and compile-time validation and I believe it worked out very well. For me AngularJS is an awesome framework because it provides modularity, separation of concerns, the binding mechanism, which is pretty great because it simply makes some things work by themselves.",
                    images: {
                        main: "Data/Images/Projects/WebSite/projects-website1.png",
                        getAll: function () {
                            return ["Data/Images/Projects/WebSite/projects-website1.png",
                                "Data/Images/Projects/WebSite/projects-website2.png"]
                        }
                    },
                    githubLink: "https://github.com/wziel/Wzielin3.Private.MionWebSite"
                },
            ];
        }
    }
}