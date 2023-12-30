import { Box, IconButton, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { changeSearch } from "../store/slices/courseSlice";
export default function () {
    const dispatch = useDispatch();
    const {searchTerm} = useSelector((state)=>{
        return{
            searchTerm:state.courses.searchTerm
        }
    })
    console.log(searchTerm)
  return (
    <Box>
      <TextField 
        label="Arama"
        value={searchTerm}
        onChange={(e) => {
          dispatch(changeSearch(e.target.value));
        }}
      />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
