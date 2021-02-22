import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppPipeModule } from "../shared/component/pipe/app-pipe.module";
import { StarModule } from "../shared/component/star/star.module";
import { CourseInfoComponent } from "./course-info.component";
import { CoursesListComponent } from "./courses-list.component";


@NgModule({
    declarations: [
        CoursesListComponent,
        CourseInfoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            { path: 'courses', component: CoursesListComponent },
            { path: 'course/info/:id', component: CourseInfoComponent },
        ])
    ]
})

export class CourseModule {

}