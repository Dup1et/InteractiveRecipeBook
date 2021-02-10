import React from 'react';
import { StatusBar } from 'react-native';
import { IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Provider } from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import DropDownAlertRef from './src/helpers/DropDownAlertRef';
import store from './src/store';
import MainWrapper from './src/screens/MainWrapper';

const App: React.FC = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <Provider store={store}>
      <StatusBar barStyle='light-content' backgroundColor='#121212' />
      <MainWrapper />
    </Provider>
    <DropdownAlert ref={(ref) => DropDownAlertRef.setDropDown(ref)} />
  </>
);

export default App;
