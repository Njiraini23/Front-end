import { useEffect, useState } from 'react';


export default function Users(){

    const [usersList, setUsersList] = useState([]);

    async function fetchAllUsers (){
        try {
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();

            if(result?.users) {
                setUsersList(result?.users)
            } else {
                setUsersList([]);
            }

            console.log(result);
        } catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
     fetchAllUsers()
    },[]);

    console.log(usersList);

    return (
        <div>
        <h1> All Users Lists</h1>
        <ul>
            {
                usersList && usersList.length > 0 ?
                usersList.map(userItem => <li key={userItem?.id}>
                    <p>{userItem?.firstName} {userItem?.lastName} </p>
                </li>) : <p>No users found! Please try again</p>
            }
        </ul>
    </div>
    );
}
    
