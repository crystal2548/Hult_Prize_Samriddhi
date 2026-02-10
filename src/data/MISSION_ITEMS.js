import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';

const MISSION_ITEMS = [
  {
    icon: <Target className="icon-primary" size={32} />,
    title: "The Mission",
    desc: "To challenge students to solve the world's most pressing issues through social entrepreneurship, providing a platform where ideas turn into global movements.",
  },
  {
    icon: <Lightbulb className="icon-primary" size={32} />,
    title: "The Vision",
    desc: "Empowering the youth of Samriddhi College to become leaders of change, creating sustainable businesses that prioritize people and planet over pure profit.",
  },
  {
    icon: <Users className="icon-primary" size={32} />,
    title: "Community",
    desc: "A vibrant ecosystem of mentors, alumni, and students working together to refine business models and maximize local impact in Nepal.",
  },
];

export default MISSION_ITEMS;