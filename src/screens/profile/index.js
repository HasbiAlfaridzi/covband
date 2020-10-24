import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  View,
  Platform,
  Dimensions,
  PixelRatio,
  FlatList,
  RefreshControl,
  Alert,
  Linking,
  AppState,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FooterIos from '../../components/ios/footer';
import { Container, Content,Icon } from 'native-base';
import styles from './style';
import style from './style';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenTitle: 'Profile',
    };
  }

  render() {
    return (
        <Container style={{backgroundColor:'#567afc'}}>
          <View style={{height:'5.5%',backgroundColor:'#567afc'}}>
            <StatusBar
              barStyle="light-content"
              hidden={false}
              translucent={false}
              networkActivityIndicatorVisible={true}
              showHideTransition="fade"
            />
          </View>
          
          <Content style={styles.mainContainer}>
            <View style={styles.profileSection}></View>
            <View style={{backgroundColor:'#dddddd',height:170,width:'100%',flexDirection:'row',justifyContent:'center'}}>
              <View style={{width:'48%',height:150,backgroundColor:'#dddddd',alignSelf:'center',justifyContent:'center'}}>
              <TouchableOpacity 
                  style={{width:'95%',height:150,backgroundColor:'grey',alignSelf:'flex-start',borderRadius:2}}
                  onPress={() => {this.props.navigation.navigate("Home")}}
                >

                </TouchableOpacity>
              </View>
              <View style={{width:'48%',height:150,backgroundColor:'#dddddd',alignSelf:'center',justifyContent:'center'}}>
                <View style={{width:'95%',height:150,backgroundColor:'grey',alignSelf:'flex-end',borderRadius:2}}></View>
              </View>
            </View>
            <View style={{backgroundColor:'#dddddd',height:170,width:'100%',flexDirection:'row',justifyContent:'center'}}>
              <View style={{width:'48%',height:150,backgroundColor:'#dddddd',alignSelf:'center',justifyContent:'center'}}>
                <View style={{width:'95%',height:150,backgroundColor:'grey',alignSelf:'flex-start',borderRadius:2}}></View>
              </View>
              <View style={{width:'48%',height:150,backgroundColor:'#dddddd',alignSelf:'center',justifyContent:'center'}}>
                <View style={{width:'95%',height:150,backgroundColor:'grey',alignSelf:'flex-end',borderRadius:2}}></View>
              </View>
            </View>
            <View style={{backgroundColor:'#dddddd',height:130,width:'100%',flexDirection:'row',justifyContent:'center'}}>
              <View style={{width:'48%',height:110,backgroundColor:'#dddddd',alignSelf:'center',justifyContent:'center'}}>
                <View style={{width:'95%',height:110,backgroundColor:'grey',alignSelf:'flex-start',borderRadius:10}}></View>
              </View>
              <View style={{width:'48%',height:110,backgroundColor:'#dddddd',alignSelf:'center',justifyContent:'center'}}>
                <View style={{width:'95%',height:110,backgroundColor:'grey',alignSelf:'flex-end',borderRadius:10}}></View>
              </View>
            </View>
            <View style={{backgroundColor:'#dddddd',height:130,width:'100%',flexDirection:'row',justifyContent:'center'}}>
              <View style={{width:'48%',height:110,backgroundColor:'#dddddd',alignSelf:'center',justifyContent:'center'}}>
                <View style={{width:'95%',height:110,backgroundColor:'grey',alignSelf:'flex-start',borderRadius:10}}></View>
              </View>
              <View style={{width:'48%',height:110,backgroundColor:'#dddddd',alignSelf:'center',justifyContent:'center'}}>
                <View style={{width:'95%',height:110,backgroundColor:'grey',alignSelf:'flex-end',borderRadius:10}}></View>
              </View>
            </View>
            
          </Content>
            <View style={{height:'9%',width:'100%',position:'absolute',bottom:0,flexDirection:'row',backgroundColor:'white'}}>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate("Home")}} style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text ><Icon type="Ionicons" style={{fontSize:40,color:'grey'}} name="heart-outline" /></Text></TouchableOpacity>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate("Map")}} style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text ><Icon type="Ionicons" style={{fontSize:40,color:'grey'}} name="map-outline" /></Text></TouchableOpacity>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate("Profile")}} style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text ><Icon type="Ionicons" style={{fontSize:40,color:'#567afc'}} name="person-circle" /></Text></TouchableOpacity>
            </View>
        </Container>



          // <FooterIos
          //   tabPromo={this.tabPromo}
          //   tabMap={this.tabMap}
          //   tabPesan={this.tabPesan}
          //   tabProduk={this.tabProduk}
          //   tabAkun={this.tabAkun}
          //   tabState={this.state.tabState}
          // />
    )
  }
}

function mapStateToProps(state) {
  return {
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators()
}

export default Profile;
