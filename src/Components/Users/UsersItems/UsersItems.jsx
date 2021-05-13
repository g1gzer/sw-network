import React from 'react';
import Item from "./Item/Item";
import s from "./UserItems.module.css"


let UsersItems = (props) => {
    if (props.users.length === 0 ) {
        props.setUsers([
            {id: 1, userName: 'Special Spirit', followStatus: false, status: 'Hi, how are you!', location: {city: "Saint-Petersburg", country: "Russia"}},
            {id: 2, userName: 'Gordon Freeman', followStatus: true, status: 'Lol it\'s my first post', location: {city: "Moscow", country: "Russia"}},
            {id: 3, userName: 'Sanya Volkov', followStatus: false, status: 'Hello. What\'s up?', location: {city: "Kiev", country: "Ukraine"}},
        ])
    }
    let items = props.users.map(item => <Item id={item.id} userName={item.userName} status={item.status} location={item.location} followStatus={item.followStatus} follow={props.follow} unfollow={props.unfollow} setUsers={props.setUsers}/> );
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