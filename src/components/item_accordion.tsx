import { Box, Button, Heading, Text, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel} from '@chakra-ui/react'
import { FunctionComponent } from 'react'
type ItemAccordionProps = {
    question: string,
    answer: string
}
const ItemAccordion:FunctionComponent<ItemAccordionProps> = ({question, answer}) => 
    <AccordionItem p={4}>
        <Heading>
            <AccordionButton 
                _hover={{color: 'red'}} 
                fontWeight="700" 
                _focus={{boxShadow:'0px',}} 
                _active={{borderColor: 'transparent'}}>
                
                <Box flex='1' textAlign='left'>
                {question}
                </Box>
                <AccordionIcon />
            </AccordionButton>
        </Heading>
        <AccordionPanel pt={4} pb={4}>
        {answer}
        </AccordionPanel>
    </AccordionItem>

export default ItemAccordion;