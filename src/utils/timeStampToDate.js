import { Timestamp } from "firebase/firestore";

export const extractDateTime = (timestamp) => {
    const date = timestamp.toDate();
    const day = date.getDate(); 
    const month = date.getMonth() + 1; 
    const year = date.getFullYear(); 
    let hours = date.getHours();
    const minutes = date.getMinutes(); 
    const seconds = date.getSeconds(); 
  
    
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
 
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    return {
      date: formattedDate,
      time: formattedTime
    };
  };
  

  export const convertDateTimeToFirebaseTimestamp=(date, time)=> {
    
    let dateTimeString = `${date}T${time}`;
    return convertDateTimeCombinedToFirebaseTimestamp(dateTimeString)
}

export const convertDateTimeCombinedToFirebaseTimestamp=(dateTimeCombined)=> {
    
  const dateTime = new Date(dateTimeCombined);

  if (isNaN(dateTime.getTime())) {
      throw new Error("Invalid date or time format.");
  }

  return Timestamp.fromDate(dateTime);
}


// export const extractDateTimeFromTimestamp=(timestamp) =>{
//   if (!(timestamp instanceof Timestamp)) {
//       throw new Error("Input must be a Firebase Timestamp.");
//   }

//   const dateObject = timestamp.toDate();

//   const date = dateObject.toISOString().split('T')[0];

//   const time = dateObject.toISOString().split('T')[1].split('.')[0];

//   return { date, time };
// }

export const extractDateTimeFromTimestamp = (timestamp) => {
  if (!(timestamp instanceof Timestamp)) {
    throw new Error("Input must be a Firebase Timestamp.");
  }

  const dateObject = timestamp.toDate();

  // Extract the local date
  const date = dateObject.toLocaleDateString('en-CA'); // Format as YYYY-MM-DD

  // Extract the local time
  const time = dateObject.toLocaleTimeString('en-GB', { hour12: false }); // Format as HH:mm:ss

  return { date, time };
};
