import { Container, Heading, HStack, VStack } from '@chakra-ui/react';
import axios  from 'axios'; 
import React, { useEffect, useState } from 'react';
import Loader from './Loader';

export const server='https://api.coingecko.com/api/v3';
const Exchanges = () => {

    const[exchanges,setExchanges] = useState([]);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(false);


  useEffect(() => {
   const fetchExchanges = async() =>{
    try {
     const {data} = await axios.get(`${server}/exchanges`)

  
      setLoading(false);
      setExchanges(data);
    
    } catch (error) {
       setError(true);
       setLoading(false);
    
    }
   };
   fetchExchanges();

    

  },[]);

  return (<Container maxW={"container.xl"}>{loading? <Loader /> :<> 
  
   <HStack wrap={"wrap"}>
    {exchanges.map((i) => (
       <ExchangeCard key={i.id} names={i.name} img={i.image} rank={i.trust_score_rank} url={i.url} />
    ))}

   </HStack>
  
  
  </> }</Container>);
};


const ExchangeCard = ({names,img,rank,url}) => (
    <a href={url} target={'blank'}>
     <VStack w={52} shadow={"lg"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"}>
        <img
        src={img}
        w={"10"}
        h={"10"}
        objectfit={"contain"}
        alt={"Exchange"} 

        />
       <Heading size={"md"} noOfLines={1}>{rank}</Heading>
       <text nooflines={1}>{names}</text>
     </VStack>




    </a>
)

export default Exchanges