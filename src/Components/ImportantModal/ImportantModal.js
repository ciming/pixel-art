import {Component} from 'react'

import Modal from 'react-modal';

class ImportantModal extends Modal{
  constructor() {
    super()
    this.state = {
      modalVisible: true
    }
  }
  render() {
    Modal.setAppElement('#root')
    return(
      <Modal
          isOpen={this.state.modalVisible}
          contentLabel="Example Modal"
        >
      </Modal>
    )
  }
}