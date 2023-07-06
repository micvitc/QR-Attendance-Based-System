"use client";
import {
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

function Events(props) {
  const { Name, Description, Venue, StartTime, EndTime } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}>
      <StatLabel fontWeight={"bold"} fontSize={"2xl"} isTruncated>
        {Name}
      </StatLabel>
      <StatNumber fontSize={"medium"} fontWeight={"medium"}>
        Start : {StartTime}
      </StatNumber>
      <StatNumber fontSize={"medium"} fontWeight={"medium"}>
        End: {EndTime}
      </StatNumber>
      <StatNumber fontSize={"xl"} fontWeight={"medium"}>
        Decription : {Description}
      </StatNumber>
      <StatNumber fontSize={"xl"} fontWeight={"medium"}>
        Venue : {Venue}
      </StatNumber>
    </Stat>
  );
}

export default Events;
