
function Contact() {


    return (
        <div className="Contact">
            <h1>
                <span>Contact</span>
                <br/>
                Get In Touch. Ask for my resume or see if we can build something amazing together. I'd love to hear from you!
            </h1>

            <form action="https://formsubmit.co/el/banise" method="POST">
                <input type="text" placeholder="Full Name" required/>
                <input type="email" placeholder="Email" required/>
                <textarea placeholder="Message" required/>
                <button>Send</button>
            </form>
        </div>
    );
}

export default Contact;