import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import { ModalContainer, Container, Header, LinkArea, Title, LongUrl,
 ShortLinkArea, ShortLinkUrl } from './styles';
import {Feather} from '@expo/vector-icons';

export default function ModalLink(){
    return(
       <ModalContainer>

            <Container>
                
                <Header>
                    <TouchableOpacity>
                        <Feather
                            nome="x"
                            color="#212743"
                            size={30}                        
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather
                            nome="share"
                            color="#212743"
                            size={30}                        
                        />
                    </TouchableOpacity>
                </Header>

                <LinkArea>
                    <Title>Link encurtado</Title>
                    <LongUrl>https://sujeitoprogramador.com</LongUrl>

                    <ShortLinkArea>
                        <ShortLinkUrl>
                            http://bit.ly/ao2kdko
                        </ShortLinkUrl>
                        <TouchableOpacity>
                            <Feather
                                nome="copy"
                                color="#FFF"
                                size={25}
                            />
                        </TouchableOpacity>

                    </ShortLinkArea>

                </LinkArea>
            </Container>           
       </ModalContainer> 
    )
}