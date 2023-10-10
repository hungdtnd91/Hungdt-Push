import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    Image
} from 'react-native';
const Login = () => {

    return (
        <ImageBackground style={{ flex: 1 }} source={require('../images/background.png')} imageStyle={{ resizeMode: 'cover' }}>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , gap :10}}>
                {/*Login with Google*/}
                <View style={{ width: '80%', paddingVertical: 12, backgroundColor: 'white', borderRadius: 30, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Image source={require('../images/icongoogle.png')} style={{ width: '8%', aspectRatio: 1 }} />
                    <Text style={{ color: 'black', fontWeight: '300', fontSize: 18 }}>Log in with Goole</Text>
                </View>
                {/*Or*/}
                <Text style={{ fontWeight: '400', fontSize: 18, color: 'white', paddingTop: 20, fontStyle: "italic" }}>Or</Text>
                {/*Email & Password*/}
                <View style={{ width: '80%', height: '20%', paddingTop: 20 }}>
                    <View style={{ width: '100%', height: '50%', borderWidth: 2, borderColor: 'white', borderRadius: 30, marginBottom: 20, flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 25 }}>
                        <Text style={{ fontWeight: '500', fontSize: 18, color: 'white' }}>Email</Text>
                        <Image source={require('../images/iconemail.png')} style={{ aspectRatio: 1, width: '8%' }} />
                    </View>
                    <View style={{ width: '100%', height: '50%', borderWidth: 2, borderColor: 'white', borderRadius: 30, flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: '500', fontSize: 18, color: 'white', paddingLeft: 25 }}>Password</Text>
                        <Image source={require('../images/iconpass.png')} style={{ aspectRatio: 1, width: '10%', marginRight: 25 }} />
                    </View>
                </View>
                <View style={{ width: '80%', height: '5%', marginTop: 40, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', flex: 1, gap: 6 }}>
                        <View style={{ width: '8%', height: '50%', backgroundColor: 'white', borderRadius: 4 }}>
                        </View>
                        <Text style={{ fontSize: 12, color: 'white', fontWeight: '400', }}>Remember for 30 days</Text>
                    </View>


                    <Text style={{ textDecorationLine: "underline" , color :'white'}}> Forgot password?</Text>

                </View>
                  {/*Button Login*/}
                  
                  <View style = {{width : '80%', height :'16%', flexDirection :'column', gap : 10}}>
                <View style={{ width: '100%', height: '50%', backgroundColor: 'blue', borderRadius: 30, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontWeight: '500', fontSize: 18 }}>Log in </Text>
                </View>
                  {/*the end*/}
                <View style = {{flexDirection :'row', justifyContent :'center'}}>
                    <Text style = {{color :'white', fontWeight :'400', fontSize :12, textDecorationLine :'underline'}}>Don't have an account?</Text>
                    <Text style = {{color :'blue',fontSize : 12, fontWeight :'400', textDecorationColor :'blue', textDecorationLine :'underline'}}>Sign up</Text>
                </View>
                </View>
                
            </View>

        </ImageBackground>

    );


}

export default Login