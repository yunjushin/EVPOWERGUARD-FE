import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Review } from '../pages/review';

function Content() {
  return (
    <div className="App">
      <Routes>
        <Route path="/review" element={<Review />}></Route>
      </Routes>
    </div>
  );
}
export default Content;
