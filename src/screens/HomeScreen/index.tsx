import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { categories, exercises } from './mockData';
import {
  Header,
  ArticlesTitle,
  FeaturedArticle,
  SearchBar,
  CategoryFilters,
  ExercisesList,
} from './components';


const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fixedHeader}>
        <Header />
        <ArticlesTitle />
        <FeaturedArticle />
        <SearchBar 
          searchText={searchText} 
          onSearchTextChange={handleSearchTextChange} 
        />
        <CategoryFilters categories={categories} />
      </View>
      <ExercisesList exercises={exercises} />
    </SafeAreaView>
  );
};

export default HomeScreen; 