import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';

const Header= () => {
  return (
    <View style={styles.headerTop}>
      <TouchableOpacity style={styles.notificationIcon}>
        <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileIcon}>
        <Ionicons name="person-circle-outline" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default Header; 