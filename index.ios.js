// IMPORT LIBRARIES 

var React = require('react-native');

var {
  AppRegistry,
  MapView,
  View,
  Text,
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
      },
      city: '',
      temperature: '',
      description: ''
    };
  },

  render: function() {

    return <View>

              <MapView 
              annotations={[this.state.pin]}
              style={styles.map}
              onRegionChangeComplete={this.onRegionChangeComplete}>

              </MapView>

              <View>
                <Text>{this.state.city}</Text>
                <Text></Text>
                <Text></Text>
              </View>

           </View>
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

        console.log(data);
        this.setState(data);
        

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