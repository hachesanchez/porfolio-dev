import { useState } from "react";
import Footer from "../../components/Footer/Footer"
import Button from 'react-bootstrap/Button';
import { Modal } from "react-bootstrap";
import ContactForm from "../../components/ContactForm";
import './FooterPage.css'


const FooterPage = () => {

    const [modalShow, setModalShow] = useState(false)

    const handleDropALineClick = () => {
        setModalShow(true)
    }

    return (

        <>
            <Footer onDropALineClick={handleDropALineClick} />

            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="contact-modal">
                <Modal.Header closeButton>
                    <Modal.Title className="form-title">
                        Let's talk!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ContactForm closeModal={() => setShowModal(false)} />
                </Modal.Body>

            </Modal>
        </>
    )
}

export default FooterPage