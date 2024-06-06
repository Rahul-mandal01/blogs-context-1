import React from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";




function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="p-3">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>

  );
}

export default App;
