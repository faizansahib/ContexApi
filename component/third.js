
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FirstName, LastName} from '../App';

export default function ThirdScreen() {

   
  return (
    <View>
    <FirstName.Consumer>
       {
         data => {
           return (
             <LastName.Consumer>
               {
                 (lname) => {
                   return (
                   <Text>My Name  is : {data} {lname} </Text>
                   )}
               }
             </LastName.Consumer>
           )
         }
       }
    </FirstName.Consumer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
