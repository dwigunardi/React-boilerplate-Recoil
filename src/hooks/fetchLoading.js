import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { apiSelector, testSelector } from "../store/example";

const UseFetchLoadingApi = () => {

  //hook ini bersifat loading jadi tiap mengunjungi root yang ada hook ini data tersebut akan loading

  const { state, contents } = useRecoilValueLoadable(apiSelector); //usahakan props hanya di isi selector dari store
  const [data, setData] = useState([{kosong:'Kosong'}])
  const [errorMsg, setError] = useState('')
  // console.log(state)
  useEffect(() => {
    let unmounted = false;
    console.log("sedang menjalankan fetching");
    if (state == 'hasValue') {
      setTimeout(() => {
        console.log("Data mulai masuk");
        setData(contents);
      }, 500);
     
    }else if(state =='loading'){
      setData('loading')
    }else if(state == 'hasError'){
      setError(contents.message)
    }
    
 
    return () => {
      unmounted = true;
    };
  }, [data, state]);
  // switch (state) {
  //   case "hasValue":
  //     return contents; //value dari state management selector yang hit api
  //   case "hasError":
  //     return contents.message; //message error jika gagal
  //   case "loading":
  //     return 'Loading'; //sementara, tar ganti  jadi custome loading
  //   default:
  //     return " "; //default kasus nya mesti di ganti
  // }
  return {
    data: data,
    errorMsg:errorMsg
  }
};
export default UseFetchLoadingApi
