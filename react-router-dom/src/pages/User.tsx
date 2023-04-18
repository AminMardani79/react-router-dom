import { useParams } from "react-router-dom";
import { getUser } from "../data/Users";

function User() {
  const { userId } = useParams();
  const user = getUser(Number(userId));
  return (
    <main className="flex flex-col gap-3 text-center align-middle border-teal-300">
      <div className="text-2xl text-blue-800">Name: {user?.name}</div>
      <div className="text-xl text-blue-500">Age: {user?.age}</div>
    </main>
  );
}

export default User;
