import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {
  ApplicationProvider,
  Button,
  Layout,
  Text
} from '@ui-kitten/components';
import { useSelector, useDispatch } from 'react-redux';
import * as eva from '@eva-design/eva';
import { themes } from '../theme';
import { SET_THEME } from '../store/actions/types';
import DropDownAlertRef from '../helpers/DropDownAlertRef';

const MainWrapper: React.FC = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <>
      <ApplicationProvider {...eva} theme={themes[theme.name]}>
        <SafeAreaView style={styles.safeAreView}>
          <Layout style={styles.container}>
            <Text>{`${theme.name}`}</Text>
            <Button
              onPress={() => dispatch({ type: SET_THEME, payload: 'dark' })}>
              dark
            </Button>
            <Button
              onPress={() => dispatch({ type: SET_THEME, payload: 'light' })}>
              light
            </Button>
            <Button
              onPress={() =>
                DropDownAlertRef.alert(
                  'success',
                  'Test',
                  'Lorem ipsum dolor sit amet.'
                )
              }>
              dropdown
            </Button>
          </Layout>
        </SafeAreaView>
      </ApplicationProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1
  },
  safeAreView: {
    flex: 1
  }
});

export default MainWrapper;
