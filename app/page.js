

async function fetchUsers () {
  const res = await fetch ("https://dummyjson.com/users")
  const data = await res.json()
  return data.users;
  
}


async function HomePage () {
  const users = await fetchUsers()
  return (
    <ul className="">
      {users.map(user => (
        <li key={user.id} className="bg-slate-400 mb-2 p-4 rounded-md">
          <div>
            <h5>
              {user.id} {user.firstName} {user.lastName}
            </h5>
            <p>
              email: {user.email}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default HomePage