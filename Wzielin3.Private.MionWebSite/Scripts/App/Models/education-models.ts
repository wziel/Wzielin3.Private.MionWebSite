
module App.Models.Education {
    export class EducationHistory {
        schools: School[];
    }

    export class School {
        name: string;
        faculty: string;
        field: string;
        startDate: Date;
        endDate: Date;
        semesters: Semester[];
    }

    export class Semester {
        name: string;
        classes: Classes[];
        gradeUnit: GradeUnit;
    }

    export enum GradeUnit {
        Percetange,
        From2To5
    }

    export class Classes {
        name: string;
        lecturer: Lecturer;
        grade: number;
        weight: number;
    }

    export class Lecturer {
        name: string;
        title: string;
    }
}