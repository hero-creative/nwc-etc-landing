import { encode } from '../helpers/encode'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { firstName: '', lastName: '', email: '', referral: '', message: '' }
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit(e) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error))

    e.preventDefault()
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { firstName, lastName, email, referral, message } = this.state

    return (
      <form
        name="contact"
        method="POST"
        action="/success"
        data-netlify="true"
        className="mx-8 pb-[35px] flex flex-col gap-5"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />

        <label className="input-label">
          First Name
          <input
            className="form-control"
            type="text"
            name="first_name"
            id="first_name"
            value={firstName}
            onChange={this.handleChange}
          />
        </label>
        <label className="input-label">
          Last Name
          <input
            className="form-control"
            type="text"
            name="last_name"
            id="last_name"
            value={lastName}
            onChange={this.handleChange}
          />
        </label>
        <label className="input-label">
          Email
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <fieldset className="text-lg flex flex-col gap-3">
          <legend className="font-bold pb-[7px]">
            I&apos;m interested in (click all that apply:)
          </legend>
          <input
            type="checkbox"
            className="css-checkbox"
            name="interest"
            id="acc_partner"
          />
          <label htmlFor="acc_partner">Accessibility Partners Service</label>
          <input
            className="css-checkbox"
            type="checkbox"
            name="interest"
            id="custom_option"
          />
          <label htmlFor="custom_option">Customized Options</label>
          <input
            className="css-checkbox"
            type="checkbox"
            name="interest"
            id="consult_serv"
          />
          <label htmlFor="consult_serv">Consulting Services</label>
        </fieldset>
        <label className="input-label">
          How did you learn about us?
          <input
            className="form-control"
            type="text"
            name="referral"
            id="referral"
            value={referral}
            onChange={this.handleChange}
          />
        </label>

        <label className="input-label">
          Comment/Message
          <textarea
            className="form-control h-full"
            name="message"
            id="message"
            rows="4"
            value={message}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <button
          className="mt-5 self-center btn-lg border-none max-w-[134px]"
          type="submit"
        >
          Send
        </button>
      </form>
    )
  }
}
export default ContactForm;