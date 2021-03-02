import React from 'react';
import Item from "./Item/Item";
import s from "./UserItems.module.css"

let UsersItems = () => {
    return (
        <div className={s.content}>
            <div className={s.title}>
                <div>All users</div>
            </div>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>


        </div>
    )
};

export default UsersItems;