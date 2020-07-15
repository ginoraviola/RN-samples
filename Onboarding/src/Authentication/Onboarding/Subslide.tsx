import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import {Button, Text} from '../../components'

interface SubslideProps {
  subtitle: string,
  description: string,
  last: boolean,
  onPress: () => void;
}


export default class Subslide extends Component<SubslideProps> {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <View style={this.styles.container}>
          <Text variant='title2' style={this.styles.subtitle}>{this.props.subtitle}</Text>
          <Text variant='body' style={this.styles.description}>{this.props.description}</Text>
          <Button label={this.props.last ? 'Lets get started' : 'Next'}
                  variant={this.props.last ? 'primary' : 'default'}
                  onPress={this.props.onPress}
          />
        </View>
    )
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 44,
      textAlign: 'center',
    },
    subtitle: {
      marginBottom: 12,
    },
    description: {
      textAlign: 'center',
      marginBottom: 40,
    }
  })
}
