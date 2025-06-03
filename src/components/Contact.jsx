import ContactForm from "./ContactForm";
import FadeIn from "./FadeIn";

function Contact() {
    return (
        <>
            <section id="contact">
                <FadeIn>
                    <h2 className="section-head">Contact me</h2>
                    <ContactForm />
                </FadeIn>
            </section>
        </>
    );
}

export default Contact;
