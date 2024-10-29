import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  let camera;

  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [fotos, setFoto] = useState([])
  async function requestPermission() {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted')
  }


  async function flipCamera() {
    if (type === Camera.Constants.Type.back) {
      setType(Camera.Constants.Type.front)
    } else {
      setType(Camera.Constants.Type.back)
    }
  }

  async function takePicture() {
    if (!camera) return
    const photo = await camera.takePictureAsync()
    setFoto([...fotos, photo])
  }

  useEffect(() => {
    requestPermission();
  }, [])

  if (hasPermission == null) {
    return <View></View>
  }

  if (hasPermission === false) {
    return <View><Text>Não foi possível acessar a câmera</Text></View>
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewCamera}>
        <Camera ref={ref => camera = ref} type={type} style={styles.camera}>
          <View style={{ marginTop: 400, gap: 8, justifyContent: 'center', alignItems: 'center', backgroundColor:'blue',  }}>
            <TouchableOpacity title="Alternar" onPress={() => flipCamera()} >
            <Text style = {styles.text}> Alternar </Text>
            </TouchableOpacity>
            <TouchableOpacity title="Alternar" onPress={() => takePicture()} >
            <Text style = {styles.text}> Tirar foto </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
      <View style={styles.preview}>
        <ScrollView horizontal={true}>
          {
            fotos.map((foto, index) => <Image key={index} style={styles.imgPreview} source={{ uri: foto && foto.uri }}></Image>)
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 20,
    width: '100%',
    height: '100%'
  },
  camera: {
    flex: 1, 
    width: 400,
    height: 400,
    padding : 8,
    justifyContent: 'center'

  },
  text:{
    color:'white',
    justifyContent: 'center',
    margin: 10,
    fontFamily: 'arial',
    fontSize:15,
    padding:1,
    borderRadius:20
  },
  viewCamera: {
    flex: 6,
    backgroundColor: 'pink'
  },
  preview: {
    flex: 2,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: 'white',

  },
  imgPreview: {
    margin: 10,
    width: 150,
    height:150,
    JustifyContent: 'center',
    alignItems: 'center',
  }
});