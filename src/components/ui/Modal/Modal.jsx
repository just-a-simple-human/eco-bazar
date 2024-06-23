import React, { useEffect, useRef } from 'react'
import { ModalContainer } from './Modal.style';
import { addModal, changeModalStatus } from '#store/modalSlice.js';
import { useDispatch } from 'react-redux';

function Modal ({children, modalName}) {

  const modalRef = useRef();

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      addModal({
        name: modalName,
        status: "closed",
        ref: modalRef.current
      })
    )
    dispatch(
      changeModalStatus({
        name: modalName,
        value: "opened"
      })
    )
  })

  return (
    <ModalContainer 
      ref={modalRef}
      onClick={() => {
        dispatch(changeModalStatus({name: modalName, value: "closed"}));
      }}
    >
      {
        children
      }
    </ModalContainer>
  )
}

export default Modal