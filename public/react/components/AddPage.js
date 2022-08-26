import React, {useState, useEffect, Component} from 'react'
import apiURL from '../api'


function addPage() {
  return (
    <div>addPage</div>
  )
}

export default addPage

export const AddPage = ({selectedPage, setSelectedPage, formInputs, setFormInputs, fetchPages}) => {


    async function sumbitHandler (e) {
        e.preventDefault()
        
        try {
            const response = await fetch(`${apiURL}/wiki`, {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json",
                    "accept" : "application/json",
                    },
                body: JSON.stringify(formInputs)
                
                
            })
            const data = await response.json()
            console.log(data)
            // console.log(formInputs)
            let newobj = {}
            setFormInputs({})
            // console.log(formInputs)
            fetchPages()
        } catch (err) {
            console.log(err)

            }
        
        }
    
    function onChangeHandler (e) {
        let formData = formInputs
        formData[e.target.name] = e.target.value
        setFormInputs(formData)
        // console.log(formInputs)
        
    }

    return <div>
        <form id="newPage" onSubmit={sumbitHandler}>
            <div>
                <label htmlFor="title">Title</label>
                <input name="title" value={formInputs.title} onChange={onChangeHandler}></input>
            </div>
  =>
            <div>
                <label htmlFor="content">Content: </label>
                <input name="content" value={formInputs.content} onChange={onChangeHandler}></input>
            </div>

            <div>
                <label htmlFor="name" value={formInputs.name} >Author Name: </label>
                <input name="name" value={formInputs.name} onChange={onChangeHandler}></input>
            </div>
            <div>
                <label htmlFor="email">e-mail: </label>
                <input name="email" value={formInputs.email} onChange={onChangeHandler}></input>
            </div>

            <button form="newPage">Submit</button>

        </form>
    </div>
}