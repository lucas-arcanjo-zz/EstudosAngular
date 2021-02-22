import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { timingSafeEqual } from "crypto";
import { Courses } from "./courses";
import { CoursesService } from "./courses.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
    
    courses: Courses;

    constructor(private activatedRoute: ActivatedRoute, private coursesService: CoursesService) {}

    ngOnInit(): void {
        this.courses = this.coursesService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
    }

    save(): void {
        this.coursesService.save(this.courses);
    }

}