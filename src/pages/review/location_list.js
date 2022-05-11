import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

const options = [
  { id: 1, name: 'supex' },
  { id: 2, name: 'bundang' },
];

function LocationList({ isShow, setVisible, onClickOk }) {
  const radioGroupRef = React.useRef(null);
  const locationRef = React.useRef(null);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };
  const handleChange = (e) => {
    const locationId = e.target.closest('label').dataset?.locationId;
    locationRef.current = locationId;
    console.log('locationId', locationId);
  };

  const handleClose = () => {
    setVisible(false);
  };
  const handleOk = () => {
    setVisible(false);
    onClickOk(true, locationRef.current);
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      TransitionProps={{ onEntering: handleEntering }}
      open={isShow}
    >
      <DialogTitle>내가 이용한 충전소 목록</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="locations"
          name="locations"
          onChange={handleChange}
        >
          {options.map(({ id, name }) => (
            <FormControlLabel
              value={name}
              key={id}
              control={<Radio />}
              label={name}
              data-location-id={id}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

export default LocationList;
