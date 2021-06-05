import React from 'react';
import { View, Text } from 'react-native';

import {Feather} from '@expo/vector-icons';

import {ContainerButtom, Item} from './styles';

export default function ListItem(){
    return(
        <View>
            <ContainerButtom activeOpacity={0.8} onPress={ () => alert('teste')}>
                <Feather
                    name="link"
                    color="#FFF"
                    size={24}
                />
                <Item numberOfLines={1}>https://youtube.com</Item>
            </ContainerButtom>
        </View>
    )
}