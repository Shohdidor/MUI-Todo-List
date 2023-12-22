import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";




import "./App.css";

let body = document.querySelector(".body");

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

let click = 0;

function DarkModeUser() {
  click++;
  if (click % 2 != 0) {
    body.style.backgroundColor = "#072E33";
    body.style.transition = "0.5s";
    body.style.color = "white";
  }
  if (click % 2 == 0) {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
}

const App = () => {


  const [open3, setOpen3] = useState(false);
  const [elemEdit, setElemEdit] = useState(null);
  const handleOpen3 = () => 
  { 
    setOpen3(true); 
    setIdDel(elem);
  }
  const handleClose3 = () => { setOpen3(false); }

  const [ edInp , setEdInp ] = useState ("")
  const [ edInp2 , setEdInp2 ] = useState ("")
  const [ edInp3 , setEdInp3 ] = useState ("")
  const [idx2, setIdx2] = useState("")

  function editUser (){
    setData(data.map((e) => {
      if(e.id == idx2){
        e.name = edInp
        e.city = edInp2
        e.phone = edInp3
        return e
      }else{
        return e
      }
    }))

    setEdInp ("")
    setEdInp2 ("")
    setEdInp3 ("")
    handleClose3()
  }
  

  const [open2, setOpen2] = useState(false);
  const [idDel, setIdDel] = useState(null);

  const handleClickOpen2 = (elem) => {
    setOpen2(true);
    setIdDel(elem.id);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [age, setAge] = useState(30);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [data, setData] = useState([
    {
      id: 1,
      name: "Peter Parker",
      isCompleted: false,
      phone: "903104666",
      city: "America",
    },
    {
      id: 2,
      name: "Marry Jame",
      isCompleted: false,
      phone: "103104556",
      city: "America",
    },
    {
      id: 3,
      name: "Miles Morales",
      isCompleted: false,
      phone: "002588875",
      city: "Brooklyn",
    },
    {
      id: 4,
      name: "Doctor Octavius",
      isCompleted: false,
      phone: "111001011",
      city: "England",
    },
    {
      id: 5,
      name: "Jesy Pinkman",
      isCompleted: false,
      phone: "**********",
      city: "Los-Angeles  ",
    },
  ]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inp, setInp] = useState("");
  const [inp2, setInp2] = useState("");
  const [inp3, setInp3] = useState("");

  function addUser() {
    let user = {
      id: new Date().getTime(),
      name: inp,
      city: inp2,
      phone: inp3,
    };
    data.push(user);
    setInp("");
    setInp2("");
    setInp3("");
    handleClose();
  }

  function compUser(id) {
    let newData = data.map((elem) => {
      if (elem.id == id) {
        elem.isCompleted = !elem.isCompleted;
      }
      return elem;
    });
    setData(newData);
  }

  const [search, setSearch] = useState("");

  function deleteUser(id) {
    let del = data.filter((elem) => {
      return elem.id != id;
    });
    setData(del);
    handleClose2()
  }



  return (
    <>
      <div className="flex justify-between p-[25px]">
        <h1 className="text-[30px] font-medium ">User List</h1>
        <div className="flex justify-between w-[250px]">
          <Button variant="outlined" onClick={handleOpen}>
            {" "}
            + New{" "}
          </Button>
          <Button
            variant="contained"
            sx={{ background: "#052659" }}
            onClick={DarkModeUser}
          >
            {" "}
            Dark MOde{" "}
          </Button>
        </div>
      </div>
      <div className="flex justify-between pl-[30px] pr-[30px]">
        <div className="flex justify-between w-[150px]">
          <div>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="border-[1px] border-[orangered]"
              label="Age"
              defaultValue={age}
              onChange={handleChange}
            >
              <MenuItem value={true} sx={{ color: "green" }}>
                Active
              </MenuItem>
              <MenuItem value={false} sx={{ color: "red" }}>
                Inactive
              </MenuItem>
              <MenuItem value={30}>There is not</MenuItem>
            </Select>
          </div>

          <div>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="border-[1px] border-[orangered]"
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value={10} sx={{ color: "red" }}>
                America
              </MenuItem>
              <MenuItem value={20} sx={{ color: "red" }}>
                England
              </MenuItem>
              <MenuItem value={30} sx={{ color: "green" }}>
                Canada
              </MenuItem>
              <MenuItem value={40} sx={{ color: "red" }}>
                Russian
              </MenuItem>
              <MenuItem value={50} sx={{ color: "green" }}>
                Afganistan
              </MenuItem>
              <MenuItem value={60} sx={{ color: "green" }}>
                Tajikistan
              </MenuItem>
            </Select>
          </div>
        </div>

        <TextField
          sx={{ marginTop: "35px" }}
          label="Search"
          id="outlined-size-small"
          size="small"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2"
              sx={{ color: "black" }}
            >
              New Post
            </Typography>
            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                value={inp}
                onChange={(event) => setInp(event.target.value)}
              />
              <TextField
                id="standard-basic"
                label="City"
                variant="standard"
                value={inp2}
                onChange={(event) => setInp2(event.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Phone"
                variant="standard"
                value={inp3}
                onChange={(event) => setInp3(event.target.value)}
              />
              <div className="flex mt-[20px] justify-evenly">
                <Button variant="contained" onClick={addUser}>
                  {" "}
                  + Add{" "}
                </Button>
                <Button variant="outlined" onClick={handleClose}>
                  Cancel
                </Button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>

      <table className="m-auto mt-[50px]">
        <thead>
          <tr>
            <th>FullName</th>
            <th>City</th>
            <th>Status</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>

        <tbody className="text-center">
          {data
            .filter((elem) => {
              return search.toLocaleLowerCase().trim() == ""
                ? elem
                : elem.name
                    .toLocaleLowerCase()
                    .trim()
                    .includes(search.toLocaleLowerCase().trim());
            })
            .filter((elem) => {
              if (age == 30) {
                return elem;
              }
              if (age == true) {
                return elem.isCompleted;
              }
              if (age != true) {
                return !elem.isCompleted;
              }
            })
            .map((elem) => {
              return (
                <tr key={elem.id}>
                  <td className="w-[350px] pt-[15px] text-slate-800">
                    {elem.name}
                  </td>
                  <td className="w-[350px] pt-[15px] text-slate-800">
                    {" "}
                    {elem.city}{" "}
                  </td>
                  <td className="w-[250px] pt-[15px] text-slate-800">
                    {" "}
                    <button
                      className={
                        elem.isCompleted
                          ? "bg-green-600 p-[5px] pl-[15px] pr-[15px] text-white rounded-[5px]"
                          : "bg-red-600 p-[5px] pl-[15px] pr-[15px] text-white rounded-[5px]"
                      }
                      onClick={() => compUser(elem.id)}
                    >
                      {" "}
                      {elem.isCompleted ? "true" : "false"}{" "}
                    </button>{" "}
                  </td>
                  <td className="w-[350px] pt-[15px] text-slate-800">
                    {" "}
                    {elem.phone}{" "}
                  </td>
                  <td className="w-[150px] pt-[15px] text-slate-800">
                    <Button
                      variant="outlined"
                      onClick={() => 
                        {setIdx2(elem.id)
                        console.log(idx2);
                        handleClickOpen2(elem)}}
                      color="error"
                    >
                      ○○○
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {/* modal edit */}

      <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose2}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"What do you want to do?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Button
              onClick={() => deleteUser(idDel)}
              sx={{ border: "2px solid red", color: "red" }}
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button onClick={()=>handleOpen3()}
              sx={{ border: "2px solid green", color: "green" }}
              variant="outlined"
            >
              <EditIcon></EditIcon> Edit

            </Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Disagree</Button>
          <Button onClick={handleClose2}>Agree</Button>
        </DialogActions>
      </Dialog>

{/* ///// */}
{/* Edit  */}
{/* ///// */}

    <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          do you want change it ?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          
          <div className="flex flex-wrap justify-between">
          
          <TextField value={edInp} onChange={(event) => setEdInp(event.target.value)} sx={{marginBottom:"10px"}} size="small" id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={edInp2} onChange={(event) => setEdInp2(event.target.value)} size="small" id="outlined-basic" label="City" variant="outlined" />
          <TextField value={edInp3} onChange={(event) => setEdInp3(event.target.value)} size="small" id="outlined-basic" label="Phone" variant="outlined" />
          <Button onClick={()=>editUser()} sx={{color:"green", border: "1px solid green"}} size="large" variant="outlined">Edit</Button>
          
          </div>
          
          </Typography>
        </Box>
      </Modal>
    
    </>
  );
};

export default App;
