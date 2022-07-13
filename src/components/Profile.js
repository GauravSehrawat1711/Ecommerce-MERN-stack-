import React from 'react'

const Profile = () => {
    const auth=localStorage.getItem('user')
  return (
    <div className='profile'>
       <h2>Your Profile</h2> 
      <div className="card" style={{width: '18rem'}}>
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="card-img-top" alt="..." />
       
      </div>
           <div className="card" style={{width: '18rem'}}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{`NAME :${JSON.parse(auth).name.toUpperCase()}`}</li>
          <li className="list-group-item">{`EMAIL :${JSON.parse(auth).email.toUpperCase()}`}</li>
          <li className="list-group-item">{`ID :${JSON.parse(auth)._id}`}</li>
        </ul>
   
      </div>
    </div>
  )
}

export default Profile