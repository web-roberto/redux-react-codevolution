import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer (props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    //el prop será prop.numOfCakes
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //el prop será prop.buyCake(number)    
    buyCake: () => dispatch(buyCake())
  }
}

//inyecta el estado global (de react-redux) como props de este componente y los dispatch también
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)
