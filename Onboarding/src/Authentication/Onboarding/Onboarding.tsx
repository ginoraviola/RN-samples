import React, {useRef} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

import Slide, {SLIDE_HEIGHT, BORDER_RADIUS} from './Slide';
import Subslide from './Subslide';
import Dot from './Dot';

import Animated, {divide, multiply} from 'react-native-reanimated';
import {interpolateColor, useScrollHandler} from "react-native-redash";

const {width} = Dimensions.get('window');

const Onboarding = () => {
  const {scrollHandler, x} = useScrollHandler();
  const slides = [
    {
      title: 'Relaxed',
      subtitle: 'Find Your Outfits',
      description: 'Confused about your outfit? dont worry! Find the best outfit here',
      color: '#384955',
      picture: require('../../assets/Money.png')
    },
    {
      title: 'Playful',
      subtitle: 'Hear it first, Wear it First',
      description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
      color: '#0E86BA',
      picture: require('../../assets/ProductLaunch.png')
    },
    {
      title: 'Excentric',
      subtitle: 'Your Style, Your Way',
      description: 'Create Your individual & unique style and look great everyday.',
      color: '#61BBF2',
      picture: require('../../assets/Messages.png')
    },
    {
      title: 'Funky',
      subtitle: 'Your Style, Your Way',
      description: 'Create Your individual & unique style and look great everyday.',
      color: '#CFF6FF',
      picture: require('../../assets/Customize.png')
    },
  ];

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  });

  const scroll = useRef<Animated.ScrollView>(null);

  return (
      <View style={styles.container}>
        <Animated.View style={[styles.slider, {backgroundColor}]}>
          <Animated.ScrollView horizontal
                               ref={scroll}
                               snapToInterval={width}
                               showsHorizontalScrollIndicator={false}
                               bounces={false}
                               decelerationRate="fast"
                               {...scrollHandler}
          >
            {slides.map(({title, picture}, index) => (
                <Slide {...{title, picture}}
                       right={!!(index % 2)}
                       key={index}
                />
            ))}
          </Animated.ScrollView>
        </Animated.View>
        <View style={styles.footer}>
          <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor}}/>
          <View style={[styles.footerContent]}>
            <View style={styles.pagination}>
                {slides.map((_, index) => (
                    <Dot key={index}
                         currentIndex={divide(x, width)}
                         index={index}/>)
                )}
            </View>
            <Animated.View style={{
              flex:1,
              flexDirection: 'row',
              width: width * slides.length,
              transform:[{translateX: multiply(x, -1)}],
            }}>
              {slides.map(({subtitle, description}, index) => (
                  <Subslide {...{subtitle, description}}
                            last={(index === slides.length - 1)}
                            key={index}
                            onPress={() => {
                              if(scroll.current) {
                                scroll.current
                                    .getNode()
                                    .scrollTo({x: width * (index + 1), animated: true})
                              }
                            }}
                  />
              ))}
            </Animated.View>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  slider: {
    borderBottomRightRadius: BORDER_RADIUS,
    height: SLIDE_HEIGHT,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Onboarding;
