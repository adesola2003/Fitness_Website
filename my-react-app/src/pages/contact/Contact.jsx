import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_1.jpg"
import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"





import "./contact.css"

function Contact() {
  return (
        <>
        <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt illum culpa distinctio ipsa corrupti? Libero eos magni vitae modi id.
        </Header>
        <section>
          <div className="container contact_container">
            <div className="contact_wrapper">
              <a href="mailto:maryolasehinde20@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
              <a href="http://m.me/olasehinde_kanyinsola" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
              <a href="https://wa.me/+2348118033835" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
            </div>
          </div>
        </section>
        </>
  )
}

export default Contact