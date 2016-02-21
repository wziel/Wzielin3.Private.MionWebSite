
module App.Models.Projects {
    export class Project {
        id: number;
        path: string;
        title: string;
        description: string;
        images: {
            main: string;
            getAll(): string[];
        };
        externalLinks: ExternalLink[];
        tags: string[];
    }

    export class ExternalLink {
        url: string;
        source: ExternalSource;
    }

    export class ExternalSource {
        thumbnailUrl: string;
        displayText: string;
    }
}