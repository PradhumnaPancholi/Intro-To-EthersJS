import React from 'react'
import {Slide, Heading, Text, Appear, ListItem, OrderedList} from 'spectacle'

export default function slide2(){
    return(
        <Slide>
            <Heading>What is Web 3.0</Heading>
            <Appear>
                <Text>Web 3.0 is leap forward towards Open, Trustless, and Permission-less internet.</Text>
                <OrderedList fontSize='28px'>
                    <ListItem>
                        <Text fontSize='28px'>‘Open’ in that they are built from open source software built by an open and accessible community of developers and executed in full view of the world.</Text>
                    </ListItem>
                    <ListItem>
                        <Text fontSize='28px'>‘Trustless’ in that the network itself allows participants to interact publicly or privately without a trusted third party.</Text>
                    </ListItem>
                    <ListItem>
                        <Text fontSize='28px'>‘Permission-less’ in that anyone, both users and suppliers,can participate without authorisation from a governing body.</Text>
                    </ListItem>
                </OrderedList>
            </Appear>
        </Slide>
    )
}