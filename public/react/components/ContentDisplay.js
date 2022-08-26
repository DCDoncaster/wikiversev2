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




export const ContentDisplay = (props) => {
  let tagNames =''
fetchUsers()
let string = JSON.stringify(props.selectedPage.tags)


async function nukePage(e){
  e.preventDefault()
  
  const response = await fetch(`${apiURL}/wiki/` + props.selectedPage.slug, {
    method: 'DELETE'}    
)}



// #TODO find a way to get userdata without pulling globally

// #TODO add tags in same way 
  return <>

<div id="author">{props.selectedPage ? <h3>Author</h3>:""}{props.selectedPage ? userData[props.selectedPage.authorId-1].name: ""}</div>
<div id="content">{props.selectedPage ? <h3>Content:</h3>:""}{props.selectedPage ? props.selectedPage.content : ""}</div>
<div id="Date">{props.selectedPage ? <h3>Created Date:</h3>:""}{props.selectedPage ? props.selectedPage.createdAt.slice(0,10) : ""}</div>
<div id="Tags">{props.selectedPage ? props.selectedPage.tags.forEach(element => {tagNames += ('#'+element.name + ' ')}): ""}{props.selectedPage ? <><h3>Tags: </h3>{tagNames}</>:""} </div>
<div id='deleteBtn'>{props.selectedPage ? <button onClick={nukePage}>DELETE</button> : ""}</div>
  </>
} 
 
// 