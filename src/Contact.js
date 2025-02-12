import "./Contact.css";
export default function Contact(){
    return(
      <div id="contact">
          <h2 className="fw-bolder fs-1">Connect With Me</h2>
          <p className="fs-4">Feel free to reach out!</p>
          <div class="contact-info">
              <div class="contact-item">
                <i class="bi bi-envelope"></i>
                <a href="mailto:karimipavan2002@gmail.com">karimipavan2002@gmail.com</a>
              </div>
            
              <div class="contact-item">
                <i class="bi bi-linkedin"></i>
                <a href="https://linkedin.com/in/pavan-kumar-karimi-2338852a2"  rel="noopener noreferrer">
                  pavan-kumar-karimi-2338852a2
                </a>
              </div>
            
              <div class="contact-item">
                <i class="bi bi-github"></i>
                <a href="https://github.com/pavankarimi"  rel="noopener noreferrer">github.com/pavankarimi</a>
              </div>
          </div>
      </div>       
    )
}