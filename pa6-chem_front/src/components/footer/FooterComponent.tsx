import React from 'react';
import footer_styles from './_footer.module.scss';
import Link from './links/Link.tsx';
import links from './links/links.json';


console.log(links)

export default function HeaderContainer() {
  return (
    <footer className={footer_styles.footer_container}>
      <div className={footer_styles.footer_box}>
        
        <div>
          <p className={footer_styles.main_description}>официальный сайт <span>youko nails</span></p>
        </div>
        <div className={footer_styles.links}>
          {
            
            links.map(link => 
              <Link link={link} key={link.name}/>
            )
            
          }
        </div>
       
      </div>
    </footer>
  )
}
