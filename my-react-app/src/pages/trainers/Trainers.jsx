import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_1.jpg"
import { trainers } from "../../data"
import {BsInstagram} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"

import Trainer from "../../components/Trainer"

import "./trainers.css"

function Trainers() {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam consequatur odio tenetur recusandae tempore.
      </Header>
    <section className="trainers">
      <div className="container trainers_container">
        {
          trainers.map(({id, image, name, job, social}) => {
            return <Trainer key={id} image={image} name={name} job={job} social={
              [
                {icon: <BsInstagram/>, link: social[0]},
                {icon: <AiOutlineTwitter/>, link: social[1]},
                {icon: <FaFacebookF/>, link: social[2]},
                {icon: <FaLinkedinIn/>, link: social[3]},
              ]
        }/>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers