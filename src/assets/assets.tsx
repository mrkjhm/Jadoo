import logo from "./Logo.png";
import landing_img from "./landing_img.png";
import landing_bg from "./landing_bg.png";

// category
import category1 from "./category1.png";
import category2 from "./category2.png";
import category3 from "./category3.png";
import category4 from "./category4.png";

// Decor
import decor1 from "./decor1.png";

// destinations
import des1 from "./des1.png";
import des2 from "./des2.png";
import des3 from "./des3.png";
import nav_icon from "./navi_icon.png";

// Booking Steps
import bookStep1 from "./bookStep1.png";
import bookStep2 from "./bookStep2.png";
import bookStep3 from "./bookStep3.png";

import thumbnail from "./thumbnail.jpg";
import leaf from "./leaf.png";
import map from "./map.png";
import send from "./send.png";
import building1 from "./building1.png";
import eclipse from "./eclipse.png";

// Testimonials
import profile from './profile.png';

// Logo
import axon from '../../public/images/brands/axon.png';
import jetstar from '../../public/images/brands/jetstar.png';
import expedia from '../../public/images/brands/expedia.png';
import qantas from '../../public/images/brands/qantas.png';
import alitalia from '../../public/images/brands/alitalia.png';

// Subscribe
import background from './background.png';
import send2 from './send2.png';

// social and button
import social_fb from './social_fb.png';
import social_twitter from './social_twitter.png';
import social_insta from './social_insta.png';
import play_store from './play_store.png';
import apple_store from './apple_store.png';




export const assets = {
    logo,
    landing_img,
    landing_bg,
    decor1,


    // Booking Steps
    bookStep1,
    bookStep2,
    bookStep3,

    thumbnail,
    leaf,
    map,
    send,
    building1,
    eclipse,

    // Testimonials
    profile,

    // Subscribe
    background,
    send2,

    // social and button
    social_fb,
    social_twitter,
    social_insta,
    play_store,
    apple_store,

};



//navbar
export const navLinks = [
    {
        name: 'Destinations',
        href: '#destinations',
    },
    {
        name: 'Hotels',
        href: '#hotel',
    },
    {
        name: 'Flights',
        href: '#flight',
    },
    {
        name: 'Bookings',
        href: '#booking',
    },
]

//Category
export const category = [
    {
        heading: "Calculated Weather",
        subHeading: "Built Wicket longer admire do barton vanity itself do in it.",
        image: category1,
    },
    {
        heading: "Best Flights",
        subHeading: "Engrossed listening. Park gate sell they west hard for the.",
        image: category2,
    },
    {
        heading: "Local Events",
        subHeading: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
        image: category3,
    },
    {
        heading: "Customization",
        subHeading: "We deliver outsourced\n" +
            "aviation services for\n" +
            "military customers",
        image: category4,
    },
]

export const destination = [
    {
        image: des1,
        place: "Rome, Italy",
        price: "$5,42k",
        days: "10 Days Trip",
        icon: nav_icon
    },
    {
        image: des2,
        place: "London, UK",
        price: "$4.2k",
        days: "12 Days Trip",
        icon: nav_icon
    },
    {
        image: des3,
        place: "Full Europe",
        price: "$15k",
        days: "28 Days Trip",
        icon: nav_icon
    },
    {
        image: des3,
        place: "Full Europe",
        price: "$15k",
        days: "28 Days Trip",
        icon: nav_icon
    }
]

export const bookingSteps = [
    {
        image: bookStep1,
        title: "Choose destinations",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
    },
    {
        image: bookStep2,
        title: "Make Payment",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
    },
    {
        image: bookStep3,
        title: "Reach Airport on Selected Date",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
    },
]

export const bookingCard = [
    {
        image: thumbnail,
        title: "Trip To Greece",
        date: "14-29 June",
        author: "Robbin joseph"
    }
]

export const testimonials = [
    {
        image: profile,
        name: "Mike taylor",
        designation: "CEO, Google",
        review: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”"
    },
    {}
]

export const logos = [
    {
        image: axon,
        name: "Axon"
    },
    {
        image: jetstar,
        name: "Jetstar"
    },
    {
        image: expedia,
        name: "Expedia"
    },
    {
        image: qantas,
        name: "Qantas"
    },
    {
        image: alitalia,
        name: "Alitalia"
    }
]