import React from 'react';
import { FlatList } from 'react-native';
import { styles } from '../styles';
import ExerciseCard from './ExerciseCard';

interface Exercise {
  id: string;
  title: string;
  description: string;
}

interface ExercisesListProps {
  exercises: Exercise[];
}

const ExercisesList = ({ exercises }: ExercisesListProps) => {
  const renderExerciseItem = ({ item }: { item: Exercise }) => (
    <ExerciseCard exercise={item} />
  );

  return (
    <FlatList
      data={exercises}
      renderItem={renderExerciseItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.exerciseRow}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.exercisesContainer}
      style={styles.scrollableContent}
      bounces={true}
      removeClippedSubviews={false}
    />
  );
};

export default ExercisesList; 