import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer (props) {
  return (
    <>
      <h2>Item - {props.item}</h2>
      <div>
        <button onClick={props.buyItem}>Buy Items</button>
      </div>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams
  return {
    item: itemState
  }
}
//inyecta el estado global (de react-redux) como props de este componente y los dispatch también
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())
  return {
    buyItem: dispatchFunction
  }
}
//inyecta el estado global (de react-redux) como props de este componente y los dispatch también
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemContainer)
