import { Component, OnInit } from '@angular/core';
import { Course, CourseCategory, sortCoursesBySeqNo } from '../model/course';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const sortCourses = (courses: Course[]) => courses.sort(sortCoursesBySeqNo);

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  beginnerCourses$!: Observable<Course[]>;
  advancedCourses$!: Observable<Course[]>;
  courses$!: Observable<Course[]>;

  constructor(
    private dialog: MatDialog,
    private coursesService: CoursesService,
  ) {}

  ngOnInit() {
    this.loadAllCourses();
    this.loadBeginnerCourses();
    this.loadAdvancedCourses();
  }

  public editCourse(course: Course) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    dialogConfig.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
  }

  private loadAllCourses() {
    this.courses$ = this.coursesService.loadAllCourses().pipe(map(sortCourses));
  }

  private loadBeginnerCourses() {
    this.beginnerCourses$ = this.getCourses('BEGINNER');
  }

  private loadAdvancedCourses() {
    this.advancedCourses$ = this.getCourses('ADVANCED');
  }

  private getCourses(category: CourseCategory) {
    return this.courses$.pipe(
      map((courses) =>
        courses.filter((course) => course.category === category),
      ),
    );
  }
}
