import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardFirstImg from '../assets/CardFirstImg.webp';
import CardSecondImg from '../assets/CardSecondImg.webp'
import CardThirdImg from '../assets/CardThirdImg.webp'
import CardMidButton from '../assets/CardMidButton.webp'
import {motion} from 'framer-motion'
import { useInView } from 'react-spring';
// import { useInView } from 'react-intersection-observer';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

// const isInView = useInView(ref, {once:false});
const images = [

]

export default function BasicCard() {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    setIsActive(true);

    const timer = setTimeout(() => {
      setIsActive(false); // Stop rotating after 2 seconds

      setTimeout(() => {
        setIsActive(true); // Start rotating again after 2 seconds
      }, 1000);
    }, 1000);

    return () => {
      clearTimeout(timer); // Clean up the timer when the component unmounts
    };
  }, []);

  // Different section showing
  const [selectedImage, setSelectedImage] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (selectedImage === 2) {
        setSelectedImage(0);
        return;
      }
      setSelectedImage((prevValue) => {
        if (prevValue === 2) {
          return 0;
        }
        return prevValue + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Framer motion animation
  const variants = {
    hidden: {  opacity: 0, x:1, y:-7 },
    visible: { x: 0,y: 0, opacity: 1,  },
    exiting: { x:35, y:0, opacity: 0, duration:2 }
  };

  

  return (
    <div style={{backgroundColor:"rgb(28, 29, 32)", borderRadius:"10px", width:"100%" }}>
    <Card style={{backgroundColor:"rgb(28, 29, 32)", borderRadius:"10px", boxShadow:"none"}} sx={{ minWidth: 85 }}>
      
      <svg viewBox="1 20 105 80" xmlns="http://www.w3.org/2000/svg" style={{height:"100%", width:"100%", backgroundColor:"rgb(28, 29, 32)", borderRadius:"10px"}}>
             {/* Using g to inherit presentation attributes  */}
            <motion.g 
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exiting"
              // animate={{ x: [1,0], y:[-7,0,0] }}
              transition={{ 
                repeat:Infinity, 
                duration:1, 
                // ease: "easeInOut" 
              }}
              fill="rgb(33, 35, 41)" >
              <image x={0} y={0} href={CardFirstImg} height="100" width="35" />
            </motion.g>

            <motion.g 
              // variants={variants}
              // initial="hidden"
              // animate="visible"
              // exit="exiting"
              animate={{x:[0], y:[-7,0]}}
              transition={{
                repeat:Infinity, 
                duration:1, 
                // ease: "easeInOut"
              }} 
              fill="rgb(33, 35, 41)" >
              <image x={35} y={0} href={CardSecondImg} height="100" width="35" />
             </motion.g>

            <motion.g
              // variants={variants}
              // initial="hidden"
              // animate="visible"
              // exit="exiting" 
              animate={{x:[-1,0],y:[-7,0]}}
              transition={{
                repeat:Infinity, 
                duration:1, 
                // ease: "easeInOut"
              }}
              fill="rgb(33, 35, 41)" >
              <image x={70} y={0} href={CardThirdImg} height="100" width="35" />
            </motion.g>

            <motion.g animate={{
                rotate: isActive ? 180 : 0
              }}
              transition={{
                duration: 1, // Duration of each rotation cycle in seconds
                repeatDelay: 1,
                repeat: Infinity, // Infinite looping
                ease: "linear", // Linear easing
              }} fill="rgb(33, 35, 41)" >
              <image x={45} y={65} href={CardMidButton} height="15" width="20" />
            </motion.g>
            {/*  <motion.g fill="rgb(33, 35, 41)" >
            <image href={CardFirstImg} height="20" width="20" />
             </motion.g> */}
            </svg>
    </Card>
    </div>
  );
}
