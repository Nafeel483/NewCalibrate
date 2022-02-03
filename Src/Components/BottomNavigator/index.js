import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Platform } from 'react-native';
import styles from './Styles';
import Colors from "../../Styles/Colors";
import Images from '../../Styles/Images';

class Bottom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigatinUpdate: 1
    };
  }
  componentDidMount() {
    this.setState({ navigatinUpdate: this.props.page })
  }
  updateValue = (value) => {
    if (value === 1) {
      this.setState({ navigatinUpdate: value })
      this.props.navigation.navigate('Feed')
    }
    else if (value === 2) {
      this.setState({ navigatinUpdate: value })
      // this.props.navigation.navigate('Map')
    }
    else if (value === 3) {
      this.setState({ navigatinUpdate: value })
      // this.props.navigation.navigate('Map')
    }



  }
  render() {
    const { page } = this.props
    return (
      <>
        <View style={[styles.bottomContainer, {
          backgroundColor: Colors.White,
          borderTopColor: 'rgba(0,0,0,0.12)'
        }]}>
          <View style={[styles.bottomContainerWrapper]}>
            <TouchableOpacity onPress={() => this.updateValue(1)}>
              <Image source={Images.home} style={{
                width: 22,
                height: 22,
                marginTop: 5,
                tintColor: this.state.navigatinUpdate == 1 ? Colors.black : Colors.bottomColor
              }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.updateValue(2)}>
              <Image source={Images.ScanButton} style={{
                width: 102,
                height: 102,
                marginTop: -50
              }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateValue(3)}>
              <Image source={Images.Locker} style={{
                width: 22,
                height: 22,
                marginTop: 5,
                tintColor: this.state.navigatinUpdate == 3 ? Colors.black : Colors.bottomColor
              }} />
            </TouchableOpacity>

          </View>
        </View>
      </>
    )
  }
}

export default Bottom; 