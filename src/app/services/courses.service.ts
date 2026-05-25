import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { Course } from '../model/course';
import { HttpResponse } from '../model/response';

type CourseResponse = HttpResponse<Course[]>;

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  loadAllCourses() {
    return this.http.get<CourseResponse>('/api/courses').pipe(
      tap((res) => {
        console.log(res);
      }),
      map((res) => {
        return res.payload;
      }),
    );
  }
}
