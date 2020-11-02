import React from 'react';

const Profile = () => {
    return <div className='content'>
        <img className="intro__img" src="https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png"></img>
        <div className="user__info">
            <img src='https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_960_720.jpg'></img>
            <ul className='info__inner'>
                <li>Serjio J.K.</li>
                <li>Date of Birth:</li>
                <li>City:</li>
                <li>Education</li>
                <li>Web site:</li>
            </ul>
        </div>
        <div className='posts'>
            <div>My posts</div>

        </div>
    </div>
}

export default Profile;