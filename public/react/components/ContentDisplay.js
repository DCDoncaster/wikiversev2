import React, {useEffect} from 'react';

import apiURL from "../api";

let userData;


async function fetchUsers() {
  try {
    const response = await fetch(`${apiURL}/users/`);
    userData = await response.json();
    
  
  } catch (err) {
    console.log("Oh no an error! ", err);
  }
}




export const ContentDisplay = ({selectedPage, setSelectedPage, fetchPages}) => {
  let tagNames =''
fetchUsers()


async function nukePage(e){
  e.preventDefault()
  const response = await fetch(`${apiURL}/wiki/` + selectedPage.slug, {
    method: 'DELETE'}    
)
setSelectedPage(0)
fetchPages()
}



// #TODO find a way to get userdata without pulling globally

// #TODO add tags in same way 
  return <>

<div id="author">{selectedPage ? <h3>Author</h3>:""}{selectedPage ? userData[selectedPage.authorId-1].name: ""}</div>
<div id="content">{selectedPage ? <h3>Content:</h3>:""}{selectedPage ? selectedPage.content : ""}</div>
<div id="Date">{selectedPage ? <h3>Created Date:</h3>:""}{selectedPage ? selectedPage.createdAt.slice(0,10) : ""}</div>
<div id="Tags">{selectedPage ? selectedPage.tags.forEach(element => {tagNames += ('#'+element.name + ' ')}): ""}{selectedPage ? <><h3>Tags: </h3>{tagNames}</>:""} </div>
<div id='deleteBtn'>{selectedPage ? <button onClick={nukePage}>DELETE</button> : ""}</div>


  </>
} 
 
// 

