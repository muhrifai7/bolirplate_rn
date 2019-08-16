// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TextInput,
//   TouchableOpacity
// } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// import Maps from "../../components/Maps/Maps";
// import Header from "../../components/Header/Header";
// import { btnColor } from "../../constant";
// import InputText from "../../components/Input/InputText";
// import InputImage from "../../components/Input/InputImage";
// import InputWithoutHeader from "../../components/Input/InputWithoutHeader";
// import SubmitBottom from "../../components/Button/SubmitBottom";

// class Iklan extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isMapReady: false,
//       region: {
//         latitude: 37.78825,
//         longitude: -122.4324
//       },
//       newRegion: {
//         latitude: 37.78825,
//         longitude: -122.4324
//       }
//     };
//   }

//   changeRegion = nativeEvent => {
//     this.setState(prevState => ({
//       region: { ...prevState.region, ...nativeEvent.coordinate },
//       newRegion: this.state.region
//     }));
//   };

//   changeLatitude = text => {
//     let newLat = this.state.newRegion;
//     newLat.latitude = parseFloat(text);

//     this.setState({
//       newRegion: { ...newLat }
//     });
//   };

//   changeLongitude = text => {
//     let newLat = this.state.newRegion;
//     newLat.longitude = parseFloat(text);
//     this.setState({
//       newRegion: { ...newLat }
//     });
//   };

//   handleSubmit = () => {
//     this.setState({
//       region: this.state.newRegion
//     });
//   };

//   handleIconLeft = () => {
//     this.props.navigation.goBack();
//   };

//   render() {
//     let { longitude, latitude } = this.state.newRegion;
//     longitude = longitude.toString().split(".");
//     longitude[1] = longitude[1].slice(0, 6);
//     longitude = longitude.join(".");
//     latitude = latitude.toString().split(".");
//     latitude[1] = latitude[1].slice(0, 6);
//     latitude = latitude.join(".");

//     return (
//       <View style={styles.container}>
//         <Header
//           icon="keyboard-backspace"
//           handleIconLeft={this.handleIconLeft}
//           iconSize={20}
//           title="Tambah Data Iklan"
//           right="Tanya Cs"
//           height={12}
//         />
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           style={styles.scrollContainer}
//           scrollEnabled
//         >
//           <InputText
//             h2="Nama Kos"
//             placeholder="Masukkan nama kos disini"
//             keyboard="search"
//           />
//           <InputText
//             h2="Alamat Kos"
//             placeholder="Masukkan nama jalan, kelurahan, kecamatan, dll"
//           />
//           <View style={styles.inputContainer}>
//             <Text style={styles.h2} />
//             <View style={styles.searchContainer}>
//               <Icon
//                 name="map-search-outline"
//                 size={20}
//                 style={{ paddingLeft: 10 }}
//               />
//               <TextInput
//                 style={styles.inputSearch}
//                 placeholder="Masukkan alamat kos"
//               />
//             </View>
//             <View style={styles.map}>
//               <Maps
//                 changeRegion={this.changeRegion}
//                 region={this.state.region}
//                 height={200}
//                 draggable={true}
//               />
//             </View>
//             <View style={styles.inputLatLong}>
//               <InputWithoutHeader
//                 placeholder="Masukkan latitude"
//                 value={latitude}
//                 onChange={this.changeLatitude}
//                 onSubmit={this.handleSubmit}
//                 style={{ flex: 1, marginRight: 10 }}
//               />
//               <InputWithoutHeader
//                 style={{ flex: 1, marginLeft: 10 }}
//                 placeholder="Masukkan longitude"
//                 value={longitude}
//                 onChange={this.changeLongitude}
//                 onSubmit={this.handleSubmit}
//               />
//             </View>
//           </View>
//           <InputText
//             h2="Pemilik Kos"
//             placeholder="Masukkan nama pemilik kos disini"
//           />
//           <InputText
//             h2="Nomor Handphone Pemilik Kos"
//             placeholder="Masukkan No. HP 085xxxxxx"
//           />
//           <InputText
//             h2="Pengelola Kos"
//             placeholder="Masukkan nama pengelola kos disini"
//           />
//           <InputText
//             h2="No. HP pengelola kos"
//             placeholder="Masukkan No. HP pengelola kos disini"
//           />
//           <InputImage h2="Masukkan foto kos" icon="image-plus" />
//         </ScrollView>
//         <SubmitBottom title="Selanjutnya" />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: { marginBottom: 50 },
//   scrollContainer: {
//     paddingHorizontal: 20,
//     marginBottom: 50
//   },
//   searchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 10,
//     backgroundColor: "#b6daf2",
//     borderRadius: 5
//   },
//   h1: {
//     flexDirection: "row",
//     backgroundColor: "#2980b9",
//     paddingRight: 20,
//     paddingVertical: 15,
//     marginBottom: 10
//   },
//   h2: {
//     color: "#2c3e50",
//     fontWeight: "500",
//     fontSize: 15
//   },
//   headerText: { flex: 1, color: "#fff", fontWeight: "500", fontSize: 16 },
//   tanyaCs: { color: "#fff", fontWeight: "500", fontSize: 16 },
//   inputLatLong: { flexDirection: "row" },
//   inputContainer: { paddingTop: 10 },
//   inputText: {
//     borderBottomColor: "#b6daf2",
//     borderBottomWidth: 2,
//     paddingHorizontal: 5
//   },
//   inputSearch: {
//     paddingHorizontal: 10,
//     padding: 10,
//     flex: 1
//   },
//   icon: {
//     paddingHorizontal: 10,
//     color: "#fff"
//   },
//   map: {
//     marginTop: 15
//   },
//   submit: {
//     flexDirection: "row",
//     padding: 12,
//     position: "absolute",
//     bottom: 1
//   },
//   btnSubmit: {
//     color: "#fff",
//     flex: 1,
//     textAlign: "center",
//     textTransform: "uppercase",
//     fontSize: 16,
//     fontWeight: "500"
//   }
// });

// export default Iklan;

import React, { Component } from "react";
import { View, ScrollView, StyleSheet,Text } from "react-native";

class iklan extends Component {
  state = {  }
  render() { 
    return ( <View><Text>iklan</Text></View> );
  }
}
 
export default iklan;
