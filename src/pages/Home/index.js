import React, {useState} from 'react';
import {TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal, ActivityIndicator} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';

import {Feather} from '@expo/vector-icons';
import {ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput, BoxIcon, Input, ButtomLink,
ButtomLinkText} from './styles';

import api from '../../services/api';
import {saveLink} from '../../utils/storeLinks';

export default function Home(){

    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState({});


   async function handleShortLink(){
       setLoading(true);
    
    try{
        const response = await api.post('/shorten',
        {
            long_url: input
        })

        setData(response.data);
        setModalVisible(true);

        //DEU TUDO CERTO PRECISO SALVAR ESSE LINK EM UMA LISTA NESSE STORAGE
        saveLink('sujeitolinks', response.data);
        
        Keyboard.dismiss();
        setLoading(false);
        setInput('');


    }catch{
        alert('Ops! Parece que algo deu errado.');
        Keyboard.dismiss();
        setInput('');
        setLoading(false);
    }
    
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
            <SubTitle>App by KitoVini</SubTitle>
            <Logo source={require('../../assets/Logo.png')} resizeMode="contain" />
        </ContainerLogo>

        <ContainerContent>
            <Title>KitoLink</Title>
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
                {
                    loading ? (
                        <ActivityIndicator color="#121212" size={24} />
                    ) : (
                        <ButtomLinkText>Gerar Link</ButtomLinkText>
                    )
                }
                
            </ButtomLink>

        </ContainerContent>

        </KeyboardAvoidingView>

        <Modal visible={modalVisible} transparent animationType="slide">
            <ModalLink onClose={ () => setModalVisible(false) } data={data} />
        </Modal>

        </LinearGradient>
        </TouchableWithoutFeedback>
        
    )
}