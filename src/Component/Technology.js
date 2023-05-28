import React,{useState,useEffect} from 'react'
import Layout from './Layout'
import { Button, Card, CardActions, CardContent, CardMedia, Typography,Box } from '@mui/material'
import axios from 'axios'
// import { responsiveProperty } from '@mui/material/styles/cssUtils'
function Technology() {
  const [data,setData]=useState([])
   useEffect(()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=f52f4423e8494a5cbe2ad832d867dc7a").then((responce) => {
     setData(responce.data.articles)
     console.log(responce.data);
    })
     
   })
  return (
    <Layout>
      <Box sx={{ display: 'flex',flexWrap: 'wrap',justifyContent: 'space-evenly' }}>
      {
      data.map((value)=>{
       return( 
        <Box  sx={{
          width: 400,
          height:650,margin:2
          }}>
        <Card sx={{width: "400px",height:"640px"}}>
        <CardMedia component={'img'} height="300"  src={value.urlToImage} alt='Image'></CardMedia>
        <CardContent sx={{width: "400px",height:"230px"}}>
          <Typography ><h4 >{value.title}</h4></Typography>
          <Typography><p >{value.description}</p></Typography>
        </CardContent>
        <CardActions >
        <Button  sx={{margin:"auto"}} variant="contained"
        onClick={() =>{
          window.open(value.url,'_blank')
        }}
        >Check Details</Button>
        </CardActions>
      </Card>
      </Box>
       );
      })
    }
  
  </Box>  
    </Layout>
  )
}

export default Technology

