module App.Helpers {
    "use strict";

    export class Education {

        public static getAverageScoreForSemester(semester: Models.Education.Semester): string {
            return this.getAverageScoreFor(semester.classes).toFixed(2).toString();
        }

        public static getAverageScoreFor(classes: Models.Education.Classes[]): number {
            var sum = 0;
            var weight = 0;
            for (var i = 0; i < classes.length; ++i) {
                sum += classes[i].grade * classes[i].weight;
                weight += classes[i].weight;
            }
            return sum / weight;
        }
    }
}