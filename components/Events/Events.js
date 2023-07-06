"use client"
import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  chakra,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { Input } from 'postcss';

function Events(props) {
  const { Name, Description, Venue, Date, Time } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel fontWeight={'bold'} fontSize={'2xl'}  isTruncated>
        {Name}
      </StatLabel>
      <StatNumber fontSize={'medium'} fontWeight={'medium'}>
        Date Time : {Date}
      </StatNumber>
      {/* <StatNumber fontSize={'medium'} fontWeight={'medium'}>
        {Time}
  </StatNumber> */}
      <StatNumber fontSize={'xl'} fontWeight={'medium'}>
        Decription : {Description}
      </StatNumber>
      <StatNumber fontSize={'xl'} fontWeight={'medium'}>
        Venue : {Venue}
      </StatNumber>

    </Stat>
  );
}

function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base:5, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'left'}
        fontSize={'4x1'}
        py={10}
        fontWeight={'bold'}>
        MIC - SMART ATTENDANCE
      </chakra.h1>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        EVENTS
      </chakra.h1>
      
<form className='mb-10'>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500     " placeholder="Search Event..." required/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Attended: 70'} stat={'MIC OFFLINE MEET - 1'} />
        <StatsCard title={'Attended: 67'} stat={'MIC OFFLINE MEET - 2'} />
        <StatsCard title={'Attended: 68'} stat={'MIC OFFLINE MEET - 3'} />
      </SimpleGrid>
    </Box>
  );
}

export default Events;