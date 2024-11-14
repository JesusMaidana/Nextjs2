import Users from '@/components/Users'

async function fetchUsers() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return data.users;
}

async function HomePage() {
  const users = await fetchUsers();
  return (
    <Users users={users} />

  );
}

export default HomePage;
