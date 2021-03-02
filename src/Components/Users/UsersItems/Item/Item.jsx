import React from 'react';
import s from "./item.module.css"

let Item = () => {
    return <div className={s.item}>
        <img src="https://cdn.pixabay.com/photo/2014/05/11/13/39/bird-341898_960_720.jpg"></img>

        <div className={s.inner}>
            <div className={s.userName}>
                    ffffffff
            </div>
            <div className={s.status}>
                aaaaaaa
            </div>
            <div className={s.location}>
                lllllll, asfasfasf
            </div>
        </div>
        <button> Follow</button>
    </div>
};

export default Item;