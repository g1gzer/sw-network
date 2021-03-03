import React from 'react';
import UsersItems from "./UsersItems/UsersItems";
import s from "./Users.module.css"

let Users = (props) => {
    return (
        <div className={s.content}>

            <UsersItems users={props.users}/>
        </div>
    )
};

export default Users;