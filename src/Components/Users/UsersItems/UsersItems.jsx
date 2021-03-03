import React from 'react';
import Item from "./Item/Item";
import s from "./UserItems.module.css"


let UsersItems = (props) => {
    let items = props.users.map(item => <Item id={item.id} key={item.id} userName={item.userName} followStatus={item.followStatus} status={item.status} location={item.location}/> );
    return (
        <div className={s.content}>
            <div className={s.title}>
                <div>All users</div>
            </div>
            {items}


        </div>
    )
};

export default UsersItems;