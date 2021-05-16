import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { PageTest } from "./page-test";
import { PageMain } from "./page-main";
import { FlexibleList } from "./mod-flexible_list";


function App() {
  return (
    <div style={{ height: "100vh" }}>
      {/* <PageMain/> */}
      <PageTest/>
    </div>
    // <PageTest/>
    // <div style={{ background: "red", height: "100vh" }}>
    //   NOTHING TO SHOW
    // </div>
  );
}

export default App;
