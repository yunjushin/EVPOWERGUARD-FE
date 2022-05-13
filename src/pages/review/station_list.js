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
  { stationId: 11111, stationName: 'supex station', rgstDate: '20220513' },
  { stationId: 22222, stationName: 'bundang station', rgstDate: '20220512' },
];

function StationList({ isShow, setVisible, onClickOk }) {
  const radioGroupRef = React.useRef(null);
  const stationRef = React.useRef({});

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };
  const handleChange = (e) => {
    const stationId = e.target.closest('label').dataset?.stationId;
    const stationName = e.target.value;
    const rgstDate = e.target.closest('label').dataset?.rgstDate;
    stationRef.current = {
      stationId: stationId,
      stationName: stationName,
      rgstDate: rgstDate,
    };
  };

  const handleClose = () => {
    setVisible(false);
  };
  const handleOk = () => {
    setVisible(false);
    onClickOk(true, stationRef.current);
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
          aria-label="stations"
          name="stations"
          onChange={handleChange}
        >
          {options.map(({ stationId, stationName, rgstDate }) => (
            <FormControlLabel
              value={stationName}
              key={stationId}
              control={<Radio />}
              label={stationName}
              data-station-id={stationId}
              data-rgst-date={rgstDate}
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

export default StationList;
