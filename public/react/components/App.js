import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { ContentDisplay } from './ContentDisplay';

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState("");
  
  
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
      <h1>WikiVerse</h1>
      <h2>An interesting 📚</h2>
      <button>Add a page</button>
      <PagesList pages={pages} setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      <ContentDisplay selectedPage={selectedPage}/>
 </main>
  );
};
