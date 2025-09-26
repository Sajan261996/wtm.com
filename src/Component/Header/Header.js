// Header.js
import React from 'react';
// Ensure the path '../styles' is absolutely correct relative to this file's location.
// The objects (COLORS, FONT_FAMILY, SIZES) MUST be exported with 'export const' 
// in the '../styles' file.
import { COLORS, FONT_FAMILY, SIZES } from '../styles'; 

const Header = () => {
  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      // The issue was here: SIZES was undefined, not SIZES.padding being a problem.
      padding: SIZES.padding, 
      borderBottom: '1px solid #EAEAEA',
      backgroundColor: COLORS.card,
      fontFamily: FONT_FAMILY.sans
    }}>
      <div style={{ 
        fontSize: '24px', 
        fontWeight: '900',
        color: COLORS.primary 
      }}>
        wtm
      </div>
      <div style={{ 
        fontSize: '16px', 
        color: COLORS.textGray,
        fontWeight: '500'
      }}>
        What's the Move
      </div>
    </header>
  );
};

export default Header;