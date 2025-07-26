import React from 'react';
import './EventCard.css';

interface EventCardProps {
  title: string;
  icon: React.ReactNode;
  type?: 'default' | 'featured';
  onClick?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  icon,
  type = 'default',
  onClick,
}) => {
  return (
    <div
      className={`event-card ${type}`}
      onClick={onClick}
    >
      <div className="icon-wrapper">{icon}</div>
      <p className="card-title">{title}</p>
    </div>
  );
};

export default EventCard;
