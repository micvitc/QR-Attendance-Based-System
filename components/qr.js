"use client"

import { Box, Button, ButtonGroup, Heading, Stack } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'

export default function QR(){
    return (
    <>
    <Center  h='100px' className='flex flex-col items-center justify-center h-screen' >
        <Heading m= {10}>QR scanner</Heading>

        <Image width={250} height={250} src='/sample-qr.png' alt='Dan Abramov' />
        <Stack spacing={3}>

            <Text fontSize='md'> Name  </Text>
            
            <Text m = {10} fontSize='md'> Registration number  </Text>

        </Stack>

        <Stack direction='row' spacing={4} align='center'>
    
    
            <Button m = {5} colorScheme='teal' variant='outline'>
                Finish
            </Button>
            <Button colorScheme='teal' variant='ghost'>
                Next

            </Button>
        </Stack>


</Center>
</>
    )
} 