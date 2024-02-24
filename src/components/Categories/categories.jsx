import React from 'react'
import { useState } from 'react'
import './categories.css'

const keywords = [
  "Live",
  "News",
  "Music",
  "Gaming",
  "Web Development",
  "Computer Programming",
  "JavaScript",
  "ReactJS",
  "PCT",
  "ARY News",
  "Thoughts",
  "Ghazal",
  "Mixes",
  "Podcasts",
  "Recently Viewed"
]
const Categories = () => {
  const [activeElement, setActiveElement] = useState("All")

  const handleClick = (value) => {
    setActiveElement(value)
  }
  return (
    <div className='categories-bar d-flex pb-2 fs-6'>
      <div className='all-option bg-dark text-white pt-2 pb-2 ps-3 pe-3 me-2'>All</div>
      {keywords.map((value, i) => (
        <button key={i} onClick={() => handleClick(value)} className={activeElement === value ? 'active' : ""}>{value}</button>
      ))}
    </div>
  )
}

export default Categories;