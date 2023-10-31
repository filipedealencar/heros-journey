import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";
import styled from "styled-components";

const ContainerModal = styled.div`
  /* *{
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
} */
`;

export const CustomModal: React.FC<{
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}> = ({ open, onClose, children }) => {
  const theme = extendTheme({
    components: {
      Modal: {
        baseStyle: () => ({
          dialog: {
            background: "rgba(255, 255, 255, 0.6)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            backdropFilter: " blur(10px)",
          },
        }),
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Modal onClose={onClose} size={"full"} isOpen={open}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};
