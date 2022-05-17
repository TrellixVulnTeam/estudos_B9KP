import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import { View, Text } from "react-native";
import { SvgProps } from 'react-native-svg'

import { styles } from './styles';
import { theme } from "../../../global/styles/theme";


type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export function Category({
  title, 
  icon: Icon, 
  checked = false,
  ...rest
}: Props) {
  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
      >
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.unchecked}
          />
          <Icon 
           width={48} 
           height={48}
          />
           <Text style={styles.title}/>
        </View>
      </LinearGradient>
    </RectButton>
  );
}