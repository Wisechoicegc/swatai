import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 My Website</p>
    </footer>
  );
}

const footerStyle = {
  padding: '10px',
  textAlign: 'center',
  backgroundColor: '#222',
  color: '#fff',
  position: 'absolute',
  bottom: '0',
  width: '100%',
};

export default Footer;
