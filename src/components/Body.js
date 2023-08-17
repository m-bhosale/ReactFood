  import RestrauntCart from './Restaurant'
  // import { useEffect, useState } from 'react'
  import { useEffect, useState } from 'react'
  const Body = () => {
      const [listOfRestaurants ,setListOfRestraunt] = useState([]);
      const [filterdListOfRestraunts ,setfilterdListOfRestraunts] = useState([]);
      const [searchText ,setSearchText] = useState('');
      useEffect(() =>{fetchData()},[])
      const fetchData = async () =>{
        const  data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5831516&lng=73.7860542&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'); 
        const json = await data.json();
        // .card.card.gridElements.infoWithStyle.info
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestraunt(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterdListOfRestraunts(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }
      return (
        <div>
          <div className='search'>
              <input type='text' placeholder='What do you want ' className='search-box' value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
              }}/>
              <button onClick={()=> {
                 const searchedFilterData = listOfRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                 setfilterdListOfRestraunts(searchedFilterData)
                console.log("search",searchedFilterData);
              }}> Search </button>
          </div>
          <div className='filter'>
          <button className='top-rated-btn' onClick={()=> {
           const filterData =   listOfRestaurants.filter((restaurant) =>  restaurant.info.avgRating > 4);
            setListOfRestraunt(filterData)
          }}>Filter Top rated</button>
        </div>
        <div className='res-container'> 
        {filterdListOfRestraunts?.map((restaurant) =>  <RestrauntCart key ={restaurant.info.id} costForTwo ={restaurant.info.costForTwo} cloudImageId = {restaurant.info.cloudinaryImageId} resName={restaurant.info.name} cusins={restaurant.info.cuisines} time ={restaurant.info.sla.deliveryTime} stars ={restaurant.info.avgRatingString} />)}
        </div>
      </div>
    )
  }

  export default Body;