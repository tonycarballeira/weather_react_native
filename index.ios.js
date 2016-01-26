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