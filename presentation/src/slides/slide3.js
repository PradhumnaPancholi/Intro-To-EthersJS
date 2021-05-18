import React from 'react'
import {Slide, Text, Heading, Appear} from 'spectacle'

export default function Slide2() {
    return(
        <Slide>
            <Heading>Decentralization</Heading>
            <Appear>
                <Text fontSize='32px'>
                In its most general term, decentralization means transfer of authority from a single institute/entity to participating entities. Some of it's benefits are no single point of failure, better supervision, and diverse decision making.
                </Text>
                <Text fontSize='32px'>
                    For instance, there are now protocols available that can handle functionalities of a bank allowing us to borrow, deposit(and earn interest), transfer, etc. Many of these protocols are handling billions of dollars. In addition to this, these protocols have something called "Governance" to provide complete decentralization. This allows every participating member gets a vote whenever a new change is proposed. All the protocol decisions are made through voting. There are all sorts of protocol providing different solutions with same concept. However, financial protocols have seen more growth due to the recent surge in DeFi (decentralized finance) from increasing interest in ETH, BTC, and NFTs.                    
                </Text>
            </Appear>
        </Slide>
    )
}