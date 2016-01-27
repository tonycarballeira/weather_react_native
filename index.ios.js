// IMPORT LIBRARIES 

var React = require('react-native');

var {
  AppRegistry,
  MapView,
  View,
  StyleSheet
} = React;

// IMPORT API MODULE  file: api.js

var Api = require('./src/api');

// CREATE COMPONENT

var Weather = React.createClass({

  getInitialState: function() {
    return {
      pin: {
        latitude: 0,
        longitude: 0
      }
    };
  },

  render: function() {

    return <MapView 
            annotations={[this.state.pin]}
            style={styles.map}
            onRegionChangeComplete={this.onRegionChangeComplete}>

           </MapView>
  },

  onRegionChangeComplete: function(region) {

    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }
    });

    Api(region.latitude, region.longitude)
      .then((data) => {

      });

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