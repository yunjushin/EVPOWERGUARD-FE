import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Rating,
  Grid,
  TextareaAutosize,
} from '@mui/material';
import ReviewWrite from './review_writing';
import api from '../../api';

export default function ReviewDetail({ data, isShow, setVisible }) {
  const handleClose = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    console.log(data.id);
    //api.handleDelete('/review', { stationId: data.stationId });
  };
  const handleSave = () => {};
  return (
    <Dialog open={isShow} onClose={handleClose}>
      <DialogTitle>리뷰 상세보기</DialogTitle>
      <DialogContent>
        <Grid container sx={{ padding: '10px 0' }}>
          <Grid item xs>
            <Typography variant="subtitle1">충전소</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle1" readOnly>
              {data.stationName}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle1">작성자</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle1" readOnly>
              {data.userName}
            </Typography>
          </Grid>
        </Grid>

        <Grid container sx={{ padding: '10px 0' }}>
          <Grid item xs={2}>
            <Typography variant="subtitle1">평점</Typography>
          </Grid>
          <Grid item>
            <Rating name="rating" value={data.rating} />
          </Grid>
        </Grid>
        <Grid container direction="row" sx={{ padding: '10px 0' }}>
          <Grid item xs={1}>
            <Typography variant="subtitle1">리뷰</Typography>
          </Grid>
          <Grid item xs={3}>
            <TextareaAutosize
              minRows={3}
              style={{ width: 500 }}
              value={data.content}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

ReviewWrite.defaultProps = {
  data: {
    stationName: '',
    content: '',
    rating: 5,
    userName: '',
    registDate: '',
  },
};
