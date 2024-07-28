
function Contact() {


    return (
        <div className="Contact">
            <h1>
                <span>Contact</span>
                <br/>
                Get In Touch. Ask for my resume or see if we can build something amazing together. I'd love to hear from you!
            </h1>

            <form action="https://formsubmit.co/593e2e2b84a1aca9432719a4a1288223" method="POST">
                <input type="text" name="name" placeholder="Full Name" required/>
                <input type="email" name="email" placeholder="Email" required/>
                <textarea placeholder="Message" name="message" required/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;