import WrapHOC from "./WrapperHOC";

function LikeImageHOC(props){
  return(
    <div>
      <button onClick={props.handleCount}>Like Image{props.counter} </button>
    </div>
  )
}

export default WrapHOC(LikeImageHOC);
