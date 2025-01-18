import { useEffect } from "react";
import "../styles/technicalevents.css";
import TechnicalShimmer from "../components/technicalEvents/technicalShimmer";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchVolunteers } from "../redux/slices/volunteerSlice";

export default function RegisterVolunteer() {
    // const [volunteerEvents,setEvents]=useState([]);
    const dispatch = useDispatch();
      const { volunteerEvents, loading, error } = useSelector((state) => state.volunteerEvents);
   
    

    useEffect(() => {
        dispatch(fetchVolunteers());  
        console.log(volunteerEvents)
      }, [dispatch]);

    return (
        <> 
        {
            loading && (
                <Grid container spacing={3} sx={{ marginTop: "20px",marginBottom:"40px",marginTop:"80px",padding:"5px" }}>
                {[...Array(4)].map((_, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <TechnicalShimmer/>
                  </Grid>
                ))}
              </Grid>
            )
        }

            <div style={{marginTop:"70px"}}>
            <h1 className="title">Volunteer Registration</h1>
            <div className="main">
                <div className="cards-container">
                    {volunteerEvents.map((item, index) => (
                        <div key={index} className="card">
                            <img src={item.image} alt={item.eventName} className="card-image" />
                            <h2 className="card-title">{item.eventName}</h2>
                            <p className="card-description">{item.eventDescription}</p>
                            <div className="button-container">
                                <button
                                    className="view-events-button"
                                    onClick={() => window.open(item.link, "_blank")}
                                >
                                    Register as a Volunteer
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
        </>
    );
}
