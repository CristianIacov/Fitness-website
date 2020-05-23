import React,{Componet,useState,useRef,useEffect} from "react";
import men from '../Images/men.jpg';
import './Paypal.css';
import { connect } from 'react-redux';
import { removeItem,addQuantity,subtractQuantity} from './Actions/CartActions';

const Appay = () => {
	
  const [paidFor, setPaidFor] = useState(false);
  const [loaded, setLoaded] = useState(false);
  let paypalRef = useRef();

  const product = {
    price: 1,
    name: 'Your items',
    description: ''
    
  };
  useEffect(() => {

  	const script = document.createElement("script");
  	script.src=
  	"https://www.paypal.com/sdk/js?client-id=AQVCTub0hUt9ACz0IWeZq3aIDTof3OUQlFzoUbCHmmSCUIcOpdQV2WGp2bsr2kdBo5VYumUE6xsRBudX";
  script.addEventListener("load", () => setLoaded(true));
  document.body.appendChild(script);
  if(loaded){
  	setTimeout(() => {
window.paypal
.Buttons({
	createOrder: (data,actions) => {
		return actions.order.create({
			purchase_units: [{
				description: product.description,
				amount: {
					currency_code:"USD",
					value: product.price
	}

  	}
  	]
  
  });
	},
	onApprove: async (data,actions) => {
		const order=await actions.order.capture();

setPaidFor(true);
		console.log(order);},


	})
.render(paypalRef);
});
}
});






  return (
    <div className="Appay">
     {paidFor ? (

    <div>
    <h1> Congrats sada </h1>
    </div>
  
     

    ):(
    <div>
    <h1>

    
</h1>

<div ref={v => (paypalRef = v)} />
</div>
)}
</div>
);
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }


export default  connect(mapStateToProps)(Appay);