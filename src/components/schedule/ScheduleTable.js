import Grid from '@mui/material/Grid2';
const styles={
  Heading:{
    color:"#c91c75",
    fontSize:{sm:"18px",md:"18px",lg:"28px"},
    fontFamily:"DM Sans",
    justifyContent:"center",
    padding:"10px 5px ",
    fontWeight:"bold",
    border:"2px solid #c91c75",
    textAlign:"center",
  },
  Eventname:{
    color:"white",
			fontWeight: "bold",
      fontSize:{sm:"16px",md:"18px",lg:"28px"},
      padding:"10px 5px ",
      justiifyContent:"center",
      textAlign:"center",
			textShadow: "2px 2px 10px rgba(255, 255, 255, 0.3)",
      fontFamily: "Orbitron",
      border:"2px solid #c91c75",
  }
}
export default function ScheduleTable(){
  const events = [
    {
      id: 1,
      date: "27 Jan 2025",
      name: "Hackathon",
      venue: "Computer Centre"
    },
    {
      id: 1,
      date: "27 Jan 2025",
      name: "Hackathon",
      venue: "Computer Centre"
    },
    {
      id: 1,
      date: "27 Jan 2025",
      name: "Hackathon",
      venue: "Computer Centre"
    },
  
  ];
  const deptname = "Computer Science Engineering";
  return(
    
    <div style={{margin:"6% 2% 1% 1%"}}>
      <h1 style={{...styles.Eventname,textAlign:"center"}}>{deptname} </h1>
      <Grid container
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          
        }}  spacing={0} columns={{ xs: 8, sm: 12, md: 16 }}>
          <Grid item  size={{ xs: 1, sm: 1, md: 1 }} sx={styles.Heading}>
            <h3>S.No</h3>
          </Grid>
          <Grid item  size={{ xs: 2, sm: 3, md: 5 }} sx={styles.Heading}>
            <h3>Event Date</h3>
          </Grid>
          <Grid item  size={{ xs: 3, sm: 4, md: 5 }} sx={styles.Heading}>
            <h3>Event Name</h3>
          </Grid>
          <Grid item  size={{ xs: 2, sm: 4, md: 5 }} sx={styles.Heading}>
            <h3>Venue</h3>
          </Grid>
        </Grid>
        {
          events && events.map((event, index) => {
            return (
              <Grid container direction="row"
              sx={{
              justifyContent: "space-between",
              alignItems: "center",
              }}  spacing={0}  columns={{ xs: 8, sm: 12, md: 16 }} key={event.id}>
              <Grid item size={{ xs: 1, sm: 1, md: 1 }} sx={styles.Eventname}>
                {index + 1}
              </Grid>
              <Grid item  size={{ xs: 2, sm: 3, md: 5 }} sx={styles.Eventname}>
                {event.date}
              </Grid>
              <Grid item  size={{ xs: 3, sm: 4, md: 5 }}  sx={styles.Eventname}>
                <a href={"/events/im8ct6xE1ImvH1y0XaxD"} style={{ textDecoration: "none", color: "inherit" }}> {event.name}</a>
              </Grid>
              <Grid item  size={{ xs: 2, sm: 4, md: 5 }} sx={styles.Eventname}>
                {event.venue}
              </Grid>
              </Grid>
            )
          })
        }
  </div>
  );
}