import React, { useState } from 'react'
import WrapHOC from './WrapperHOC';

function LikePostHOC(props){
  return(
    <div>
      <button onClick={props.handleCount}>Like Post{props.counter} </button>
    </div>
  )
}
export default WrapHOC(LikePostHOC);