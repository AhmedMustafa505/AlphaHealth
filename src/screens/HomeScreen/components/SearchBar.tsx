import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';

interface SearchBarProps {
  searchText: string;
  onSearchTextChange: (text: string) => void;
}

const SearchBar = ({ searchText, onSearchTextChange }: SearchBarProps) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#A0AEC0" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#FFFFFF"
          value={searchText}
          onChangeText={onSearchTextChange}
        />
      </View>
      <TouchableOpacity style={styles.filterButton}>
        <Ionicons name="options-outline" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar; 