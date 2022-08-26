import React, {useState} from 'react';
import apiURL from '../api';

export const Page = (props) => {
 

async function set(){
  const response = await fetch (`${apiURL}/wiki/` + props.page.slug);
  const data = await response.json()
  props.setSelectedPage(data)
}
  return <>


  {/* when done add CSS Hover to indicate a link - can this look at the value of a state and */}
    <h3 value={props.page.title} onClick={set}>{props.page.title} </h3> 
   
  </>
} 
// 

