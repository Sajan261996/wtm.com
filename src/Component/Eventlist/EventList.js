// EventList.js
import React, { useState } from 'react';
import { COLORS, SHADOWS, FONT_FAMILY, SIZES } from '../styles';

// --- Sample Data Dictionary ---
const SAMPLE_EVENTS = {
  Tonight: [
    { id: 101, title: "After-Hours Mixer", date: "Thu, Sep 25, 7 PM", location: "The Loft", category: "Networking", isFavorite: true },
    { id: 102, title: "Late Night Comedy", date: "Thu, Sep 25, 9:30 PM", location: "The Cellar", category: "Entertainment", isFavorite: false },
  ],
  'This Weekend': [
    { id: 201, title: "Urban R&B Groove", date: "Sat, Sep 27, 8 PM", location: "Warehouse 7", category: "Music", isFavorite: true },
    { id: 202, title: "Digital Art Showcase", date: "Sun, Sep 28, 4 PM", location: "The Gallery", category: "Art", isFavorite: false },
  ],
  'Next Week': [
    { id: 301, title: "Mid-Century Design Talk", date: "Tue, Oct 1, 6 PM", location: "Design Hall", category: "Lecture", isFavorite: false },
    { id: 302, title: "Pop-Up Food Market", date: "Fri, Oct 4, 5 PM", location: "City Park", category: "Food & Drink", isFavorite: true },
  ],
  'This Month': [
    { id: 401, title: "International Film Festival", date: "Oct 18-25", location: "Various Theaters", category: "Film", isFavorite: false },
    { id: 402, title: "Annual City Marathon", date: "Oct 30", location: "Downtown Loop", category: "Sports", isFavorite: false },
  ],
  'Recently Saved': [
    { id: 501, title: "Future of Tech Expo", date: "Feb 2026", location: "Convention Center", category: "Tech", isFavorite: true },
    { id: 502, title: "Vintage Clothes Swap", date: "Dec 10", location: "Community Hall", category: "Shopping", isFavorite: false },
  ],
};
// ---------------------------------------------------

// --- Event Card Component (Unchanged from previous response) ---
const EventCard = ({ title, date, location, category, isFavorite }) => (
    <div style={{
        backgroundColor: COLORS.card,
        borderRadius: SIZES.borderRadius,
        marginBottom: '15px',
        padding: '15px',
        boxShadow: SHADOWS.card,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
    }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div style={{ color: COLORS.textGray, fontSize: '12px', fontWeight: '500' }}>
                {category} • {location}
            </div>
            <div style={{ color: COLORS.textDark, fontSize: '18px', fontWeight: '700' }}>
                {title}
            </div>
            <div style={{ color: COLORS.primary, fontSize: '14px', fontWeight: '600' }}>
                🗓️ {date}
            </div>
        </div>
        <div style={{ color: isFavorite ? 'red' : COLORS.textGray, fontSize: '20px' }}>
            {isFavorite ? '❤️' : '🤍'}
        </div>
    </div>
);
// ---------------------------------------------------


const EventList = () => {
  // State to manage the currently selected filter. Default is 'This Weekend'.
  const [activeFilter, setActiveFilter] = useState('This Weekend');
  
  const filters = Object.keys(SAMPLE_EVENTS);
  const currentEvents = SAMPLE_EVENTS[activeFilter] || []; // Get events for the active filter

  // Styles for filters
  const filterStyle = (filter) => ({
    padding: '8px 15px',
    marginRight: '10px',
    borderRadius: '20px',
    border: filter === activeFilter ? `1px solid ${COLORS.primary}` : '1px solid #ddd',
    backgroundColor: filter === activeFilter ? COLORS.primary : COLORS.card,
    color: filter === activeFilter ? 'white' : COLORS.textDark,
    cursor: 'pointer',
    fontWeight: filter === activeFilter ? '600' : 'normal',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.2s, color 0.2s'
  });

  return (
    <main style={{ 
      padding: SIZES.padding, 
      minHeight: '80vh',
      fontFamily: FONT_FAMILY.sans
    }}>
      {/* Upcoming Events Header */}
      <h2 style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '20px', 
        fontSize: '22px',
        color: COLORS.textDark
      }}>
        Upcoming Events
      </h2>

      {/* Filter Bar (Horizontal scrollable) */}
      <div style={{ 
        display: 'flex', 
        overflowX: 'auto', 
        paddingBottom: '15px', 
        marginBottom: '25px',
      }}>
        {filters.map(filter => (
          <div 
            key={filter} 
            style={filterStyle(filter)}
            onClick={() => setActiveFilter(filter)} // Update state on click
          >
            {filter}
          </div>
        ))}
      </div>

      {/* Event Listings */}
      {currentEvents.length > 0 ? (
          currentEvents.map(event => <EventCard key={event.id} {...event} />)
      ) : (
        /* Display if no events are found for the selected filter */
        <div style={{
          textAlign: 'center',
          padding: '50px 20px',
          border: `1px solid ${COLORS.primary}`,
          borderRadius: SIZES.borderRadius,
          backgroundColor: COLORS.card,
          boxShadow: SHADOWS.card
        }}>
          <p style={{ 
            fontSize: '18px', 
            color: COLORS.textDark, 
            marginBottom: '10px',
            fontWeight: '600'
          }}>
            No events found for {activeFilter}
          </p>
          <p style={{ 
            fontSize: '14px', 
            color: COLORS.textGray 
          }}>
            Try another filter or tap the '+' to add some events.
          </p>
        </div>
      )}
      
    </main>
  );
};

export default EventList;