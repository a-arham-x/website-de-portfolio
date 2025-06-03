import ContactForm from "./ContactForm";
import FadeIn from "./FadeIn";

function Contact() {
    return (
        <>
            <section id="contact">
                <FadeIn>
                    <div className="section-head-container">
                        <h2 className="section-head">
                            Contact me
                        </h2>
                    </div>
                    <ContactForm />
                </FadeIn>
            </section>
        </>
    );
}

export default Contact;
