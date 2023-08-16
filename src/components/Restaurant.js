const RestrauntCart = (props) =>{

    return (
      <div className="restaurantCart">
        <h3>Name {props.resName}</h3>
        <h4>{props.cusins} </h4>
        <h4>Rating {props.stars}</h4>
        <h4>Delivery Time{props.time}</h4>
      </div>
    )
  }
export default RestrauntCart;  