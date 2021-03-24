import React, { createContext } from "react";

const UserContext = createContext({
    user: {},
    userLoggedIn: false,
    handleLogOut: () => { }
})

export default UserContext;