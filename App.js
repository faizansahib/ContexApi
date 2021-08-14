
import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View,  } from 'react-native';
import FirstScreen from './component/first';


const FirstName = React.createContext('value');
const LastName = React.createContext('lname');


export default function App() {

  const [change, setChange] = useState('hello');
  const [increment, setIncrement] = useState(0);
  const [val, setVal] = useState('defualt')



    
  return (
    <View style={styles.container}>
     
      <FirstName.Provider value={'Faizan'} >
        <LastName.Provider value={'Sahib'}>
      
        <FirstScreen />
        <Button title='increment' onPress={() => setIncrement(increment + 1)}  />
      <Button title='decrement' onPress={() => setIncrement(increment - 1)} />

      <TextInput placeholder={val} style={{borderWidth:1, width:250}} onChangeText={(text) => {
           setVal(text.value);
           
            <TextInput keyboardType={Number} style={{borderWidth:1, width:280}} />
      }} />
        </LastName.Provider>
      </FirstName.Provider>
      <System/>

       <Text>here you can change {change}</Text>

       <Text>Counter : {increment}</Text>

       <Button title='click to reverse' onPress={() => setChange('olleh')} />
       <Button title='click to reverse' onPress={() => setChange('hello')} />
       
         
    
    </View>
  );
        }



function Compo(props) {
   return(
     <View>
       <Text>My name is  {props.name}</Text>
     </View>
   )
  
}

function System() {
  return(
    <View>
    
    <Compo name = 'Faizan' />
    <Compo name = 'Nabeel' />
    <Compo name = 'Muhsin' />
    </View>
  )
}

export { FirstName,LastName  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
},
});

// import React from 'react';
// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as Sharing from 'expo-sharing'; 




// export default function App() {
//   let [selectedImage, setSelectedImage] = React.useState(null);

//   let openImagePickerAsync = async () => {
//     let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

//     if (permissionResult.granted === false) {
//       alert('Permission to access camera roll is required!');
//       return;
//     }

//     let pickerResult = await ImagePicker.launchImageLibraryAsync();
//     if (pickerResult.cancelled === true) {
//       return;
//     }

//     setSelectedImage({ localUri: pickerResult.uri });
//   };

//   let openShareDialogAsync = async () => {
//     if (!(await Sharing.isAvailableAsync())) {
//       alert(`Uh oh, sharing isn't available on your platform`);
//       return;
//     }

//     await Sharing.shareAsync(selectedImage.localUri);
//   };

//   if (selectedImage !== null) {
//     return (
//       <View style={styles.container}>
//         <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
//         <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
//           <Text style={styles.buttonText}>Share this photo</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
//       <Text style={styles.instructions}>
//         To share a photo from your phone with a friend, just press the button below!
//       </Text>

//       <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
//         <Text style={styles.buttonText}>Pick a photo</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     width: 305,
//     height: 159,
//     marginBottom: 20,
//   },
//   instructions: {
//     color: '#888',
//     fontSize: 18,
//     marginHorizontal: 15,
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: '#fff',
//   },
//   thumbnail: {
//     width: 300,
//     height: 300,
//     resizeMode: 'contain',
//   },
// });
