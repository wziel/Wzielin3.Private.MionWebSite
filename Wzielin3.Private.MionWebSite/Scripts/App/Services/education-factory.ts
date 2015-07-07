﻿module App.Services {
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
                                graded: true,
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
                                graded: true,
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
                                graded: true,
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
                                graded: true,
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
                                graded: false,
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
        graded: boolean;
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