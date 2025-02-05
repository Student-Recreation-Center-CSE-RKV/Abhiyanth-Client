import React, { useEffect, useState } from "react";
import { Button, TextField, TextareaAutosize, Card, CardContent, Typography } from "@mui/material";
import {sendNotifications} from "../../../api/sendNotification"
import uploadImage from "../../../api/uploadImage"

const NotificationForm = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading,setLoading]=useState(false);

  const handleSendNotification = async() => {
    try{
      setLoading(true);
      let imageURL=null;
    if(image)
    imageURL= await uploadImage(image,"Notifications")
    const notificationData = {
      title,
      sub_title: subTitle,
      description,
      image: imageURL,
    };
    console.log(notificationData)
    await sendNotifications(notificationData);
    
    alert("Notification sent successfully!");

    setImage(null);
    }catch(error)
    {
      alert("")
    }finally{
      setLoading(false);
    }
    

  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  

  useEffect(()=>{
    sendNotifications()
  })

  return (
    <Card sx={{ mx: "auto",width:"100%", p: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Send Notification
        </Typography>

        <div style={{ marginBottom: 16 }}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <TextField
            label="Sub Title"
            variant="outlined"
            fullWidth
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <TextareaAutosize
            minRows={4}
            placeholder="Enter description"
            style={{ width: "100%", padding: 8, fontSize: 16 }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <Typography variant="body1" gutterBottom>
            Image (Optional)
          </Typography>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {image && (
            <div style={{ marginTop: 16 }}>
              <Typography variant="body2" gutterBottom>
                Selected Image Preview:
              </Typography>
              <img
                src={URL.createObjectURL(image)}
                alt="Selected Preview"
                style={{ width: "100%", maxHeight: 200, objectFit: "contain" }}
              />
            </div>
          )}
        </div>

        <Button
          variant="contained"
          color="primary"
          
          onClick={handleSendNotification}
        >
          {loading ?"Sending ...":"Send Notification"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default NotificationForm;
