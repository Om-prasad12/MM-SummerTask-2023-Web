import React, { useState, useEffect } from "react";
import Admin from "../admin";
import Popup from "./Popup";
import { Button, Paper, Typography, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
const Total = (props) => {
  const [data, setData] = useState([]);
  const [del,setDel]=useState(false);
  useEffect(() => {
    axios
      .get(`${props.api}`)
      .then((responce) => {
        setData(responce.data);
        //  console.log(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.api,del]);

  const updateHandler =()=>{
    setOpenPopup(true);
  }

  const deleteHandler =(id)=>{
    alert(`${id} deteled successfully`);
    axios.delete(`/news/${id}`).then((responce)=>{
      console.log(responce.data);
      setDel(!del);
   }).catch((error)=>{
     console.log(error);
   })
  }
  

  const [openPupup,setOpenPopup] =useState(false);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Admin />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {
           data.map((value) => {
            const {urlToImage,title,description,url,category,_id} =value;
            return (
              <>
              
              <Paper elevation={4} sx={{ margin: "10px" }}>
                <Box display="flex" >
                  <img
                    src={urlToImage}
                    alt="Image"
                    width="150px"
                    height="150px"
                  
                  ></img>
                  <Typography
                    variant="h5"
                    sx={{ width: "750px", margin: "auto 20px" }}
                  >
                    {title}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ height: "50px", margin: "auto" }}
                    startIcon={<EditIcon />}
                    onClick={()=>updateHandler() }
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ height: "50px", margin: "auto" }}
                    startIcon={<DeleteIcon />}
                    onClick={ ()=>deleteHandler(_id)}
                  >
                    Delete
                  </Button>
                </Box>
              </Paper>
              <Popup openPupup={openPupup}
          setOpenPopup={setOpenPopup}
          _id={_id}
          urlToImage={urlToImage}
          title={title}
          description={description}
          url={url} category={category}
          />
              </>
            );
          })}
          
        </Box>
      </Box>
    </>
  );
};

export default Total;
