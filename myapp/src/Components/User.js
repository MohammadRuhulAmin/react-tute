import React from 'react'


const users = [
    {
        fullName : "Ruhul Amin",
        age : 27,
        phones :[
            {home:"01322352864"},
            {office:"855222"}
        ]
    },
     {
        fullName : "Sakib Hasan",
        age : 26,
        phones :[
            {home:"01322352864"},
            {office:"855222"}
        ]
     },
     {
        fullName : "Sajid Hasan",
        age : 27,
        phones :[
            {home:"01322352864"},
            {office:"855222"}
        ]
    }


]

function User(){
  return (
    <div>
        <h1>User Information</h1>
        {users.map((user,index)=>(
            <article key = {index}> 
                <h3>{user.fullName}</h3>
                <h3>{user.age}</h3>
                {user.phones.map((phone,index)=><div><p>Home : {phone.home} Office:{phone.office}</p></div>)}
            </article>
            
        ))}
      
    </div>
  )
}
export default User;