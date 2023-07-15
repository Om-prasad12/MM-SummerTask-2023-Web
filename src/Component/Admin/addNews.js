import { useState} from 'react'
import axios from 'axios'
import React from 'react'
import Admin from '../admin'
import {Box,CardContent,Typography,Button,TextField,Card} from '@mui/material'
const AddNews = () => {
 const [user,setUser]=useState(
  {urlToImage:"",title:"",description:"",url:"",category:""})
 let name,value;
 const handleInput=(e)=>{
  console.log(e);
  name=e.target.name;
  value=e.target.value;
  setUser({...user,[name]:value});
 }

 const submitNews = async ()=>{
  axios.post("/news",user)
      .then((responce) => {
        //  console.log(responce.data);
        console.log(responce);
        setUser({urlToImage:"",title:"",description:"",url:"",category:""});
        alert("News added successfully")
        
      })
      .catch((error) => {
        console.log(error);
      });
 }

  return (
    <>
    <Box sx={{ display: 'flex' }}>
        <Admin/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         <Card sx={{maxWidth:"450px",margin:"10px auto"}}>
          <CardContent sx={{padding:"30px"}}>
            <Typography variant='h3' sx={{margin:"10px 75px"}}>Add News</Typography>
            <TextField  label="Image" placeholder='Enter the url'
            name="urlToImage" value={user.urlToImage}
            onChange={handleInput}
            variant='outlined' fullWidth required sx={{margin:"10px"}}/>
            <TextField label="Title" placeholder='Enter the title'
            name="title" value={user.title}
            onChange={handleInput}
            variant='outlined' fullWidth required sx={{margin:"10px"}}/>
            <TextField label="Description" placeholder='Enter the description'
            name="description" value={user.description}
            onChange={handleInput}
            variant='outlined' fullWidth required sx={{margin:"10px"}}/>
            <TextField label="News url" placeholder='Enter the url'
            name="url" value={user.url}
            onChange={handleInput}
            variant='outlined' fullWidth required sx={{margin:"10px"}}/>
            <TextField label="Category" placeholder='Enter the category'
            name="category" value={user.category}
            onChange={handleInput}
            variant='outlined' fullWidth required sx={{margin:"10px"}}/>
            <Button type='submit' variant='contained' color='primary'
            onClick={()=>submitNews()}
            fullWidth sx={{margin:"10px"}} >Submit</Button>
            </CardContent>
         </Card>
      </Box>
      </Box>
    </>
  )
}

export default AddNews