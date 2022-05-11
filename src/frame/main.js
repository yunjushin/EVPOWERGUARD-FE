import React from 'react';
import { Box } from '@mui/material';
import {
  frame,
  frame_top,
  frame_bottom,
  frame_bottom_content,
  frame_bottom_side,
} from '../style';
import Side from './side';
import Content from './content';
import Top from './top';

export default function Main() {
  return (
    <React.Fragment>
      <Box sx={frame}>
        <Box sx={frame_top}>
          <Top />
        </Box>
        <Box sx={frame_bottom}>
          <Box sx={frame_bottom_side}>
            <Side />
          </Box>
          <Box sx={frame_bottom_content}>
            <Content />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
