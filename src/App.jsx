import React from 'react'
import Cards from './components/Cards'
import favoriteIcon from './assets/favourite-icon.png';

const App = () => {
  return (
    <>
      <div className="listing-container">
        <Cards
          title="Iphone 14 Pro 512 Gb"
          price="Rs 179,000"
          imageUrl="https://images.olx.com.pk/thumbnails/490251653-240x180.jpeg" 
          location="Empress Road, Lahore"
          date="2 days ago"
          link="https://www.olx.com.pk/item/iphone-14-pro-512-gb-iid-1093516174"
          favoriteIcon="../assets/favourite-icon.png"
        />
        <Cards
          title="Samsung S23 Plus"
          price="Rs 147,000"
          imageUrl="https://images.olx.com.pk/thumbnails/491020692-240x180.jpeg"
          location="Architects Engineers Society"
          date="1 day ago"
          link="https://www.olx.com.pk/item/samsung-s23-plus-iid-1093643589"
          favoriteIcon="../assets/favourite-icon.png"
        />
        <Cards
          title="iPhone Board"
          price="Rs 15,999"
          imageUrl="https://images.olx.com.pk/thumbnails/490921657-240x180.jpeg"
          location="Allama Iqbal Colony, Faisalabad"
          date="2 weeks ago"
          link="https://www.olx.com.pk/item/iphone-board-xr-xs-max-11-pro-max-12-max-13-pro-max-available-iid-1092279963"
          favoriteIcon="../assets/favourite-icon.png"
        />
        <Cards
          title="Samsung galaxy note 9"
          price="Rs 56,000"
          imageUrl="https://images.olx.com.pk/thumbnails/482982149-240x180.jpeg"
          location="Adalat Garh, Sialkot"
          date="22 hours ago"
          link="https://www.olx.com.pk/item/samsung-galaxy-note-9-iid-1092316659"
          favoriteIcon="../assets/favourite-icon.png"
        />
      </div>
    </>
  )
}

export default App
