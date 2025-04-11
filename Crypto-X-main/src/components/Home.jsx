import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src="https://media.istockphoto.com/id/1440241076/photo/bitcoin-and-ethereum-cryptocurrency-with-candle-stick-graph-chart-laptop-keyboard-and-digital.jpg?s=2048x2048&w=is&k=20&c=slzaJ6INd84b3T1xMhJrRefNdyO_av7Rd-PGiTlszPQ="
          // filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"1"}
      >
        Xcrypto
      </Text>
    </Box>
  );
};

export default Home;
