import { Component, OnInit } from "@angular/core";
import { Courses } from "./courses";

@Component({
    selector: 'app-course-list',
    templateUrl: './courses-list.component.html'
})

export class CoursesListComponent implements OnInit {

    courses: Courses[] = [];

    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Angular',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                releaseDate: 'November, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 45.99,
                code: 'LKL-1094',
                duration: 80,
                rating: 4,
                releaseDate: 'December, 4, 2019'
            }
        ]
    }
}
