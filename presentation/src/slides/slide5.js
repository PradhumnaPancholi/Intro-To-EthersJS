import React from 'react'
import {Slide, Heading, Text, OrderedList, ListItem} from 'spectacle'

export default function Slide5() {
    return(
        <Slide>
            <Heading>What we will be doing today</Heading>
            <Text fontSize='32px'>
                We will building a dApp using React which fetches and displays data from a blockchain network(Rinkeby testnet).
            </Text>
            <Text>Tools:</Text>
            <OrderedList fontSize='28px'>
                <ListItem>React</ListItem>
                <ListItem>Infura</ListItem>
                <ListItem>Fleek</ListItem>
            </OrderedList>
        </Slide>
    )
}