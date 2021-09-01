import React, { useEffect, useState } from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import Moment from "react-moment"
import { useParams } from "react-router-dom"
import noimg from "../../assets/img/noimage.png"
import { queryApi } from "../../utils/queryApi"

export default function Single() {
  const { id } = useParams()
  // get event by id passed in params with hook
  const [event, setEvent] = useState(null)
  const [error, setError] = useState(null)
  const [galleryImages, setGalleryImages] = useState([])

  useEffect(() => {
    async function fetchData() {
      const [res, err] = await queryApi("event/" + id)
      if (err) setError(err)
      else {
        setEvent(res)
        let images = []
        for (const img in res.images) {
          if (res.images.hasOwnProperty(img))
            images.push({
              original: process.env.REACT_APP_API_URL_UPLOADS + res.images[img],
              thumbnail: process.env.REACT_APP_API_URL_UPLOADS + res.images[img],
            })
        }
        setGalleryImages(images)
      }
    }
    fetchData()
    // eslint-disable-next-line
  }, [id])

  if (error) return <></>

  if (!event) return <></>

  function imageExists(img, title) {
    if (img) return <img src={`${process.env.REACT_APP_API_URL_UPLOADS}${img}`} alt={title} />
    return <img src={noimg} alt="empty" />
  }

  return (
    <>
      <section id="blog" className="our-blog main-blog" style={{ marginTop: "10%" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog-details">
                    <div className="blog-image blog-image-single">{imageExists(event.cover, event.title)}</div>

                    <div className="blog-info">
                      <div className="date-box">
                        <Moment date={event.createdAt} format="DD" />
                        <span className="month">
                          <Moment locale="fr" date={event.createdAt} format="MMM" />
                        </span>
                      </div>
                      <div className="title-meta">
                        <h2>{event.title}</h2>
                      </div>
                    </div>

                    <div className="post-content">
                      <h3>{event.description}</h3>
                    </div>
                    <div className="post-content">
                      <div dangerouslySetInnerHTML={{ __html: event.content }} />
                    </div>
                    {galleryImages.length > 0 && (
                      <div className="post-content">
                        <ImageGallery items={galleryImages} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
