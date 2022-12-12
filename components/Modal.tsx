import MuiModal from '@mui/material/Modal';
import { modalState } from '../atoms/modalAtom';
import { useRecoilState } from 'recoil';
import { XIcon } from '@heroicons/react/outline';

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);

  const onCloseHandle = () => {
    setShowModal(false);
  };

  return (
    <MuiModal open={showModal} onClose={onCloseHandle}>
      <>
        <button
          onClick={onCloseHandle}
          className="modalButton absolute right-5 top-5 !z-40 w-9 h-9 border-none bg-[#181818] hover:bg-[#181818]">
          <XIcon />
        </button>
      </>
    </MuiModal>
  );
}

export default Modal;
