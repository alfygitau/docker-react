import React from "react";
import { useUser } from "../hooks/useUser";

const Users = () => {
  const [users, currentUser, loading, next, previous] = useUser(
    "https://randomuser.me/api/"
  );

  console.log(users);
  console.log();
  return (
    <div>
      {loading && <p>Loading...</p>}
      {users?.length <= 1 ? (
        <>
          <p>{users.firstName}</p>
          <p>{users.image}</p>
        </>
      ) : (
        <>
          {users.map((user) => (
            <ul key={user.firstName}>
              <li>{user.firstName}</li>
              {/* <img src={user.image} alt="picture" /> */}
            </ul>
          ))}
        </>
      )}
      <p>{currentUser && currentUser.firstName}</p>
      <button onClick={next}>Next</button>
      <button onClick={previous}>Previous</button>
    </div>
  );
};

export default Users;
