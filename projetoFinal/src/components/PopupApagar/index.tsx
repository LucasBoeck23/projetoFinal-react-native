import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style"

interface ButtonProps {
  buttonText: string;
}

export const BotaoPrimario: React.FC<ButtonProps> = ({ buttonText }) => {
  return (
    <LinearGradient
      colors={[
        "rgba(197,142,255,1)",
        "rgba(255,148,225,1)",
        "rgba(255,196,185,1)",
      ]}
      style={styles.gradientBackground}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <TouchableOpacity activeOpacity={0.4} style={styles.toButton}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
