  import RestrauntCart from './Restaurant'
  import {SwiggyMockData} from '../utils/mockData'
  // import { useEffect, useState } from 'react'
  import { useState } from 'react'
  const Body = () => {
      const [listOfRestaurants ,setListOfRestraunt] = useState(SwiggyMockData);
      return (
        <div>
          <div className='search'>
            Search
          </div>
          <div className='filter'>
          <button className='top-rated-btn' onClick={()=> {
           const filterData =   listOfRestaurants.filter((restaurant) =>  restaurant.info.avgRating > 4);
            setListOfRestraunt(filterData)
          }}>Filter Top rated</button>
        </div>
        <div className='res-container'> 
        {listOfRestaurants.map((restaurant) =>  <RestrauntCart key ={restaurant.info.id} resName={restaurant.info.name} cusins={restaurant.info.cuisines} time ={restaurant.info.sla.deliveryTime} stars ={restaurant.info.avgRatingString} />)}
        </div>
      </div>
    )
  }

  export default Body;