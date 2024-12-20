import { useRef, useState, useContext, useEffect } from 'react'
import { StoreContext } from '../context/store'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import ErrorInput from './ErrorInput'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import Loader from './Loader'
import { validation } from './../utils/dataUtils'
import 'react-toastify/dist/ReactToastify.css'

import './formulario.css'

export default function Formulario() {
  const [loading, setLoading] = useState(false)
  const [wordBtn, setWordBtn] = useState('ENVIAR')
  const [isSubscribed, setIsSubscribed] = useState(true)
  const { executeRecaptcha } = useGoogleReCaptcha()
  const { message, setMessage, textAreaRef } = useContext(StoreContext)

  const ref = useRef()

  const handleChange = event => {
    setIsSubscribed(event.target.checked)
  }

  useEffect(() => {
    ref.current.setFieldValue('comments', message)
  }, [message])

  const sendForm = async (values, { setSubmitting, resetForm }) => {
    setLoading(true)
    setWordBtn('ENVIANDO...')

    const token = await executeRecaptcha('form_contacto')
    values.recaptchaToken = token

    if (isSubscribed) {
      values.newsletter = 'on'
    } else {
      delete values.newsletter
    }

    values.origin = import.meta.env.VITE_NAME_LANDING

    const urlParams = new URLSearchParams(window.location.search)

    if (urlParams.has('utm_source')) {
      values.utm_source = urlParams.get('utm_source')
    } else {
      values.utm_source = 'No Set'
    }

    if (urlParams.has('utm_medium')) {
      values.utm_medium = urlParams.get('utm_medium')
    } else {
      values.utm_medium = 'No Set'
    }

    if (urlParams.has('utm_campaign')) {
      values.utm_campaign = urlParams.get('utm_campaign')
    } else {
      values.utm_campaign = 'No Set'
    }

    if (urlParams.has('utm_content')) {
      values.utm_content = urlParams.get('utm_content')
    } else {
      values.utm_content = 'No Set'
    }

    try {
      const res = await axios.post(
        import.meta.env.VITE_ROOT + '/php/process.php',
        values,
      )

      const myJson = JSON.stringify(res.data)
      const responseData = JSON.parse(myJson)

      if (responseData.success) {
        toast.success(responseData.msg_success)

        window.dataLayer.push({
          formLocation: 'form_merch',
          event: 'send_form_merch',
        })
      } else {
        responseData.errors.map(error => {
          return toast.error(error)
        })
      }
    } catch (error) {
      // Realizar acciones en caso de error
      toast.error(
        'Aparentemente en este momento no hay conexión con el servidor, por favor intente mas tarde.',
      )
    }

    resetForm()
    setMessage('')
    setSubmitting(false)
    setLoading(false)
    setWordBtn('ENVIAR')
  }

  const initFormDefault = {
    name: '',
    email: '',
    phone: '',
    comments: message,
    newsletter: true,
  }

  return (
    <>
      {loading && <Loader />}
      <section className='formulario'>
        <div className='pattern'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 content_form'>
              <ToastContainer />

              <div className='row'>
                <div id='formulario' className='col-md-12'>
                  <Formik
                    innerRef={ref}
                    initialValues={initFormDefault}
                    validate={validation}
                    onSubmit={sendForm}
                  >
                    {({ handleSubmit, isSubmitting }) => (
                      <Form
                        data-aos='fade-up'
                        id='form_contacto'
                        onSubmit={handleSubmit}
                      >
                        <h2>COTIZACIÓN EXPRESS EN 24HS</h2>
                        <h5>
                          Nuestro equipo está listo para asesorarte en cada
                          paso. Contanos qué estás buscando. <br />
                          Mínimo de compra 10 unidades
                        </h5>

                        <div className='form-group'>
                          <Field
                            className='form-control'
                            type='text'
                            name='name'
                            placeholder='Nombre'
                          />
                          <ErrorMessage name='name' component={ErrorInput} />
                        </div>

                        <div className='form-group'>
                          <Field
                            className='form-control'
                            type='email'
                            name='email'
                            placeholder='Email'
                          />
                          <ErrorMessage name='email' component={ErrorInput} />
                        </div>

                        <div className='form-group'>
                          <Field
                            className='form-control'
                            type='number'
                            name='phone'
                            placeholder='Teléfono'
                          />
                          <ErrorMessage name='phone' component={ErrorInput} />
                        </div>

                        <div className='form-group'>
                          <Field
                            innerRef={textAreaRef}
                            className='form-control'
                            as='textarea'
                            name='comments'
                            rows='4'
                            placeholder='Que necesitás? ¿Por qué cantidad?'
                            value={message}
                            onChange={event => setMessage(event.target.value)}
                          />
                          <ErrorMessage
                            name='comments'
                            component={ErrorInput}
                          />
                        </div>

                        <div className='form-group form-check'>
                          <label>
                            <Field
                              onChange={handleChange}
                              checked={isSubscribed}
                              type='checkbox'
                              name='newsletter'
                              id='newsletter'
                            />
                            <label
                              className='form-check-label'
                              htmlFor='newsletter'
                            >
                              Suscribir newsletter
                            </label>
                          </label>
                        </div>

                        <button
                          id='send'
                          className='btn btn-primary transition'
                          type='submit'
                          disabled={isSubmitting}
                        >
                          {wordBtn}
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
