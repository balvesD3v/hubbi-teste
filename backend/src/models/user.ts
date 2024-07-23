// src/models/user.ts
export interface User {
  username: string;
  password: string;
}

export const users: User[] = [
  {
    username: "user1",
    password: "$2a$10$abcdefg", // senha hash para 'password'
  },
];

export const findUserByUsername = (username: string): User | undefined => {
  return users.find((user) => user.username === username);
};
