export type Lesson = {
  id: number;
  description: string;
  duration: string;
  seqNo: number;
  courseId: number;
  videoId?: string;
};

export type Lessons = Record<string, Lesson>;
