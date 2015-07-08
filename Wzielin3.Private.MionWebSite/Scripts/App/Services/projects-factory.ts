module App.Services {
    "use strict";

    export class ProjectsFactory {
        public getById(id: number): Model.Project{
            var projects = this.getAll();
            if (id < 0 || id >= projects.length) {
                return null;
            }
            return projects[id];
        }
        public getAll(): Model.Project[]{
            return [
                {
                    id: 0,
                    path: '#/projects/0',
                    title: "Lorem ipsum dolor",
                    description: "Suspendisse vitae nisi magna. Donec interdum fermentum metus non tempor. Vivamus malesuada mollis sollicitudin. Praesent et posuere enim. Vivamus pharetra, tellus eu tempus varius, lacus libero cursus nunc, ac porttitor dui dui in nibh. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur in lorem non orci pulvinar ornare. Donec eu augue ac sem congue pellentesque. Nulla at mauris sit amet diam fringilla tempus. Quisque eleifend maximus aliquet. Cras eget massa sem.",
                    images: {
                        main: "Data/kitten1.jpg",
                        getAll: function () { return ["Data/kitten1.jpg", "Data/kitten2.jpg", "Data/kitten3.jpg"] }
                    }
                },
                {
                    id: 1,
                    path: '#/projects/1',
                    title: "Nam nec enim nec sem",
                    description: "Nam at lorem sapien. Aliquam nisl turpis, aliquam non pretium nec, blandit non arcu. Mauris consectetur auctor porttitor. Donec semper fermentum massa et volutpat. Fusce mollis euismod ligula, non condimentum tellus condimentum vitae. Quisque finibus, mi vitae euismod ullamcorper, nulla risus auctor enim, vitae eleifend dolor odio ac dolor. Sed erat orci, porttitor vitae metus quis, fermentum condimentum sem. Nam nisl elit, tempus ut elit sit amet, sodales eleifend est. Ut commodo elit purus, a ullamcorper libero consectetur vel. Nam mauris lectus, eleifend lacinia eros maximus, aliquam gravida lorem. Morbi fermentum interdum erat accumsan gravida. Phasellus molestie enim augue, at suscipit massa porttitor eu. Nulla posuere leo non imperdiet tincidunt. Aliquam vitae finibus nisi. Nunc tincidunt mi risus, a feugiat nunc cursus eu. Pellentesque tempor condimentum sem, a suscipit erat pellentesque non.",
                    images: {
                        main: "Data/kitten4.jpg",
                        getAll: function () { return ["Data/kitten4.jpg", "Data/kitten3.jpg", "Data/kitten2.jpg", "Data/kitten5.jpg"] }
                    }
                },
                {
                    id: 2,
                    path: '#/projects/2',
                    title: "Mauris pellentesque",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam sem, ultrices a velit vel, facilisis sagittis quam. Nullam id pharetra ex, eu aliquam nibh. Aenean et dolor lectus. Mauris quam ipsum, vehicula et tellus a, placerat volutpat mi. Ut vel pharetra nunc, sit amet tristique elit. Donec lorem eros, vulputate ac justo ut, placerat ultrices velit. Nullam et elementum libero. Sed sodales est et nulla dictum, a iaculis quam suscipit. Ut laoreet purus vitae diam vestibulum faucibus. Nunc scelerisque sed metus a consectetur. Nullam eget nisl vitae justo varius ornare non a sem. Praesent vel interdum tortor. Sed sagittis lacinia nisl, et malesuada purus interdum ut. Nam purus tortor, varius vel velit sed, tempus consectetur tellus. Integer facilisis accumsan erat, sed consectetur odio ultrices et.",
                    images: {
                        main: "Data/kitten6.jpg",
                        getAll: function () { return ["Data/kitten6.jpg", "Data/kitten7.jpg", "Data/kitten3.jpg", "Data/kitten8.jpg", "Data/kitten5.jpg", "Data/kitten1.jpg"] }
                    }
                }
            ];
        }
    }
}

module App.Services.Model {
    export class Project {
        id: number;
        path: string;
        title: string;
        description: string;
        images: {
            main: string;
            getAll(): string[];
        }
    }
}