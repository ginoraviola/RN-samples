import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RectButton} from "react-native-gesture-handler";
import {useTheme} from "@shopify/restyle";
import {Theme} from "./Theme";

interface ButtonProps {
  variant: 'default' | 'primary',
  label: string,
  onPress: () => void;
}

const Button = ({variant, label, onPress}: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor = variant === 'primary' ? theme.colors.primary : 'rgba(12, 14, 14, .2)';
  const color = variant === 'primary' ? theme.colors.white : theme.colors.button;

  return (
      <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
        <Text style={[styles.label, {color}]}>{label}</Text>
      </RectButton>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 15,
    textAlign: 'center',
  }
});

export default Button;
