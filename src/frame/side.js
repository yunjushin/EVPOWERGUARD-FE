import React from 'react';
import { List } from '@mui/material';
import RateReviewIcon from '@mui/icons-material/RateReview';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import { MenuItem } from '../components/list_item';

function Side() {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  /* 메뉴 추가 */
  const itemList = [
    {
      icon: RateReviewIcon,
      url: '/review',
      name: 'Review',
      handleClick: handleListItemClick,
    },
    {
      icon: EditLocationAltIcon,
      url: '/mystations',
      name: 'MyStation',
      handleClick: handleListItemClick,
    },
  ];
  return (
    <List>
      {itemList.map((info, index) => (
        <MenuItem
          key={index}
          index={index}
          {...info}
          isSelected={index === selectedIndex}
        ></MenuItem>
      ))}
    </List>
  );
}
export default Side;
