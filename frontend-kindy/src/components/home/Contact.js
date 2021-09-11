import axios from "axios"
import React, { useState } from "react"
import ScrollAnimation from "react-animate-on-scroll"

import * as yup from "yup"
import { Formik } from "formik"

export default function Contact() {
  const [state, setState] = useState({
    successMsg: "",
  })
  const [loading, setLoading] = useState(false)

  const ContactSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Doit être plus que 3 caractères")
      .max(80, "Ne doit pas dépasser les 80 caractères")
      .required("Champ nom est requis"),
    subject: yup
      .string()
      .min(3, "Doit être plus que 3 caractères")
      .max(80, "Ne doit pas dépasser les 80 caractères")
      .required("Champ sujet est requis"),
    email: yup.string().email("Doit être un email valide").required("Champ email est requis"),


    choix: yup
    .string()
    .min(10, "Doit être plus que 10 caractères")
    .max(2000, "Ne doit pas dépasser les 2000 caractères")
    .required("Champ message est requis"),
    message: yup
      .string()
      .min(10, "Doit être plus que 10 caractères")
      .max(2000, "Ne doit pas dépasser les 2000 caractères")
      .required("Champ message est requis"),
    number: yup
      .number("Nombre")
      .positive("Nombre")
      .integer("Nombre")
      .test(
        "len",
        "Doit être entre 8 et 13 chiffres",
        val => val && val.toString().length >= 8 && val.toString().length <= 13
      ),
  })

  const handleForm = (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
    setLoading(true)
    axios
      .post(`${process.env.REACT_APP_API_URL}api/contact`, values, {
        headers: { Accept: "application/json" },
      })
      .then(function (response) {
        resetForm({})
        setStatus({ success: true })
        setLoading(false)
        setState({
          successMsg: "Merci! Nous avons bien reçu votre message",
        })
      })
      .catch(function (error) {
        alert("Une erreur est survenue! Ressayer Plus Tard!")
        setStatus({ success: false })
        setSubmitting(false)
        setErrors({ submit: error.message })
      })
  }

  return (
    <>
      <section id="contact" className="contact-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <ScrollAnimation animateIn="fadeInUp">
                <div className="section-title">
                  <h2>{defaultProps.sectionTitle}</h2>
                  <p>{defaultProps.sectionDescription}</p>
                  <span className="section-title-bg">{defaultProps.SectionbgTitle}</span>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="address-area">
                <div className="addess">
                  <i className="icofont-google-map" />
                  <h4>{defaultProps.AddTitle}</h4>
                  <p>{defaultProps.Address}</p>
                </div>
                <div className="email">
                  <i className="icofont-email" />
                  <h4>{defaultProps.EmailTitle}</h4>
                  <p>{defaultProps.Email}</p>
                </div>
                <div className="phone">
                  <i className="icofont-phone" />
                  <h4>{defaultProps.PhoneTitle}</h4>
                  <p>{defaultProps.Phone}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-8">
              <div className="contact-form">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    subject: "",
                    number: "",
                    message: "",
                    choix: "",
                  }}
                  validationSchema={ContactSchema}
                  onSubmit={handleForm}>
                  {({
                    values,
                    errors,
                    status,
                    isValid,
                    touched,
                    handleChange,
                    handleBlur,
                    handleReset,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit} id="contactForm">
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group">
                            <input
                              name="name"
                              id="name"
                              placeholder="Votre Nom..."
                              autoComplete="off"
                              className={`${values.name && (errors.name ? "is-invalid" : "is-valid")} form-control`}
                              value={values.name}
                              onChange={handleChange}
                            />

                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group">
                            <input
                              name="email"
                              id="email"
                              type="email"
                              placeholder="Votre Adresse Mail..."
                              autoComplete="off"
                              className={`${values.email && (errors.email ? "is-invalid" : "is-valid")} form-control`}
                              value={values.email}
                              onChange={handleChange}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            <div className="help-block with-errors" />
                          </div>
                        </div>



                       









                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <input
                              name="subject"
                              id="subject"
                              type="text"
                              placeholder="Sujet..."
                              autoComplete="off"
                              className={`${
                                values.subject && (errors.subject ? "is-invalid" : "is-valid")
                              } form-control`}
                              value={values.subject}
                              onChange={handleChange}
                            />
                            {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <input
                              name="number"
                              id="number"
                              type="text"
                              placeholder="Numéro de Téléphone..."
                              autoComplete="off"
                              className={`${values.number && (errors.number ? "is-invalid" : "is-valid")} form-control`}
                              value={values.number}
                              onChange={handleChange}
                            />
                            {errors.number && <div className="invalid-feedback">{errors.number}</div>}
                          </div>
                        </div>



                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                          <select 
                          
                          
                          
                          name="choix"
                          id="choix"
                          type="text"
                          placeholder="choix..."
                         
                          className={`${
                            values.subject && (errors.subject ? "is-invalid" : "is-valid")
                          } form-control`}
                          value={values.choix}
                          onChange={handleChange}>
  <option >ALKINDY renseignements</option>
  <option >ALKINDY Contact Professeurs </option>
  <option>ALKINDY Contact Service Réclamation</option>
  <option>ALKINDY Contact Service Administratif</option>
</select>





                           
                            {errors.choix && <div className="invalid-feedback">{errors.choix}</div>}
                          </div>
                        </div>


















                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <textarea
                              name="message"
                              id="description"
                              placeholder="Votre Message..."
                              rows="5"
                              autoComplete="off"
                              className={`${
                                values.message && (errors.message ? "is-invalid" : "is-valid")
                              } form-control`}
                              value={values.message}
                              onChange={handleChange}
                            />
                            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                          </div>
                        </div>
                      </div>

                      <div className="center-wrap">
                        {!loading ? (
                          <div className="button">
                            <button type="submit">
                              Envoyer <i className="icofont-long-arrow-right" />
                            </button>

                            <div className="mask"></div>
                          </div>
                        ) : (
                          <div className="button">
                            <button type="button" disabled>
                              Envoi en cours...
                            </button>
                            <div className="mask"></div>
                          </div>
                        )}
                      </div>
                      <div className="clearfix" />
                    </form>
                  )}
                </Formik>

                {state.successMsg !== "" ? (
                  <div className="col-md-12">
                    <div id="contact_send_status">
                      <h3 className="contactMsg">{state.successMsg}</h3>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

//Default Props
const defaultProps = {
  SectionbgTitle: "Contact",
  sectionTitle: "Contactez Nous",
  sectionDescription: "Envoyez vos questions ou vos suggestions pour qu'on puisse rester à votre écoute.",
  AddTitle: "Adresse",
  Address: "003, Newton, Z.I Chotrana II 2088 Ariana, Tunisie.",
  EmailTitle: "Email",
  Email: "khaoula.jomni@esprit.tn",
  PhoneTitle: "Téléphone",
  Phone: "T (216) 95 981 368",
}
