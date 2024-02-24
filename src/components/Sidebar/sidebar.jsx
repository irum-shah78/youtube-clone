import React from 'react'
import "./sidebar.css"

import home from "../../Assets/Icons/home.svg"
import explore from "../../Assets/Icons/explore.svg"
import subscriptions from "../../Assets/Icons/subscriptions.svg"
import originals from "../../Assets/Icons/originals.svg"
import ytmusic from "../../Assets/Icons/youtube-music.svg"
import library from "../../Assets/Icons/library.svg"
const Sidebar = () => {
  return (
    <nav className="sidebar position-fixed bg-white">
      <div className="sidebar-link d-flex flex-column justify-content-center align-items-center">
        <img alt="home" src={home} />
        <div>Home</div>
      </div>
      <div className="sidebar-link d-flex flex-column justify-content-center align-items-center">
        <img alt="explore" src={explore} />
        <div>Explore</div>
      </div>
      <div className="sidebar-link d-flex flex-column justify-content-center align-items-center">
        <img alt="subscriptions" src={subscriptions} />
        <div>Subscriptions</div>
      </div>
      <div className="sidebar-link d-flex flex-column justify-content-center align-items-center">
        <img alt="originals" src={originals} />
        <div>Originals</div>
      </div>
      <div className="sidebar-link d-flex flex-column justify-content-center align-items-center">
        <img alt="ytmusic" src={ytmusic} />
        <div>YT Music</div>
      </div>
      <div className="sidebar-link d-flex flex-column justify-content-center align-items-center">
        <img alt="library" src={library} />
        <div>Library</div>
      </div>
    </nav>

  )
}

export default Sidebar;