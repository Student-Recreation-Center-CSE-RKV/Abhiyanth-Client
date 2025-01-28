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

const ManageEventsByAdmin = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [newEvent, setNewEvent] = useState(emptyObject);
  const [editEvent, setEditEvent] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [editOpenDialog, setEditOpenDialog] = useState(false);
  const [searchText, setSearchText] = useState("");

  const fetchEvents = async () => {
    const data = await getAllEvents();
    const allEvents = [...data.completed, ...data.ongoing, ...data.upcoming];
    setEvents(allEvents);
    setFilteredEvents(allEvents);
    console.log("Fetched Events:", allEvents); // Log here to confirm updated state
  };

  useEffect(() => {
    fetchEvents();
  }, []); 

  const handleCloseEditDialog = () => {
    setEditOpenDialog(false);
    setEditEvent(null); // Clear the edit event data
  };

  const handleAddEvent = async (eventData) => {
    const addedEvent = await addEvent(eventData);
    setEvents((prev) => [...prev, addedEvent]);
    setFilteredEvents((prev) => [...prev, addedEvent]);

    fetchEvents();
  };

  const handleDeleteEvent = async (id) => {
    await deleteEvent(id);
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
    setFilteredEvents(updatedEvents);
    fetchEvents();
  };

  const handleUpdateEvent = async (updatedData) => {
    const updatedEvent = await updateEvent(editEvent.id, updatedData);
    const updatedEvents = events.map((event) =>
      event.id === editEvent.id ? { ...event, ...updatedEvent } : event
    );
    setEvents(updatedEvents);
    setFilteredEvents(updatedEvents);
    console.log(events);
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
                      setEditOpenDialog(true); // Properly call the function to close the dialog
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
          // onCloseEditDialog={() => setEditOpenDialog(false)}
          onCloseEditDialog={handleCloseEditDialog}
          onUpdateEvent={handleUpdateEvent}
        />
      )}
    </React.Fragment>
  );
};

export default ManageEventsByAdmin;
