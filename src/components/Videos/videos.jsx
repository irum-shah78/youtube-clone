import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../Header/header";
import './videos.css'
import { api } from "../API/api"
import Categories from '../Categories/categories';
import Channel from "../../Assets/Images/Channel.jpeg"
import WatchLater from "../../Assets/Images/watch-later.png"
import AddQueue from "../../Assets/Images/add.png"


const Videos = () => {
  const [data, setData] = useState(null)
  const [filteredData, setFilteredData] = useState(null);
  const fetchData = () => {
    fetch(api)
      .then(response => response.json()).then(result => {
        setData(result?.items)
        setFilteredData(result?.items);
      }).catch(error => {
        console.log(error)
      });
  }

  useEffect(() => {
    setTimeout(() => {
      fetchData()
    }, 1000)
  }, [])
  return (<>
    <Header filteredData={filteredData} />
    <Categories />
    <main>
      <section className="video-grid">
        {data && data?.map((item, id) =>
          <div className="video-preview" key={id}>
            <div className="thumbnail-row">
              <img className="thumbnail" alt="thumbnail" src={item?.snippet?.thumbnails?.medium?.url} />
              <div className="video-time"> 4:51</div>
            </div>
            <div className="video-info-grid">
              <div className="channel-picture">
                <img className="profile-picture" alt="thumbnail" src={Channel} />
              </div>
              <div className="video-info">
                <p className="video-title">
                  {item?.snippet?.title}
                </p>
                <p className="video-author">
                  {item?.snippet?.channelTitle}
                </p>
                {/* <p className="video-description">{item?.snippet?.description}</p> */}
                <p className="video-stats">
                  {item?.snippet?.publishedAt}
                </p>
              </div>

            </div>
            <div className="video-buttons">
              <button type="submit" class="btn text-black w-100 btn-watch mt-1 "
                style={{ borderRadius: "20px", backgroundColor: "rgb(215, 213, 213)", marginBottom: "5px" }}>
                <img className="watch-later bg-gray text-black" alt="watch-later" src={WatchLater} style={{ display: "inline-block", borderRadius: "20px" }} />
                <span>Watch later</span></button>

              <button type="submit" class="btn text-black w-100 btn-add"
                style={{ borderRadius: "20px", backgroundColor: "rgb(215, 213, 213)" }}>
                <img className="add-queue bg-gray text-black" alt="watch-later" src={AddQueue} style={{ display: "inline-block", borderRadius: "10px" }} />
                Add to queue</button>
            </div>

          </div>
        )}
      </section>
    </main>

  </>
  )
}

export default Videos;