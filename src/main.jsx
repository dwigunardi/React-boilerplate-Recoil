import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "./routes/mainRoute";
import 'antd/dist/reset.css';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
      <MainRoute />
      {/* <MainLayout>
        <Suspense fallback={"Loading...."}>
          <Home />
        </Suspense>
      </MainLayout> */}
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
