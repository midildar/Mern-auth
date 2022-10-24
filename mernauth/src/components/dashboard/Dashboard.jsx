import React from 'react'

const Dashboard = () => {
  
  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.reload()
  }
  
    return (
    <div>
        <h1>Welcome user</h1>
        <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Dashboard