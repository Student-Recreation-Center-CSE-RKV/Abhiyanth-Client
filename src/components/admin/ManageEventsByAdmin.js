import React, { useEffect, useState } from "react";
import {
  addEvent,
  getAllEvents,
  deleteEvent,
  updateEvent,
} from "../../api/events.js";
import deptImage from "../../assets/images/deptimage4.jpeg";
import AddEventByAdmin from "./AddEventByAdmin.js";
import UpdateEventByAdmin from "./UpdateEventByAdmin";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  CardMedia,
  CardActions,
} from "@mui/material";
import { emptyObject } from "./DummyApi.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";


const ManageEventsByAdmin = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [newEvent, setNewEvent] = useState(emptyObject);
  const [editEvent, setEditEvent] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [editOpenDialog, setEditOpenDialog] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [dataLoading , setDataLoading] = useState(false)

  const fetchEvents = async () => {
    try{
      setDataLoading(true)
      const data = await getAllEvents();
      const allEvents = [...data.completed, ...data.ongoing, ...data.upcoming];
      setEvents(allEvents);
      setFilteredEvents(allEvents);
      setDataLoading(false)

    }
    catch(error){
      console.log("Error fetching events")
    }
   
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleCloseEditDialog = () => {
    setEditOpenDialog(false);
    setEditEvent(null); 
  };

  const handleAddEvent = async (eventData) => {
    const addedEvent = await addEvent(eventData);
    setEvents((prev) => [...prev, addedEvent]);
    setFilteredEvents((prev) => [...prev, addedEvent]);

    fetchEvents();
  };

  const handleDeleteEvent = async (id) => {
    await deleteEvent(id);
    toast.success("deleted")
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
    setFilteredEvents(updatedEvents);
    fetchEvents();
  };

  const handleUpdateEvent = async (updatedData) => {
    const updatedEvent = await updateEvent(editEvent.id, updatedData);
    //  toast.success("Event updated successfully")
    alert("Event updated successfully")
    const updatedEvents = events.map((event) =>
      event.id === editEvent.id ? { ...event, ...updatedEvent } : event
    );
    setEvents(updatedEvents);
    setFilteredEvents(updatedEvents);
    setEditEvent(null);
    fetchEvents();
  };

  const handleSearch = () => {
    const lowerCaseSearchText = searchText.toLowerCase();
    const searchedEvents = events.filter(
      (event) =>
        event.name.toLowerCase().includes(lowerCaseSearchText) ||
        event.status.toLowerCase().includes(lowerCaseSearchText) ||
        event.description.toLowerCase().includes(lowerCaseSearchText)
    );
    setFilteredEvents(searchedEvents);
    setSearchText("");
  };


  if(dataLoading){
    return <CircularProgress  size={24}/>
  }

  return (
    <React.Fragment>

      <Box sx={{ padding: "2rem" }}>
        {/* Top Cards */}
        <Grid container spacing={2} mb={4}>
          {["completed", "live", "upcoming"].map((status, idx) => (
            <Grid item xs={12} sm={4} key={status}>
              <Card sx={{ width: "247.3px", cursor: "pointer" }}>
                <CardContent>
                  <Typography variant="h5" component="div" textAlign="center">
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    textAlign="center"
                  >
                    {events.filter((event) => event.status === status).length}{" "}
                    Events
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

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
            sx={{ width: "70%" }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenDialog(true)}
          >
            Add Event
          </Button>
          <AddEventByAdmin
            onAddEvent={handleAddEvent}
            newEvent={newEvent}
            openDialog={openDialog}
            onCloseDialog={() => setOpenDialog(false)}
          />
        </Box>
        {/* Event Cards */}
        <Grid container spacing={2}>
           {
                  filteredEvents.length === 0 && (<Typography variant="h6" gutterBottom sx={{marginLeft:"20rem"}} >
                    No Events found
                  </Typography>)
                }

          {filteredEvents.map((event) => (
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
                  image={event.images?.mainImage || deptImage}
                  alt="Event"
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div">
                    {event.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event.description}
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    Status: {event.status}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      setEditEvent(event);
                      setEditOpenDialog(true); 
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    onClick={() => {
                      handleDeleteEvent(event.id);
                    }}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {editEvent && (
        <UpdateEventByAdmin
          editEvent={editEvent}
          openEditDialog={editOpenDialog}
          onCloseEditDialog={handleCloseEditDialog}
          onUpdateEvent={handleUpdateEvent}
        />
      )}
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </React.Fragment>
  );
};

export default ManageEventsByAdmin;
