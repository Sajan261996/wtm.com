import React, { useState } from 'react';
import Header from '../src/Component/Header/Header'; 
import Footer from '../src/Component/Footer/Footer'; 
import EventList from '../src/Component/Eventlist/EventList'; 
import SavesScreen from '../src/Component/Footer/SavesScreen'; 
import AddFlowScreen from '../src/Component/Footer/AddFlowScreen'; 
import AccountScreen from '../src/Component/Footer/AccountScreen'; 

// Correct Path for styles.js (Assuming styles.js is directly in the src folder)
import { COLORS } from '../src/Component/styles'; 

const App = () => {
  // State to manage the currently active screen, defaulting to 'Home'
  const [currentScreen, setCurrentScreen] = useState('Home');

  // Function to determine which content component to render
  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <EventList />; 
      case 'Saves':
        return <SavesScreen />;
      case 'AddFlow':
        // Note: The Add Flow is typically a modal, but here we render it as a full screen for simplicity
        return <AddFlowScreen />; 
      case 'Account':
        return <AccountScreen />;
      default:
        return <EventList />;
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      paddingBottom: '80px', // Space for fixed footer
      boxSizing: 'border-box',
      backgroundColor: COLORS.background, 
      overflowX: 'hidden'
    }}>
      <Header />
      
      {/* Dynamic Screen Content */}
      {renderScreen()} 
      
      {/* Footer handles screen switching by setting state */}
      <Footer 
        currentScreen={currentScreen} 
        setActiveScreen={setCurrentScreen} 
      />
    </div>
  );
};

export default App;