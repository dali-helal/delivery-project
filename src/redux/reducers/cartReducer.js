import produce from "immer"
import { ActionTypes } from "../constants/cartActionsTypes"

const initialState = {
    idRestaurant: 0,
    Foods: [],
    cartQuantity: 0,
    totalPrice: 0,
    srcImg:"",
    nameRestaurant:""
}

const addNewItem = (newFood, existedFood) => {
    if (newFood.id === existedFood.id &&
        newFood.ListSauces.length === existedFood.ListSauces.length &&
        newFood.ListSupp.length === existedFood.ListSupp.length) {
        let isSame = true
        newFood.ListSauces.forEach((el, index) => {
            if (el != existedFood.ListSauces[index]) {
                isSame = false
            }
        })
        newFood.ListSupp.forEach((el, index) => {
            if (el.value != existedFood.ListSupp[index].value) {
                isSame = false
            }
        })
        return isSame
    } else {
        return false
    }
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.ADD_FOOD:
            return produce(state, (draftState) => {
                const food = action.payload;
                draftState.idRestaurant=food.idRestaurant
                draftState.srcImg=food.srcImg
                draftState.nameRestaurant=food.nameRestaurant
                let item = draftState.Foods.find((el) => addNewItem(el, food))
                if (item) {
                    item.quantity++;
                    draftState.totalPrice = (draftState.totalPrice) + (food.price)
                    draftState.cartQuantity+=food.quantity
                }
                else {
                    let sommeSupplement = 0
                    food.ListSupp.forEach((ele) => {
                        sommeSupplement += ele.price
                    })
                    food.price += sommeSupplement
                    draftState.Foods.push(food)
                    draftState.cartQuantity+=food.quantity
                    draftState.totalPrice = (draftState.totalPrice) + (food.price*food.quantity)
                }

            });
        case ActionTypes.INCREMENT_QUANTITY:
            return produce(state, (draftState) => {
                const id = action.payload
                draftState.Foods.forEach(food => {
                    if (food.id === id) {
                        food.quantity++;
                        draftState.cartQuantity++;
                        draftState.totalPrice = draftState.totalPrice + food.price
                    }
                })


            });
        case ActionTypes.DECREMENT_QUANTITY:
            return produce(state, (draftState) => {
                const id = action.payload
                draftState.Foods.forEach((food, index) => {
                    if (food.id === id) {
                        if (food.quantity > 1) {
                            food.quantity--;
                            draftState.cartQuantity--;
                            draftState.totalPrice = draftState.totalPrice - food.price
                        } else {
                            draftState.cartQuantity--;
                            draftState.totalPrice = draftState.totalPrice - food.price
                            draftState.Foods.splice(index, 1)
                        }
                    }
                    if(draftState.cartQuantity==0){
                      draftState.srcImg=""
                      draftState.nameRestaurant=""
                      draftState.idRestaurant=0
                      draftState.totalPrice=0
                    }
                }
               
                )
            });
        case ActionTypes.REMOVE_CART:
            return produce(state,(draftState)=>{
                // initialState
                 draftState.Foods=[];
                  draftState.cartQuantity=0;
                  draftState.idRestaurant=0
                  draftState.srcImg=""
                  draftState.nameRestaurant=""
                  draftState.totalPrice=0
                
            })  ;
        default:
            return state
    }
}
