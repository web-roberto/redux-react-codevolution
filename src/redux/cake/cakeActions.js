import { BUY_CAKE } from './cakeTypes'

//devuelve el objeto action:{type, payload} que yo deseeo para hacer usarlo en un dispatch
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}
