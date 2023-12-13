import React, { FC, useRef } from 'react';
import { Modal, Box } from '@mui/material';
import { motion } from 'framer-motion';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: any;
  component: any;
  setRoute: (route: string) => void;
};

const CustomModal: FC<Props> = ({ open, setOpen, setRoute, component: Component }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: '0%' }}
        exit={{ opacity: 0, x: '100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
        onClick={handleClose}
      >
        <Box
          ref={modalRef}
          className="w-[300px] md:w-[420px] bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-black rounded-[8px] shadow p-4 outline-none"
        >
          <Component setOpen={setOpen} setRoute={setRoute} />
        </Box>
      </motion.div>
    </Modal>
  );
};

export default CustomModal;
