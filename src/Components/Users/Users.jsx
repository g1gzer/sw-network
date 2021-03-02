import React from 'react';
import UsersItems from "./UsersItems/UsersItems";
import s from "./Users.module.css"

let Users = () => {
    return (
        <div className={s.content}>

            <UsersItems/>
        </div>
    )
};

export default Users;