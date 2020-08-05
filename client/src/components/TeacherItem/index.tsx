import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
           <header>
           <img src="https://scontent.fsdu20-1.fna.fbcdn.net/v/t1.0-9/44045144_2252203191517328_2898752528483090432_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=QyjsdO7tMu0AX_to4Cl&_nc_ht=scontent.fsdu20-1.fna&oh=4b0257bad2b2ec67e0060084076b85fd&oe=5F4DAEF9" alt=""/>
            <div>
                <strong>Jefferson dos Anjos</strong>
                <span>Xadrez</span>
            </div>
           </header>
           <p>
               Entusiasta em Xadrez, campeão municipal de 2008.
           </p>
           <footer>
               <p>
                   Preço/hora
                    <strong>R$ 40,00</strong>
               </p>
               <button type="button">
                   <img src={whatsappIcon} alt="whatsapp"/>
                   Entrar em contato
               </button>
           </footer>
            </article>
    )
}
export default TeacherItem;