import React from 'react';
import { Route, Routes } from "react-router-dom";
import { CardWithResponsiveBorderRadius } from './components/info_card';


export default function App() {
  return (
    <Routes >
      <Route path="/" element={CardWithResponsiveBorderRadius()} ></Route>
    </Routes>
  );
}

