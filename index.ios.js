// IMPORT LIBRARIES 

var React = require('react-native');

var {
  AppRegistry,
  MapView,
  View,
  StyleSheet
} = React;

// CREATE COMPONENT

var Weather = React.createClass({

  render: function() {
    return <MapView 
            style={styles.map}
            onRegionChangeComplete={this.onRegionChangeComplete}>

           </MapView>
  },

  onRegionChangeComplete: function(region) {
    console.log(region);
  }

});

// STYLING

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

// REGISTER COMPONENT

AppRegistry.registerComponent('weather', () => Weather);