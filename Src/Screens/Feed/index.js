import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Styles from './Styles';
import BottomWrapper from '../../Components/BottomNavigator';
import FeedWrapper from '../../Components/FeedWrapper';


const widthScreen = Dimensions.get('window').height;

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: false
    };
  }


  OnscrollEvent = () => {
    this.setState({ change: !this.state.change })
  }
  backVisibility = (val) => {
    this.setState({ change: false })
  }

  render() {
    const { change } = this.state
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeAreaContainer} forceInset={{ bottom: 'never' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ marginBottom: '15%' }}>

              <FeedWrapper navigation={this.props.navigation}/>
               
              </View>
            </ScrollView>

            <BottomWrapper
              navigation={this.props.navigation}
              page={1}
            />
          </SafeAreaView>
        </SafeAreaProvider>

      </>
    )
  }
}
export default Feed;