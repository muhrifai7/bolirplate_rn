import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ActionSheetCustom as ActionSheet } from "react-native-actionsheet";

// import KosItem from "../../components/Kos/KosItem";
import { FlatList } from "react-native-gesture-handler";
// import SearchInput from "../../components/Search/SearchInput";
// import { btnColor } from "../../constant";

const options = [
  "Cancel",
  "Acak",
  "Harga termurah",
  "Harga termahal",
  "Kosong ke penuh",
  "Update terbaru"
];

class KosList extends Component {
  constructor() {
    super();
    this.state = {
      kosList: [
        {
          id: "1",
          image:
            "https://www.kostjakarta.net/wp-content/uploads/2015/09/10415.jpg",
          harga: "1000000",
          namaKos: "Permata Bintaro Residence"
        },
        {
          id: "2",
          image: "http://www.tempat-kost.com/images1/1563_3.jpg",
          harga: "960000",
          namaKos: "Berlian Bintaro Residence"
        },
        {
          id: "3",
          image:
            "https://www.jejakpiknik.com/wp-content/uploads/2018/10/malang-1-4-630x380.jpg",
          harga: "1250000",
          namaKos: "Emerald Bintaro Residence"
        }
      ]
    };
  }

  // showActionSheet = () => {
  //   this.ActionSheet.show();
  // };

  render() {
    // const { height, width } = Dimensions.get("window");
    return (
      <View style={styles.container}>
        <SearchInput
          handleGoBack={this.handleGoBack}
          icon="ios-arrow-round-back"
          size={35}
          margin={17}
        />
        <FlatList
          style={{ height: height - 100 }}
          data={this.state.kosList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("KosDetail")}
            >
              <KosItem
                image={item.image}
                harga={item.harga}
                namaKos={item.namaKos}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.filterUrutkan}>
          <Icon
            style={[styles.iconFilter, { color: btnColor }]}
            name="filter-variant"
            size={15}
          />
          <Text
            style={styles.buttonTextFilter}
            onPress={() => this.props.navigation.navigate("Filter")}
          >
            Filter
          </Text>

          <Icon
            style={[styles.iconUrutkan, { color: btnColor }]}
            name="sort-variant"
            size={15}
          />
          <Text style={styles.buttonTextUrutkan} onPress={this.showActionSheet}>
            Urutkan
          </Text>
          <ActionSheet
            ref={o => (this.ActionSheet = o)}
            title={
              <Text style={{ color: "#000", fontSize: 18 }}>Urutkan dari</Text>
            }
            options={options}
            cancelButtonIndex={0}
            destructiveButtonIndex={0}
            onPress={index => {
              console.log(index);
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ecf0f1"
  },
  inputContainer: {
    margin: 15,
    borderRadius: 5,
    padding: 0,
    flex: 1
  },
  icon: {
    color: "#2c3e50",
    marginLeft: 15
  },
  header: {
    margin: 17,
    marginBottom: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d9dcde",
    height: 50,
    borderRadius: 5
  },
  filterUrutkan: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#ecf0f1",
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#bdc3c7",
    flexDirection: "row",
    borderRadius: 3,
    alignItems: "center"
  },
  buttonTextFilter: {
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: "#bdc3c7"
  },
  buttonTextUrutkan: {
    marginLeft: 3
  },
  iconFilter: {
    marginRight: 3
  },
  iconUrutkan: { marginLeft: 3 }
});

export default KosList;

