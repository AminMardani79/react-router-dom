import { getUsers } from "../data/Users";
import { Link, Outlet } from "react-router-dom";

function Users() {
  const users = getUsers();
  return (
    <div>
      <h1 className="text-center pb-3">Users</h1>
      <nav className="flex flex-col align-middle gap-4">
        {users.map((user) => {
          return (
            <Link
              className="text-center bg-blue-200 text-blue-800 px-3 py-2"
              key={user.id}
              to={`/users/${user.id}`}
            >
              name : {user.name} & age : {user.age}
            </Link>
          );
        })}
        <Outlet></Outlet>
      </nav>
    </div>
  );
}

export default Users;
