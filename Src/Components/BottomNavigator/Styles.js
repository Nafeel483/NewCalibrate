import { StyleSheet } from 'react-native';
import Colors from '../../Styles/Colors';
const styles = StyleSheet.create({
  bottomContainer: {
    width: "100%",
    height: 85,
    borderTopWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    alignSelf: 'center',
    // marginBottom: 20
  },
  home: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginTop: '-20%',
    // marginRight: 10,
    // zIndex: 1
  },
  textBottom: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: '400'
  }
});
export default styles;