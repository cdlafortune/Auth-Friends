import {axiosWithAuth} from "../utils/axiosWithAuth";
import React, {useState, useEffect} from "react";

const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState({});
    
    useEffect(()=> {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then((res) => {
                console.log(res.data);
                setFriends(res.data);
            })
            .catch((err)=> console.log(err));
    });

    const addFriend = (e) => {
        e.preventDefault();
        console.log(newFriend);
        axiosWithAuth()
            .post("http://localhost:5000/api/friends", newFriend)
            .then((res) => {
                console.log(res.data);
                setFriends(res.data);
            })
            .catch((err)=> console.log(err));
    };

    const handleChanges = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value,
        });
    };


    return(
        <div className="friends">
            <form onSubmit={addFriend}>
                <h1>Add Friend</h1>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    placeholder="Bob"
                    name="name"
                    value={newFriend.name}
                    onChange={handleChanges}
                ></input>
                <br/>

                <label htmlFor="age">Age: </label>
                <input
                    type="number"
                    placeholder="24"
                    name="age"
                    value={newFriend.age}
                    onChange={handleChanges}
                ></input>
                <br/>

                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    placeholder="bob@example.com"
                    name="email"
                    value={newFriend.email}
                    onChange={handleChanges}
                ></input>
                <br/>

                <button type="submit">Add</button>
            </form>

            <h2>Friends List</h2>
            {friends.length > 0 ? (
                friends.map((el) => {
                    return (
                    <div className="friend">
                        <h3>Name: {el.name}</h3>
                        <p>Age: {el.age}</p>
                        <p>Email: {el.email}</p>
                    </div>
                    )})
            ) : (<h3>Add some friends!</h3>)
            }
            
        </div>
    );
};

export default Friends;



