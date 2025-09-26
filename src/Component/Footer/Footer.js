// Footer.js
import React from 'react';
import { COLORS, SHADOWS, FONT_FAMILY } from '../styles';

// SVG Placeholder for the central Add (+) button (Unchanged)
const PlusIconSVG = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Helper styles (Unchanged)
const navItemStyle = (isActive) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  color: isActive ? COLORS.primary : COLORS.textGray,
  transition: 'color 0.2s',
  gap: '4px'
});

const Footer = ({ currentScreen, setActiveScreen }) => {
  return (
    <footer style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '65px',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: COLORS.card,
      borderTop: '1px solid #eee',
      boxShadow: SHADOWS.card,
      zIndex: 10,
      fontFamily: FONT_FAMILY.sans
    }}>
      {/* Home Button (Redirects to EventList/This Weekend view) */}
      <div 
        style={navItemStyle(currentScreen === 'Home')} 
        onClick={() => setActiveScreen('Home')}
      >
        <span style={{ fontSize: '20px' }}>🏠</span>
        <span style={{ fontSize: '12px', fontWeight: currentScreen === 'Home' ? '600' : 'normal' }}>
          Home
        </span>
      </div>
      
      {/* Saves Button (Redirects to Saves Screen/Library) */}
      <div 
        style={navItemStyle(currentScreen === 'Saves')}
        onClick={() => setActiveScreen('Saves')}
      >
        <span style={{ fontSize: '20px' }}>🔖</span>
        <span style={{ fontSize: '12px', fontWeight: currentScreen === 'Saves' ? '600' : 'normal' }}>
          Saves
        </span>
      </div>
      
      {/* Add Button (Redirects to Add Event Flow) */}
      <button 
        style={{
          backgroundColor: COLORS.primary,
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          cursor: 'pointer',
          boxShadow: SHADOWS.floating,
          transform: 'translateY(-15px)',
        }}
        onClick={() => setActiveScreen('AddFlow')}
      >
        <PlusIconSVG />
      </button>

      {/* Account Button (Redirects to Account Screen) */}
      <div 
        style={navItemStyle(currentScreen === 'Account')}
        onClick={() => setActiveScreen('Account')}
      >
        <span style={{ fontSize: '20px' }}>👤</span>
        <span style={{ fontSize: '12px', fontWeight: currentScreen === 'Account' ? '600' : 'normal' }}>
          Account
        </span>
      </div>
    </footer>
  );
};

export default Footer;