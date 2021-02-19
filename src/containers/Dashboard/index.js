import React from 'react';
import SimpleDialog from '../../components/SimpleDialog';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Dashboard = () => {

  const emails = ['username@gmail.com', 'user02@gmail.com'];

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
  };
  
  return (
    <div>
      <div>Dashboard</div>
      <br/>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>      

      <Typography variant="subtitle1">Selected: {selectedValue}</Typography>

      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
};

export default Dashboard;
