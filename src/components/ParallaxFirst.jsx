import React from 'react'

function ParallaxFirst() {
    const styles={
        container:{
            backgroundColor: "rgb(28, 29, 32)",
            // height: "50vh",
            borderRadius: "20px",
            // margin: "10px 100px",
            maxWidth: "70vw",
            alignItems: "center",
            justifyContent: "center",
            fontSize:"20px",
            textAlign:"center",
            padding:"20px"
        },
        h1:{
            fontSize:"40px",
            backgroundColor:"rgb(28, 29, 32)"
        }
    }
  return (
      <div  style={styles.container } >
        <svg viewBox="18 -10 110 100" xmlns="http://www.w3.org/2000/svg" style={{height:"100%", width:"100%", backgroundColor:"rgb(28, 29, 32)", borderRadius:"10px"}}>
             {/* Using g to inherit presentation attributes  */}
            <g fill="rgb(33, 35, 41)" >
                <rect x="25" y="0" width="20" height="20" rx={4} ry={4}/>
                <rect x="50" y="0" width="20" height="20" rx={4} ry={4}/>
                <rect x="75" y="0" width="20" height="20" rx={4} ry={4}/>
                <rect x="100" y="0" width="20" height="20" rx={4} ry={4}/>

                <rect x="25" y="25" width="20" height="20" rx={4} ry={4}/>
                <rect x="50" y="25" width="20" height="20" rx={4} ry={4}/>
                <rect x="75" y="25" width="20" height="20" rx={4} ry={4}/>
                <rect x="100" y="25" width="20" height="20" rx={4} ry={4}/>

                <rect x="25" y="50" width="20" height="20" rx={4} ry={4}/>
                <rect x="50" y="50" width="20" height="20" rx={4} ry={4}/>
                <rect x="75" y="50" width="20" height="20" rx={4} ry={4}/>
                <rect x="100" y="50" width="20" height="20" rx={4} ry={4}/>
            </g>
            </svg>
        <h1 style={styles.h1}>A keyboard <br /> first experience</h1> 
        <p style={{backgroundColor:"rgb(28, 29, 32)"}}>Powerful shortcuts and a keyboard-first <br /> workflow means you will get to your finish line <br /> in no time</p>
    </div>
  )
}

export default ParallaxFirst