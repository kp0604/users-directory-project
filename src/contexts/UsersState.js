import React, { createContext, useState, useEffect } from "react";

import axios from "axios";

export const UsersContext = createContext(null);
export default function UsersState({ children }) {
  const [users, setUsers] = useState({ message: "", data: null });
  const [selUser, setSuser] = useState(null);

  useEffect(() => {
    setUsers({ message: "loading", data: null });
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then(function (response) {
        console.log(response);
        setUsers({ message: "success", data: response.data });
      })
      .catch(function (error) {
        console.log(error);
        setUsers({ message: "error", data: null });
      });
  }, []);

  const setselUser = (idx) => {
    const user = users.data.filter((user) => user.id === idx);
    setSuser(user[0]);
  };

  return (
    <UsersContext.Provider value={[users, selUser, setselUser]}>
      {children}
    </UsersContext.Provider>
  );
}
