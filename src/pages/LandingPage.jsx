import Mockup from '../assets/Mockup-App-Screen.png'
import HeroSectionImage from '../assets/Mockup-App-Hero-Section.png'

import { TbAlignRight } from "react-icons/tb";

import "../styles/landing-page.scss"

export function LandingPage() {
    return (
        <>
            <header id="header">
                <div className="logo-menu">
                    <img src={LogoColor} alt="" />
                </div>

                <nav>
                    <ul>
                        <li><a href="">O que é</a></li>
                        <li><a href="">Vantagens</a></li>
                        <li><a href="">Contextos de Uso</a></li>
                    </ul>
                </nav>

                <button className="primary-button">
                    <a href="https://neo-talk-angular.vercel.app/chat">
                        Experimente Agora
                    </a>
                </button>
            </header>

            <section id="hero">
                <div className="container">
                    <div className="text-content">
                        <h1 className="display-2xl">
                            <span className="highlight">Comunicação inclusiva</span> e facilitada com o NeoTalk
                        </h1>
                        <p className="display-xs">
                            Transformando a forma como pessoas surdas e ouvintes se comunicam no dia a dia por meio de tecnologia de ponta.
                        </p>
                        <div className="wrapper">
                            <button className="primary-button">
                                <a href="https://neo-talk-angular.vercel.app/chat"></a>
                                Experimente Agora
                            </button>
                            <button className="secondary-button">
                                Fale Conosco
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

            <section id="intro">
                <div className="container">
                    <div className="text-content">
                        <h6 className="text-sm tag-section">Nossa Solução</h6>
                        <h3 className="display-md">NeoTalk traduz áudio e texto para Libras, assim como o inverso, de Libras para áudio e texto.</h3>
                        <p className="text-md">Oferecemos traduções precisas e contextualizadas, indo além da simples correspondência palavra por palavra, capturando nuances e contextos da Libras.</p>
                    </div>

                    <div className="image-content">
                        <div className="inner-box">
                            <img src={Portrait} alt="" />
                        </div>
                    </div>

                    <div className="text-content">
                        <div className="item">
                            <h4 className="display-sm">Tradução em Tempo Real</h4>
                            <p className="text-md">Converta áudio e texto para Libras instantaneamente, levando em conta o contexto e nuances da conversa.</p>
                        </div>

                        <div className="item">
                            <h4 className="display-sm">Reconhecimento de Libras</h4>
                            <p className="text-md">Captura movimentos de Libras através da câmera para uma tradução precisa e natural</p>
                        </div>

                        <div className="item">
                            <h4 className="display-sm">Avatar 3D Personalizados</h4>
                            <p className="text-md">Visualize as traduções de Libras com avatares customizáveis.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="benefits">
                <div className="container">
                    <div className="text-content">
                        <h6 className="text-sm tag-section">Benefícios</h6>
                        <h2 className="display-lg">Vantagens do NeoTalk</h2>
                        <p className="text-md">Descubra como o NeoTalk pode transformar a maneira como pessoas surdas e ouvintes se comunicam, proporcionando benefícios que fazem a diferença no dia a dia.</p>
                    </div>

                    <div className="grid-benefits">
                        <div className="item">
                            <div className="icon">
                                <span>

                                    <TbAlignRight />
                                </span>

                            </div>
                            <h5 className="display-xs">Acessibilidade</h5>
                            <p className="text-sm">Elimine barreiras de comunicação entre pessoas surdas e ouvintes.</p>
                        </div>

                        <div className="item">
                            <div className="icon">
                                <span>

                                    <TbAlignRight />
                                </span>
                            </div>
                            <h5 className="display-xs">Segurança</h5>
                            <p className="text-sm">Mantenha a privacidade em interações sensíveis, como consultas médicas.</p>
                        </div>

                        <div className="item">
                            <div className="icon">
                                <span>
                                    <TbAlignRight />
                                </span>
                            </div>
                            <h5 className="display-xs">Facilidade</h5>
                            <p className="text-sm">Interface intuitiva e fácil de usar que se adapta às necessidades do usuário</p>
                        </div>

                        <div className="item">
                            <div className="icon">
                                <span>
                                    <TbAlignRight />
                                </span>
                            </div>
                            <h5 className="display-xs">Personalização</h5>
                            <p className="text-sm">Experiência personalizada com avatares 3D, adaptando-se ao estilo individual do usuário.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cases-of-use">
                <div className="container">

                    <div className="text-content">
                        <h6 className="text-sm tag-section">Contextos de Uso</h6>
                        <h2 className="display-xl">
                            Uma solução versátil que pode ser aplicada em <span className="highlight">diversos contextos</span>
                        </h2>
                    </div>

                    <div className="grid-case-of-uses">

                        <div className="item">
                            <div className="image-content">
                                <img src={Mockup} alt="" />
                            </div>
                            <div className="text-content">
                                <h1 className="display-md">Atendimento</h1>
                                <p className="text-md">Hospitais, hotéis e outros serviços de atendimento e recepção podem se comunicar eficientemente com todos os seus clientes e visitantes.</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="image-content">
                                <img src={Mockup} alt="" />
                            </div>
                            <div className="text-content">
                                <h1 className="display-md">Educação</h1>
                                <p className="text-md">Instituições de ensino podem integrar mais facilmente estudantes surdos, oferecendo um ambiente de aprendizado inclusivo e adaptado às suas necessidades de comunicação.</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="image-content">
                                <img src={Mockup} alt="" />
                            </div>
                            <div className="text-content">
                                <h4 className="display-md">Atendimento</h4>
                                <p className="text-md">Palestras, conferências e eventos corporativos se tornam mais acessíveis, permitindo que todos participem plenamente, sem barreiras linguísticas e com uma experiência única e personalizada.</p>
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
                        <h6 className="text-sm tag-section">Faça parte dessa evolução</h6>
                        <h2 className="display-lg">Rompa as barreiras da comunicação com o NeoTalk</h2>
                        <div className="wrapper">
                            <button className="primary-button">
                                <a href="https://neo-talk-angular.vercel.app/chat">
                                    Experimente Agora
                                </a>
                            </button>
                            <button className="secondary-button">
                                <a href="">
                                    Fale Conosco
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="links">
                <div className="container">


                    <div className="logo-footer">
                        <img src={LogoWhite} alt="" />
                    </div>

                    <nav>
                        <ul id="internal-links">
                            <li><a href="">Termos de Uso</a></li>
                            <li><a href="">Política de Privacidade</a></li>
                            <li><a href="">Suporte</a></li>
                        </ul>
                    </nav>
                </div>
            </section>

            <section id="social">
                <div className="container">
                    <p className="text-sm">&copy; 2024 NeoCode Solutions. Todos os direitos reservados</p>

                    <nav id="social">
                        <ul>
                            <li><a href="">i</a></li>
                            <li><a href="">i</a></li>
                            <li><a href="">i</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    )
}