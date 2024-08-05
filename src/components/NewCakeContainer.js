import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

//comparar con HooksCakeContainer.js
function NewCakeContainer (props) {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => props.buyCake(number)}>Buy X Cakes</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    //el prop será prop.numOfCakes
    numOfCakes: state.cake.numOfCakes//lo normal sin 'connect', ver HooksCakeContainer.js
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //el prop será prop.buyCake(number)
    buyCake: number => dispatch(buyCake(number)) //lo normal sin 'connect', ver HooksCakeContainer.js
  }
}
//inyecta el estado global (de react-redux) como props de este componente y los dispatch también
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCakeContainer)
