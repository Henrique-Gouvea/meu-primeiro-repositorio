import { DECREASE, INCREASE } from "./actionsTypes";

export const actionIncreaseOneCounter = () => ({
    type: INCREASE,
})

export const actionDecreaseOneCounter = () => ({
    type: DECREASE,
})