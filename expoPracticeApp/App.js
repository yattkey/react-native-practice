import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  Provider as PaperProvider,
  Text,
  TextInput,
  Button,
  DefaultTheme,
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
    surface: 'green',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Text style="title">ログイン</Text>
          <TextInput
            mode="outlined"
            label="ユーザ名またはメールアドレス"
            keyboardType="email-address"
          ></TextInput>
          <TextInput
            mode="outlined"
            label="パスワード"
            secureTextEntry={true}
          ></TextInput>
          <Button
            icon="login"
            mode="contained"
            onPress={() => {
              Keyboard.dismiss();
              console.log('Pressed');
            }}
          >
            ログイン
          </Button>
          <StatusBar style="auto" />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    alignItems: 'center',
  },
});
