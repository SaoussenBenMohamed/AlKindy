import React from "react"
import noimg from "../../assets/img/noimage.png"
import { compareValues } from "../utils/compareByField"
import LinkDuo from "../utils/LinkDuo"

export default function Club({ data }) {
  //BlogPost loop start
  function imageExists(img, title) {
    if (img)
      return <img src={`${process.env.REACT_APP_API_URL_UPLOADS}${img}`} alt={title} style={{ objectFit: "contain" }} />
    return <img src={noimg} alt="empty" />
  }

  const clubsData = data.sort(compareValues("createdAt", "asc")).map(ev => (
    <div className="col-md-6 col-lg-6" key={ev._id}>
      <div className="blog-item">
        <div className="blog-image">
          {ev.url ? (
            <LinkDuo to={ev.url} style={{ display: "flex" }}>
              {imageExists(ev.image, ev.title)}
            </LinkDuo>
          ) : (
            imageExists(ev.image, ev.title)
          )}
        </div>

        <div>
          <div className="title-meta">
            <h2>{ev.url ? <LinkDuo to={ev.url}>{ev.title}</LinkDuo> : ev.title}</h2>
          </div>
        </div>
        <div className="post-content">
          {ev.description &&
            ev.description.split("\n").map(i => {
              return <p style={{ textAlign: "justify" }}>{i}</p>
            })}
        </div>
      </div>
    </div>
  ))

  //BlogPost loop END
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 pagination-area text-center" style={{ display: "flex", flexWrap: "wrap" }}>
            {clubsData}
          </div>
        </div>
      </div>
    </>
  )
}
