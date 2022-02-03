// import { createAppContainer } from 'react-navigation';
// import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
// import { Transition } from 'react-native-reanimated';
// import React from 'react';
// import HomeNavigation from './HomeNavigation';


// const AppNavigator = createAnimatedSwitchNavigator(
//   {

//     HomeNavigation: HomeNavigation
//   },
//   {
//     initialRouteName: 'HomeNavigation',
//     transition: (
//       <Transition.Together>
//         {/* <Transition.Out
//           type="slide-bottom"
//           durationMs={400}
//           interpolation="easeIn"
//         /> */}
//         <Transition.In type="fade" durationMs={500} />
//       </Transition.Together>
//     ),
//   },
// );
// export default createAppContainer(AppNavigator);


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { enableScreens } from 'react-native-screens';
import Feed from '../Screens/Feed';
import Details from '../Screens/Details';

enableScreens();

const Stack = createSharedElementStackNavigator();

const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,

      }
    };
  },

};

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName='Feed'>
        <Stack.Screen name='Feed' component={Feed} />
        <Stack.Screen name='Details' component={Details} options={() => options}
          sharedElementsConfig={(props) => [
            {
              id: 'test', animation: 'fade-in'
            }
          ]}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}