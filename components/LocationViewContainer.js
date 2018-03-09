import React, { Component } from 'react';
import LocationView from '../components/LocationView';
import { Text } from 'react-native';

export default class LocationViewContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      location: null,
      errorMessage: null
    }
  }     

  componentWillMount() {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        this.setState({
          errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
        });
      } else {
        this._getLocationAsync();
      }
    }
  
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    let text = "Waiting....";
    if (this.state.errorMessage){
      text = errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (<LocationView locationData={text}></LocationView>);
  }

}