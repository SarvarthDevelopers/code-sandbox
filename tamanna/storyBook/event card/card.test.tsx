import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EventCard from './Component/card';

// 1. Basic render test
test('renders event title, date and time', () => {
  render(
    <EventCard
      bannerUrl="test-banner.jpg"
      eventTitle="Test Event"
      date="August 1, 2025"
      time="10:00 AM"
      organizerName="Test Org"
      announcementDate="July 20, 2025"
      countdownText="Event starts in 5 days"
    />
  );

  // Check for static content
  expect(screen.getByText('Test Event')).toBeInTheDocument();
  expect(screen.getByText('August 1, 2025')).toBeInTheDocument();
  expect(screen.getByText('10:00 AM')).toBeInTheDocument();
  expect(screen.getByText('Test Org')).toBeInTheDocument();
  expect(screen.getByText('Announced on July 20, 2025')).toBeInTheDocument();
  expect(screen.getByText('Event starts in 5 days')).toBeInTheDocument();
});

// 2. Check if banner image loads
test('displays banner image with correct src', () => {
  render(
    <EventCard
      bannerUrl="banner-image.jpg"
      eventTitle="Test"
      date="Aug 1"
      time="9:00 AM"
      organizerName="Org"
      announcementDate="Jul 20"
    />
  );

  const image = screen.getByAltText('Event Banner') as HTMLImageElement;
  expect(image).toBeInTheDocument();
  expect(image.src).toContain('banner-image.jpg');
});

// 3. Check button click
test('calls onButtonClick when button is clicked', () => {
  const mockClick = jest.fn();

  render(
    <EventCard
      bannerUrl="img.jpg"
      eventTitle="Click Event"
      date="Sept 3"
      time="6:00 AM"
      organizerName="Org"
      announcementDate="Aug 1"
      onButtonClick={mockClick}
    />
  );

  const button = screen.getByRole('button', { name: /visit event page/i });
  fireEvent.click(button);
  expect(mockClick).toHaveBeenCalledTimes(1);
});
