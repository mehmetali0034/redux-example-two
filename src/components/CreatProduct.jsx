import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../store/slices/formSlice";
import { changeDescription } from "../store/slices/formSlice";
import { changePrice } from "../store/slices/formSlice";
import { addToData } from "../store/slices/courseSlice";
export default function CreatProduct() {
  const { name, description, price } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      price: state.form.price,
    };
  });
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addToData({name,description,price}))
    //Kaydet dedikten sonra inputları boşaltmayı aşağıdaki gibi yapabilirdim ama onun yerine extraRudcer kullanarak yapmak daha iyidir.
    // dispatch(changename(""));
    // dispatch(changedescription(""))
    // dispatch(changeprice(0))
  };
  return (
    <Box sx={{ m: 2, p: 3, borderRadius: 8, boxShadow:4 }}>
      <Typography variant="h4">Kurs Ekle</Typography>
      <Box mt={3} >
          <form className="createForm" onSubmit={handleSubmit}>
            <Box>
            <TextField
              value={name}
              id="outlined-basic"
              label="Product"
              variant="outlined"
              onChange={(e) => {
                dispatch(changeName(e.target.value));
              }} //Parametre olarak bunu gönderdim yani artık payload changeName içindeki payload'da bu olacak
              sx={{ marginRight: 2 }}
            />
            <TextField
              value={description}
              id="outlined-basic"
              label="Description"
              variant="outlined"
              onChange={(e) => {
                dispatch(changeDescription(e.target.value));
              }}
              sx={{ marginRight: 2 }}
            />
            <TextField
              value={price}
              id="outlined-basic"
              label="Price"
              variant="outlined"
              onChange={(e) => {
                dispatch(changePrice(parseInt(e.target.value)));
              }}
              type="number"
            />
            </Box>
            <Box>
            <Button
              onClick={handleSubmit}
              sx={{ backgroundColor: "#20b2aa" }}
              variant="contained"
            >
              Kaydet
            </Button>
            </Box>
          </form>
      </Box>
    </Box>
  );
}
