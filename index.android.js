'use strict';

var wifiModule = require('./ModuleExports/WifiModule');
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  TouchableHighlight,
  View,
} = React;

var tempGlobal;
var AndroidWifiReactNative = React.createClass({
  getInitialState: function() {
    return {
  dataSource: new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2,
  }),
  loaded: false,
  };
},
componentDidMount: function() {
  this.loadWifiListData();
},
loadWifiListData: function() {
  wifiModule.loadWifiList("", (wifiString) => {
  var wifiArray = wifiString.split('SSID:');
  this.setState({
    dataSource: this.state.dataSource.cloneWithRows(wifiArray),
       loaded: true,
       });
   },
   (msg) => {
       console.log(msg);
     },
   );
 },
_onPress: function(event) {
    console.log(event);
},
_pressRow: function(rowData: string){
  wifiModule.toastThisNetwork(rowData);
  //Make something happen
},
 _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    return (
    <TouchableHighlight onPress={() => this._pressRow(rowData)}>
      <View>
        <View style={styles.row}>
          <Text style={styles.container}>
            {rowData}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
},
render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Click to join a wifi network!
        </Text>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AndroidWifiReactNative', () => AndroidWifiReactNative);
