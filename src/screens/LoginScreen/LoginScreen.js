import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../context/slices/userSlice'; 
import {styles} from "./style";
import {CustomButton} from "../../components/customButtonLogin/index"
const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch(); 



  const handleLogin = (values) => { 

    dispatch(loginSuccess({...values,isLoggedIn:true}));
   const timeout= setTimeout(()=>{
      navigation.navigate('Messages')
    },3000 )
    timeout.re
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur mybe</Text> 
      <Text style={styles.styledLabel}>Identifiez-vous pour continuer</Text> 

      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.form}>
            <Text style={styles.styledLabel}>{'Email * :'}</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            {touched.username && errors.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
            )}

            
            <Text style={styles.styledLabel}>{'Email * :'}</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <CustomButton title="Login" style={{
              borderRadius:10,
              backgroundColor:'#1574FF',
              color:'#FBFBFD',
            }}  onPress={handleSubmit} /> 

            <Text style={styles.signUpLabel}>Aucun compte ? <Text style={{ color:'#1574FF'}} >Créez one!</Text></Text>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;