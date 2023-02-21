import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fontFamilys, fontSizes} from '../../common';
import {Gap, TextInput, Button} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {setFormTodo} from '../../redux/slice/globalSlice';

const Login = ({navigation}) => {
  const formTodo = useSelector(state => state.global.formTodo);
  const dispatch = useDispatch();
  return (
    <>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor="transparent"
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.white,
        }}>
        <Text
          style={{
            fontFamily: fontFamilys.primary[600],
            fontSize: fontSizes.heading6,
          }}>
          LOGIN
        </Text>

        <Gap height={30} />
        <View style={{paddingHorizontal: 20, width: '100%'}}>
          <TextInput
            label="Email"
            placeholder={'Ketikkan Email Anda...'}
            onChangeText={val => {
              dispatch(setFormTodo({name: 'Email', value: val}));
            }}
            value={formTodo?.Email}
          />
          <Gap height={15} />
          <TextInput
            label="Password"
            placeholder={'Ketikkan Password Anda...'}
            onChangeText={val => {
              dispatch(setFormTodo({name: 'Password', value: val}));
            }}
            value={formTodo?.Password}
          />
          <Gap height={15} />
          <Button
            title="Masuk"
            type="primary"
            onPress={() => navigation.navigate('MainApp')}
          />
        </View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
