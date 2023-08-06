import fashion from '@/public/assets/category-img/fashion.png'
import electronics from '@/public/assets/category-img/electronics.png'
import beauty from '@/public/assets/category-img/beauty.png'
import automobile from '@/public/assets/category-img/automobile.png'
import baby from '@/public/assets/category-img/baby.png'
import laptop from '@/public/assets/category-img/laptop.png'
import kitchen from '@/public/assets/category-img/kitchen.png'
import mobile from '@/public/assets/category-img/mobile.png'
import health from '@/public/assets/category-img/health.png'
import gymnasium from '@/public/assets/category-img/gym.png'
import homeDecor from '@/public/assets/category-img/home-decor.png'
import sports from '@/public/assets/category-img/sports.png'

export const navItems = [
    {
        id: 101,
        label: "Categories",
        subCate: [
            { id: 1, label: "Fashion", img: fashion },
            { id: 2, label: "Electronics", img: electronics },
            { id: 3, label: "Beauty", img: beauty },
            { id: 4, label: "Automobile", img: automobile },
            { id: 5, label: "Baby", img: baby },
            { id: 6, label: "Laptop", img: laptop },
            { id: 7, label: "Kitchen", img: kitchen },
            { id: 8, label: "Mobile", img: mobile },
            { id: 9, label: "Health", img: health },
            { id: 10, label: "Gymnasium", img: gymnasium },
            { id: 11, label: "Home Decor", img: homeDecor },
            { id: 12, label: "Sports", img: sports },
        ],
    },
    {
        id: 102,
        label: `what's new`,
    },
    {
        id: 103,
        label: "Deal",
    },
    { id: 104, label: "Delivery" },
];