import { Component, OnInit } from "@angular/core";
import { Courses } from "./courses";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'app-course-list',
    templateUrl: './courses-list.component.html'
})

export class CoursesListComponent implements OnInit {

    filteredCourses: Courses[] = [];

    _courses: Courses[] = [];

    _filterBy: string;

    constructor(private coursesService: CoursesService) { }

    ngOnInit(): void{
        this._courses = this.coursesService.retrieveAll();
        this.filteredCourses = this._courses;
    }


    set filter(value: string) {
        this._filterBy =  value;

        this.filteredCourses = this._courses.filter((courses: Courses) => courses.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}
