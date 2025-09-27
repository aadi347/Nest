import React from 'react'


const LoginLoader = () => {
    return (
        <div>
<div className="fixed inset-0 z-50 h-screen w-screen flex items-center justify-center bg-white/40 baclkdrop-blur-3xl">
  
<div className="card">
  <div className="loader">
    <p>loading</p>
    <div className="words">
      <span className="word">Details</span>
      <span className="word">Name</span>
      <span className="word">Dashboard</span>
      <span className="word">Blog</span>
      <span className="word">UI/UX</span>
    </div>
  </div>
</div>
</div>
        </div>
    )
}

export default LoginLoader
