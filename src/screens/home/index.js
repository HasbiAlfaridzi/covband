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
  Image
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FooterIos from '../../components/ios/footer';
import { Container, Content, Icon } from 'native-base';
import styles from './style';
import style from './style';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenTitle: 'Home',
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
            <View style={styles.profileSection}>
              <View style={{flex:1,backgroundColor:'transparent',justifyContent:'center'}}>
                <Image style={{width:120,height:120,alignSelf:'center',borderRadius:100,borderWidth:2,borderColor:'white'}} source={require('../../../assets/asset/foto.png')}></Image>
              </View>
              <View style={{flex:2,backgroundColor:'transparent',justifyContent:'center'}}>
                <View><Text style={{fontSize:26,color:'white',fontWeight:'bold'}}>Sarapendi Sabila</Text></View>
                <View><Text style={{fontSize:26,color:'white'}}>19 tahun</Text></View>
                <View><Text style={{fontSize:26,color:'white'}}>Malang, Jawa Timur</Text></View>
              </View>
               
            </View>


            <View style={{backgroundColor:'#dddddd',height:170,width:'100%',flexDirection:'row',justifyContent:'center'}}>
              <View style={{width:'48%',height:150,backgroundColor:'#dddddd',alignSelf:'center',justifyContent:'center'}}>
                <TouchableOpacity 
                  style={{width:'95%',height:150,backgroundColor:'white',alignSelf:'flex-start',borderRadius:2}}
                >
                  <Image style={{width:32,height:40,position:'absolute',top:10,left:10}} source={require('../../../assets/asset/logo_jantung.png')}></Image>
                  <Text style={{position:'absolute',alignSelf:'center',top:'35%',fontSize:65,left:'23%',color:'#567afc'}}>80<Text style={{fontSize:16}}>bpm</Text></Text>
                </TouchableOpacity>
              </View>
              <View style={{width:'48%',height:150,backgroundColor:'#dddddd',alignSelf:'center',justifyContent:'center'}}>
                <TouchableOpacity 
                  style={{width:'95%',height:150,backgroundColor:'white',alignSelf:'flex-end',borderRadius:2}}
                >
                  <Image style={{width:42,height:40,position:'absolute',top:10,left:10}} source={require('../../../assets/asset/logo_batuk.png')}></Image>
                  <Text style={{position:'absolute',alignSelf:'center',top:'35%',fontSize:65,left:'23%',color:'#567afc'}}>90</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{backgroundColor:'#dddddd',height:170,width:'100%',flexDirection:'row',justifyContent:'center'}}>
              <View style={{width:'48%',height:150,backgroundColor:'#dddddd',alignSelf:'center',justifyContent:'center'}}>
                <TouchableOpacity 
                  style={{width:'95%',height:150,backgroundColor:'white',alignSelf:'flex-start',borderRadius:2}}
                >
                  <Image style={{width:28,height:40,position:'absolute',top:10,left:10}} source={require('../../../assets/asset/logo_temperatur.png')}></Image>
                  <Text style={{position:'absolute',alignSelf:'center',top:'35%',fontSize:65,left:'11%',color:'#567afc'}}>80{'\u2103'}</Text>
                </TouchableOpacity>
              </View>
              <View style={{width:'48%',height:150,backgroundColor:'#dddddd',alignSelf:'center',justifyContent:'center'}}>
                <TouchableOpacity 
                  style={{width:'95%',height:150,backgroundColor:'white',alignSelf:'flex-end',borderRadius:2}}
                >
                  <Image style={{width:40,height:40,position:'absolute',top:10,left:10}} source={require('../../../assets/asset/logo_paru2.png')}></Image>
                  <Text style={{position:'absolute',alignSelf:'center',top:'35%',fontSize:65,left:'23%',color:'#567afc'}}>80<Text style={{fontSize:16}}>/m</Text></Text>
                </TouchableOpacity>
              </View>
            </View>


            <View style={{backgroundColor:'#dddddd',height:130,width:'100%',flexDirection:'row',justifyContent:'center'}}>
              <View style={{width:'48%',height:110,backgroundColor:'#dddddd',alignSelf:'center',justifyContent:'center'}}>
                <TouchableOpacity style={{width:'95%',height:110,backgroundColor:'white',alignSelf:'flex-start',borderRadius:10,justifyContent:'center'}}>
                  <Image style={{width:55,height:40,alignSelf:'center'}} source={require('../../../assets/asset/logo_pesan.png')}></Image>
                  <Text style={{alignSelf:'center',fontSize:24,marginTop:8,fontWeight:'600'}} >Pesan</Text>
                </TouchableOpacity>
              </View>
              <View style={{width:'48%',height:110,backgroundColor:'#dddddd',alignSelf:'center',justifyContent:'center'}}>
                <TouchableOpacity style={{width:'95%',height:110,backgroundColor:'white',alignSelf:'flex-end',borderRadius:10,justifyContent:'center'}}>
                  <Image style={{width:40,height:40,alignSelf:'center'}} source={require('../../../assets/asset/logo_notif.png')}></Image>
                  <Text style={{alignSelf:'center',fontSize:24,marginTop:8,fontWeight:'600'}} >Notifikasi</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{backgroundColor:'#dddddd',height:130,width:'100%',flexDirection:'row',justifyContent:'center'}}>
              <View style={{width:'48%',height:110,backgroundColor:'#dddddd',alignSelf:'center',justifyContent:'center'}}>
                <TouchableOpacity style={{width:'95%',height:110,backgroundColor:'white',alignSelf:'flex-start',borderRadius:10,justifyContent:'center'}}>
                  <Image style={{width:40,height:40,alignSelf:'center'}} source={require('../../../assets/asset/logo_jadwal.png')}></Image>
                  <Text style={{alignSelf:'center',fontSize:24,marginTop:8,fontWeight:'600'}} >Statistik</Text>
                </TouchableOpacity>
              </View>
              <View style={{width:'48%',height:110,backgroundColor:'#dddddd',alignSelf:'center',justifyContent:'center'}}>
                <TouchableOpacity style={{width:'95%',height:110,backgroundColor:'white',alignSelf:'flex-end',borderRadius:10,justifyContent:'center'}}>
                  <Image style={{width:43,height:40,alignSelf:'center'}} source={require('../../../assets/asset/logo_blog.png')}></Image>
                  <Text style={{alignSelf:'center',fontSize:24,marginTop:8,fontWeight:'600'}} >Berita</Text>
                </TouchableOpacity>
              </View>
            </View>
            
          </Content>
            <View style={{height:'9%',width:'100%',position:'absolute',bottom:0,flexDirection:'row',backgroundColor:'white'}}>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate("Home")}} style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text ><Icon type="Ionicons" style={{fontSize:40,color:'#567afc'}} name="heart" /></Text></TouchableOpacity>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate("Map")}}  style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text ><Icon type="Ionicons" style={{fontSize:40,color:'grey'}} name="map-outline" /></Text></TouchableOpacity>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate("Profile")}} style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text ><Icon type="Ionicons" style={{fontSize:40,color:'grey'}} name="person-circle-outline" /></Text></TouchableOpacity>
            </View>
        </Container>



          // <FooterIos
          //   tabPromo={this.tabPromo}
          //   tabHome={this.tabHome}
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

export default Home;
