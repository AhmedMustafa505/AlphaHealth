import React from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';

interface Category {
  id: string;
  name: string;
}

interface CategoryFiltersProps {
  categories: Category[];
}

const CategoryFilters = ({ categories }: CategoryFiltersProps) => {
  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity style={styles.categoryButton}>
      {item.name !== 'All' && (
        <Ionicons 
          name="barbell-outline" 
          size={16} 
          color="#FFFFFF" 
          style={styles.categoryIcon}
        />
      )}
      <Text style={styles.categoryText}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesContainer}
    />
  );
};

export default CategoryFilters; 