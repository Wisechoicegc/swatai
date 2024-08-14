import React from 'react';
import Header from './Header';
import './Craft.css';

const Craft = () => {
  return (
    <div>
      <Header />
      <div className="craft-container">
        <div className="sketchfab-embed-wrapper">
          <iframe
            title="Kitchen Cabinets 001"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            width="1800"
            height="1000"
            src="https://sketchfab.com/models/5384621b7d9d45ca9d77258b57cf0dc4/embed?autostart=1&transparent=1&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_annotations=0&ui_theme=dark"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Craft;
