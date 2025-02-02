import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  CardActions,
} from "@mui/material";
import {handleDeleteStalls } from "./stallsServices/stallsServices";
import UpdateStallByAdmin from "./UpdateStallByAdmin";

const StallCard = ({ stall, onUpdateStall, setEditStall, stalls, setStalls, setFilteredStalls, fetchStalls }) => {



  const [editOpenDialog, setEditOpenDialog] = useState(false)

  const handleDeleteStall = async (id) => {
    await handleDeleteStalls({
      stallId: id,
      stalls,
      setStalls,
      setFilteredStalls,
      fetchStalls,
    })
  };

  return (



    <React.Fragment>



      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            width: "300.3px",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={stall.image}
            alt="Event"
            sx={{ objectFit: "cover" }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              {stall.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {stall.short_description}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <strong>Belong To:</strong> {stall.belongTo}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <strong>Timings:</strong> {stall.timings}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <strong>Contact:</strong> {stall.contact.mobile}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                setEditStall(stall)
                setEditOpenDialog(true); 
              }}
            >
              Edit
            </Button>
            <Button
              size="small"
              color="error"
              onClick={() => {
                handleDeleteStall(stall.id);
              }}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>



      {editOpenDialog && (

        <UpdateStallByAdmin
          editStall={stall}
          openEditDialog={editOpenDialog}
          onCloseEditDialog={() => setEditOpenDialog(false)}
          onUpdateStall={onUpdateStall}

        />
      )}
    </React.Fragment>

  )
}

export default StallCard