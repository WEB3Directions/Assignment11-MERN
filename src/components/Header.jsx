import React from 'react';
import NavBar from './NavBar';
import Component_A from './Component_A';
import Footer from './Footer';


const Header = () => {
  return (
    <div style={{ textAlign: 'center', justifyContent: 'space-around'}}>
      <div>
        <div>
          <NavBar />
          <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/>
        </div>
        <div className="monetary">
        <div class="date" > 
							Friday, January 26th 2024									<a title="Link to E-Edition opens in a new window" target="_blank" href="https://enewspaper.montereyherald.com/">
									<p class="e-edition">e-Edition</p>									</a>
														</div>
          <img
            src="https://www.montereyherald.com/wp-content/uploads/2022/04/mhfix-1.png"
            alt="Monterey Herald"
            width="300"
            height="70"
          />
        </div>
      </div>

      <div>
      <div  >

<div style={{ display: 'flex', justifyContent: 'center' }}>
<ul id="subnav-fallback-menu" className="menu" style={{ display: 'flex', listStyle: 'none', padding: 0, justifyContent: 'space-between', width: '55%' }}>
          <li className="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor current-menu-parent current-post-parent menu-item-3001899">
            <a href="https://www.montereyherald.com/news/">News</a>
          </li>
          <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3001900">
            <a href="https://www.montereyherald.com/sports/">Sports</a>
          </li>
          <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3001901">
            <a href="https://www.montereyherald.com/things-to-do/lifestyle/">Lifestyle</a>
          </li>
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3001902">
            <a href="https://www.legacy.com/obituaries/montereyherald/?_ga=2.58945578.685559470.1647903482-1564751528.1638221954">View Obits</a>
          </li>
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3062725">
            <a href="https://www.bayareanewsgroupobituaries.com/">Place Obits</a>
          </li>
          <li className="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor current-menu-parent current-post-parent menu-item-3001903">
            <a href="https://www.montereyherald.com/opinion/">Opinion</a>
          </li>
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3001904">
            <a href="http://www.norcalaudiencesolutions.com/">Advertise</a>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3043319">
            <a href="https://www.montereyherald.com/special-sections/">Special Sections</a>
          </li>
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3055243">
            <a href="https://enewspaper.montereyherald.com">e-Edition</a>
          </li>
        </ul>		</div>
        
        <hr/>

        <div className="menu" style={{ display: 'flex', listStyle: 'none', padding: 0, justifyContent: 'space-between', width: '80%' }}>
      <ul style={{ display: 'flex', padding: 0, margin: 10 }}>
				
	<li class="entry-title">

			<a class="article-title" href="https://www.montereyherald.com/2023/05/31/california-judge-dismisses-criminal-charges-against-pge-in-deadly-2020-zogg-fire/" title="California judge dismisses criminal charges against PG&amp;E in deadly 2020 Zogg Fire">
	
				<span class="dfm-title metered">
			Charges in Zogg Fire dismissed		</span>

			</a>
	
	</li>

	<li class="entry-title">

			<a class="article-title" href="https://www.montereyherald.com/2023/05/30/where-do-people-go-when-they-leave-california-and-why/" title="Where do people go when they leave California and why?">
	
				<span class="dfm-title metered">
			Where ex-Californians go		</span>

			</a>
	
	</li>

	<li class="entry-title">

			<a class="article-title" href="https://www.montereyherald.com/2023/05/31/california-bill-aims-to-rein-in-high-security-deposits/" title="California bill aims to rein in high security deposits">
	
				<span class="dfm-title metered">
			Bill targets high rent deposits		</span>

			</a>
	
	</li>

	<li class="entry-title">

			<a class="article-title" href="https://www.montereyherald.com/2023/05/30/can-californias-coastline-be-saved-study-shows-up-to-70-could-be-wiped-out-by-2100/" title="Can California’s coastline be saved? Study shows up to 70% could be wiped out by 2100">
	
				<span class="dfm-title metered">
			Coastline will shrink by 2100		</span>

			</a>
	
	</li>

	<li class="entry-title">

			<a class="article-title" href="https://www.montereyherald.com/2023/05/31/tax-on-short-term-rentals-like-airbnb-could-fund-california-affordable-housing/" title="Tax on short-term rentals like Airbnb could fund California affordable housing">
	
				<span class="dfm-title metered">
			Tax would fund affordable housing		</span>

			</a>
	
	</li>
			</ul>
      

     </div>     

          
				
	
        <br/> <br/> <br/> <br/> <br/>
        <div>
        <img src="https://tpc.googlesyndication.com/simgad/6464490427227568603" border="0" width="970" height="90" alt="" class="img_ad"/>
        </div>
        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>

</div>

      </div>

      <div  style={{ margin: '0', padding: '0' }}>
        <Component_A/>
      </div>

      <div>
        <Footer/>
      </div>
      
    </div>
  );
};

export default Header;
