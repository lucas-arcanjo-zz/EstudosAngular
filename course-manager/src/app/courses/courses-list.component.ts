import { Component, OnInit } from "@angular/core";
import { Courses } from "./courses";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'app-course-list',
    templateUrl: './courses-list.component.html'
})

export class CoursesListComponent implements OnInit {

    courses: Courses[] = [];

    constructor(private coursesService: CoursesService) { }

    ngOnInit(): void{
        this.courses = this.coursesService.retrieveAll();
    }
}
