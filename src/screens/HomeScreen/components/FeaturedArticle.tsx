import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';

const FeaturedArticle = () => {
  return (
    <View style={styles.featuredArticle}>
      <View style={styles.featuredArticleContent}>
        <Text style={styles.articleTitle}>Article Title</Text>
        <Text style={styles.articleDescription}>Description goes here</Text>
      </View>
      <View style={styles.featuredArticleIcon}>
        <Ionicons name="document-text-outline" size={32} color="#FFFFFF" />
      </View>
    </View>
  );
};

export default FeaturedArticle; 