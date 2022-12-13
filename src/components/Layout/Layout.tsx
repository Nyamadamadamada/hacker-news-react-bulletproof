import { useState } from "react";
import { Outlet } from "react-router-dom";
import Modal from "../Modal/Modal";

const Layout = () => {
  const [showModal, setShowModal] = useState<boolean>(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && <Modal handleClose={closeModal} />}
      <Outlet />
    </div>
  );
};

export default Layout;
