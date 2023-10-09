(() => {
  const modalRefs = [
    {
      openModalBtns: document.querySelectorAll("[data-modal-open='modal1']"),
      closeModalBtn: document.querySelector("[data-modal-close='modal1']"),
      modal: document.querySelector("[data-modal='modal1']"),
      bodyElement: document.querySelector("body"),
    },
    {
      openModalBtn: document.querySelector("[data-modal-open='modal2']"),
      closeModalBtn: document.querySelector("[data-modal-close='modal2']"),
      modal: document.querySelector("[data-modal='modal2']"),
      bodyElement: document.querySelector("body"),
    },
    {
      openModalBtn: document.querySelector("[data-modal-open='modal3']"),
      closeModalBtn: document.querySelector("[data-modal-close='modal3']"),
      modal: document.querySelector("[data-modal='modal3']"),
      bodyElement: document.querySelector("body"),
    }
  ];

  modalRefs.forEach((modalRef) => {
    if (modalRef.openModalBtns) {
      modalRef.openModalBtns.forEach((openModalBtn) => {
        openModalBtn.addEventListener("click", () => openModal(modalRef));
      });
    } else {
      modalRef.openModalBtn.addEventListener("click", () => openModal(modalRef));
    }

    modalRef.closeModalBtn.addEventListener("click", () => closeModal(modalRef));
  });

  function openModal(modalRef) {
    toggleModal(modalRef);
    disableBodyScroll(modalRef);
  }

  function closeModal(modalRef) {
    toggleModal(modalRef);
    enableBodyScroll(modalRef);
  }

  function toggleModal(modalRef) {
    modalRef.modal.classList.toggle("is-hidden");
  }

  function disableBodyScroll(modalRef) {
    modalRef.bodyElement.style.overflow = "hidden";
  }

  function enableBodyScroll(modalRef) {
    modalRef.bodyElement.style.overflow = "";
  }
})();