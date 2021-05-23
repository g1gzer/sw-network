import React from 'react';
import s from "./Users.module.css"
import UsersItems from "./UsersItems/UsersItems";
import * as axios from "axios";


class Users extends React.Component {
    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=5&nat=us,dk,fr,gb&inc=name,picture,location')
            .then(respons => {
                let usersArr = [];
                let i = 0;
                console.log(respons.data)
                respons.data.results.forEach(el => {
                    i += 1
                    usersArr.push({
                        id: i,
                        userName: el.name.first + ' ' + el.name.last,
                        userImage: el.picture.large,
                        followStatus: Math.random() < 0.5,
                        status: 'Hi, how are you!',
                        location: {city: el.location.city, country: el.location.country}
                    })
                })
                i = 0;
                this.props.setUsers(usersArr);
            })
    }

    render() {


        return (
            <div className={s.content}>
                <UsersItems users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}/>
            </div>
        )

    }
}

export default Users;