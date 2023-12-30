import React from "react";
import { useSelector} from "react-redux";
import CourseItem from "./CourseItem";
import { Box, Typography } from "@mui/material";
import CourseSearch from "./CourseSearch";
export default function Courses() {
  //  const { data ,searchTerm} = useselector((state) => {

  
  //   return {
  //      data: state.courses.data,
  //searchTerm :state.courses.searchTerm,
  

     
  //   };
  //  });
  const { courses } = useSelector(({ form, courses: { data, searchTerm } }) => {
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      courses: filteredCourses,
    };
    // debugger;
    // return state.courses.data;
  });


  const TotalPrice = (data) => {
    // Eğer data boşsa veya undefined ise, 0 döndür
    if (!data || data.length === 0) {
      return 0;
    }

    let total = 0;
    for (const item of courses) {
      total += item.price;
    }
    return total;
  };

  const Total = TotalPrice(courses);
  return (
    <Box sx={{ m: 5, p: 5, borderRadius: 6, boxShadow: 7 }}>
      <Box sx={{display:"flex" , justifyContent:"space-between"}}>
      <Typography variant="h5" fontWeight="bold">
        Kurslarım
      </Typography>
      <CourseSearch/>
      </Box>
      <Box >
        {courses.map((item, index) => {
          return (
            <CourseItem
              key={index}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "right" ,mt:3 }}>
        <Typography mr={4} variant="h6">
          Toplam Tutar: {Total}
        </Typography>
      </Box>
    </Box>
  );
}
