import { useRecoilValueLoadable } from "recoil";
import { getUserSelector } from "../store/example";

const useFetchByState = (props) => {

  let Data = useRecoilValueLoadable(getUserSelector) 
  const { state } = Data;
  if (Data.state === "hasError") {
    return <div> There is some problem! </div>;
  }

  if (state === "loading") {
    return <div>loading....</div>;
  }
  if (state === "hasValue") {
    const { contents } = Data;
    return contents;
  }
};

export default useFetchByState;
