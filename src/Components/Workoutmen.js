import React from 'react';


import shouldr from '../Images/shouldr.jpg';
import legs1 from '../Images/legs1.jpg';
import beyond from '../Images/beyond.jpg';
import myp from '../Images/myp.jpg';
import ab from '../Images/ab.jpg';
import './Workoutmen.css';


const Workoutmen = () => {



return (


<div className="workoutwomen">

<p className="titlew"> Free Weights Vs Machines | Who wins?   </p>

<p className="rows1"> 
One of the biggest dilemmas could be whether to use free weights or machines.

? Free weights build a strong foundation to a physique and bring with functional strength.

? Machines can isolate muscle groups and can be safer to go to failure on. So what should we include? Simple answer: both.

</p>
<p className="titlew1"> 
Benefits of free weights 
</p>
<p className="rows1">
Free weights exercises will make up the start of our sessions.
</p>
<img className="img"src={shouldr} />
<p className="rows1">
Exercises such as the squat, deadlift and bench press require a lot of core strength and are generally very taxing on the body. Doing these later in the session when muscles are already fatigued for a beginner could result in injury.

? Also, we will not be going to full failure on free weight exercises. Technique should be of primary concern to the beginner during free weight exercises. If pushing too hard towards failure, novices are much more likely to simply move the weight in order to complete the rep rather than use the target muscles.

? So when doing free weights initially, start light and get form spot on. Don’t worry about what you’re lifting. The better your technique, the more lift in the long term and the more muscle gains you will make.
</p>
<p className="titlew1">
Benefits of weights machines
</p>
<p className="rows1">
We will use machines to finish our sessions off so to speak, to push to failure
</p>
<img className="img" src={legs1} />
<p className="rows1" >
? Machines also us to safely push to failure as they require less stabilising. They are fixed and will only go in one way, so it makes it a lot harder to cheat reps – therefore the stress is kept on the muscle. There is also less stabilising involved.

? We will only use machines that mimic natural movements that could be replicated with free weights. There are plenty of machines that put the body in an unnatural position which could lead to injury.
</p>
<p className="titlew" >
Reps, sets and training sessions?
</p>


<p className="rows1">
Our training method will consist of hypertrophy – this is a type of strength training performed with the intent of building muscle – quicker than with any other method.

Training sets

Sets will be limited to 10-12 working sets per session. Too much volume early on maybe tempting in this new environment however this can lead to burnout and fatigue.

However, we need to give thorough stimulus to each muscle group so each is given adequate volume to allow for a symmetrical physique without muscular imbalances.

Rep range

Therefore – the rep range will be 10-15 on all exercises. This will allow for loads to be used that will be enough to stimulate muscle growth, all proper technique to be learnt but not too heavy to bring about injury.

Training Days

These will be 3 times a week, ideally: Monday, Wednesday and Friday or Tuesday, Thursday and Saturday.

This will allow for at least one of rest in between training sessions. This is pivotal for growth, recovery both physical and mental and general wellbeing. Burnout can very easily happen in your early gym days so this will give you longevity in the gym and keep you fresh.

</p>


<p className="titlew">
The Training Split
</p>
<img className="img" src={beyond} />
<p className="rows1" >
The program will last 6 weeks. 

Weeks 1-2: It’s important to not go to failure on ANY exercises – in addition to stopping a few reps short.

Weeks 3-4: Consciously log your weights and reps.

Weeks 5-6: Look to beat weights/reps you have logged – however, still going a rep or two short of failure on free weight exercises. Train to failure on weights machines.

The training split consists of upper and lower body sessions. E.g.

Monday – Upper, Wednesday – Lower, Friday – Upper, Monday – Lower and so forth…

All exercises will start with 2 warm up sets using 50% of your working weight (weight you will use on your working sets) of 15 – 20 reps followed by 2 working sets of 10 – 12 reps. Following the initial exercise, complete just one warm up set.

</p>


<p className="titlew">
Upper Body & Lower Body Exercises
</p>

<table className="table1">
  <tr>
    <th>Upper Body</th>
    <th>Lower Body Exercises</th>
    
  </tr>
  <tr>
    <td>Deadlifts</td>
    <td>Squats</td>
    
  </tr>
  <tr>
    <td>Standing Military Press</td>
    <td>Romanian Deadlifts</td>
    
  </tr>
  <tr>
    <td>Bench Press</td>
    <td>Walking Lunges</td>
    
  </tr>
   <tr>
    <td>Close Grip Lat Pulldowns</td>
    <td>Leg Extensions</td>
    
  </tr>
   <tr>
    <td>Incline Machine Chest Press</td>
    <td>Lying Leg Curls</td>
    
  </tr>
   
   <tr>
    <td>Seated Machine Lateral Raise</td>
    <td>Leg Press</td>
    
  </tr>
</table>


<p className="titlew" >
Lower Body Training Day | Workout Example
</p>
<img className="img" src={myp} />



<table className="table1">
  <tr>
    <th>Upper Body Exercises</th>
    <th>Sets & Reps</th>
    
  </tr>
  <tr>
    <td>Deadlifts</td>
    <td>2 x 15-20 Warm up, 2 x 10-12 Full</td>
    
  </tr>
  <tr>
    <td>Standing Military Press</td>
    <td>2 x 15-20 Warm up, 2 x 10-12 Full</td>
    
  </tr>
  <tr>
    <td>Bench Press</td>
    <td>2 x 15-20 Warm up, 2 x 10-12 Full</td>
    
  </tr>
   <tr>
    <td>Close Grip Lat Pulldowns</td>
    <td>2 x 15-20 Warm up, 2 x 10-12 Full</td>
    
  </tr>
   <tr>
    <td>Incline Machine Chest Press</td>
    <td>2 x 15-20 Warm up, 2 x 10-12 Full</td>
    
  </tr>
   
   <tr>
    <td>Seated Machine Lateral Raise</td>
    <td>2 x 15-20 Warm up, 2 x 10-12 Full</td>
    
  </tr>
</table>

<p className="titlew" >
Lower Body Training Day | Workout Example
</p>
<img className="img" src={ab} />




<table className="table1">
  <tr>
    <th>Lower Body Exercises</th>
    <th>Sets & Reps</th>
    
  </tr>
  <tr>
    <td>Squats</td>
    <td>2 x 15-20 Warm up, 2 x 10-12 Full</td>
    
  </tr>
  <tr>
    <td>Romanian Deadlifts</td>
    <td>2 x 15-20 Warm up, 2 x 10-12 Full</td>
    
  </tr>
  <tr>
    <td>Walking Lunges</td>
    <td>2 x 15-20 Warm up, 2 x 10-12 Full</td>
    
  </tr>
   <tr>
    <td>Leg Extensions</td>
    <td>2 x 15-20 Warm up, 2 x 10-12 Full</td>
    
  </tr>
   <tr>
    <td>Lying Leg Curls</td>
    <td>2 x 15-20 Warm up, 2 x 10-12 Full</td>
    
  </tr>
   
   <tr>
    <td>Leg Press</td>
    <td>2 x 15-20 Warm up, 2 x 10-12 Full</td>
    
  </tr>
</table>
<p className="titlew" >
Take Home Message
</p>


<p className="rows1" >
Machine exercises aren’t set in stone so if your gym doesn’t have them feel free to swap them out for a suitable alternative.

Free weights however are there for a reason – don’t swap these out!

Anything seems scary at first – take it easy, buddy up with a friend and/or ask for the help of a fitness instructor/personal trainer in your gym.

Get training and get gaining!
</p>


</div>
	);




}

export default Workoutmen;