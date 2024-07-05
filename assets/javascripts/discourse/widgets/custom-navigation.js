import {createWidget} from 'discourse/widgets/widget';
import {h} from 'virtual-dom';
import hbs from "discourse/widgets/hbs-compiler";
import RawHtml from "discourse/widgets/raw-html";

createWidget('custom-nav', {
    tagName: 'div.p-navigation',
    html() {
        return new RawHtml({
            html: `<div class="menu-main"><ul id="menu-main" class="menu-wrapper"><li id="menu-item-49" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-49"><a target="_blank" rel="noopener" href="https://forum.partirseul.com/">Forum</a></li>
            <li id="menu-item-2057" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2057"><a>Nos services</a><button class="sub-menu-toggle" aria-expanded="false" onclick="twentytwentyoneExpandSubMenu(this)"><span class="icon-plus"><svg class="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z" fill="currentColor"></path></svg></span><span class="icon-minus"><svg class="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 11h12v2H6z" fill="currentColor"></path></svg></span><span class="screen-reader-text">Ouvrir le menu</span></button>
            <ul class="sub-menu">
                <li id="menu-item-3060" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3060"><a href="https://www.partirseul.com/destination-voyage-seul/">Pays</a></li>
                <li id="menu-item-2900" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2900"><a href="https://www.partirseul.com/vols/">Vols</a></li>
                <li id="menu-item-2905" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2905"><a href="https://www.partirseul.com/hotels/">Hôtels</a></li>
                <li id="menu-item-2902" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2902"><a href="https://www.partirseul.com/location-de-voiture-a-l-etranger/">Location de voiture</a></li>
                <li id="menu-item-3444" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3444"><a href="https://www.partirseul.com/prestataires/">Prestataires</a></li>
            </ul>
            </li>
            <li id="menu-item-3971" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3971"><a href="https://www.partirseul.com/qui-sommes-nous/">Qui sommes-nous ?</a><button class="sub-menu-toggle" aria-expanded="false" onclick="twentytwentyoneExpandSubMenu(this)"><span class="icon-plus"><svg class="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z" fill="currentColor"></path></svg></span><span class="icon-minus"><svg class="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 11h12v2H6z" fill="currentColor"></path></svg></span><span class="screen-reader-text">Ouvrir le menu</span></button>
            <ul class="sub-menu">
                <li id="menu-item-4483" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4483"><a href="https://www.partirseul.com/origine-de-partirseul/">Origine de Partirseul</a></li>
                <li id="menu-item-6930" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6930"><a href="https://www.partirseul.com/pourquoi-la-publicite/">Pourquoi la Publicité ?</a></li>
            </ul>
            </li>
            <li id="menu-item-3722" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3722"><a href="https://www.partirseul.com/photos-de-voyages/">Photos de voyages</a></li>
            <li id="menu-item-2904" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2904"><a href="https://www.partirseul.com/blog/">Blog</a></li>
            <li id="menu-item-3074" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3074"><a href="https://www.partirseul.com/nous-contacter/">Nous contacter</a></li>
</ul></div>`
        });
    }
});
