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
import { SharedElement } from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Styles from '../../Screens/Feed/Styles';
import DetailModel from "../../Screens/Details";

const widthScreen = Dimensions.get('window').width;


class FeedWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModel: false
    };
  }
  openModel = () => {
    this.setState({ showModel: !this.state.showModel })
  }

  render() {
    const { showModel } = this.state
    return (
      <>
        <View style={Styles.header}>
          <View style={{ width: 40, height: 40, backgroundColor: Colors.White }} />
          <Image source={Images.Logo} style={Styles.logo} />
          <TouchableOpacity>
            <Image source={Images.Avatar} style={Styles.avatar} />
          </TouchableOpacity>
        </View>

        <View style={Styles.tagWrapper}>
          <View style={Styles.direction}>

            <TouchableOpacity style={Styles.tagContainer}>
              <Text style={Styles.darkTag}>{"Drops"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.tagContainer}>
              <Text style={Styles.darkTag}>{"Promos"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.darkTagContainer}>
              <Text style={Styles.lightTag}>{"Giveaways"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.tagContainer}>
              <Text style={Styles.darkTag}>{"Challenges"}</Text>
            </TouchableOpacity>

          </View>
        </View>

        <ImageBackground source={Images.FirstFeed} style={Styles.background}>

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
              <Image source={Images.EnterButton} style={Styles.enterButton} />
            </TouchableOpacity>
          </View>

        </ImageBackground>

        <View style={Styles.featuredFeed}>
          <Text style={Styles.featured}>{"Featured"}</Text>

          <View style={{ width: widthScreen / 1.12, alignSelf: 'center' }}>
            <Image source={Images.Authentic} style={Styles.shoes} />
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={1}
          onPress={this.openModel}>
          <SharedElement id="image">
            <ImageBackground source={Images.WeekWidgetFeed} style={Styles.background}>

              <View style={Styles.direction}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity>
                    <Image source={Images.ShareNow} style={Styles.shareFeed} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={Images.Favourite} style={Styles.likeFeed} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={1}
                  onPress={this.openModel}>
                  <Image source={Images.Enter} style={Styles.enterButton} />
                </TouchableOpacity>
              </View>

            </ImageBackground>
          </SharedElement>
        </TouchableOpacity>

        <ImageBackground source={Images.Street} style={Styles.background}>

          <View style={Styles.direction}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image source={Images.ShareNow} style={Styles.shareFeed} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={Images.Favourite} style={Styles.likeFeed} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Image source={Images.Enter} style={Styles.enterButton} />
            </TouchableOpacity>
          </View>

        </ImageBackground>

        <ImageBackground source={Images.HighTop} style={Styles.background}>

          <TouchableOpacity style={{ width: widthScreen / 1.12, alignSelf: 'center', alignItems: 'flex-start' }}>
            <Image source={Images.Draft} style={{ width: 101, height: 37 }} />
          </TouchableOpacity>

          <Text style={{ fontSize: 24, fontWeight: '900', color: Colors.DullBlack, width: widthScreen / 1.12, alignSelf: 'center', marginBottom: 5 }}>{"NIKKE:"}</Text>
          <Text style={{ fontSize: 24, fontWeight: '900', color: Colors.DullBlack, width: widthScreen / 1.12, alignSelf: 'center', marginBottom: 16 }}>{"HIGH TOP HEAVEN"}</Text>

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
              <Image source={Images.EnterButton} style={Styles.enterButton} />
            </TouchableOpacity>
          </View>

        </ImageBackground>

        <ImageBackground source={Images.IconsFeed} style={Styles.background}>

          <Text style={{ fontSize: 24, fontWeight: '900', color: Colors.White, width: widthScreen / 1.12, alignSelf: 'center', marginBottom: 5 }}>{"ICONS:"}</Text>
          <Text style={{ fontSize: 24, fontWeight: '900', color: Colors.White, width: widthScreen / 1.12, alignSelf: 'center', marginBottom: 16 }}>{"FEAT LONDON JAMES"}</Text>

          <View style={Styles.direction}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image source={Images.ShareNow} style={Styles.shareFeed} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={Images.Favourite} style={Styles.likeFeed} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Image source={Images.Enter} style={Styles.enterButton} />
            </TouchableOpacity>
          </View>

        </ImageBackground>

        <ImageBackground source={Images.LastFeed} style={Styles.background}>

          <View style={Styles.direction}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image source={Images.ShareNow} style={Styles.shareFeed} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={Images.Favourite} style={Styles.likeFeed} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Image source={Images.Enter} style={Styles.enterButton} />
            </TouchableOpacity>
          </View>

        </ImageBackground>

        <DetailModel
          open={showModel}
          close={this.openModel} />
      </>
    )
  }
}
export default FeedWrapper;