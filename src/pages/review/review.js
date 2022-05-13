import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import ReviewDetail from './review_detail';
import StationList from './station_list';
import ReviewWrite from './review_writing';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import {
  renderEditRating,
  renderRating,
} from '@mui/x-data-grid-generator/renderer';
import api from '../../api';
const CustomToolbar = ({ setFilterButtonEl }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEl} />
  </GridToolbarContainer>
);
const columns = [
  {
    field: 'id',
    headerName: 'ID',
    type: 'string',
  },
  {
    field: 'stationName',
    headerName: '충전소명',
    type: 'string',
  },
  {
    field: 'content',
    headerName: '내용',
    type: 'string',
    width: 200,
  },
  {
    field: 'rating',
    headerName: '별점',
    renderCell: renderRating,
    renderEditCell: renderEditRating,
    type: 'number',
    width: 200,
  },
  {
    field: 'userName',
    headerName: '작성자',
    type: 'string',
  },
  {
    field: 'registDate',
    headerName: '작성일',
    type: 'date',
    valueGetter: ({ value }) => value && new Date(value),
  },
];

function Review() {
  const [filterButtonEl, setFilterButtonEl] = useState(null);
  const [reviewList, setReviewList] = useState([]);
  const [detailVisible, setDetailVisible] = useState(false);
  const [listVisible, setListVisible] = useState(false);
  const [writingVisible, setWritingVisible] = useState(false);
  const [selectedStation, setSelectedStation] = useState({
    stationName: '',
    content: '',
    rating: 5,
    userName: '',
    registDate: '',
  });
  const selectedRow = useRef({
    stationName: '',
    content: '',
    rating: 5,
    userName: '',
    registDate: '',
  });
  const handleClickContent = useCallback((params, event) => {
    if (params.field === 'content') {
      selectedRow.current = params.row;
      setDetailVisible(true);
    }
  }, []);
  const handleClickWriteReview = useCallback((params, event) => {
    setListVisible(true);
  });
  const handleSelectStation = useCallback((visible, stationData) => {
    setSelectedStation(stationData);
    setWritingVisible(visible);
  }, []);
  /**
   * 전체 리뷰 리스트를 서버로 부터 받아 온다.
   */
  const getReviewList = async () => {
    // const res = await api.get('/review');
    // if (res.status === 200 || res.status === 302) {
    //   setReviewList(res.data);
    // }
    const res = [
      {
        id: '1',
        stationName: 'station01',
        content: '좋아요',
        rating: 5,
        userName: 'user01',
        registDate: '20220513',
      },
      {
        id: '2',
        stationName: 'station02',
        content: '별로예요',
        rating: 1,
        userName: 'user02',
        registDate: '20220512',
      },
      {
        id: '3',
        stationName: 'station03',
        content:
          'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
        rating: 3,
        userName: 'user03',
        registDate: '20220512',
      },
    ];
    setReviewList(res);
    return res;
  };

  useEffect(() => {
    getReviewList();
  }, []);
  return (
    <Box
      sx={{
        m: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '10px 40px',
        width: '100vm',
      }}
    >
      <div style={{ alignSelf: 'self-start', paddingLeft: '20px' }}>
        <h2>리뷰 조회</h2>
        <Button onClick={handleClickWriteReview}>새 리뷰 작성</Button>
      </div>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={reviewList}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          components={{
            Toolbar: CustomToolbar,
          }}
          componentsProps={{
            panel: {
              anchorEl: filterButtonEl,
            },
            toolbar: {
              setFilterButtonEl,
            },
          }}
          onCellClick={handleClickContent}
        />
      </div>
      <ReviewDetail
        isShow={detailVisible}
        data={selectedRow.current}
        setVisible={setDetailVisible}
      />
      <StationList
        isShow={listVisible}
        setVisible={setListVisible}
        onClickOk={handleSelectStation}
      />
      <ReviewWrite
        isShow={writingVisible}
        data={selectedStation}
        setVisible={setWritingVisible}
      />
    </Box>
  );
}

export default Review;
