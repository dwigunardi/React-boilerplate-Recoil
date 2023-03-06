import React from "react";
import { useRecoilValueLoadable } from "recoil";

export const UseFetchLoading = (props) => {
  const { state, contents } = useRecoilValueLoadable(props); //usahakan props hanya di isi selector dari store
  switch (state) {
    case "hasValue":
      return contents; //value dari state management selector yang hit api
    case "hasError":
      return contents.message; //message error jika gagal
    case "loading":
      return "Loading...."; //sementara, tar ganti  jadi custome loading
    default:
      return " "; //default kasus nya mesti di ganti
  }
};
