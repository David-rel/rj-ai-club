import Sidebar from '@/components/sidebar'
import React, { useEffect } from 'react'

function index() {

    useEffect(() => {
      if (localStorage.getItem("loggedIn") === "true") {
      } else {
        window.location.href = "/Login";
      }
    }, []);

    
  return (
    <div>
        <Sidebar />
    </div>
  )
}

export default index