
module App.Models.Projects {
    export class Project {
        id: number;
        path: string;
        title: string;
        description: string;
        images: {
            main: string;
            getAll(): string[];
        }
        githubLink: string
    }
}