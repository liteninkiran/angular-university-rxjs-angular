import { Component, OnInit } from '@angular/core';
import { Course, sortCoursesBySeqNo } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  beginnerCourses: Course[] = [];
  advancedCourses: Course[] = [];

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private coursesService: CoursesService,
  ) {}

  ngOnInit() {
    this.coursesService.loadAllCourses().subscribe();
    // this.http.get('/api/courses').subscribe((res: any) => {
    //   const courses: Course[] = res.payload.sort(sortCoursesBySeqNo);

    //   this.beginnerCourses = courses.filter(
    //     (course) => course.category === 'BEGINNER',
    //   );

    //   this.advancedCourses = courses.filter(
    //     (course) => course.category === 'ADVANCED',
    //   );
    // });
  }

  editCourse(course: Course) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    dialogConfig.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
  }
}
