import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { CardWithResponsiveBorderRadius } from './components/info_card';
import { supabase } from './lib/helper/supabaseclient';


export default function App() {
  const [auth, setAuth]: any = useState(null)

  async function getAuth() {
    const { data, error } = await supabase.from("auth").select()
    if (!error) {
      throw error
    }
    setAuth(data)
  }
  useEffect(() => {
    getAuth()
  }, [])

  if (!auth) {
    return <div>loading.....</div>
  }
  console.log(auth)
  return (
    <Routes >
      <Route path="/" element={CardWithResponsiveBorderRadius()} ></Route>
    </Routes>
  );
}

