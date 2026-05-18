// ── SHOPORA PRODUCTS DATABASE ──

const PRODUCTS = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "Electronics",
    image: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2015%20Pro/1.png",
    thumbs: [
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2015%20Pro/1.png",
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2015%20Pro/2.png",
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2015%20Pro/3.png",
      "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2015%20Pro/4.png"
    ],
    price: 124999, was: 134999, off: 7, badge: "b-hot", rating: 4.8, reviews: 23410,
    highlights: ["A17 Pro chip","Titanium design","48MP main camera with 5x optical zoom","USB-C with USB 3 speeds","All-day battery life"],
    description: "iPhone 15 Pro is the first iPhone to feature an aerospace-grade titanium design. A17 Pro chip — a huge leap in performance.",
    specs: [{key:"Display",val:"6.1-inch Super Retina XDR"},{key:"Chip",val:"A17 Pro (3nm)"},{key:"RAM",val:"8GB"},{key:"Storage",val:"128GB / 256GB / 512GB / 1TB"},{key:"Camera",val:"48MP + 12MP + 12MP Triple"},{key:"Battery",val:"3274 mAh"},{key:"OS",val:"iOS 17"},{key:"5G",val:"Yes"},{key:"Water Resistant",val:"IP68"}],
    userReviews: [{name:"Rahul S.",stars:5,date:"2 days ago",text:"Absolutely stunning phone.",verified:true},{name:"Priya M.",stars:5,date:"1 week ago",text:"Best iPhone ever.",verified:true}],
    platforms: [{name:"Shopora",price:124999,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Amazon",price:126999,url:"https://www.amazon.in/s?k=iphone+15+pro",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true},{name:"Flipkart",price:128499,url:"https://www.flipkart.com/search?q=iphone+15+pro",emoji:"🔵",color:"#2874f0",delivery:"Free, 2 days",trusted:true}]
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Electronics",
    image: "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S24%20Ultra/1.png",
    thumbs: [
      "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S24%20Ultra/1.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S24%20Ultra/2.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S24%20Ultra/3.png",
      "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S24%20Ultra/4.png"
    ],
    price: 109999, was: 134999, off: 18, badge: "b-sale", rating: 4.7, reviews: 18900,
    highlights: ["Built-in S Pen","200MP main camera","Snapdragon 8 Gen 3","5000mAh battery","Titanium frame"],
    description: "Galaxy S24 Ultra is Samsung's most powerful smartphone ever.",
    specs: [{key:"Display",val:"6.8-inch QHD+ AMOLED"},{key:"Chip",val:"Snapdragon 8 Gen 3"},{key:"RAM",val:"12GB"},{key:"Camera",val:"200MP"},{key:"Battery",val:"5000mAh"},{key:"OS",val:"Android 14"}],
    userReviews: [{name:"Vikram T.",stars:5,date:"3 days ago",text:"The S Pen is a game changer.",verified:true},{name:"Sneha R.",stars:4,date:"1 week ago",text:"Best Android phone out there.",verified:true}],
    platforms: [{name:"Shopora",price:109999,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Flipkart",price:111999,url:"https://www.flipkart.com/search?q=samsung+galaxy+s24+ultra",emoji:"🔵",color:"#2874f0",delivery:"Free, 2 days",trusted:true},{name:"Amazon",price:113499,url:"https://www.amazon.in/s?k=samsung+galaxy+s24+ultra",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true}]
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "Electronics",
    image: "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Pro/1.png",
    thumbs: [
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Pro/1.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Pro/2.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Pro/3.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Pro/4.png"
    ],
    price: 24990, was: 34990, off: 28, badge: "b-new", rating: 4.9, reviews: 15600,
    highlights: ["Industry-leading noise cancellation","30 hours battery","Crystal clear calls","Multipoint connection","Speak-to-chat"],
    description: "The WH-1000XM5 headphones — industry-leading noise cancellation and exceptional sound quality.",
    specs: [{key:"Driver",val:"30mm dynamic"},{key:"Battery",val:"30 hours"},{key:"Charging",val:"USB-C"},{key:"Connectivity",val:"Bluetooth 5.2"},{key:"Weight",val:"250g"}],
    userReviews: [{name:"Aditya N.",stars:5,date:"1 day ago",text:"Best noise cancelling headphones period.",verified:true}],
    platforms: [{name:"Shopora",price:24990,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Amazon",price:26990,url:"https://www.amazon.in/s?k=sony+wh1000xm5",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true},{name:"Flipkart",price:27999,url:"https://www.flipkart.com/search?q=sony+wh1000xm5",emoji:"🔵",color:"#2874f0",delivery:"Free, 2 days",trusted:true}]
  },
  {
    id: 4,
    name: "Nike Air Jordan 1 Retro",
    brand: "Nike",
    category: "Fashion",
    image: "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Retro%20High/1.png",
    thumbs: [
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Retro%20High/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Retro%20High/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Retro%20High/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Retro%20High/4.png"
    ],
    price: 16500, was: 20000, off: 17, badge: "b-hot", rating: 4.9, reviews: 22000,
    highlights: ["Classic high-top from 1985","Full-grain leather upper","Nike Air cushioning","Rubber outsole","Iconic colourways"],
    description: "The Air Jordan 1 Retro — a fashion statement and a collector's dream since 1985.",
    specs: [{key:"Type",val:"High-Top Sneaker"},{key:"Upper",val:"Full-grain leather"},{key:"Sole",val:"Rubber"},{key:"Cushioning",val:"Nike Air"},{key:"Sizes",val:"UK 6 – UK 12"}],
    userReviews: [{name:"Zara K.",stars:5,date:"4 days ago",text:"Absolutely fire! Best sneakers ever.",verified:true}],
    platforms: [{name:"Shopora",price:16500,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Myntra",price:17999,url:"https://www.myntra.com/nike+air+jordan",emoji:"🩷",color:"#ff3f6c",delivery:"Free, 3 days",trusted:true},{name:"Amazon",price:18500,url:"https://www.amazon.in/s?k=nike+air+jordan+1+retro",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true}]
  },
  {
    id: 5,
    name: "MacBook Air M3",
    brand: "Apple",
    category: "Electronics",
    image: "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png",
    thumbs: [
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png",
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/2.png",
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/3.png",
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/4.png"
    ],
    price: 114900, was: 134900, off: 15, badge: "b-sale", rating: 4.8, reviews: 5600,
    highlights: ["Apple M3 chip","18 hours battery","13.6-inch Liquid Retina display","Fanless design","8GB / 16GB memory"],
    description: "MacBook Air with M3 chip — the world's best consumer laptop. Thin, light, all-day battery.",
    specs: [{key:"Chip",val:"Apple M3"},{key:"RAM",val:"8GB / 16GB"},{key:"Storage",val:"256GB – 2TB SSD"},{key:"Display",val:"13.6-inch Liquid Retina"},{key:"Battery",val:"Up to 18 hours"},{key:"Weight",val:"1.24 kg"}],
    userReviews: [{name:"Divya L.",stars:5,date:"2 days ago",text:"Switched from Windows and never looking back.",verified:true}],
    platforms: [{name:"Shopora",price:114900,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Amazon",price:116900,url:"https://www.amazon.in/s?k=macbook+air+m3",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true},{name:"Flipkart",price:118999,url:"https://www.flipkart.com/search?q=macbook+air+m3",emoji:"🔵",color:"#2874f0",delivery:"Free, 2 days",trusted:true}]
  },
  {
    id: 6,
    name: "Instant Pot Duo 7-in-1",
    brand: "Instant Pot",
    category: "Home",
    image: "https://cdn.dummyjson.com/products/images/kitchen-accessories/Instant%20Pot%20Duo%207-in-1/1.png",
    thumbs: [
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Instant%20Pot%20Duo%207-in-1/1.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Instant%20Pot%20Duo%207-in-1/2.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Instant%20Pot%20Duo%207-in-1/3.png",
      "https://cdn.dummyjson.com/products/images/kitchen-accessories/Instant%20Pot%20Duo%207-in-1/4.png"
    ],
    price: 6499, was: 9999, off: 35, badge: "b-sale", rating: 4.7, reviews: 6200,
    highlights: ["7-in-1 multi-cooker","70% faster cooking","6-litre capacity","14 smart programmes","10+ safety features"],
    description: "The Instant Pot Duo 7-in-1 — replace 7 appliances with one. Cook healthy meals up to 70% faster.",
    specs: [{key:"Capacity",val:"6 Litres"},{key:"Power",val:"1000W"},{key:"Programmes",val:"14"},{key:"Material",val:"Stainless Steel"}],
    userReviews: [{name:"Sunita R.",stars:5,date:"3 days ago",text:"Dal in 15 mins, biryani in 30. Amazing.",verified:true}],
    platforms: [{name:"Shopora",price:6499,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Amazon",price:6999,url:"https://www.amazon.in/s?k=instant+pot+duo",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true},{name:"Flipkart",price:7299,url:"https://www.flipkart.com/search?q=instant+pot+duo",emoji:"🔵",color:"#2874f0",delivery:"Free, 3 days",trusted:true}]
  },
  {
    id: 7,
    name: "Levi's 501 Original Jeans",
    brand: "Levi's",
    category: "Fashion",
    image: "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20Levi%27s%20Jeans/1.png",
    thumbs: [
      "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20Levi%27s%20Jeans/1.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20Levi%27s%20Jeans/2.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20Levi%27s%20Jeans/3.png",
      "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20Levi%27s%20Jeans/4.png"
    ],
    price: 3499, was: 5999, off: 41, badge: "b-sale", rating: 4.6, reviews: 31000,
    highlights: ["Original blue jean since 1873","100% cotton denim","Straight fit","Button fly closure","Multiple washes"],
    description: "The Levi's 501 Original — the world's first blue jean. Timeless style since 1873.",
    specs: [{key:"Fit",val:"Original Straight"},{key:"Material",val:"100% Cotton"},{key:"Closure",val:"Button Fly"},{key:"Rise",val:"Mid Rise"}],
    userReviews: [{name:"Riya S.",stars:5,date:"1 week ago",text:"Perfect fit. These jeans are timeless.",verified:true}],
    platforms: [{name:"Shopora",price:3499,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Myntra",price:3799,url:"https://www.myntra.com/levis+501+jeans",emoji:"🩷",color:"#ff3f6c",delivery:"Free, 3 days",trusted:true},{name:"Amazon",price:4199,url:"https://www.amazon.in/s?k=levis+501+jeans",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true}]
  },
  {
    id: 8,
    name: "boAt Airdopes 141",
    brand: "boAt",
    category: "Electronics",
    image: "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.png",
    thumbs: [
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/2.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/3.png",
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/4.png"
    ],
    price: 1299, was: 2990, off: 56, badge: "b-sale", rating: 4.2, reviews: 89000,
    highlights: ["42 hours playback","BEAST Mode gaming","ENx Technology calls","IPX4 water resistant","Voice assistant"],
    description: "boAt Airdopes 141 — India's most popular TWS earbuds. 42 hours playback, BEAST Mode gaming.",
    specs: [{key:"Battery",val:"42 hours total"},{key:"Charging",val:"USB-C"},{key:"Connectivity",val:"Bluetooth 5.2"},{key:"Latency",val:"60ms BEAST Mode"},{key:"Water Resist",val:"IPX4"}],
    userReviews: [{name:"Simran K.",stars:5,date:"1 week ago",text:"42 hours battery is no joke!",verified:true}],
    platforms: [{name:"Shopora",price:1299,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Amazon",price:1399,url:"https://www.amazon.in/s?k=boat+airdopes+141",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true},{name:"Flipkart",price:1349,url:"https://www.flipkart.com/search?q=boat+airdopes+141",emoji:"🔵",color:"#2874f0",delivery:"Free, 2 days",trusted:true}]
  },
  {
    id: 9,
    name: "Maybelline Fit Me Foundation",
    brand: "Maybelline",
    category: "Beauty",
    image: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
    thumbs: [
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/2.png",
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/3.png",
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/4.png"
    ],
    price: 399, was: 599, off: 33, badge: "b-sale", rating: 4.4, reviews: 45000,
    highlights: ["Natural finish","SPF 18","40 shades","Lightweight formula","Dermatologist tested"],
    description: "Maybelline Fit Me Foundation — natural, breathable coverage. 40 shades for every skin tone.",
    specs: [{key:"Finish",val:"Natural / Matte"},{key:"SPF",val:"18"},{key:"Volume",val:"30ml"},{key:"Shades",val:"40"}],
    userReviews: [{name:"Priya K.",stars:5,date:"3 days ago",text:"Best foundation in India. Stays all day!",verified:true}],
    platforms: [{name:"Shopora",price:399,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Nykaa",price:429,url:"https://www.nykaa.com/search/result/?q=maybelline+fit+me",emoji:"🩷",color:"#fc2779",delivery:"Free, 3 days",trusted:true},{name:"Amazon",price:449,url:"https://www.amazon.in/s?k=maybelline+fit+me+foundation",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true}]
  },
  {
    id: 10,
    name: "Tata Tea Gold",
    brand: "Tata",
    category: "Groceries",
    image: "https://cdn.dummyjson.com/products/images/groceries/Tea%20Bags/1.png",
    thumbs: [
      "https://cdn.dummyjson.com/products/images/groceries/Tea%20Bags/1.png",
      "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png",
      "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png",
      "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png"
    ],
    price: 299, was: 350, off: 14, badge: "b-fast", rating: 4.5, reviews: 120000,
    highlights: ["Premium Assam & Darjeeling blend","Rich aromatic flavour","500g pack","No artificial flavours","India's most trusted tea"],
    description: "Tata Tea Gold — premium Assam and Darjeeling blend. India's most trusted tea brand.",
    specs: [{key:"Weight",val:"500g"},{key:"Type",val:"Black Tea"},{key:"Blend",val:"Assam + Darjeeling"},{key:"Shelf Life",val:"24 months"}],
    userReviews: [{name:"Ramesh P.",stars:5,date:"1 day ago",text:"Nothing beats Tata Gold in the morning.",verified:true}],
    platforms: [{name:"Shopora",price:299,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Blinkit",price:310,url:"https://blinkit.com/s/?q=tata+tea+gold",emoji:"🟡",color:"#ffd000",delivery:"10 min",trusted:true},{name:"Amazon",price:329,url:"https://www.amazon.in/s?k=tata+tea+gold",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true}]
  },
  {
    id: 11,
    name: "Yoga Mat Premium",
    brand: "Boldfit",
    category: "Sports",
    image: "https://cdn.dummyjson.com/products/images/sports-accessories/Yoga%20Mat/1.png",
    thumbs: [
      "https://cdn.dummyjson.com/products/images/sports-accessories/Yoga%20Mat/1.png",
      "https://cdn.dummyjson.com/products/images/sports-accessories/Yoga%20Mat/2.png",
      "https://cdn.dummyjson.com/products/images/sports-accessories/Yoga%20Mat/3.png",
      "https://cdn.dummyjson.com/products/images/sports-accessories/Yoga%20Mat/4.png"
    ],
    price: 699, was: 1499, off: 53, badge: "b-sale", rating: 4.3, reviews: 28000,
    highlights: ["6mm thick anti-slip","183cm x 61cm","Lightweight","Sweat resistant","For yoga & pilates"],
    description: "Boldfit Premium Yoga Mat — anti-slip, sweat resistant. Your ideal workout companion.",
    specs: [{key:"Thickness",val:"6mm"},{key:"Size",val:"183cm x 61cm"},{key:"Material",val:"TPE Foam"},{key:"Weight",val:"900g"},{key:"Anti-Slip",val:"Yes"}],
    userReviews: [{name:"Anjali V.",stars:5,date:"2 days ago",text:"Great mat for the price. Non-slip is excellent.",verified:true}],
    platforms: [{name:"Shopora",price:699,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Amazon",price:799,url:"https://www.amazon.in/s?k=boldfit+yoga+mat",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true},{name:"Flipkart",price:749,url:"https://www.flipkart.com/search?q=boldfit+yoga+mat",emoji:"🔵",color:"#2874f0",delivery:"Free, 2 days",trusted:true}]
  },
  {
    id: 12,
    name: "Atomic Habits",
    brand: "James Clear",
    category: "Books",
    image: "https://cdn.dummyjson.com/products/images/home-decoration/Book%20Shelf/1.png",
    thumbs: [
      "https://cdn.dummyjson.com/products/images/home-decoration/Book%20Shelf/1.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/Book%20Shelf/2.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/Book%20Shelf/3.png",
      "https://cdn.dummyjson.com/products/images/home-decoration/Book%20Shelf/4.png"
    ],
    price: 399, was: 799, off: 50, badge: "b-sale", rating: 4.9, reviews: 95000,
    highlights: ["#1 NYT Bestseller","15 million copies sold","Build good habits","Practical & actionable","English & Hindi"],
    description: "Atomic Habits by James Clear — the most practical self-improvement book ever written.",
    specs: [{key:"Author",val:"James Clear"},{key:"Pages",val:"320"},{key:"Language",val:"English"},{key:"Publisher",val:"Penguin Random House"}],
    userReviews: [{name:"Vikash T.",stars:5,date:"1 day ago",text:"Life changing book. Everyone must read this.",verified:true}],
    platforms: [{name:"Shopora",price:399,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Amazon",price:449,url:"https://www.amazon.in/s?k=atomic+habits",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true},{name:"Flipkart",price:429,url:"https://www.flipkart.com/search?q=atomic+habits",emoji:"🔵",color:"#2874f0",delivery:"Free, 2 days",trusted:true}]
  }
];