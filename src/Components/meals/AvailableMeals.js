import React ,{ useState} from "react";
import axios from 'axios';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


/*
// const DUMMY_MEALS = [
//     {
//       id: 'm1',
//       name: 'Pizza',
//       description: '',
//       price: 22.99,
//     },
//     {
//       id: 'm2',
//       name: 'Burger',
//       description: '',
//       price: 16.5,
//     },
//     {
//       id: 'm3',
//       name: 'sandwich',
//       description: '',
//       price: 12.99,
//     },
//     {
//       id: 'm4',
//       name: 'Cold Coffie',
//       description: '',
//       price: 18.99,
//     },
//   ];
*/
  const API_URL = "https://api.shilpimultiplex.com/api/Product/Index/";
  

  function AvailableMeals(props) {
    const [data, setData] = useState([]);
    axios.get(API_URL + props.Uid).then((result) => {
      // console.log(result.data);
      setData(result.data);
    });
  
  
    const mealsList = data.map((meal) => (
      <>        <br />
      <Card>
    <MealItem 
    key = {meal.id}
    id= {meal.id} 
    name = {meal.productName}
    description={meal.desc} 
    price={meal.price}
    />
    </Card>
   <br />
   </>

    ));

  return (
    <>
    {mealsList}
    </>
    // <section className={classes.meals}>
    //   <br />
    //   <br />
    //     <ul>
    //       {data.map((meal) => (
    //         <div className={classes.meal}>
    //           <Card>
    //             <h3>{meal.productName}</h3>
    //             <img src={meal.imagePath} alt="" />
    //             <div className={classes.description}>{meal.desc}</div>
    //             <div className={classes.price}>{meal.price}$</div>
    //             <br />
    //           </Card>
    //           <br />
    //         </div>
    //       ))}
    //     </ul>
    // </section>
  );
}

export default AvailableMeals;
