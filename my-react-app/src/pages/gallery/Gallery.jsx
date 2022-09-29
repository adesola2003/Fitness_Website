import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_1.jpg"

import "./gallery.css"

function Gallery() {
  const galleryLength = 15;
  const images = []
  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  
  console.log(images);

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam consequatur odio tenetur recusandae tempore. Debitis  consectetur nulla.
      </Header>
      <section className="gallery">
        <div className="container gallery_container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`}  />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery