"use client";
import Link from "next/link";

export default function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <li
            className="bg-slate-400 mb-2 p-4 rounded-md text-black
        flex justify-between items-center"
          >
            <div>
              <h5 className="font-bold">
                {user.id} {user.firstName} {user.lastName}
              </h5>
              0<p className="text-slate-100">email: {user.email}</p>
            </div>
            <img src={user.image} className="rounded-full w-20" alt="" />
          </li>
        </Link>
      ))}
    </ul>
  );
}
