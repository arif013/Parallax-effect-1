import {React, useEffect, useRef} from 'react'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import ParallaxFirst from './ParallaxFirst'
import ParallaxSecond from './ParallaxSecond'
import { useInView } from 'framer-motion'

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

function ParallaxEffect() {

    const styles={
        background:{
          backgroundColor:"black",
          color:"white"
        },
        card:{
          padding:"40px",
          backgroundColor:"gray",
          height:"5vh",
          width:"5vw",
          textAlign:"center",
    
        },
        changeCard:{
          display:"flex",
          alignItems:"center",
        },
        leftCard:{
          marginLeft: "20%",
        },
        rightCard:{
          marginRight: "20%",
        }
      }
  return (
    <>
      <Parallax pages={7} style={styles.background}>
        <ParallaxLayer  sticky={{start:0, end:7}} style={{...styles.changeCard, justifyContent:"flex-start"}}>
          <div style={{ ...styles.leftCard, textAlign:"left"}}>
          <h6 style={{fontSize:'130%',color:'blue'}}>Workflow</h6> <br />
            <h1 style={{fontSize:"450%"}}>Create at <br/> the speed <br/> of thought.</h1> <br />
            <p>Focus on your getting your thoughts out and crafting the best <br /> message while Chronicle does the heavy lifting for you</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer className='reveal' sticky={{start:0, end:3}} style={{...styles.changeCard, justifyContent:"flex-end"}}>
          <div style={{ ...styles.rightCard}}>
          <Section
            >
          <ParallaxFirst/>
          </Section>
          </div>
        </ParallaxLayer>
        <ParallaxLayer className='reveal' sticky={{start:4, end:6}} style={{...styles.changeCard, justifyContent:"flex-end"}}>
          <div
          style={{...styles.rightCard}}>
            <Section>
          <ParallaxSecond/>
          </Section>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default ParallaxEffect