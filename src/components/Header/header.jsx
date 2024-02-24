import "./header.css"
import "./general.css"
import React from 'react'
import menu from "../../Assets/Icons/hamburger-menu.svg"
import logo from "../../Assets/Icons/youtube-logo.svg"
import search from "../../Assets/Icons/search.svg"
import voicesearch from "../../Assets/Icons/voice-search-icon.svg"
import upload from "../../Assets/Icons/upload.svg"
import ytapps from "../../Assets/Icons/youtube-apps.svg"
import notifications from "../../Assets/Icons/notifications.svg"
import channel from "../../Assets/Images/my-channel.jpg"
import Channel from "../../Assets/Images/Channel.jpeg"
import { useState } from "react"


const Header = ({ filteredData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
    } else {
      const results = filteredData.filter(
        item => item.snippet.title.includes(searchQuery)
      );
      setSearchResults(results);
    }
  };
  return (
    <>
      {/* Header */}
      <div className="header">

        <div className="left-section ">
          <img className="hamburger-menu " alt="menu" src={menu} />
          <img className="yt-logo " alt="logo" src={logo} />
        </div>
        <div className="middle-section" >
          <input className="search-bar" type="text" placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={handleSearch}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }} />

          <button className="search-btn r">
            <img className="search-icon " alt="search" src={search} />
            <div className="tooltip ">Search</div>
          </button>
          <button className="voice-search-btn ">
            <img className="voice-search-icon " alt="voice-search" src={voicesearch} />
            <div className="tooltip ">Search with your voice</div>
          </button>
        </div>
        <div className="right-section ">
          {searchResults.length > 0 && (
            <div className="search-results-overlay bg-white" >
              {searchResults.map((result, index) => (
                <div key={index} className="search-result-item"  >
                  <div className="thumbnail-row">
                    <img className="thumbnail" alt="thumbnail" src={result?.snippet?.thumbnails?.medium?.url} />
                    <div className="video-info-grid">
                      <div className="channel-picture">
                        <img className="profile-picture" alt="thumbnail" src={Channel} />
                      </div>
                      <div className="video-info">
                        <p className="video-title">
                          {result?.snippet?.title}
                        </p>
                        <p className="video-author">
                          {result?.snippet?.channelTitle}
                        </p>
                        <p className="video-stats">
                          {result?.snippet?.publishedAt}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

              ))}
            </div>
          )}
          <div className="upload-container">
            <img className="upload-icon" alt="upload" src={upload} />
            <div className="tooltip">Create</div>
          </div>
          <div className="yt-apps-container">
            <img className="yt-app-icon" alt="yt-apps" src={ytapps} />
            <div className="tooltip">YouTube Apps</div>
          </div>
          <div className="notifications">
            <img className="notification-icon" alt="notifications" src={notifications} />
            <div className="notifications-count">3</div>
            <div className="tooltip ">Notifications</div>
          </div>
          <img className="user-pic" alt="channel" src={channel} />
        </div>
      </div>

    </>
  )
}

export default Header;