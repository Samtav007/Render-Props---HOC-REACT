import { useState } from "react";
const WrapHOC = (WrapperFunction) => {
  function WrapHOC() {
    const [counter, setCounter] = useState(0);
    const handleCount = () => {
      setCounter(counter + 1);
    };
    return (
      <WrapperFunction handleCount={handleCount} counter={counter} />
    );
  }
  return WrapHOC;
};

export default WrapHOC;
