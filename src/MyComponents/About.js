import React from 'react'

export const About = () => {
  let aboutStyle={
    width:"100vw"
    
  }

  let secondStyle={
    maxheight: "120px",
  
   
  }
  return (
    <>
    <div className= "h-100 d-inline-block" style={aboutStyle}>
     <h2 className="text-center my-2 py-3 bg-primary text-white">Todo List Info</h2>
      <p className="bg-warning text-dark px-5 py-4" style={secondStyle}>
        <p>This Project is use to make a List of Task.</p>
        <p>This can Remind us the Task and we can do work in a time.</p>
       <p> This project run any time and the task we listed that never clean or deleted.</p>
       <p> Only You can Delete that ,if you want to. </p>
       <p>And you can Add List as much as you can.</p>
      </p>
    </div>
    </>
  )
  
}

export default About 