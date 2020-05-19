import React from 'react';
import men from '../Images/men.jpg';
import women from '../Images/women.jpg';
import './Workouts.css';
import './Navigation.css';

const Workout = () => {
  return (
  
  
  
  <div className="row">
  <h1 className="workouttext">TRY OUT ONE OF OUR FREE WORKOUTS </h1>
  <div className="column"> 
<a className=" hover-bg-light-green">
<img  src={men} /	>
</a>

</div>
<div className="column">
<a className=" hover-bg-light-green">
<img  src={women}/	>
</a>
</div>


</div>


  );
}

export default Workout;