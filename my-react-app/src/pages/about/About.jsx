import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
import "./about.css"




const About = () => {
  return (
    <>
    <Header title="About us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reprehenderit, nulla atque qui quasi laborum a maxime cupiditate dolorem! Non!
    </Header>

    <section className="about_story">
      <div className="container about_story-container">
        <div className="about_section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about_section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus numquam unde pariatur cumque repellat tenetur explicabo amet nemo! Blanditiis et tempora quod excepturi aspernatur magni, fuga quas ipsa ducimus earum sint debitis iusto beatae, velit, eius labore aut eum? Aspernatur facere quos quidem expedita

          </p>
         
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi repudiandae iste, explicabo ducimus impedit distinctio provident tenetur ab sequi repellendus quis optio inventore reiciendis voluptatem, 

          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi repudiandae iste, explicabo

          </p>
        </div>
      </div>

    </section>
    <section className="about_story">
      <div className="container about_vision-container">
       
        <div className="about_section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus numquam unde pariatur cumque repellat tenetur explicabo amet nemo! Blanditiis et tempora quod excepturi aspernatur magni, fuga quas ipsa ducimus earum sint debitis iusto beatae, velit, eius labore aut eum? Aspernatur facere quos quidem expedita,

          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi repudiandae iste, explicabo ducimus impedit distinctio provident tenetur ab sequi repellendus quis optio inventore reiciendis voluptatem, at autem aliquid beatae molestiae?Lorem ipsum dolor, sit amet consectetur 
          </p>
        </div>
        <div className="about_section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>

    </section>
    <section className="about_story">
      <div className="container about_mission-container">
        <div className="about_section-image">
          <img src={MissionImage} alt="Our mission Image" />
        </div>
        <div className="about_section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus numquam unde pariatur cumque repellat tenetur explicabo amet nemo! Blanditiis et tempora quod excepturi aspernatur magni, fuga quas ipsa ducimus earum sint debitis iusto beatae, velit, eius labore aut eum? Aspernatur facere quos quidem expedita, 

          </p>
         
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi repudiandae iste, explicabo ducimus impedit distinctio provident tenetur ab sequi repellendus quis optio inventore reiciendis voluptatem,

          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis animi repudiandae iste, explicabo 

          </p>
        </div>
      </div>

    </section>
    </>
  )
}

export default About