// CustomButton.tsx
import React from 'react';
import { View, Button, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>; // Optional custom style for the button container
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, containerStyle }) => {
  return (
    <View style={[styles.buttonContainer, containerStyle]}>
      <Button
        title={title}
        onPress={onPress}
        color="#FE6C33" // Primary text color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#421271', // Secondary background color
    width: '100%', // Full width
    borderRadius: 4, // Optional: add border radius for better appearance
    overflow: 'hidden', // Ensure the button respects border radius
  },
});

export default CustomButton;
