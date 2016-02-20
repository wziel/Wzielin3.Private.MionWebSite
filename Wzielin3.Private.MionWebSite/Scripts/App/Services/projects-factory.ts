module App.Services {
    "use strict";

    export class ProjectsFactory {
        private github: Models.Projects.ExternalSource = {
            displayText: "Check out the repository on github.",
            thumbnailUrl: "Data/Images/Icons/icon-github.png",
        }
        public getById(id: number): App.Models.Projects.Project {
            var projects = this.getAll();
            if (id < 0 || id >= projects.length) {
                return null;
            }
            return projects[id];
        }
        public getAll(): App.Models.Projects.Project[] {
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
                    externalLinks: [{
                        source: this.github,
                        url: "https://github.com/wziel/Wzielin3.Gkom.Pacman",
                    }],
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
                    externalLinks: [{
                        source: this.github,
                        url: "https://github.com/wziel/Impaq.Wziel.MeanApp"
                    }],
                },
                {
                    id: 2,
                    path: '#/projects/2',
                    title: "E-mail broadcaster server",
                    description: "A project created for \"Internet techniques\" class at Warsaw University of Technology. It was a created in a team of four people. Consists of server and client applications, where I was completely responsible of writing the client app which is written fully in C# using Windows Presentation Foundation. I also wrote a part of C++ server code - you can find my code in C++ app in component called RootManager. Having described my responsiblity in the project let me also say what the project is about :D To put it simply it was an application to broadcast e-mail messages to people. A user of the application can define e-mail templates, groups of users and add e-mail addresses to those groups. Then at any time he can select a message template and a group and quickly send the e-mail to recipients. When coming up with the idea of the app, we had in mind situations where for example some person is late for a meeting and that person wants to notify other attendees - that is exactly what the app does - with 4 clicks you can send previosuly defined e-mail to previously defined group of people. The server app uses WinSock and connects to SQL Server database. We spend a lot of time designing and implementing this app and although it's not perfect I believe it is pretty nice. It also has documentation attached to the solution so you can read it for better understanding of the project.",
                    images: {
                        main: "Data/Images/Projects/TIN/projects-tin2.png",
                        getAll: function () {
                            return ["Data/Images/Projects/TIN/projects-tin1.png", "Data/Images/Projects/TIN/projects-tin2.png",
                                "Data/Images/Projects/TIN/projects-tin3.png", "Data/Images/Projects/TIN/projects-tin4.png",
                                "Data/Images/Projects/TIN/projects-tin5.png", "Data/Images/Projects/TIN/projects-tin6.png"]
                        }
                    },
                    externalLinks: [{
                        source: this.github,
                        url: "https://github.com/wziel/Pw.Elka.TIN"
                    }],
                },
                {
                    id: 3,
                    path: '#/projects/3',
                    title: "Library database",
                    description: "Database project with data generation and test written in C# using Entity Framework. Also a team project at Warsaw University of Technology... and again since I like C# I was the one responsible for writing data generator and tests. I also designed the database with my teammates. While tests were pretty easy to implement since they only called SQL procedures and measured the time, data generation was tricky since the data had to be consistend with database constraints and bussiness restrictions. I ended up creating 2 things: simple mock data generators for standalone tables, and data generation simulator that generated time sensitive or event based data - like book reservations, which happen over time and are burdened with restrictions like 'user cannot have more than 3 reservations at the time'. So as I say that was kinda challenging, but of course I managed to implement it properly - I wrote tests that checked database consistency and they passed.",
                    images: {
                        main: "Data/Images/Projects/BD2/projects-bd2-1.png",
                        getAll: function () {
                            return ["Data/Images/Projects/BD2/projects-bd2-1.png", "Data/Images/Projects/BD2/projects-bd2-2.png"]
                        }
                    },
                    externalLinks: [{
                        source: this.github,
                        url: "https://github.com/wziel/Pw.Elka.Bd2"
                    }],
                },
                {
                    id: 4,
                    path: '#/projects/4',
                    title: "Java communicator",
                    description: "This one was a project for event-oriented programming classes (pl. Programowanie Zdarzeniowe) at Warsaw University of Technology. It is writted in Java using swing framework. Consists of two projects - client and server. This app enables multiple users to connect to the server and send messages. It has no permament storage / database connection, so users connect via freely selected usernames. This is my first and probably the biggest application written in Java and despite the fact that I'm a .NET guy I believe that it is written in a pretty neat way.",
                    images: {
                        main: "Data/Images/Projects/Proz/projects-proz3.png",
                        getAll: function () {
                            return ["Data/Images/Projects/Proz/projects-proz1.png", "Data/Images/Projects/Proz/projects-proz2.png",
                                "Data/Images/Projects/Proz/projects-proz3.png"]
                        }
                    },
                    externalLinks: [{
                        source: this.github,
                        url: "https://github.com/wziel/Wzielin3.Proz.ChatRoom"
                    }],
                },
                {
                    id: 5,
                    path: '#/projects/5',
                    title: "Polish Olympiad in Informatics tasks",
                    description: "This project contains solutions to 85 tasks from numerous editions of Polish Olympiad in Informatics. Most of them got 100% points in tests of correctness and speed. Those were solved during my highschool education and were one of my first contacs with programming and algorithms. This code is not of the best quality and usually when I look at it I don't believe that is was me who wrote it... but back then object-oriented programming was a mystery to me, c++ basics was all I knew and the only important thing was that the code worked :) So the quality is not the most important thing here, more important is the quantity - I spent a few months working on these tasks and it resulted in me getting to the final of XX Polish Olympiad in Informatics.",
                    images: {
                        main: "Data/Images/Projects/OI/projects-oi1.png",
                        getAll: function () {
                            return ["Data/Images/Projects/OI/projects-oi1.png",
                                "Data/Images/Projects/OI/projects-oi2.png", "Data/Images/Projects/OI/projects-oi3.png"]
                        }
                    },
                    externalLinks: [{
                        source: this.github,
                        url: "https://github.com/wziel/Wzielin3.Private.OlimpiadaInformatyczna"
                    }],
                },
                {
                    id: 6,
                    path: '#/projects/6',
                    title: "This website",
                    description: "This website is completely written in front-end technologies and all the logic is written in AngularJS. I started working on this website just to see how fun AngularJS is... and it turned out to be pretty fun :) I also combined it with TypeScript to get some power of strong-typing and compile-time validation and I believe it worked out very well. For me AngularJS is an awesome framework because it provides modularity, separation of concerns, the binding mechanism, which is pretty great because it simply makes some things work by themselves.",
                    images: {
                        main: "Data/Images/Projects/WebSite/projects-website1.png",
                        getAll: function () {
                            return ["Data/Images/Projects/WebSite/projects-website1.png",
                                "Data/Images/Projects/WebSite/projects-website2.png"]
                        }
                    },
                    externalLinks: [{
                        source: this.github,
                        url: "https://github.com/wziel/Wzielin3.Private.MionWebSite"
                    }],
                },
            ];
        }
    }
}