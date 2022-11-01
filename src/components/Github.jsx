import React, { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

const usersState = atom({
  key: "users",
  default: [],
});

const Github = () => {
  const [users, setUsers] = useRecoilState(usersState);

  const getUsers = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users)
  return <div>Github</div>;
};

export default Github;
