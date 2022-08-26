import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { ContentDisplay } from './ContentDisplay';
import { AddPage } from "./AddPage";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () =>  {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState("");
  const [formInputs, setFormInputs] = useState({})
  

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }  
    
  }
 

// #TODO Add form and reset state so that contentDisplay hides
  useEffect(() => {
    fetchPages();
  }, []);

  return (
    //THIS IS WHAT APPEARS WHEN WORKING PROPERLY
    //if statement against pages length to decide if to render?
    <main>
      <h1>Don't-A-Pedia</h1>
      <h2>Working, but ugly...👺</h2>
      
      <div> <PagesList pages={pages} setSelectedPage={setSelectedPage} selectedPage={selectedPage} /><h3 id='addpagebtn' onClick={()=> setSelectedPage(0)+fetchPages()} >Add Page</h3> <h3 id='close' onClick={()=> setSelectedPage(0)+fetchPages()}>Close </h3></div>
      <ContentDisplay selectedPage={selectedPage} setSelectedPage={setSelectedPage} fetchPages={fetchPages}/>
      {selectedPage ? "" :<AddPage setSelectedPage={setSelectedPage} formInputs={formInputs} setFormInputs={setFormInputs} selectedPage={selectedPage} fetchPages={fetchPages} />}
      
 </main>
  );
};
