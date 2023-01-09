import { Box, Flex, Grid } from '@chakra-ui/react'
import React from 'react'

const skills=["TYPESCRIPT","REACT.JS","NODE.JS","CHAKRA-UI","CSS","javaScript","MUI","HTML","Next.js"]

const Tech = () => {
  return (
    <Grid>
   {
    skills.map((el,id)=>(
        <Grid  gridTemplateColumns={"repeat(3,1fr)"} key={id}>{el}</Grid>
    ))   }


    </Grid>
  )
}

export default Tech