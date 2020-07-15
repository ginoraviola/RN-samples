import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Image} from 'react-native';
import {Text} from '../../components'


const {width, height} = Dimensions.get('window');

interface SlideProps {
  title: string;
  right?: boolean;
  picture: number;
}

export const SLIDE_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;


export default class Slide extends Component<SlideProps> {
  constructor(props) {
    super(props);
  }

  transform = [
    {translateY: (SLIDE_HEIGHT - 100) / 2},
    {translateX: this.props.right ? (width/2-50) : (-width/2 +50)},
    { rotate: this.props.right ? '-90deg' : '90deg' }
  ];

  render() {
    return (
        <View style={this.styles.container}>
          <View style={this.styles.underlay}>
            <Image style={this.styles.picture}
                   source={this.props.picture}>
            </Image>
          </View>
          <View style={[this.styles.titleContainer, { transform: this.transform }]}>
            <Text variant='hero'>{this.props.title}</Text>
          </View>
        </View>
    )
  }

  styles = StyleSheet.create({
    container: {
      width
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
    },
    picture: {
      ...StyleSheet.absoluteFillObject,
      width: undefined,
      height: undefined,
      borderBottomRightRadius: BORDER_RADIUS,
    },
    titleContainer: {
      height: 100,
      lineHeight: 80,
      justifyContent: 'center'
    }
  })
}
