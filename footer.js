class Footer extends HTMLElement {
   constructor() {
      super();
   }

   connectedCallback() {
      this.innerHTML = `
         <div class="footer__container">
            <div class="footer__links">
               <div class="footer__link--wrapper">
                  <div class="social__media">
                     <div class="social__media--wrap">
                        <div class="footer__logo">
                           <a href="/" id="footer__logo"> <img id="footer__logo__img" src="/images/logo.svg" alt="logo"> SEVERIN RICHNER </a>
                        </div>
                        <p class="website__rights">
                        2021. All rights reserved.
                        </p>
                        <div class="social__icons">
                           <a href="https://www.linkedin.com/in/severin-richner-265801219" class="social__icons--link"><img id="social__icon__img" src="/images/linkedin-logo.svg" alt="linkedin">
                           <a href="https://www.linkedin.com/in/severin-richner-265801219" class="social__icons--text">LinkedIn</a>
                           <a href="https://github.com/severin-richner" class="social__icons--link"><img id="social__icon__img" src="/images/github-logo.svg" alt="github">
                           <a href="https://github.com/severin-richner" class="social__icons--text">GitHub</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
     `;
   }
}

customElements.define('footer-component', Footer);