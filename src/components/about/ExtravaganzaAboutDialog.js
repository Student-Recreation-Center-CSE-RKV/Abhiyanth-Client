import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import image from '../../assets/images/xplode.jpeg'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function ExtravagangaAboutDialog({cardName ,bgImage ,id , dialogText}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} sx={{fontSize:'40px'}}>
        know more
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
            sx: {
                width: '360px', 
                height: '469px', 
                borderRadius: '40px',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center', 
              },
          }}
      >
        <DialogTitle  sx={{
                m: 0, 
                p: 2,
                color: '#FFF',
                textAlign: 'center',
                textShadow: '3px 4px 10px rgba(34, 209, 238, 0.30), -3px -4px 10px rgba(255, 79, 248, 0.30)',
                fontFamily: 'Audiowide',
                fontSize: '30px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: '9.3px',
                textTransform: 'uppercase',
                position: 'relative', 
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',  
                  height: '3px',  
                  background: 'linear-gradient(270deg, #6AE4FF 0%, #FF6AB7 99.73%)',  
                },
            }} 
                    id="customized-dialog-title"
    
        >
         {cardName}

        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom  
                      sx={{
                      color: '#FFF',
                      textAlign: 'center',
                      textShadow: '3px 4px 10px rgba(34, 209, 238, 0.30), -3px -4px 10px rgba(255, 79, 248, 0.30)',
                      fontFamily: 'Audiowide',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                      letterSpacing: '4.34px',
                      textTransform: 'uppercase',
                    }}
              >

                {dialogText}
          </Typography>
        </DialogContent>
        
      </BootstrapDialog>
    </React.Fragment>
  );
}
