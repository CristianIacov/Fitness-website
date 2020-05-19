import Item1 from '../Images/item1.jpeg'
import Item2 from '../Images/item2.jpg'
import Item3 from '../Images/item3.jpg'
import Item4 from '../Images/item4.jpg'
import Item5 from '../Images/item5.jpg'
import Item6 from '../Images/item6.jpg'
import Item7 from '../Images/item7.jpg'
import Item8 from '../Images/item8.jpg'
import Item9 from '../Images/item9.jpg'
import Item10 from '../Images/item10.jpg'
import Item11 from '../Images/item11.jpg'
import Item12 from '../Images/item12.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from './Actions/ActionTypes'


const initState = {
    items: [
        {id:1,title:'Whey protein', desc: "Healthy way to add more protein to your diet", price:225,img:Item1},
        {id:2,title:'Creatine powder', desc: "Provides the energy for muscle contractions", price:210,img: Item2},
        {id:3,title:'BCAA', desc: "Group of three essential amino acids taken in order to boost muscle growth",price:160,img: Item3},
        {id:4,title:'Carnitine', desc: "Helps the body turn fat into energy", price:150,img:Item4},
        {id:5,title:'Pre workout', desc: "Gives boost workout performance", price:200,img: Item5},
        {id:6,title:'Protein bar', desc: "Provides food energy in carbohydrate form",price:20,img: Item6},
        {id:7,title:'Shaker', price:40,img: Item7},
        {id:8,title:'T-Shirt', price:120,img: Item8},
        {id:9,title:'T-Shirt', price:120,img: Item9},
        {id:10,title:'Opti Women', desc: "Gives minerals and vitamins for active women",price:100,img: Item10},
        {id:11,title:'Customized Workout Plan', desc: "Personal workout planning assistant",price:400,img: Item11},
        {id:11,title:'Customized Diet Plan', desc: "Personal meal planning assistant",price:400,img: Item12}

    ],
    addedItems:[],
    total: 0

}
const CartItems= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default CartItems
