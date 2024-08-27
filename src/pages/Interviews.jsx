import React, { useState } from 'react';
import Modal from 'react-modal';
import "../styles/interviews.scss";
import LogoWhite from '../assets/logo-white.png';
import { FiArrowLeft } from "react-icons/fi";

Modal.setAppElement('#root');

export function Interviews() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const interviews = [
        { id: 1, title: "Jornal Band Cidade - TV Band", videoUrl: "https://www.youtube.com/embed/u31qwQUeGuM?si=ZOAaxNoT51E-wQff" },
        { id: 2, title: "Jornal Cidade - TV Record", videoUrl: "https://www.youtube.com/embed/u31qwQUeGuM?si=ZOAaxNoT51E-wQff" },
        { id: 3, title: "Conexão News - JP News Floripa", videoUrl: "https://www.youtube.com/embed/u31qwQUeGuM?si=ZOAaxNoT51E-wQff" }
    ];

    const openModal = (videoUrl) => {
        setSelectedVideo(videoUrl);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedVideo(null);
    };

    return (
        <>
            <section id="interviews">
                <div className="container">
                    <div className="text-content">
                        <h3 className="display-lg">Veja nossas entrevistas na imprensa</h3>
                    </div>
                    <div className="list-interviews">
                        {interviews.map(interview => (
                            <div key={interview.id} className="item" onClick={() => openModal(interview.videoUrl)}>
                                <div className="text-content">
                                    <p className="text-lg">{interview.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="secondary-button">
                        <a href="/">Voltar para página inicial</a>
                    </button>
                </div>
            </section>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="video-modal"
                overlayClassName="video-overlay"
            >
                <div className="modal-content">
                    {selectedVideo && (
                        <iframe
                            width="100%"
                            height="100%"
                            src={selectedVideo}
                            title="Entrevista"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )}
                    <button className="close-button" onClick={closeModal}>Fechar</button>
                </div>
            </Modal>

            <section id="links">
                <div className="container">
                    <p className="text-sm">
                        &copy; 2024 NeoCode Solutions. Todos os direitos reservados
                    </p>
                    <img src={LogoWhite} alt="NeoCode Logo" />
                </div>
            </section>
        </>
    );
}
