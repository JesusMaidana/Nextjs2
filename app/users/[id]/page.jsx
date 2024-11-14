async function getUsers(id) {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    const data = await res.json();
    return data; // Devuelve directamente el objeto del usuario
}

async function UserPage({ params }) {
    const user = await getUsers(params.id);
    console.log(params);
    
    return (
        <div className="bg-red-300">
            <h3>{user.id} </h3>
            <p>{user.firstName} {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <img src={user.image} alt={`${user.firstName}'s profile`} />
        </div>
    );
}

export default UserPage;
