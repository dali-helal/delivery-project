import { ActionTypes } from "../constants/cartActionsTypes"

export const addFood = (food) => {
    return {
        type: ActionTypes.ADD_FOOD,
        payload: food
    }
}
export const decrementQuantity = (id) => {
    return {
        type: ActionTypes.DECREMENT_QUANTITY,
        payload: id
    }
}
export const incrementQuantity = (id) => {
    return {
        type: ActionTypes.INCREMENT_QUANTITY,
        payload: id
    }
}