import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Courses } from "./courses";
import { CoursesService } from "./courses.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
    
    courses: Courses;

    constructor(private activatedRoute: ActivatedRoute, private coursesService: CoursesService) {}

    ngOnInit(): void {
        this.coursesService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: courses => this.courses= courses,
            error: err => console.log('Error', err)
        });
    }

    save(): void {
        this.coursesService.save(this.courses).subscribe({
            next: courses => console.log('Saved with success', courses),
            error: err => console.log('Error', err)
        });
    }

}