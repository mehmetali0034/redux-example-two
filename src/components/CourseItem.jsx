import { Box, Button, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteFromData } from "../store/slices/courseSlice";
import { useDispatch } from "react-redux";
export default function CourseItem(props) {
  const { name, description, price } = props;
  const dispatch = useDispatch();
  return (
    <Box
      sx={{backgroundColor:"	#20b2aa", color:"#ffffff",display: "flex", flexDirection: "column", alignItems: "center",borderRadius:5 ,boxShadow:2 ,ml:2,mr:2,mb:5,mt:2}}
    >
      <Typography mt={1} variant="h6">{name}</Typography>
      <Typography variant="subtitle1">{description}</Typography>
      <Typography variant="subtitle2">{price} TL</Typography>
      <Button onClick={()=>{dispatch(deleteFromData(name))}} sx={{backgroundColor:"red", color:"white", mb:2,mt:1}} startIcon={<DeleteIcon/>} variant="outlined" color="error">
        Sil
      </Button>
    </Box>
  );
}
