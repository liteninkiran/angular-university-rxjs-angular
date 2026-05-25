import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { Course } from '../model/course';
import { HttpResponse } from '../model/response';

type CourseResponse = HttpResponse<Course[]>;

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  loadAllCourses() {
    const courses$ = this.http.get<CourseResponse>('/api/courses');
    return courses$.pipe(
      map((res) => res.payload),
      shareReplay(),
    );
  }
}
