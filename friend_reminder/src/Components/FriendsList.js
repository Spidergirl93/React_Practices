import React from 'react';
import Card from './Card';
import styles from '../Styles/FriendsList.module.css';



const FriendsList = props => {

    return (
        <Card className={styles.friends}>
            <ul>
                {props.friends.map(
                    (friend) => 
                    <li key={friend.id}>{friend.name} : {friend.age} year's old</li>)
                }
            </ul>
        </Card>
    )
}

export default FriendsList;
