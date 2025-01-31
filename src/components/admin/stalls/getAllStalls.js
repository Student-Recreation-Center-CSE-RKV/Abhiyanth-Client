import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { getAllStalls } from "../../../api/stalls";
import StallCard from "./stallCard";
import { handleUpdateStalls } from "./stallsServices/stallsServices";
import CircularProgress from "@mui/material/CircularProgress";


const StallsDisplay = () => {
  const [stalls, setStalls] = useState([])
  const [filteredStalls, setFilteredStalls] = useState([]);
  const [editStall, setEditStall] = useState(null);
  const [searchText, setSearchText] = useState("")

  const fetchStalls = async () => {

    try {

      const apistalls = await getAllStalls()
      setStalls(apistalls)
      setFilteredStalls(apistalls)

    }
    catch (error) {

      console.log("error , fetching api stalls");

    }
  }

  useEffect(() => {
    fetchStalls();


  }, [])



  const handleUpdateStall = async (updatedData) => {
    await handleUpdateStalls({
      stallId: editStall.id,
      updatedData,
      stalls,
      setStalls,
      setFilteredStalls,
      fetchStalls,
      setEditStall,
    });
  };


  
  const handleSearch = () => {
    const lowerCaseSearchText = searchText.toLowerCase();

    const searchedStalls = stalls.filter((stall) => (

      stall.name.toLowerCase().includes(lowerCaseSearchText) ||
      stall.belongTo.toLowerCase().includes(lowerCaseSearchText)

    ))
    setFilteredStalls(searchedStalls)
    setSearchText("");
  }

  if (stalls.length === 0) {

    return <CircularProgress size={40} />
  }
  return (





    <React.Fragment>
      <Box sx={{ padding: "2rem" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 4 }}>
          <TextField
            label="Search Events"
            variant="outlined"
            size="small"
            sx={{ width: "48.5rem" }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>

        </Box>

        <Grid container spacing={2}>
          {filteredStalls.length > 0 ? (
            filteredStalls.map((stall, index) => (

              <StallCard
                key={stall.id}
                stall={stall}
                onUpdateStall={handleUpdateStall}
                setEditStall={setEditStall}
                stalls={stalls}
                setStalls={setStalls}
                setFilteredStalls={setFilteredStalls}
                fetchStalls={fetchStalls}

              />
            ))
          ) : (
            <Typography sx={{ alignContent: "center", textAlign: "center" }}>No stalls match your search criteria.</Typography>
          )}
        </Grid>
      </Box>

    </React.Fragment>
  );
};

export default StallsDisplay;
