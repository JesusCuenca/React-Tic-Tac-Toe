import React from 'react';
import '../styles/Background.css';

function Background(props) {
  return (
    <div className="app-bg">
      <div className="bg bg-x" />
      <div className="bg bg-o" />
    </div>
  );
}

export default Background;
