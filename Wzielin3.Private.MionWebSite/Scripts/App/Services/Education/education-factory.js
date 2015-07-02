var App;
(function (App) {
    var Services;
    (function (Services) {
        "use strict";
        var EducationFactory = (function () {
            function EducationFactory() {
            }
            EducationFactory.prototype.get = function () {
                return {
                    schools: [
                        {
                            name: "Warsaw University of Technology",
                            startDate: new Date(2013, 9),
                            endDate: null,
                            semesters: [
                                {
                                    name: "1st Semester",
                                    classes: [
                                        {
                                            name: "Algebra liniowa",
                                            lecturer: "dr Anna Zamojska-Dzienio",
                                            grade: 5,
                                            weight: 4
                                        },
                                        {
                                            name: "Analiza i równania różniczkowe 1",
                                            lecturer: "dr Ewa Stróżyna",
                                            grade: 4.5,
                                            weight: 4
                                        },
                                        {
                                            name: "Logika i teoria mnogości",
                                            lecturer: "dr inż. Żaneta Trębska",
                                            grade: 5,
                                            weight: 4
                                        },
                                        {
                                            name: "Podstawy programowania",
                                            lecturer: "dr inż. Henryk Dobrowolski",
                                            grade: 5,
                                            weight: 5
                                        },
                                        {
                                            name: "Wstęp do informatyki",
                                            lecturer: "dr inż. Wiktor Daszczuk",
                                            grade: 4.5,
                                            weight: 4
                                        },
                                        {
                                            name: "Podstawy prawa - ochrona własności intelektualnej",
                                            lecturer: "dr Agnieszka Woźniak",
                                            grade: 4.5,
                                            weight: 2
                                        },
                                        {
                                            name: "Język angielski egzamin B2",
                                            lecturer: "mgr Małgorzata Witczak",
                                            grade: 5,
                                            weight: 0
                                        },
                                    ]
                                },
                                {
                                    name: "2nd Semester",
                                    classes: [
                                        {
                                            name: "Analiza i równania rózniczkowe 2",
                                            lecturer: "dr Ewa Stróżyna",
                                            grade: 5,
                                            weight: 3
                                        },
                                        {
                                            name: "Matematyka dyskretna",
                                            lecturer: "dr Paweł Naroski",
                                            grade: 5,
                                            weight: 3
                                        },
                                        {
                                            name: "Programowanie obiektowe",
                                            lecturer: "dr inż. Andrzej Pająk",
                                            grade: 5,
                                            weight: 4
                                        },
                                        {
                                            name: "Programowanie zdarzeniowe",
                                            lecturer: "doc. dr inż. Roman Podraza",
                                            grade: 5,
                                            weight: 4
                                        },
                                        {
                                            name: "Podstawy technologii cyfrowej",
                                            lecturer: "dr inż. Andrzej Skorupski",
                                            grade: 4.5,
                                            weight: 4
                                        },
                                        {
                                            name: "Podstawy elektroniki",
                                            lecturer: "prof. nzw. dr hab. Marek Nałęcz",
                                            grade: 5,
                                            weight: 4
                                        },
                                        {
                                            name: "Język angielski poziom B2",
                                            lecturer: "mgr Małgorzata Witczak",
                                            grade: 5,
                                            weight: 2
                                        },
                                        {
                                            name: "Język angielski poziom C1",
                                            lecturer: "mgr Anna Krysińska",
                                            grade: 5,
                                            weight: 2
                                        },
                                        {
                                            name: "Fizyka ogólna",
                                            lecturer: "dr hab. Andrzej Krawiecki",
                                            grade: 3.5,
                                            weight: 4
                                        },
                                    ]
                                },
                                {
                                    name: "3rd Semester",
                                    classes: [
                                        {
                                            name: "Algorytmy i struktury danych",
                                            lecturer: "doc. dr inż. Roman Podraza",
                                            grade: 4.5,
                                            weight: 4
                                        },
                                        {
                                            name: "Bazy danych",
                                            lecturer: "dr inż. Andrzej Ciemski",
                                            grade: 5,
                                            weight: 4
                                        },
                                        {
                                            name: "Systemy operacyjne",
                                            lecturer: "dr inż. Tomasz Jordan Kruk",
                                            grade: 5,
                                            weight: 4
                                        },
                                        {
                                            name: "Teoria sygnałów i informacji",
                                            lecturer: "prof. dr hab. inż. Jerzy Szabatin",
                                            grade: 4.5,
                                            weight: 3
                                        },
                                        {
                                            name: "Fizyczne podstawy przetwarzania informacji",
                                            lecturer: "prof. dr hab. Jan Szmidt",
                                            grade: 5,
                                            weight: 3
                                        },
                                        {
                                            name: "Metody probabilistyczne i statystyczne",
                                            lecturer: "dr inż. Ewa Frankiewicz",
                                            grade: 5,
                                            weight: 4
                                        },
                                        {
                                            name: "Język angielski poziom C1",
                                            lecturer: "mgr. Małgorzata Wieczorek",
                                            grade: 5,
                                            weight: 2
                                        },
                                        {
                                            name: "Podstawy telekomunikacji",
                                            lecturer: "mgr inż. Ewa Obarska",
                                            grade: 5,
                                            weight: 3
                                        },
                                    ]
                                },
                                {
                                    name: "4th Semester",
                                    classes: [
                                        {
                                            name: "Architektura komputerów",
                                            lecturer: "dr inż. Dariusz Turlej",
                                            grade: 4.5,
                                            weight: 4
                                        },
                                        {
                                            name: "Grafika Komputerowa",
                                            lecturer: "prof. dr hab. Jan Zabrodzki",
                                            grade: 5,
                                            weight: 4
                                        },
                                        {
                                            name: "Podstawy badań operacyjnych",
                                            lecturer: "dr hab. inż. Krzysztof Pieńkosz",
                                            grade: 5,
                                            weight: 4
                                        },
                                        {
                                            name: "Podstawy automatyki",
                                            lecturer: "prof. dr hab. Krzysztof Malinowski",
                                            grade: 5,
                                            weight: 4
                                        },
                                        {
                                            name: "Sieci komputerowe",
                                            lecturer: "mgr inż. Jerzy Sobczyk",
                                            grade: 5,
                                            weight: 4
                                        },
                                        {
                                            name: "Kreowanie wizerunku firmy",
                                            lecturer: "dr Tomasz Dusiewicz",
                                            grade: 3,
                                            weight: 2
                                        },
                                        {
                                            name: "Język angielski poziom C1",
                                            lecturer: "Brian Dunn",
                                            grade: 4.5,
                                            weight: 2
                                        },
                                        {
                                            name: "Filozofia polityki",
                                            lecturer: "dr Jan Zubelewicz",
                                            grade: 5,
                                            weight: 2
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            name: "Gimnazjum i Liceum Akademickie w Toruniu",
                            startDate: new Date(2007, 8),
                            endDate: new Date(2013, 4),
                            semesters: [
                                {
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
                };
            };
            return EducationFactory;
        })();
        Services.EducationFactory = EducationFactory;
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Services;
    (function (Services) {
        var Model;
        (function (Model) {
            var EducationHistory = (function () {
                function EducationHistory() {
                }
                return EducationHistory;
            })();
            Model.EducationHistory = EducationHistory;
            var School = (function () {
                function School() {
                }
                return School;
            })();
            Model.School = School;
            var Semester = (function () {
                function Semester() {
                }
                return Semester;
            })();
            Model.Semester = Semester;
            var Classes = (function () {
                function Classes() {
                }
                return Classes;
            })();
            Model.Classes = Classes;
        })(Model = Services.Model || (Services.Model = {}));
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=education-factory.js.map