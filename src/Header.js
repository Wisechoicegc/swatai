import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <h1>My Logo</h1>
      </div>
      <nav style={navStyle}>
        <ul style={navListStyle}>
          <li style={navItemStyle} className="active">Home</li>
          <li style={navItemStyle}>Services</li>
          <li style={navItemStyle}>Portfolio</li>
        </ul>
      </nav>
    </header>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',  // Ensures logo is on the left, menu on the right
  alignItems: 'center',
  padding: '2em',
  backgroundColor: '#05060f',  // Matches EnhancedHero background
  color: '#bad6f7',  // Matches EnhancedHero text color
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  margin: '0 auto',
  opacity: 0,  // Initial opacity for animation
  transform: 'translateY(-1em)',
  animation: 'load 2s ease-in 2s forwards, up 1.4s ease-out 2s forwards',
};

const logoStyle = {
  fontSize: '1.5em',
  marginRight: 'auto',  // Ensures the logo stays on the left
};

const navStyle = {
  marginLeft: 'auto',  // Ensures the menu is aligned to the right
};

const navListStyle = {
  listStyleType: 'none',
  display: 'flex',
  margin: 0,
  padding: 0,
};

const navItemStyle = {
  marginLeft: '20px',
  cursor: 'pointer',
};

export default Header;
