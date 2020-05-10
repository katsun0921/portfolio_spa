import React from 'react'
import Modal from 'react-modal'

import 'scss/object/component/_modal.scss'
import { LinkModal } from '../components/Link'
import { ColSide } from '../components/Col'

interface ModalResumeProps {
  className: string
}

export class ModalResume extends React.Component<ModalResumeProps> {
  constructor() {
    super()
    this.state = {
      showModal: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  componentDidMount() {
    Modal.setAppElement('body')
  }
  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className={this.props.className}
          onClick={this.handleOpenModal}
        >
          {this.props.children}
        </button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Resume Modal"
          onRequestClose={this.handleCloseModal}
          className="c-modalResume__content"
          overlayClassName="c-modalResume__overlay"
        >
          <div>
            <h2>Wantedlyのプロフィールページへリンクします。</h2>
            <p>
              プロフィールの詳細に関しては、ビジネスSNSの
              <br />
              Wantedlyのプロフィールページにて詳細に情報をまとめおります。
              <br />
              ぜひともご覧ください。
            </p>
            <ColSide>
              <LinkModal
                href="https://www.wantedly.com/users/85120401

"
              >
                移動する
              </LinkModal>
            </ColSide>
          </div>
          <button
            className="c-modalResume__buttonClose"
            onClick={this.handleCloseModal}
          >
            閉じる
          </button>
        </Modal>
      </div>
    )
  }
}
