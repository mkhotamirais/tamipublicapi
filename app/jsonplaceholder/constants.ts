export const url = `https://jsonplaceholder.typicode.com`;

export type JpUserType = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type JpPostType = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

export type JpTodoType = {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
};
