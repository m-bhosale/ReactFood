const RestaurantCart = (props) => {
  return (
    <div className="restaurantCart">
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.cloudImageId}`} alt={props.resName} />
      <h1> {props.resName}</h1>
      {/* <h4>Cuisines: {props.cuisines}</h4> */}
      <h3>Rating: {props.stars}</h3>
      <h4>Delivery Time: {props.time} minute</h4>
      <h5>cost for two :{props.costForTwo}</h5>
    </div>
  );
}

export default RestaurantCart;  