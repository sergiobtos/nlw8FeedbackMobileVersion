import { 
  Text, 
  TouchableOpacity, 
  TouchableOpacityProps,
   ActivityIndicator,
} from 'react-native'
import React from 'react'
import { styles } from './styles'
import { theme } from '../../theme';

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
}

export function Button({ isLoading, ...rest}:Props){
 
    return (
      <TouchableOpacity  {...rest} style={styles.container}>
        {
            isLoading 
            ? 
            <ActivityIndicator color={theme.colors.text_on_brand_color}/>
            :
            <Text style={styles.title}>Submit</Text>
        }
      </TouchableOpacity>
    )

}