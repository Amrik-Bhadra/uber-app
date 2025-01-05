import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

const userContext = ({ children }) => {
  const [userData, setUserData] = useState({
    email:'',
    fullName:{
        firstName:'',
        lastName:''
    }
  });
  return (
    <div>
      <UserDataContext.Provider value={[userData, setUserData]}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default userContext;
