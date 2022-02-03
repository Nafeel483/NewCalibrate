import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  modalCont: {
    height: heightScreen,
    width: widthScreen,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    marginTop: -20,
  },
  background: {
    width: widthScreen,
    height: 493
  },
  background1: {
    width: widthScreen,
    height: 493
  },
  backButton1: {
    width: 40,
    height: 40,
    marginTop: 30,
    marginLeft: 20
  },
  backButton: {
    width: 40,
    height: 40
  },
  timerWrapper: {
    width: 205,
    height: 46,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -12
  },
  time: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.DullBlack
  },
  title1: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.DullBlack,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 20
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.DullBlack,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 8
  },
  description: {
    fontSize: 18,
    fontWeight: '300',
    color: Colors.DarkGrey,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 12
  },
  section: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.DullBlack,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 24,
    marginBottom: 10
  },
  container: {
    flexDirection: 'row',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.White
  },
  sports: {
    width: 40,
    height: 40
  },
  balls: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.DullBlack,
    marginLeft: 25
  },
  termsConditions: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.DullBlack,
  },
  arrow: {
    width: 30,
    height: 30
  },
  direction: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  shareFeed: {
    width: 44,
    height: 48,
    marginBottom: 20
  },
  likeFeed: {
    width: 44,
    height: 48,
    marginBottom: 20
  },
  enterButton: {
    width: 197,
    height: 48
  },
});
export default styles;