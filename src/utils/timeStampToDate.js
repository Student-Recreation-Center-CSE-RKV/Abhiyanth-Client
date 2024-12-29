export const extractDateTime = (timestamp) => {
    const date = timestamp.toDate();
    const day = date.getDate(); 
    const month = date.getMonth() + 1; 
    const year = date.getFullYear(); 
    let hours = date.getHours();
    const minutes = date.getMinutes(); 
    const seconds = date.getSeconds(); 
  
    // Convert to 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    // Format the date and time
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    return {
      date: formattedDate,
      time: formattedTime
    };
  };
  