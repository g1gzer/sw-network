import React from 'react';
import s from "./Item.module.css"


let Item = (props) => {
    return <div className={s.item}>
        <img src="https://cdn.pixabay.com/photo/2014/05/11/13/39/bird-341898_960_720.jpg"></img>

        <div className={s.inner}>
            <div className={s.userName}>
                {props.userName}
            </div>
            <div className={s.status}>
                {props.status}
            </div>
            <div>
                {props.location.country}, {props.location.city}

            </div>
        </div>

        {props.followStatus ? <button onClick={() => {
                props.unfollow(props.id)
            }}>Unfollow</button>
            : <button onClick={() => {
                 props.follow(props.id)
            }}>Follow</button>}
    </div>
};

export default Item;