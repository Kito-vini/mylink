import React, {useState} from 'react';
import {TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';

import {Feather} from '@expo/vector-icons';
import {ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput, BoxIcon, Input, ButtomLink,
ButtomLinkText} from './styles';

export default function Home(){

    const [input, setInput] = useState('');
    const [modalVisible, setModalVisible] = useState(false);


    function handleShortLink(){
        //alert('URL Digitada: ' + input)
        setModalVisible(true);
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <LinearGradient
            colors={['#1ddbb9', '#132742']}
            style={{flex: 1, justifyContent: 'center'}}
        >

        <StatusBarPage
            barStyle="light-content"
            backgroundColor="#1ddbb9"
        />

        <Menu/>  

        <KeyboardAvoidingView
            behavior={ Platform.OS === 'android' ? 'padding' : 'position'}        >
        
        <ContainerLogo>
            <Logo source={require('../../assets/Logo.png')} resizeMode="contain" />
        </ContainerLogo>

        <ContainerContent>
            <Title>SujeitoLink</Title>
            <SubTitle>Cole seu link para encurtar</SubTitle>

            <ContainerInput>
                <BoxIcon>
                    <Feather name="link" size={22} color="#FFF" />
                </BoxIcon>
                <Input
                    placeholder="Cole seu link aqui..."
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="url"
                    value={input}
                    onChangeText={(text) => setInput(text)}               />
            </ContainerInput>

            <ButtomLink onPress={handleShortLink}>
                <ButtomLinkText>Gerar Link</ButtomLinkText>
            </ButtomLink>

        </ContainerContent>

        </KeyboardAvoidingView>

        <Modal visible={modalVisible} transparent animationType="slide">
            <ModalLink/>
        </Modal>

        </LinearGradient>
        </TouchableWithoutFeedback>
        
    )
}