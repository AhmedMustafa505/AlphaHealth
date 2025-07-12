import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { PlanTabSvg, ExerciseTabSvg, LearnTabSvg } from '@/assets';

interface TabIconProps {
  name: string;
  focused: boolean;
  color: string;
  size: number;
}

const TabIcon: React.FC<TabIconProps> = ({ name, focused, color, size }) => {
  switch (name) {
    case 'Plan':
      return <PlanTabSvg width={40} height={40} color={color} />;
    
    case 'Exercises':
      return <ExerciseTabSvg width={50} height={50} color={color} />;
    
    case 'Learn':
      return <LearnTabSvg width={50} height={50} color={color} />;
    
    case 'Home':
    default:
      const iconName: keyof typeof Ionicons.glyphMap = 
        name === 'Home' 
          ? (focused ? 'home' : 'home-outline')
          : 'help-circle-outline';
      
      return <Ionicons name={iconName} size={size} color={color} />;
  }
};

export default TabIcon; 