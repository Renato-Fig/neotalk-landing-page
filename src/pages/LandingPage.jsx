import LogoWhite from '../assets/Logo-White.png'
import LogoColor from '../assets/Logo-Color.png'
import Mockup from '../assets/Mockup-App-Screen.png'
import HeroSectionImage from '../assets/Mockup-App-Hero-Section.png'
import Portrait from '../assets/Portrait-Sign-Language.png'

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
                        <li><a href="">Benefícios</a></li>
                        <li><a href="">Casos de Uso</a></li>
                    </ul>
                </nav>

                <button className="primary-button">
                    Teste Agora
                </button>
            </header>

            <section id="hero">
                <div className="container">
                    <div className="text-content">
                        <h1 className="display-2xl">
                            Comunicação inclusiva e facilitada com o NeoTalk
                        </h1>
                        <p className="display-xs">
                            Transformando a forma como pessoas surdas e ouvintes se comunicam no dia a dia por meio de tecnologia de ponta.
                        </p>
                        <div className="wrapper">
                            <button className="primary-button">
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
                <div className="background-circles">
                    <div className="circle big-circle"></div>
                    <div className="circle small-circle"></div>
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
                            <p className="text-md">Donec nec cursus metus, nec commodo ligula. Curabitur ultrices eget tellus at egestas.</p>
                        </div>

                        <div className="item">
                            <h4 className="display-sm">Reconhecimento de Libras</h4>
                            <p className="text-md">Donec nec cursus metus, nec commodo ligula. Curabitur ultrices eget tellus at egestas.</p>
                        </div>

                        <div className="item">
                            <h4 className="display-sm">Avatar 3D Personalizados</h4>
                            <p className="text-md">Donec nec cursus metus, nec commodo ligula. Curabitur ultrices eget tellus at egestas.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="benefits">
                <div className="container">
                    <div className="text-content">
                        <h6 className="text-sm tag-section">Benefícios</h6>
                        <h2 className="display-lg">O que oferecemos</h2>
                        <p className="text-md">Donec tempor varius ligula, id consectetur arcu aliquet at. Donec eu elit ac elit rutrum ornare quis in magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </div>

                    <div className="grid-benefits">
                        <div className="item">
                            <div className="icon">
                                Icon
                            </div>
                            <h5 className="display-xs">Acessibilidade</h5>
                            <p className="text-sm">Sem ac finibus. Donec nec cursus metus, nec commodo ligula. Curabitur ultrices.</p>
                        </div>

                        <div className="item">
                            <div className="icon">
                                Icon
                            </div>
                            <h5 className="display-xs">Segurança</h5>
                            <p className="text-sm">Sem ac finibus. Donec nec cursus metus, nec commodo ligula. Curabitur ultrices.</p>
                        </div>

                        <div className="item">
                            <div className="icon">
                                Icon
                            </div>
                            <h5 className="display-xs">Facilidade</h5>
                            <p className="text-sm">Sem ac finibus. Donec nec cursus metus, nec commodo ligula. Curabitur ultrices.</p>
                        </div>

                        <div className="item">
                            <div className="icon">
                                Icon
                            </div>
                            <h5 className="display-xs">Benefício</h5>
                            <p className="text-sm">Sem ac finibus. Donec nec cursus metus, nec commodo ligula. Curabitur ultrices.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cases-of-use">
                <div className="container">

                    <div className="text-content">
                        <h6 className="text-sm tag-section">Casos de Uso</h6>
                        <h2 className="display-xl">
                            Eget tellus at egestas. Duis sed ex lacus pellentesque habitant.
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
                                Experimente Agora
                            </button>
                            <button className="secondary-button">
                                Fale Conosco
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