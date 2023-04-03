import React from "react";
import Accounts from "../components/Accounts";
import AddAccount from "../components/AddAcount";
import EditDeleteAccount from "../components/EditDeleteAccount";
import EditAccount from "../components/EditAccount";

export const appChildren = [

    {
        path: "/",
        element: <Accounts />
    },
    {
        path: "/AddAccount",
        element: <AddAccount />
    },
    {
       path: "/EditDeleteAccount",
       element: <EditDeleteAccount/>
    },
    {
        path: "/EditAccount/:id",
        element: <EditAccount/>
     }
]
