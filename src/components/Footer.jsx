import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="main-footer-wrapper">
        <div className="footer-logo">
          <div className="custom-logo logo">
            <a href="https://www.montereyherald.com" aria-label="Monterey Herald">
              <img src="https://www.montereyherald.com/wp-content/uploads/2022/04/mhfix-1.png" alt="Monterey Herald" width="637" height="168" />
            </a>
          </div>
        </div>

        <ul id="footer-menu" className="footer-menus">
          <li id="menu-item-3021581" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3021581">
            <a href="https://checkout.montereyherald.com/?g2i_source=website&amp;g2i_medium=link&amp;g2i_campaign=footer&amp;g2i_or_o=Internet&amp;g2i_or_p=footer">Subscribe</a>
            <span className="expander"><a href="#" className="icon-plus" aria-label="Click here to expand the menu"></a></span>
            <ul className="footer-menu">
              <li id="menu-item-3021582" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3021582">
                <a href="https://enewspaper.montereyherald.com/">e-Edition</a>
              </li>
              <li id="menu-item-3021583" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3021583">
                <a href="https://myaccount.montereyherald.com/herald/preference">Sign Up For Newsletters</a>
              </li>
              {/* ... Add more menu items as needed ... */}
            </ul>
          </li>
          {/* ... Add more menu items as needed ... */}
        </ul>
      </div>

      <div className="dfm-site-info">
        <div className="colophon">
          <ul id="footer-bottom-menu" className="menu">
            <li id="menu-item-2706415" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2706415">
              <a href="https://www.medianewsgroup.com/terms-of-use/">Terms of Use</a>
            </li>
            <li id="menu-item-9664" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-9664">
              <a href="https://www.medianewsgroup.com/cookie-policy/">Cookie Policy</a>
            </li>
            {/* ... Add more bottom menu items as needed ... */}
          </ul>
          <div className="footer-flex-menu-wrap">
            <div className="footer-copyright-notice">
              <p>Copyright © 2024 MediaNews Group</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
