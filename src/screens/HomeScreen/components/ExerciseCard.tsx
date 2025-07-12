import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles';

interface Exercise {
  id: string;
  title: string;
  description: string;
}

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <View style={styles.exerciseCard}>
      <View style={styles.exerciseImagePlaceholder}>
        <Image source={require('@/assets/excerciseImg.png')} style={styles.exerciseImage} />
      </View>
      <View style={styles.exerciseTextContainer}>
        <Text style={styles.exerciseTitle}>{exercise.title}</Text>
        <Text style={styles.exerciseDescription}>{exercise.description}</Text>
      </View>
    </View>
  );
};

export default ExerciseCard; 