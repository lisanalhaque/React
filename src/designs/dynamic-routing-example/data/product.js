import shoe from '../images/shoe.jpg' 
import shoe1 from '../images/shoe1.jpg' 
import shoe2 from '../images/shoe2.jpg' 
import shoe3 from '../images/shoe3.jpg' 

import heel from '../images/heel.jpg' 
import heel1 from '../images/heel1.jpg' 
import heel2 from '../images/heel2.jpg' 
import heel3 from '../images/heel3.jpg' 

export const products = [
    {
        id: 1,
        image:shoe,
        title: "Men's shoes DN 23x, New Products",
        category: "LIFESTYLE",
        price: 4699,
        oldPrice: 5999,
        rating: 4,
        offer: 25,
        description: "this is a high quaity mens shoe perfect for everyday use.",
        gallery: [shoe1,shoe2,shoe3]

    },
    {
        
        id: 2,
        image:heel,
        title: "Women's shoes DN 23x, New Products",
        category: "LIFESTYLE",
        price: 2699,
        oldPrice: 3999,
        rating: 3,
        offer: 30,
        description: "Stylish wpmen shoes designed for confort and durability.",
        gallery: [heel1,heel2,heel3]

    }

]