import { Container, Header, H1, Name, Navigation } from "./style";
import MailIcon from "./assets/mail icon.png"
import PhoneIcon from "./assets/whatsapp_icon.png"
import LinkedinIcon from "./assets/linkedin_icon.jpg"
import GithubIcon from "./assets/github_PNG40.png"
import EUAIcon from "./assets/EUA_icon.png"
import SpanishIcon from "./assets/Spanish_icon.png"


function App() {
  return (
    <Container>

      <Header>

        <Name>
          <h1><strong>Liliam Kaori Yamada</strong></h1>
          <h4>Desenvolvedora Front-End</h4>
        </Name>

        <Navigation>
          <li class="Nav"><a href="#aboutMe">Sobre mim</a></li>
          <li class="Nav"><a href="#curriculum">Currículo</a></li>
          <li class="Nav"><a href="#portfolio">Portfólio</a></li>
          <li class="Nav"><a href="#contact">Contato</a></li>
        </Navigation>

      </Header>


      <div id="aboutMe">

        <div class="mainLeft">

          <div class="circleImage">
          </div>

          <Name>
            <h1>Liliam Kaori Yamada</h1>
            <h4>Desenvolvedora Front-End</h4>
          </Name>

          <div id="contact">
            <ul>
              <li><a href="mailto:lilikaori10@gmail.com"><img class="contactIcon" src={MailIcon} alt="mail-icon" /></a></li>
              <li><a href="https://wa.me/55989967944" target="_blank"><img class="contactIcon" src={PhoneIcon} alt="phone-icon" /></a></li>
              <li><a href="https://www.linkedin.com/in/liliam-yamada" target="_blank"><img class="contactIcon" src={LinkedinIcon} alt="linkedin-icon" /></a></li>
              <li><a href="https://github.com/LiliKaori" target="_blank"><img class="contactIcon" src={GithubIcon} alt="github-icon" /></a></li>
            </ul>
          </div>

        </div>

        <div class="mainRight">
          <p class="Hi"> Olá</p>
          <h2>Meu Perfil e Projetos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorum animi velit aut iure quam nostrum
            eaque ullam, dolore cum, laudantium ducimus. Veritatis minima labore iure necessitatibus, cumque nobis
            eaque.</p>
        </div>

      </div>

      <div id="Curriculum">

        <h1 id="curriculum">Currículo</h1>

        <div class="language">
          <p><img class="languageIcon" src={EUAIcon} alt="eua-icon" /></p>
          <p><img class="languageIcon" src={SpanishIcon} alt="spanish-icon" /></p>
        </div>

        <h2>Experiência Profissional</h2>

        <div class="box">

          <div class="boxLeft">

            <div class="imgBox"></div>
            <h3>2013-ATUAL</h3>
            <h4>Desenvolvedor Font-End Freelancer</h4>

          </div>

          <div class="boxRigth">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex quisquam ipsum beatae debitis ipsa
              quae quasi eum provident iusto dicta aliquam adipisci alias corporis placeat tenetur aperiam, sed
              earum.</p>
          </div>

        </div>

      </div>


    </Container>
  );
}

export default App;
