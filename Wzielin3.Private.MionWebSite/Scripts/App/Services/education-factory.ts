module App.Services {
    "use strict";

    export class EducationFactory {
        public get(): Model.EducationHistory {
            return {
                schools: [
                    {
                        name: "Warsaw University of Technology",
                        faculty: "Faculty of Electronicts and Information Technology",
                        field: "Computer Science, Information Systems Engineering",
                        startDate: new Date(2013, 9),
                        endDate: null,
                        semesters: [
                            {
                                gradeUnit: Model.GradeUnit.From2To5,
                                name: "1st Semester",
                                classes: [
                                    {
                                        name: "Algebra liniowa",
                                        lecturer: {
                                            name: "Anna Zamojska-Dzienio",
                                            title: "dr",
                                        },
                                        grade: 5,
                                        weight: 4
                                    },
                                    {
                                        name: "Analiza i równania różniczkowe 1",
                                        lecturer: {
                                            name: "Ewa Stróżyna",
                                            title: "dr",
                                        },
                                        grade: 4.5,
                                        weight: 4
                                    },
                                    {
                                        name: "Logika i teoria mnogości",
                                        lecturer: {
                                            name: "Żaneta Trębska",
                                            title: "dr inż.",
                                        },
                                        grade: 5,
                                        weight: 4
                                    },
                                    {
                                        name: "Podstawy programowania",
                                        lecturer: {
                                            name: "Henryk Dobrowolski",
                                            title: "dr inż.",
                                        },
                                        grade: 5,
                                        weight: 5
                                    },
                                    {
                                        name: "Wstęp do informatyki",
                                        lecturer: {
                                            name: "Wiktor Daszczuk",
                                            title: "dr inż.",
                                        },
                                        grade: 4.5,
                                        weight: 4
                                    },
                                    {
                                        name: "Podstawy prawa - ochrona własności intelektualnej",
                                        lecturer: {
                                            name: "Agnieszka Woźniak",
                                            title: "dr",
                                        },
                                        grade: 4.5,
                                        weight: 2
                                    },
                                    {
                                        name: "Język angielski egzamin B2",
                                        lecturer: {
                                            name: "Małgorzata Witczak",
                                            title: "mgr",
                                        },
                                        grade: 5,
                                        weight: 0
                                    },
                                ]
                            },
                            {
                                gradeUnit: Model.GradeUnit.From2To5,
                                name: "2nd Semester",
                                classes: [
                                    {
                                        name: "Analiza i równania rózniczkowe 2",
                                        lecturer: {
                                            name: "Ewa Stróżyna",
                                            title: "dr",
                                        },
                                        grade: 5,
                                        weight: 3
                                    },
                                    {
                                        name: "Matematyka dyskretna",
                                        lecturer: {
                                            name: "Paweł Naroski",
                                            title: "dr",
                                        },
                                        grade: 5,
                                        weight: 3
                                    },
                                    {
                                        name: "Programowanie obiektowe",
                                        lecturer: {
                                            name: "Andrzej Pająk",
                                            title: "dr inż.",
                                        },
                                        grade: 5,
                                        weight: 4
                                    },
                                    {
                                        name: "Programowanie zdarzeniowe",
                                        lecturer: {
                                            name: "Roman Podraza",
                                            title: "doc. dr inż.",
                                        },
                                        grade: 5,
                                        weight: 4
                                    },
                                    {
                                        name: "Podstawy technologii cyfrowej",
                                        lecturer: {
                                            name: "Andrzej Skorupski",
                                            title: "dr inż.",
                                        },
                                        grade: 4.5,
                                        weight: 4
                                    },
                                    {
                                        name: "Podstawy elektroniki",
                                        lecturer: {
                                            name: "Marek Nałęcz",
                                            title: "prof. nzw. dr hab.",
                                        },
                                        grade: 5,
                                        weight: 4
                                    },
                                    {
                                        name: "Język angielski poziom B2",
                                        lecturer: {
                                            name: "Małgorzata Witczak",
                                            title: "mgr",
                                        },
                                        grade: 5,
                                        weight: 2
                                    },
                                    {
                                        name: "Język angielski poziom C1",
                                        lecturer: {
                                            name: "Anna Krysińska",
                                            title: "mgr",
                                        },
                                        grade: 5,
                                        weight: 2
                                    },
                                    {
                                        name: "Fizyka ogólna",
                                        lecturer: {
                                            name: "Andrzej Krawiecki",
                                            title: "dr hab.",
                                        },
                                        grade: 3.5,
                                        weight: 4
                                    },

                                ]
                            },
                            {
                                gradeUnit: Model.GradeUnit.From2To5,
                                name: "3rd Semester",
                                classes: [
                                    {
                                        name: "Algorytmy i struktury danych",
                                        lecturer: {
                                            name: "Roman Podraza",
                                            title: "doc. dr inż.",
                                        },
                                        grade: 4.5,
                                        weight: 4
                                    },
                                    {
                                        name: "Bazy danych",
                                        lecturer: {
                                            name: "Andrzej Ciemski",
                                            title: "dr inż.",
                                        },
                                        grade: 5,
                                        weight: 4
                                    },
                                    {
                                        name: "Systemy operacyjne",
                                        lecturer: {
                                            name: "Tomasz Jordan Kruk",
                                            title: "dr inż.",
                                        },
                                        grade: 5,
                                        weight: 4
                                    },
                                    {
                                        name: "Teoria sygnałów i informacji",
                                        lecturer: {
                                            name: "Jerzy Szabatin",
                                            title: "prof. dr hab. inż. ",
                                        },
                                        grade: 4.5,
                                        weight: 3
                                    },
                                    {
                                        name: "Fizyczne podstawy przetwarzania informacji",
                                        lecturer: {
                                            name: "Jan Szmidt",
                                            title: "prof. dr hab.",
                                        },
                                        grade: 5,
                                        weight: 3
                                    },
                                    {
                                        name: "Metody probabilistyczne i statystyczne",
                                        lecturer: {
                                            name: "Ewa Frankiewicz",
                                            title: "dr inż.",
                                        },
                                        grade: 5,
                                        weight: 4
                                    },
                                    {
                                        name: "Język angielski poziom C1",
                                        lecturer: {
                                            name: "Małgorzata Wieczorek",
                                            title: "mgr",
                                        },
                                        grade: 5,
                                        weight: 2
                                    },
                                    {
                                        name: "Podstawy telekomunikacji",
                                        lecturer: {
                                            name: "Ewa Obarska",
                                            title: "mgr inż.",
                                        },
                                        grade: 5,
                                        weight: 3
                                    },
                                ]
                            },
                            {
                                gradeUnit: Model.GradeUnit.From2To5,
                                name: "4th Semester",
                                classes: [
                                    {
                                        name: "Architektura komputerów",
                                        lecturer: {
                                            name: "Dariusz Turlej",
                                            title: "dr inż.",
                                        },
                                        grade: 4.5,
                                        weight: 4
                                    },
                                    {
                                        name: "Grafika Komputerowa",
                                        lecturer: {
                                            name: "Jan Zabrodzki",
                                            title: "prof. dr hab.",
                                        },
                                        grade: 5,
                                        weight: 4
                                    },
                                    {
                                        name: "Podstawy badań operacyjnych",
                                        lecturer: {
                                            name: "Krzysztof Pieńkosz",
                                            title: "dr hab. inż.",
                                        },
                                        grade: 5,
                                        weight: 4
                                    },
                                    {
                                        name: "Podstawy automatyki",
                                        lecturer: {
                                            name: "Krzysztof Malinowski",
                                            title: "prof. dr hab.",
                                        },
                                        grade: 5,
                                        weight: 4
                                    },
                                    {
                                        name: "Sieci komputerowe",
                                        lecturer: {
                                            name: "Jerzy Sobczyk",
                                            title: "mgr inż.",
                                        },
                                        grade: 5,
                                        weight: 4
                                    },
                                    {
                                        name: "Kreowanie wizerunku firmy",
                                        lecturer: {
                                            name: "Tomasz Dusiewicz",
                                            title: "dr",
                                        },
                                        grade: 3,
                                        weight: 2
                                    },
                                    {
                                        name: "Język angielski poziom C1",
                                        lecturer: {
                                            name: "Brian Dunn",
                                            title: null,
                                        },
                                        grade: 4.5,
                                        weight: 2
                                    },
                                    {
                                        name: "Filozofia polityki",
                                        lecturer: {
                                            name: "Jan Zubelewicz",
                                            title: "dr",
                                        },
                                        grade: 5,
                                        weight: 2
                                    },
                                ]
                            },
                            {
                                gradeUnit: Model.GradeUnit.From2To5,
                                name: "5th semester",
                                classes: [
                                    {
                                        name: "Analiza algorytmów",
                                        grade: 5,
                                        lecturer: {
                                            name: "Łukasz skonieczny",
                                            title: "dr inż."
                                        },
                                        weight: 4
                                    },
                                    {
                                        name: "Bezpieczeństwo systemów i sieci",
                                        grade: 5,
                                        lecturer: {
                                            name: "Krzysztof Cabaj",
                                            title: "dr inż."
                                        },
                                        weight: 3
                                    },
                                    {
                                        name: "Bazy danych 2",
                                        grade: 5,
                                        lecturer: {
                                            name: "Piotr Salata",
                                            title: "mgr inż."
                                        },
                                        weight: 3
                                    },
                                    {
                                        name: "Inżynieria oprogramowania",
                                        grade: 4.5,
                                        lecturer: {
                                            name: "Krzysztof Sacha",
                                            title: "prof. dr hab."
                                        },
                                        weight: 3
                                    },
                                    {
                                        name: "Systemy czasu rzeczywistego",
                                        grade: 4.5,
                                        lecturer: {
                                            name: "Krzysztof Sacha",
                                            title: "prof. dr hab."
                                        },
                                        weight: 3
                                    },
                                    {
                                        name: "Podstawy sztucznej inteligencji",
                                        grade: 4,
                                        lecturer: {
                                            name: "Paweł Wawrzyński",
                                            title: "dr inż."
                                        },
                                        weight: 3
                                    },
                                    {
                                        name: "Techniki internetowe",
                                        grade: 5,
                                        lecturer: {
                                            name: "Grzegorz Blinowski",
                                            title: "dr inż."
                                        },
                                        weight: 3
                                    },
                                    {
                                        name: "Język angielski poziom C1",
                                        grade: 5,
                                        lecturer: {
                                            name: "Jan Ścieński",
                                            title: ""
                                        },
                                        weight: 2
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Gimnazjum i Liceum Akademickie w Toruniu",
                        faculty: null,
                        field: "Mathematics and Informatics",
                        startDate: new Date(2007, 8),
                        endDate: new Date(2013, 4),
                        semesters: [
                            {
                                gradeUnit: Model.GradeUnit.Percetange,
                                name: "Matura results",
                                classes: [
                                    {
                                        name: "Matematyka rozszerzona",
                                        grade: 100,
                                        lecturer: null,
                                        weight: 1
                                    },
                                    {
                                        name: "Angielski rozszerzony",
                                        grade: 100,
                                        lecturer: null,
                                        weight: 1
                                    },
                                    {
                                        name: "Informatyka rozszerzona",
                                        grade: 100,
                                        lecturer: null,
                                        weight: 1
                                    },
                                ]
                            }
                        ]
                    },
                ]
            }
        }
    }
}

module App.Services.Model {
    export class EducationHistory {
        schools: Model.School[];
    }

    export class School {
        name: string;
        faculty: string;
        field: string;
        startDate: Date;
        endDate: Date;
        semesters: Model.Semester[];
    }

    export class Semester {
        name: string;
        classes: Model.Classes[];
        gradeUnit: GradeUnit;
    }

    export enum GradeUnit {
        Percetange,
        From2To5
    }

    export class Classes {
        name: string;
        lecturer: Model.Lecturer;
        grade: number;
        weight: number;
    }

    export class Lecturer {
        name: string;
        title: string;
    }
}