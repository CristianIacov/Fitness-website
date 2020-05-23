import React from 'react';
import men from '../Images/men.jpg';
import women from '../Images/women.jpg';
import './Workouts.css';
import './Navigation.css';

const Workout = ({onRouteChange}) => {
  return (
  
  
  
  <div className="row">
  <p className="workouttext">TRY OUT ONE OF OUR FREE WORKOUTS </p>
  <div className="column"> 
<a onClick={()=> onRouteChange('wwmen') }className=" hover-bg-light-green">
<img  src={men} /	>
</a>

</div>
<div className="column">
<a onClick={()=> onRouteChange('wmen')} className=" hover-bg-light-green">
<img  src={women}/	>
</a>
</div>


</div>


  );
}

export default Workout;