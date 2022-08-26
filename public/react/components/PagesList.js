import React from 'react';
import { Page } from './Page';

export const PagesList = ({pages,setSelectedPage, selectedPage}) => {
	
	return <>
		{
			pages.map((page, idx, selectedPage) => {

				//onclick here?
				
				return <Page page={page} key={idx} setSelectedPage={setSelectedPage} selectedPage={selectedPage}/>
			})
		}
	</>
} 
