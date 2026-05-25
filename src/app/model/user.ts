export type User = {
  id: number;
  email: string;
  password: string;
  pictureUrl: string;
};

export type Users = Record<string, User>;
