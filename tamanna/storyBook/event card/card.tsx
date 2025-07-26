// components/EventCard/EventCard.tsx
import React from 'react';
import './card.css';

export interface EventCardProps {
  bannerUrl: string;
  eventTitle: string;
  date: string;
  time: string;
  organizerName: string;
  announcementDate: string;
  buttonText?: string;
  onButtonClick?: () => void;
  countdownText?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  bannerUrl,
  eventTitle,
  date,
  time,
  organizerName,
  announcementDate,
  buttonText = 'Visit Event Page',
  onButtonClick,
  countdownText = '',
}) => {
  return (
    <div className="event-card">
      <img className="event-card__banner" src={bannerUrl} alt="Event Banner" />
      {countdownText && (
        <div className="event-card__countdown">{countdownText}</div>
      )}
      <div className="event-card__content">
        <h2 className="event-card__title">{eventTitle}</h2>
        <div className="event-card__meta">
          <p className="event-card__date">
            <span role="img" aria-label="calendar"></span> {date}
          </p>
          <p className="event-card__time">
            <span role="img" aria-label="clock"></span> {time}
          </p>
        </div>
        <div className="event-card__organizer">
          <img src="https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62" alt="Organizer Avatar" />
          <div>
            <p className="event-card__org-name">{organizerName}</p>
            <p className="event-card__announcement">Announced on {announcementDate}</p>
          </div>
        </div>
        <button className="event-card__btn" onClick={onButtonClick}>
          {buttonText} →
        </button>
      </div>
    </div>
  );
};

export default EventCard;
