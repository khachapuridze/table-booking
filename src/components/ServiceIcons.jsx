import { Flex, Container } from '@chakra-ui/react';

function ServiceIcons() {
  return (
    <Container maxW="container.xl" color="#2d333f">
      <Flex justify="space-between" className="service-icons" w="100%" p={10}>
        <div className="icon-circle">
          Help me to choose
          <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>table</title>
            <path d="M18.76,6l2,4H3.24l2-4H18.76M20,4H4L1,10v2H3v7H5V16H19v3h2V12h2V10L20,4ZM5,14V12H19v2Z" />
            <rect width="24" height="24" fill="none" />
          </svg>
        </div>
        <div className="icon-circle">
          Special request
          <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>table</title>
            <path d="M18.76,6l2,4H3.24l2-4H18.76M20,4H4L1,10v2H3v7H5V16H19v3h2V12h2V10L20,4ZM5,14V12H19v2Z" />
            <rect width="24" height="24" fill="none" />
          </svg>
        </div>
        <div className="icon-circle">
          Something else
          <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>table</title>
            <path d="M18.76,6l2,4H3.24l2-4H18.76M20,4H4L1,10v2H3v7H5V16H19v3h2V12h2V10L20,4ZM5,14V12H19v2Z" />
            <rect width="24" height="24" fill="none" />
          </svg>
        </div>
      </Flex>
    </Container>
  );
}

export default ServiceIcons;
