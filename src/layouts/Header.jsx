import { useState } from 'react';

import { Flex, Spacer, Container, Text, Button, Box } from '@chakra-ui/react';
import SignIn from '../components/Modals/SignIn';

function Header() {
  const [value, setValue] = useState('EN');
  const [openModal, setOpenModal] = useState(false);
  const handleChange = (e) => setValue(e.target.value);

  return (
    <header>
      <Flex backgroundColor="#f1f2f4">
        <Container maxW="container.xl" color="#2d333f">
          <Flex minWidth="max-content" alignItems="center" gap="2" height={7}>
            <Spacer />

            <Button fontSize="xs" fontWeight="medium" variant="unstyled">
              For Businesses
            </Button>
            <Button fontSize="xs" fontWeight="medium" variant="unstyled">
              FAQs
            </Button>

            <Text fontSize="xs">
              <select placeholder="En" value={value} onChange={handleChange}>
                <option value="GE">Georgian</option>
                <option value="EN">English</option>
                <option value="RU">Russian</option>
              </select>
            </Text>
          </Flex>
        </Container>
      </Flex>
      <Flex>
        <Container maxW="container.xl" color="#2d333f">
          <Flex minWidth="max-content" alignItems="center" gap="2" padding={2}>
            <img style={{ width: 30 }} src={require('../assets/logo.jpeg')} alt="logo" />

            <Spacer />

            <Button
              fontSize="xs"
              bgColor="#247f9e"
              _hover={{
                background: '#0b7396',
              }}
              color="white"
              onClick={() => setOpenModal(true)}
            >
              Sign up
            </Button>
            <Button
              fontSize="xs"
              bgColor="#fffff"
              border="1px"
              borderColor="#d8d9db"
              _hover={{
                background: '#fffff',
              }}
            >
              Sign in
            </Button>
            <Box width="24px" cursor="pointer">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <g fill="none">
                  <path
                    d="M13,15.9291111 L13,21.5 C13,21.7761424 12.7761424,22 12.5,22 L11.5,22 C11.2238576,22 11,21.7761424 11,21.5 L11,15.9291111 C7.60770586,15.4438815 5,12.5264719 5,9 C5,5.13400675 8.13400675,2 12,2 C15.8659932,2 19,5.13400675 19,9 C19,12.5264719 16.3922941,15.4438815 13,15.9291111 Z M12,4 C9.23857625,4 7,6.23857625 7,9 C7,11.7614237 9.23857625,14 12,14 C14.7614237,14 17,11.7614237 17,9 C17,6.23857625 14.7614237,4 12,4 Z"
                    fill="#2D333F"
                    fill-rule="nonzero"
                    transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000)"
                  ></path>
                </g>
              </svg>
            </Box>
          </Flex>
        </Container>
      </Flex>
      <SignIn show={openModal} hideModal={() => setOpenModal(false)} />
    </header>
  );
}
export default Header;
