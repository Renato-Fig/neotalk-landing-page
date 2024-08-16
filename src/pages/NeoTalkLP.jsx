import ScenarioA from '../assets/usage-scenario-1.png'
import ScenarioB from '../assets/usage-scenario-2.png'
import ScenarioC from '../assets/usage-scenario-3.png'
import Portrait from '../assets/woman-doing-sign-language.png'
import LogoWhite from '../assets/logo-white.png'
import LogoColorful from '../assets/logo-colorful.png'

import HeroSectionImage from '../assets/Mockup-App-Hero-Section.png'

import { FiSmile } from "react-icons/fi";
import { FiShield } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiPenTool } from "react-icons/fi";

import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

import "../styles/neotalk-lp.scss"

export function NeoTalkLP() {
    return (
        <>
            <header id="navigation">
                <img src={LogoColorful} alt="" />
                <nav>
                    <ul>
                        <li>
                            <a href="#introduction">Nossa Solução</a>
                        </li>
                        <li>
                            <a href="#benefits">Benefícios</a>
                        </li>
                        <li>
                            <a href="#usage-scenarios">Cenários de Uso</a>
                        </li>
                    </ul>
                </nav>
                <button className="primary-button">
                    <a href="https://neo-talk-angular.vercel.app/chat">Experimente Agora</a>
                </button>
            </header>
            <section id="hero">
                <div className="container">
                    <div className="text-content">
                        <h1 className="display-2xl">
                            <span className="highlight">Comunicação inclusiva</span> e facilitada com o NeoTalk
                        </h1>
                        <p className="text-lg">
                            Transformando a forma como pessoas surdas e ouvintes se comunicam no dia a dia por meio de tecnologia de ponta.
                        </p>
                        <div className="wrapper">
                            <button className="primary-button">
                                <a href="https://neo-talk-angular.vercel.app/chat">Experimente Agora</a>
                            </button>
                            <button className="secondary-button">
                                <a href="dm.wa.link/mxlkbs ">Fale Conosco</a>
                            </button>
                        </div>
                    </div>
                    <div className="image-content">
                        <div className="inner-box">
                            <img src={HeroSectionImage} alt="" />
                        </div>
                    </div>
                </div>

            </section>
            <section id="introduction">
                <div className="container">
                    <div className="text-content">
                        <h6 className="text-sm tag-section">
                            Nossa solução
                        </h6>
                        <h4 className="display-md">
                            NeoTalk traduz áudio e texto para Libras, assim como o inverso, de Libras para áudio e texto.
                        </h4>
                        <p className="text-md">
                            Oferecemos traduções precisas e contextualizadas,indo além da simples correspondência palavra por palavra, capturando nuances e contextos da Libras.
                        </p>
                    </div>
                    <div className="image-content">
                        <div className="image-box">
                            <img src={Portrait} alt="" />
                        </div>
                    </div>
                    <div className="text-content">
                        <div className="wrapper">
                            <h5 className="display-sm">
                                Tradução em Tempo Real
                            </h5>
                            <p className="text-md">
                                Converta áudio e texto para Libras instantaneamente, levando em conta o contexto e nuances da conversa.
                            </p>
                        </div>
                        <div className="wrapper">
                            <h5 className="display-sm">
                                Reconhecimento de Libras
                            </h5>
                            <p className="text-md">
                                Captura movimentos de Libras através da câmera para uma tradução precisa e natural, conforme o contexto.
                            </p>
                        </div>
                        <div className="wrapper">
                            <h5 className="display-sm">
                                Avatar 3D Personalizados
                            </h5>
                            <p className="text-md">
                                Visualize as traduções de Libras com avatares customizáveis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="benefits">
                <div className="container">
                    <div className="text-content">
                        <h6 className="text-sm tag-section">
                            Benefícios
                        </h6>
                        <h2 className="display-xl">
                            Vantagens do NeoTalk
                        </h2>
                        <p className="text-md">
                            Descubra como o NeoTalk pode transformar a maneira como pessoas surdas e ouvintes se comunicam, proporcionando benefícios que fazem a diferença no dia a dia.
                        </p>
                    </div>
                    <div id="list-benefits">
                        <div className="item">
                            <div className="icon-box">
                                <span>
                                    <FiSmile />
                                </span>
                            </div>
                            <div className="text-content">
                                <h6 className="display-xs">
                                    Acessibilidade
                                </h6>
                                <p className="text-sm">
                                    Elimine barreiras de comunicação entre pessoas surdas e ouvintes.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon-box">
                                <span>
                                    <FiShield />
                                </span>
                            </div>
                            <div className="text-content">
                                <h6 className="display-xs">
                                    Segurança
                                </h6>
                                <p className="text-sm">
                                    Mantenha a privacidade em interações sensíveis, como consultas médicas.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon-box">
                                <span>
                                    <FiHeart />
                                </span>
                            </div>
                            <div className="text-content">
                                <h6 className="display-xs">
                                    Facilidade
                                </h6>
                                <p className="text-sm">
                                    Interface intuitiva e fácil de usar que se adapta às necessidades do usuário.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon-box">
                                <span>
                                    <FiPenTool />
                                </span>
                            </div>
                            <div className="text-content">
                                <h6 className="display-xs">
                                    Personalização
                                </h6>
                                <p className="text-sm">
                                    Experiência personalizada com avatares 3D, adaptando-se ao estilo individual do usuário.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="usage-scenarios">
                <div className="container">
                    <div className="text-content">
                        <h6 className="text-sm tag-section">
                            Cenários de Uso
                        </h6>
                        <h2 className="display-xl">
                            Uma solução versátil que pode ser aplicada em <span className="highlight">diversos contextos</span>
                        </h2>
                    </div>
                    <div id="list-usage-scenarios">
                        <div className="item">
                            <div className="image-content">
                                <img src={ScenarioA} alt="" />
                            </div>
                            <div className="text-content">
                                <h4 className="display-md">
                                    Atendimento
                                </h4>
                                <p className="text-md">
                                    Hospitais, hotéis e outros serviços de atendimento e recepção podem se comunicar eficientemente com todos os seus clientes e visitantes.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image-content">
                                <img src={ScenarioB} alt="" />
                            </div>
                            <div className="text-content">
                                <h4 className="display-md">
                                    Educação
                                </h4>
                                <p className="text-md">
                                    Instituições de ensino podem integrar mais facilmente estudantes surdos, oferecendo um ambiente de aprendizado inclusivo e adaptado às suas necessidades de comunicação.                            </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image-content">
                                <img src={ScenarioC} alt="" />
                            </div>
                            <div className="text-content">
                                <h4 className="display-md">
                                    Eventos
                                </h4>
                                <p className="text-md">
                                    Palestras, conferências e eventos corporativos se tornam mais acessíveis, permitindo que todos participem plenamente, sem barreiras linguísticas e com uma experiência única e personalizada.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="background-bar">
                <div className="inner-curved-box"></div>
            </div>

            <section id="cta">
                <div className="container">
                    <div className="text-content">
                        <h6 className="text-sm tag-section">
                            Faça parte dessa evolução
                        </h6>
                        <h3 className="display-lg">
                            Rompa as barreiras da comunicação entre pessoas surdas e ouvintes com o NeoTalk
                        </h3>
                        <div className="wrapper">
                            <button className="primary-button">
                                <a href="https://neo-talk-angular.vercel.app/chat">Experimente Agora</a>
                            </button>
                            <button className="secondary-button">
                                <a href="dm.wa.link/mxlkbs ">Fale Conosco</a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="links">
                <div className="container">
                    <p className="text-sm">
                        &copy; 2024 NeoCode Solutions. Todos os direitos reservados
                    </p>
                    <img src={LogoWhite} alt="" />
                    {/* 
                <nav>
                <ul>
                <li>
                <a href="#">Sobre Nós</a>
                </li>
                <li>
                <a href="#">Perguntas Frequentes</a>
                </li>
                </ul>
                </nav>
                */}
                </div>
            </section>
            {/*
            <section id="footer">
                
                <nav className="social">
                    <ul>
                        <li>
                            <a href="#"><FiInstagram /></a>
                        </li>
                        <li>
                            <a href="#"><FiLinkedin /></a>
                        </li>
                    </ul>
                </nav> 
                
            </section>*/}
        </>
    )
}