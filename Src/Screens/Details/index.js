import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { SharedElement } from 'react-navigation-shared-element';
import Modal from 'react-native-modal';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Styles from './Styles';

const widthScreen = Dimensions.get('window').width;

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { open } = this.props
    return (
      <>
        {/* <SafeAreaProvider>
          <SafeAreaView style={Styles.safeAreaContainer} forceInset={{ top: 'never' }}>
            <SharedElement id="image" > */}
        <Modal animationInTiming={300}
          animationOutTiming={200}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          backdropOpacity={0.7}
          avoidKeyboard={true}
          transparent={true}
          isVisible={open}
          onBackdropPress={() => { this.props.close() }}
          style={{ flex: 1, justifyContent: 'flex-start' }}>
          <View style={Styles.modalCont}>

            <View style={{ flex: 1 }}>

              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 30 }}>

                  <ImageBackground source={Images.WeekWidgetFeed} style={Styles.background}>

                    <TouchableOpacity  activeOpacity={1} onPress={() => { this.props.close() }}
                      style={{ width: widthScreen / 1.12, alignSelf: 'center', marginTop: '15%' }}>
                      <Image source={Images.BackButton} style={Styles.backButton} />
                    </TouchableOpacity>

                  </ImageBackground>

                  <View style={Styles.timerWrapper}>
                    <Text style={Styles.time}>{"10d : 12h : 47m : 25"}</Text>
                  </View>

                  <Text style={Styles.title}>{"This week in Sneakers"}</Text>
                  <Text style={Styles.description}>{"Designed for running but adopted by the streets, the Nike VaporMax 2021 FK gives your attitude an edge. Why? The revolutionary, pillowy Air unit is made for lasting comfort. Plus, the airy Flyknit upper is fun to look at, but it's also lightweight and incredibly versatile whether you're jogging after work or hitting the shops."}</Text>
                  <Text style={Styles.section}>{"Sports"}</Text>

                  <View style={Styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image source={Images.Basketball} style={Styles.sports} />
                      <TouchableOpacity>
                        <Text style={Styles.balls}>{"BASKETBALL"}</Text>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                      <Image source={Images.Arrow} style={Styles.arrow} />
                    </TouchableOpacity>
                  </View>

                  <View style={{ width: widthScreen, backgroundColor: Colors.Grey, height: 1 }} />

                  <View style={Styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image source={Images.Hockey} style={Styles.sports} />
                      <TouchableOpacity>
                        <Text style={Styles.balls}>{"HOCKEY"}</Text>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                      <Image source={Images.Arrow} style={Styles.arrow} />
                    </TouchableOpacity>
                  </View>

                  <View style={{ width: widthScreen, backgroundColor: Colors.Grey, height: 1 }} />

                  <View style={Styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image source={Images.Football} style={Styles.sports} />
                      <TouchableOpacity>
                        <Text style={Styles.balls}>{"FOOTBALL"}</Text>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                      <Image source={Images.Arrow} style={Styles.arrow} />
                    </TouchableOpacity>
                  </View>

                  <View style={{ width: widthScreen, backgroundColor: Colors.Grey, height: 1 }} />

                  <View style={Styles.container}>
                    <TouchableOpacity>
                      <Text style={Styles.termsConditions}>{"Terms & Conditions"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Image source={Images.Arrow} style={Styles.arrow} />
                    </TouchableOpacity>
                  </View>

                  <View style={{ width: widthScreen, backgroundColor: Colors.Grey, height: 1, marginBottom: 25 }} />

                  <View style={Styles.direction}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <TouchableOpacity>
                        <Image source={Images.Share} style={Styles.shareFeed} />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image source={Images.Like} style={Styles.likeFeed} />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Image source={Images.GetStarted} style={Styles.enterButton} />
                    </TouchableOpacity>
                  </View>

                </View>
              </ScrollView>
            </View>
          </View>

        </Modal>
        {/* </SharedElement>
          </SafeAreaView >
        </SafeAreaProvider> */}
      </>
    )
  }
}
export default Details;