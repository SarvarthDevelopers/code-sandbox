import React from 'react';
// import EventCard from './components/card';
import EventCard from './Component/card';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <EventCard
        bannerUrl="https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62"
        eventTitle="JBG SHHM 2025 - Edition 14"
        date="September 3, 2025"
        time="Starting from 5:30 AM"
        organizerName="Satara Runners’ Foundation"
        announcementDate="Mar 3, 2025"
        countdownText="Registration starts in 5 days, 14 hrs, 9 min, 59 sec."
        buttonText="Visit Event Page"
        onButtonClick={() => alert('Redirecting to event page...')}
      />
    </div>
  );
}

export default App;
