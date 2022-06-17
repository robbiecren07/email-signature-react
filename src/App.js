import React from 'react';
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { EmailContextProvider } from 'context/email/templateContext'
import { DetailsContextProvider } from 'context/email/detailsContext'
import { CustomizeContextProvider } from 'context/email/customizeContext'
import { UploadContextProvider } from 'context/email/uploadContext'
import Navbar from 'components/Navbar';
import EmailSidebar from 'components/email-sidebar/EmailSidebar'
import EmailTemplates from 'components/email-templates'
import CreateSignatureButton from 'components/email-sidebar/CreateSignatureButton'
import ClearFieldsButton from 'components/email-sidebar/ClearFieldsButton'
import CreateSignatureSidebar from 'components/email-sidebar/CreateSignatureSidebar'
import {
  ChakraProvider,
  Box,
  Grid,
  GridItem,
  theme,
  Text
} from '@chakra-ui/react';

import 'styles/app.css'

function App() {
  const [createSig, setCreateSig] = useState(false)

  const handleCreateSignature = (value) => {
    setCreateSig(value)
  }

  const handleEditSignature = (value) => {
    setCreateSig(value)
  }

  const handleClearFields = (value) => {
    setCreateSig(value)
  }
  
  const variants = {
    initial: {
      opacity: 0,
      x: '-100%'
    },
    animate: {
      opacity: 1,
      x: '0'
    }
  }

  const transition = {
    ease: 'anticipate',
    duration: 0.5
  }

  return (
    <ChakraProvider theme={theme}>
      <EmailContextProvider>
        <DetailsContextProvider>
          <CustomizeContextProvider>
            <UploadContextProvider>

              <Box w="100%" h="100%" display="flex" flexDirection="column">
                <Navbar />
                <Box as="main" w="100%" h="calc(100vh - 60px)">
                  <Grid h="100%" templateColumns="380px auto">
                    <GridItem as="aside" borderRight="1px solid #BBB" overflow="hidden">
                      {createSig === true ?
                          <motion.div
                            initial="initial"
                            animate="animate"
                            transition={transition}
                            variants={variants}
                        >
                          <CreateSignatureSidebar handleClick={(value) => handleEditSignature(value)} />
                        </motion.div>
                      :
                        <EmailSidebar />
                      }
                    </GridItem>

                    <GridItem as="section">
                      <Box w="100%" h="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="40px">
                        <EmailTemplates />
                        <CreateSignatureButton handleClick={(value) => handleCreateSignature(value)} />
                      </Box>
                      <ClearFieldsButton handleClick={(value) => handleClearFields(value)} />
                    </GridItem>
                  </Grid>
                </Box>
              </Box>

              <Text fontSize="xs" pos="absolute" bottom="10px" right="10px">This app was built with React, as a learning project.</Text>

            </UploadContextProvider>
          </CustomizeContextProvider>
        </DetailsContextProvider>
      </EmailContextProvider>
    </ChakraProvider>
  );
}

export default App;
