import React from 'react';
import './Contact.scss';
import Select from './Select';


const Contact = () => {
  return (
    <div id="conact">
      <div className='contact-wrapper'>
      <p>Jazda Prubna</p>
      <h4 className='lines' >
        <span>Umów się na bezpłatną</span>
        <span>jazdę próbną</span>
      </h4>
      <form>

        <div className='inner-wrapper'>

          <Select/>

          <input type="text"  placeholder='Imię *' required/>
          <input type="text"  placeholder='Nazwisko (opcjonalnie)'/>
          <input type="email" placeholder='Adres e-mail *' required />
          <input type="tel"   placeholder='Nr. telefonu *' required />

          <p className='require-info' >* Pole wymagane</p>

        </div>

        <p>Wysłanie uzupełnionego formularza oznacza Twoją zgodę na kontakt w celu przedstawienia informacji handlowej w wybrany przez Ciebie sposób w związku <a>Czytaj więcej</a></p>
        <p>Prosimy Cię też o wyrażenie poniższych zgód w celu możliwości przedstawiania Ci atrakcyjnych ofert / promocji produktów, akcesoriów i usług marki CUPRA w przyszłości.</p>

        <div className='checkbox-container'>

          <div>
              <input
              type="checkbox"
              style={{ width: '20px', height: '20px' }}
                                   
            />
            <p> Zgadzam się na przetwarzanie moich danych osobowych przez Plichta spółka z ograniczoną odpowiedzialnością Spółka Komandytowa
                w celu przedstawienia mi informacji marketingowych i handlowych dotyczących produktów i usług marki CUPRA oraz innych powiązanych z marką CUPRA
                akcesoriów, produktów i usług motoryzacyjnych za pomocą:
            </p>
          </div>
          

          <div>
              <input
              type="checkbox"                           
            />
            <p>Email</p>
          </div>

          <div>
              <input
              type="checkbox"                              
            />
            <p>Telefon</p>
          </div>

          <div>
              <input
              type="checkbox"
              required                    
            />
            <p>Wiadomość SMS/MMS</p>
          </div>

        </div>

        <p>Masz prawo do wglądu, modyfikacji, ograniczenia przetwarzania i usunięcia swoich danych oraz do wycofania w każdym momencie swojej zgody.</p>

        <p>Twoje dane będą przetwarzane tylko w stopniu umożliwiającym realizację wymienionego celu.</p>

        <p>Masz prawo do wglądu, modyfikacji, ograniczenia przetwarzania i usunięcia swoich danych oraz do wycofania w każdym momencie swojej zgody. 
           Twoje dane będą przetwarzane tylko w stopniu umożliwiającym realizację wymienionego celu.
           Administratorem Twoich danych jest Plichta spółka z ograniczoną odpowiedzialnością Spółka Komandytowa, z siedzibą w Wejherowie przy ulicy Gdańskiej 13c.
           Zapraszamy do zapoznania się z naszą polityką prywatności umieszczoną pod linkiem: <a>https://www.plichta.com.pl/polityka-prywatnosci</a>
        </p>

        

        <button type="submit" className='btn squere dark ' >Umów jazdę próbną</button>

      </form>
    </div>
    </div>
  )
}

export default Contact;