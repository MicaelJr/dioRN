import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
  ActivityIndicator,
} from 'react-native';

const colorGitHub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorNickNameGithub = '#4F565E';

const imgGitHub = 'https://avatars.githubusercontent.com/u/43708135?v=4';
const urlToMyGithub = 'https://github.com/MicaelJr';

const App = () => {
  const handlePressGoToGithub = async () => {
    console.log('verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      console.log('link aprovado');
      console.log('abrindo link');
      await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Micael no quarto com fundo amarelo"
          style={style.avatar}
          source={{uri: imgGitHub}}
        />
        <Text
          accessibilityLabel="Nome: Micael Silva"
          style={[style.defaultText, style.name]}>
          Micael Silva
        </Text>
        <Text
          accessibilityLabel="NickName: Micael Jr"
          style={[style.defaultText, style.nickname]}>
          MicaelJr
        </Text>
        <Text
          accessibilityLabel="Descrição: Software Developer | Full Stack Developer | Mobile Developer"
          style={[style.defaultText, style.description]}>
          Software Developer | Full Stack Developer | Mobile Developer
        </Text>
        <View style={style.containerDio}>
          <View>
            <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator size="small" color="#0000ff" />
          </View>
          <View>
            <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator
              style={style.paddingD}
              size="small"
              color="#0000ff"
            />
            <ActivityIndicator size="small" color="#0000ff" />
          </View>

          <View style={style.letraI}>
            <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator size="small" color="#0000ff" />
          </View>
          <View style={style.letraO}>
            <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator size="small" color="#0000ff" />
          </View>
          <View style={style.letra}>
            <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator
              style={style.marginO}
              size="small"
              color="#0000ff"
            />
          </View>
          <View style={style.letra}>
            <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator size="small" color="#0000ff" />
          </View>
        </View>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex: 1, //expandir para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
    //flexDirection: 'row',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 1,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    color: colorNickNameGithub,
    fontSize: 18,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorNickNameGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  containerDio: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  paddingD: {
    paddingLeft: 20,
  },
  letraI: {
    marginStart: 20,
  },
  letraO: {
    marginStart: 20,
  },
  marginO: {
    marginTop: 20,
  },
});
