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

    var pins = [{
      latitude: 37,
      longitude: -95
    }];

    return <MapView 
            annotations={pins}
            style={styles.map}
            onRegionChangeComplete={this.onRegionChangeComplete}>

           </MapView>
  },

  onRegionChangeComplete: function(region) {

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