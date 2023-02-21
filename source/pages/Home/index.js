import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, fontFamilys, fontSizes} from '../../common';
import {Gap} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {getDataTodos} from '../../redux/action/globalAction';
import {getStatusBarHeight} from '../../helpers';

const Home = ({navigation}) => {
  const formTodo = useSelector(state => state.global.formTodo);
  const dataTodos = useSelector(state => state.global.dataTodos);
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
          backgroundColor: colors.white,
          paddingTop: getStatusBarHeight(),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: fontFamilys.primary[600],
            fontSize: fontSizes.bodyParagraph,
          }}>
          HOME
        </Text>
        <Text
          style={{
            fontFamily: fontFamilys.primary[800],
            fontSize: fontSizes.heading5,
            textAlign: 'center',
          }}>
          BOILER TEMPLATE FOR REACT NATIVE
        </Text>
        <Text
          style={{
            fontFamily: fontFamilys.primary[300],
            fontSize: fontSizes.small,
          }}>
          Run This{' '}
          <Text
            style={{
              fontFamily: fontFamilys.primary[600],
              fontSize: fontSizes.small,
            }}>
            "npx react-native-rename "yourApp" -b com.your.app"
          </Text>
        </Text>
        <Gap height={15} />
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: fontFamilys.primary['300'],
              fontSize: fontSizes.small,
              paddingRight: 10,
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <Gap height={20} />
        <TouchableOpacity
          onPress={() => dispatch(getDataTodos())}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: fontFamilys.primary['300'],
              fontSize: fontSizes.small,
              paddingRight: 10,
            }}>
            Load API
          </Text>
        </TouchableOpacity>
        {formTodo?.Email && (
          <>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: colors.primary[300],
                padding: 15,
                marginHorizontal: 20,
                width: '80%',
                marginTop: 20,
              }}>
              <Text
                style={{
                  fontFamily: fontFamilys.primary['600'],
                  fontSize: fontSizes.bodyParagraph,
                }}>
                LOGIN WITH REDUX
              </Text>
              <Gap height={10} />
              <Text
                style={{
                  fontFamily: fontFamilys.primary['600'],
                  fontSize: fontSizes.small,
                }}>
                Email : {formTodo?.Email}
              </Text>
              <Gap height={5} />
              <Text
                style={{
                  fontFamily: fontFamilys.primary['600'],
                  fontSize: fontSizes.small,
                }}>
                Password : {formTodo?.Password}
              </Text>
            </View>
          </>
        )}
        {!dataTodos.isLoad && (
          <>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: colors.primary[300],
                padding: 15,
                marginHorizontal: 20,
                width: '80%',
                marginTop: 20,
              }}>
              <Text
                style={{
                  fontFamily: fontFamilys.primary['600'],
                  fontSize: fontSizes.bodyParagraph,
                }}>
                LOAD API WITH REDUX
              </Text>
              <Gap height={10} />
              {dataTodos.items.map((v, i) => {
                return (
                  i < 5 && (
                    <Text
                      key={i}
                      numberOfLines={1}
                      style={{
                        fontFamily: fontFamilys.primary['600'],
                        fontSize: fontSizes.small,
                      }}>
                      Title {v.id} : {v.title}
                    </Text>
                  )
                );
              })}
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
