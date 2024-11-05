import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { CardWithResponsiveBorderRadius } from './components/info_card';
import { supabase } from './lib/helper/supabaseclient';


export default function App() {
  const [auth, setAuth]: any = useState([])

  async function getAuth() {
    const { data } = await supabase.from("auth").select()
    setAuth(data)
  }
  useEffect(() => {
    getAuth()
  }, [])
  console.log(auth)

  if (auth.length === 0) {
    return <div>loading.....</div>
  }
  console.log(process.env.SUPABASE_URL)
  return (
    <Routes >
      <Route path="/" element={CardWithResponsiveBorderRadius()} ></Route>
    </Routes>
  );
}

