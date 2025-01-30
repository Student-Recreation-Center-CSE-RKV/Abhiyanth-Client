import ScheduleTable from "../components/schedule/ScheduleTable"
import TimelineMap from "../components/schedule/TimelineMap"
export default function Schedule(){
  return(
    <>
    <div style={{ position: 'fixed', top: 0, width: '100%',color:"#23f7d4",
			fontWeight: "bold",
      fontSize:"18px",
			textShadow: "2px 2px 10px rgba(255, 255, 255, 0.3)",
      fontFamily: "Orbitron", backgroundColor: 'transparent', zIndex: 1000, textAlign: 'center', padding: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)',marginTop:"4%" }}>
      <marquee>Scroll down for departwise detailed event schedule</marquee>
    </div>
    <div style={{marginTop:"4%"}}>
    <TimelineMap />
    </div>
    <ScheduleTable />
    
    </>

  )
}