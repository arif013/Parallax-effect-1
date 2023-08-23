import Cards from './ParallaxSecondCards'
import React from 'react'

function ParallaxSecond() {
    const styles={
        container:{
            backgroundColor: "rgb(28, 29, 32)",
            // height: "50vh",
            borderRadius: "20px",
            width: "22.8vw",
            height:"100%",
            alignItems: "center",
            justifyContent: "center",
            fontSize:"20px",
            textAlign:"center",
            padding:"20px",

        },
        h1:{
            fontSize:"40px",
            backgroundColor:"rgb(28, 29, 32)"
        }
    }
  return (

    <div style={styles.container}>
        <div style={{display:"flex", justifyContent:"center", }}>
        <Cards/> 
        </div>
        <h1 style={styles.h1}>Bulles to visuals <br /> in a click</h1> 
        <p style={{backgroundColor:"rgb(28, 29, 32)"}}>Transform any block to any other and try<br /> different options without any design hassle</p>
    </div>
  )
}

export default ParallaxSecond