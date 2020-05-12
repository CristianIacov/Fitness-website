import React from 'react';
import './Diet.css';
import fasting from '../Images/fasting.jpeg';
import unhealthy from '../Images/unhealthy.jpg';

const Diet = () => {
  return (
  	<div className="diet">
		<h3>One of the best ways to lose weight is by changing your diet. </h3>

		<h3>Yet, the sheer number of available diet plans may make it difficult to get started, as you’re unsure which one is most suitable, sustainable, and effective. </h3>

		<h3> Some diets aim to curb your appetite to reduce your food intake, while others suggest restricting your intake of calories and either carbs or fat. </h3>

		<h3> What's more, many offer health benefits that go beyond weight loss. </h3>

		<h3> Here are 2 examples of best diet plans to help you shed weight and improve your overall health. </h3>
		
		<img src={fasting} width="300" height="200" />

		<h1>1.Intermittent fasting</h1>

		<p>Intermittent fasting is a dietary strategy that cycles between periods of fasting and eating. </p>

		<p>Various forms exist, including the 16/8 method, which involves limiting your calorie intake to 8 hours per day, and the 5:2 method, which restricts your daily calorie intake to 500–600 calories twice per week. </p>

		<p> <b>How it works:</b> Intermittent fasting restricts the time you’re allowed to eat, which is a simple way to reduce your calorie intake. This can lead to weight loss — unless you compensate by eating too much food during allowed eating periods. </p>

		<p> <b>Weight loss: </b> In a review of studies, intermittent fasting was shown to cause 3–8% weight loss over 3–24 weeks, which is a significantly greater percentage than other methods. </p>

		<p>The same review showed that this way of eating may reduce waist circumference by 4–7%, which is a marker for harmful belly fat. </p>

		<p>Other studies found that intermittent fasting can increase fat burning while preserving muscle mass, which can improve metabolism. </p>

		<p><b>Other benefits:</b> Intermittent fasting has been linked to anti-aging effects, increased insulin sensitivity, improved brain health, reduced inflammation, and many other benefits. </p>

		<p><b>Downsides:</b> In general, intermittent fasting is safe for most healthy adults. </p>

		<p>That said, those sensitive to drops in their blood sugar levels, such as some people with diabetes, low weight, or an eating disorder, as well as pregnant or breastfeeding women, should talk to a health professional before starting intermittent fasting. </p>

		<h3>Summary</h3>
		<p>Intermittent fasting cycles between periods of fasting and eating. It has been shown to aid weight loss and is linked to many other health benefits. </p>

		<img src={unhealthy} width="300" height="300" />

		<h1>2.Low-fat diet</h1>

		<p>Like low-carb diet, low-fat diet has been popular for decades.</p>

		<p>In general, a low-fat diet involves restricting your fat intake to 30% of your daily calories.</p>

		<p>Some very and ultra-low-fat diet aim to limit fat consumption to under 10% of calories.</p>

		<p><b>How it works:</b> Low-fat diet restrict fat intake because fat provides about twice the number of calories per gram, compared with the other two macronutrients — protein and carbs.</p>

		<p>Ultra-low-fat diet contain fewer than 10% of calories from fat, with approximately 80% of calories coming from carbs and 10% from protein.</p>

		<p>Ultra-low-fat diet is mainly plant-based and limit meat and animal products.</p>

		<p><b>Weight loss: </b> As low-fat diets restrict calorie intake, they can aid weight loss.</p>

		<p>An analysis of 33 studies including over 73,500 participants found that following a low-fat diet led to small but relevant changes in weight and waist circumference.</p>

		<p>However, while low-fat diets appear to be as effective as low-carb diets for weight loss in controlled situations, low-carb diets seem to be more effective day to day.</p>

		<p>Ultra-low-fat diets have been shown to be successful, especially among people with obesity. For example, an 8-week study in 56 participants found that eating a diet comprising 7–14% fat led to an average weight loss of 14.8 pounds (6.7 kg).</p>

		<p><b>Other benefits:</b> Low-fat diets have been linked to a reduced risk of heart disease and stroke. They may also reduce inflammation and improve markers of diabetes.</p>

		<p><b>Downsides:</b> Restricting fat too much can lead to health problems in the long term, as fat plays a key role in hormone production, nutrient absorption, and cell health. Moreover, very-low-fat diets have been linked to a higher risk of metabolic syndrome.</p>

  	</div>
  	);
}
export default Diet;
