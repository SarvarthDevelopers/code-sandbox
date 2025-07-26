import type { Meta, StoryObj } from "@storybook/react";
import EventCard from "./EventCard";
import { FaCalendarAlt, FaStar } from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";

const meta: Meta<typeof EventCard> = {
  title: "Components/EventCard",
  component: EventCard,
  tags: ["autodocs"], // optional, if you use Storybook Docs
};

export default meta;
type Story = StoryObj<typeof EventCard>;

//  Default Event Card
export const Default: Story = {
  args: {
    title: "Manage Event",
    icon: <FaSliders className="vertical-icon" />,
    type: "default",
  },
};

//  Featured Event Card
export const Featured: Story = {
  args: {
    title: "Manage Event",
    icon:<FaSliders className="vertical-icon" />,
    type: "featured",
  },
};

// Clickable Event Card (logs in console)
export const Clickable: Story = {
  args: {
    title: "Clickable Event",
    icon: <FaSliders className="vertical-icon" />,
    type: "default",
    onClick: () => alert("Event Card Clicked!"),
  },
};

// Vertical Icon Example
export const VerticalIcon: Story = {
  args: {
    title: "Vertical Icon Event",
    icon: <FaSliders className="vertical-icon" />,
    type: "default",
  },
};


