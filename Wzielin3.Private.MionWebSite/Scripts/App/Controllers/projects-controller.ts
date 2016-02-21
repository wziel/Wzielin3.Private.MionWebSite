

module App.Controllers {
    "use strict";

    export class ProjectsController {
        static $inject = ["$scope", "projects"];

        constructor($scope: Scopes.IProjectsScope, projects: Services.ProjectsFactory) {
            $scope.projects = projects.getAll();
            $scope.tags = projects.getAllTags();

            $scope.filterCollapsed = true;
            $scope.includedTags = [];
            $scope.includeTag = (tag: string, toogle: boolean = true) => {
                var i = $scope.includedTags.indexOf(tag);
                if (i > -1) {
                    $scope.includedTags.splice(i, 1);
                }
                else if (toogle) {
                    $scope.includedTags.push(tag);
                }
            }

            $scope.tagFilter = (project) => {
                if ($scope.includedTags.length > 0) {
                    for (var tag in project.tags) {
                        if ($scope.includedTags.indexOf(project.tags[tag]) > -1) {
                            return project;
                        }
                    }
                    return;
                }
                return project;
            }
        }
    }
}

module App.Controllers.Scopes {
    "use strict";
    export interface IProjectsScope extends ng.IScope {
        projects: App.Models.Projects.Project[];
        tags: string[];

        includedTags: string[];
        includeTag: (tagName: string, toogle: boolean) => void;
        tagFilter: (project: Models.Projects.Project) => Models.Projects.Project;
        filterCollapsed: boolean;
    }
}