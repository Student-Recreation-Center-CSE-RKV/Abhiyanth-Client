import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActions
} from "@mui/material";
import image1 from "../../../assets/images/enginix-2k24.jpg"

const stallsDummyData = [
  {
    belongTo: "Department A",
    image: "https://via.placeholder.com/150", // Replace with actual image URLs
    items: "Item1, Item2, Item3",
    main_description: "This is a detailed description of the stall.",
    menu_card: "https://example.com/menu.pdf", // Link to menu card
    mobile: "1234567890",
    name: "Stall A",
    short_description: "This is a short description of Stall A.",
    timings: "9 AM - 6 PM",
  },
  {
    belongTo: "Department B",
    image: "https://via.placeholder.com/150",
    items: "Item4, Item5, Item6",
    main_description: "This is a detailed description of another stall.",
    menu_card: "https://example.com/menu.pdf",
    mobile: "9876543210",
    name: "Stall B",
    short_description: "This is a short description of Stall B.",
    timings: "10 AM - 5 PM",
  },
  {
    belongTo: "Department B",
    image: "https://via.placeholder.com/150",
    items: "Item4, Item5, Item6",
    main_description: "This is a detailed description of another stall.",
    menu_card: "https://example.com/menu.pdf",
    mobile: "9876543210",
    name: "Stall B",
    short_description: "This is a short description of Stall B.",
    timings: "10 AM - 5 PM",
  },
  {
    belongTo: "Department B",
    image: "https://via.placeholder.com/150",
    items: "Item4, Item5, Item6",
    main_description: "This is a detailed description of another stall.",
    menu_card: "https://example.com/menu.pdf",
    mobile: "9876543210",
    name: "Stall B",
    short_description: "This is a short description of Stall B.",
    timings: "10 AM - 5 PM",
  },
  {
    belongTo: "Department B",
    image: "https://via.placeholder.com/150",
    items: "Item4, Item5, Item6",
    main_description: "This is a detailed description of another stall.",
    menu_card: "https://example.com/menu.pdf",
    mobile: "9876543210",
    name: "Stall B",
    short_description: "This is a short description of Stall B.",
    timings: "10 AM - 5 PM",
  },
  {
    belongTo: "Department B",
    image: "https://via.placeholder.com/150",
    items: "Item4, Item5, Item6",
    main_description: "This is a detailed description of another stall.",
    menu_card: "https://example.com/menu.pdf",
    mobile: "9876543210",
    name: "Stall B",
    short_description: "This is a short description of Stall B.",
    timings: "10 AM - 5 PM",
  },
];

const StallsDisplay = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered stalls (currently static, will be dynamic later)
  const filteredStalls = stallsDummyData.filter((stall) =>
    stall.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // <Box p={3}>
      // <Typography variant="h4" mb={3} align="center">
      //   Stalls Display
      // </Typography>

    //   {/* Search Bar */}
    //   <Box display="flex" justifyContent="center" mb={3}>
    //     <TextField
    //                 label="Search stalls"
    //                 variant="outlined"
    //                 size="small"
    //                 sx={{ width: "100%" }}
    //                 // value={searchText}
    //                 // onChange={(e) => setSearchText(e.target.value)}
    //                 onChange={(e) => setSearchTerm(e.target.value)}
    //                 style={{ marginRight: "1rem" }}
    //               />
    //     {/* <TextField
    //      fullWidth
    //       label="Search Stalls"
    //       variant="outlined"
    //       value={searchTerm}
         
          
    //     /> */}
    //     <Button variant="contained" color="primary" onClick={() => alert("Search functionality not implemented yet.")}>
    //       Search
    //     </Button>
    //   </Box>

    //   {/* Stalls Cards */}
    //   <Grid container spacing={3}>
    //     {filteredStalls.map((stall, index) => (
    //       <Grid item xs={12} sm={6} md={4} key={index}>
    //         <Card>
    //           <CardMedia
    //             component="img"
    //             height="150"
    //             image={stall.image}
    //             alt={stall.name}
    //           />
              // <CardContent>
              //   <Typography variant="h6" gutterBottom>
              //     {stall.name}
              //   </Typography>
              //   <Typography variant="body2" color="textSecondary" gutterBottom>
              //     {stall.short_description}
              //   </Typography>
              //   <Typography variant="body2" color="textSecondary">
              //     <strong>Belong To:</strong> {stall.belongTo}
              //   </Typography>
              //   <Typography variant="body2" color="textSecondary">
              //     <strong>Timings:</strong> {stall.timings}
              //   </Typography>
              //   <Typography variant="body2" color="textSecondary">
              //     <strong>Contact:</strong> {stall.mobile}
              //   </Typography>
              // </CardContent>
    //         </Card>
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Box>

    <React.Fragment>
      <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" mb={3} align="center">
        Stalls Display
      </Typography>
        

        {/* Search Bar and Add Event Button */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <TextField
            label="Search Events"
            variant="outlined"
            size="small"
            sx={{ width: "70%", marginRight:"0rem"}}
            // value={searchText}
            // onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant="contained" color="primary" >
            Search
          </Button>
        
        </Box>
        {/* Event Cards */}
        <Grid container spacing={2}>
          {filteredStalls.map((stall , index) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  width: "247.3px",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={image1}
                  alt="Event"
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                <Typography variant="h6" gutterBottom>
                  {stall.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {stall.short_description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Belong To:</strong> {stall.belongTo}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Timings:</strong> {stall.timings}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Contact:</strong> {stall.mobile}
                </Typography>
              </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    // onClick={() => {
                    //   setEditEvent(event);
                    //   setEditOpenDialog(true); // Properly call the function to close the dialog
                    // }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    // onClick={() => {
                    //   handleDeleteEvent(event.id);
                    // }}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* {editEvent && (
        <UpdateEventByAdmin
          editEvent={editEvent}
          openEditDialog={editOpenDialog}
          // onCloseEditDialog={() => setEditOpenDialog(false)}
          onCloseEditDialog={handleCloseEditDialog}
          onUpdateEvent={handleUpdateEvent}
        />
      )} */}
    </React.Fragment>
  );
};

export default StallsDisplay;
