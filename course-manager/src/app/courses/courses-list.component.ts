import { Component, OnInit } from "@angular/core";
import { Courses } from "./courses";
import { CoursesService } from "./courses.service";

@Component({
    templateUrl: './courses-list.component.html'
})

export class CoursesListComponent implements OnInit {

    filteredCourses: Courses[] = [];

    _courses: Courses[] = [];

    _filterBy: string;

    constructor(private coursesService: CoursesService) { }

    ngOnInit(): void{
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.coursesService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        })
    }

    set filter(value: string) {
        this._filterBy =  value;

        this.filteredCourses = this._courses.filter((courses: Courses) => courses.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}
