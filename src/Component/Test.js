import React,{useState,useEffect} from "react";
import Layout from './Layout'
import { Button, Card, CardActions, CardContent, CardMedia, Typography,Box } from '@mui/material'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import {FacebookShareButton, LinkedinShareButton,WhatsappShareButton, TwitterShareButton} from "react-share";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios'
// import { responsiveProperty } from '@mui/material/styles/cssUtils'
function Test(props) {
  const [data,setData]=useState([])
   useEffect(()=>{
    axios.get(`${props.api}`).then((responce) => {
     setData(responce.data)
     console.log(responce.data);
    }).catch((error)=>{
      console.log(error);}
    )
   },[props.api])
   const article=(value) =>{
      window.open(value.url,'_blank');
      axios.patch(`/news/view/${value._id}`).then((responce)=>{
       console.log(responce.data);
    }).catch((error)=>{
      console.log(error);
    })
    }
   const updateLike=(value)=>{
    axios.patch(`/news/like/${value._id}`).then((responce)=>{
       console.log(responce.data);
    }).catch((error)=>{
      console.log(error);
    })
   }

   
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
        <CardContent sx={{width: "380px",height:"250px"}}>
          <Typography sx={{margin:"auto"}}><h4 >{value.title}</h4></Typography>
          <Typography sx={{margin:"auto"}}><p >{value.description}</p></Typography>
        </CardContent>
        <CardActions >
          <Button onClick={ ()=>updateLike(value)}><FavoriteBorderIcon/>{value.like}</Button>
          <VisibilityIcon/><Typography  sx={{margin:"3px"}}>{value.view}</Typography>
        <Button  sx={{margin:"auto"}} variant="contained"
        onClick={ ()=>article(value)}
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

export default Test
