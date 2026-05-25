export type Course = {
  id: number;
  description: string;
  longDescription: string;
  seqNo: number;
  iconUrl: string;
  price: number;
  uploadedImageUrl?: string;
  courseListIcon?: string;
  category: CourseCategory;
  url: string;
  lessonsCount?: number;
  promo?: boolean;
};

export function sortCoursesBySeqNo(c1: Course, c2: Course) {
  return c1.seqNo - c2.seqNo;
}

export type CourseCategory = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';

export type Courses = Record<string, Course>;
