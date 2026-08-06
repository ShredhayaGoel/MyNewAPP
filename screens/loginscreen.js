import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [Text, setText] = useState('');
    const [subtext, setsubtext] = useState('');

    const handleLogin = () => {
        // Later we'll validate and connect to backend
        navigation.replace('Dashboard');
    };

    const handleSubmit = () => {
        setsubtext(Text);
        setText('');
    }

    return (
        <View style={styles.container}>

            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <Text style={styles.title}>Welcome Back</Text>

            <Text style={styles.subtitle}>
                Login to continue
            </Text>

            <TextInput
                placeholder="Email Address"
                placeholderTextColor="#888"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                placeholder="Enter something "
                placeholderTextColor="#888"
                style={styles.input}
                value={Text}
                onChangeText={(Text => setText(Text))}
            />

            <TextInput
                placeholder="Password"
                placeholderTextColor="#888"
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity
                style={styles.loginBtn}
                onPress={handleLogin}
            >
                <Text style={styles.loginText}>
                    LOGIN
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={handleSubmit}
            >
                <Text style={styles.loginText}>
                    show result
                </Text>

                {subtext ? (<Text> result : {Text}</Text>) : null}
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgot}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>

            <View style={styles.bottomContainer}>
                <Text style={styles.bottomText}>
                    Don't have an account?
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}
                >
                    <Text style={styles.signup}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },

    logo: {
        width: 220,
        height: 100,
        alignSelf: 'center',
        marginBottom: 30,
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0056D2',
        textAlign: 'center',
    },

    subtitle: {
        textAlign: 'center',
        color: '#666',
        marginBottom: 35,
        marginTop: 5,
        fontSize: 16,
    },

    input: {
        height: 55,
        backgroundColor: '#F4F6F8',
        borderRadius: 12,
        paddingHorizontal: 18,
        fontSize: 16,
        marginBottom: 18,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },

    loginBtn: {
        backgroundColor: '#0056D2',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 10,
        elevation: 4,
    },

    loginText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },

    forgot: {
        textAlign: 'right',
        color: '#0056D2',
        marginTop: 18,
        fontWeight: '600',
    },

    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 35,
    },

    bottomText: {
        color: '#555',
        fontSize: 15,
    },

    signup: {
        color: '#0056D2',
        fontWeight: 'bold',
        marginLeft: 5,
        fontSize: 15,
    },

});