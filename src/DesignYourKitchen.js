import React from 'react';
import './DesignYourKitchen.css';

const DesignYourKitchen = () => {
  console.log("DesignYourKitchen component is rendering"); // Debugging line

  return (
    <div className="design-container">
      <h1 className="design-title">Design Your Kitchen</h1>
      <div className="model-grid">
        <div className="model-wrapper">
          <iframe
            title="Modern Kitchen Island"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            width="640"
            height="480"
            src="https://sketchfab.com/models/7d71f2c5c92c4b58bc8337aade264a18/embed?ui_hint=0&ui_theme=dark"
          ></iframe>
        </div>
        <div className="model-wrapper">
          <iframe
            title="Second Kitchen Model"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            width="640"
            height="480"
            src="https://sketchfab.com/models/YOUR_SECOND_MODEL_URL/embed?ui_hint=0&ui_theme=dark"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DesignYourKitchen;
