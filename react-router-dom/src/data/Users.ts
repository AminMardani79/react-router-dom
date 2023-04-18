interface IUserType {
  id: number;
  name: string;
  age: string;
}
type GetUsersType = () => IUserType[];
type GetUserType = (userId: number) => IUserType | undefined;
const users: IUserType[] = [
  { id: 1, name: "amin", age: "22" },
  { id: 2, name: "ali", age: "20" },
  { id: 3, name: "ahmad", age: "18" },
  { id: 4, name: "mahdi", age: "30" },
  { id: 5, name: "mohammad", age: "21" },
  { id: 6, name: "abas", age: "13" },
  { id: 7, name: "nazanin", age: "25" },
];

export const getUsers: GetUsersType = () => {
  return users;
};

export const getUser: GetUserType = (userId: number) => {
  return users.find((user) => user.id === userId);
};
