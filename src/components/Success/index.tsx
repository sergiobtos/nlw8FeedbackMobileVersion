import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import successImg from "../../assets/success.png"
import { Copyright } from '../Copyright';

import { styles } from './styles';

interface Props {
  onSentAnotherFeedback: () => voide;
}

export function Success({onSentAnotherFeedback}: Props) {
  return (
    <View style={styles.container}>
        <Image 
          source={successImg}
          style={styles.image}
        />

        <Text style={styles.title}>Thank your for your feedback!</Text>

        <TouchableOpacity 
            style={styles.button}
            onPress={onSentAnotherFeedback}
        >
          <Text style={styles.buttonTitle}>I want to send another one.</Text>
        </TouchableOpacity>

        <Copyright />
    </View>
  );
}