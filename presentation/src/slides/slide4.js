import React from 'react'
import {Slide, Heading, Text, Appear, Image, FlexBox} from 'spectacle'
import DAPP from '../assets/DAPP.png'

export default function Slide4(){
    return(
        <Slide>
            <Heading>Building a dAPP (decentralized application)</Heading>
            <FlexBox>
                <Image src={DAPP} width={700}/>
            </FlexBox>
        </Slide>
    )
}