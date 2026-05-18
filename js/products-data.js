const PRODUCTS = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600",
    thumbs: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600",
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600",
      "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?w=600",
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600"
    ],
    price: 124999, was: 134999, off: 7, badge: "b-hot", rating: 4.8, reviews: 23410,
    highlights: ["A17 Pro chip","Titanium design","48MP main camera","USB-C","All-day battery"],
    description: "iPhone 15 Pro — aerospace-grade titanium design with A17 Pro chip.",
    specs: [{key:"Display",val:"6.1-inch Super Retina XDR"},{key:"Chip",val:"A17 Pro"},{key:"RAM",val:"8GB"},{key:"OS",val:"iOS 17"},{key:"5G",val:"Yes"},{key:"Water Resistant",val:"IP68"}],
    userReviews: [{name:"Rahul S.",stars:5,date:"2 days ago",text:"Stunning phone. Camera is insane.",verified:true},{name:"Priya M.",stars:5,date:"1 week ago",text:"Best iPhone ever.",verified:true}],
    platforms: [{name:"Shopora",price:124999,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Amazon",price:126999,url:"https://www.amazon.in/s?k=iphone+15+pro",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true},{name:"Flipkart",price:128499,url:"https://www.flipkart.com/search?q=iphone+15+pro",emoji:"🔵",color:"#2874f0",delivery:"Free, 2 days",trusted:true},{name:"Croma",price:131000,url:"https://www.croma.com/searchB?q=iphone+15+pro",emoji:"🟢",color:"#00a19a",delivery:"Free, 3 days",trusted:true}]
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1706439136278-5bdccce8672e?w=600",
    thumbs: [
      "https://images.unsplash.com/photo-1706439136278-5bdccce8672e?w=600",
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600",
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600",
      "https://images.unsplash.com/photo-1614945233353-e8f3b536bb2c?w=600"
    ],
    price: 109999, was: 134999, off: 18, badge: "b-sale", rating: 4.7, reviews: 18900,
    highlights: ["Built-in S Pen","200MP camera","Snapdragon 8 Gen 3","5000mAh battery","Titanium frame"],
    description: "Galaxy S24 Ultra — Samsung's most powerful smartphone with S Pen.",
    specs: [{key:"Display",val:"6.8-inch QHD+ AMOLED"},{key:"Chip",val:"Snapdragon 8 Gen 3"},{key:"RAM",val:"12GB"},{key:"Battery",val:"5000mAh"},{key:"OS",val:"Android 14"}],
    userReviews: [{name:"Vikram T.",stars:5,date:"3 days ago",text:"S Pen is a game changer.",verified:true},{name:"Sneha R.",stars:4,date:"1 week ago",text:"Best Android phone.",verified:true}],
    platforms: [{name:"Shopora",price:109999,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Flipkart",price:111999,url:"https://www.flipkart.com/search?q=samsung+galaxy+s24+ultra",emoji:"🔵",color:"#2874f0",delivery:"Free, 2 days",trusted:true},{name:"Amazon",price:113499,url:"https://www.amazon.in/s?k=samsung+galaxy+s24+ultra",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true}]
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600",
    thumbs: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600",
      "https://images.unsplash.com/photo-1545127398-14699f92334b?w=600"
    ],
    price: 24990, was: 34990, off: 28, badge: "b-new", rating: 4.9, reviews: 15600,
    highlights: ["Industry-leading ANC","30 hours battery","Crystal clear calls","Multipoint connection","Speak-to-chat"],
    description: "WH-1000XM5 — industry-leading noise cancellation and exceptional sound quality.",
    specs: [{key:"Driver",val:"30mm dynamic"},{key:"Battery",val:"30 hours"},{key:"Connectivity",val:"Bluetooth 5.2"},{key:"Weight",val:"250g"}],
    userReviews: [{name:"Aditya N.",stars:5,date:"1 day ago",text:"Best headphones period.",verified:true}],
    platforms: [{name:"Shopora",price:24990,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Amazon",price:26990,url:"https://www.amazon.in/s?k=sony+wh1000xm5",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true},{name:"Flipkart",price:27999,url:"https://www.flipkart.com/search?q=sony+wh1000xm5",emoji:"🔵",color:"#2874f0",delivery:"Free, 2 days",trusted:true}]
  },
  {
    id: 4,
    name: "Nike Air Jordan 1 Retro",
    brand: "Nike",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600",
    thumbs: [
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
      "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=600",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600"
    ],
    price: 16500, was: 20000, off: 17, badge: "b-hot", rating: 4.9, reviews: 22000,
    highlights: ["Classic 1985 silhouette","Full-grain leather","Nike Air cushioning","Rubber outsole","Iconic colourways"],
    description: "Air Jordan 1 Retro — a fashion statement and collector's dream since 1985.",
    specs: [{key:"Type",val:"High-Top Sneaker"},{key:"Upper",val:"Full-grain leather"},{key:"Cushioning",val:"Nike Air"},{key:"Sizes",val:"UK 6 – UK 12"}],
    userReviews: [{name:"Zara K.",stars:5,date:"4 days ago",text:"Best sneakers ever. True to size.",verified:true}],
    platforms: [{name:"Shopora",price:16500,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Myntra",price:17999,url:"https://www.myntra.com/nike+air+jordan",emoji:"🩷",color:"#ff3f6c",delivery:"Free, 3 days",trusted:true},{name:"Amazon",price:18500,url:"https://www.amazon.in/s?k=nike+air+jordan+1+retro",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true}]
  },
  {
    id: 5,
    name: "MacBook Air M3",
    brand: "Apple",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1611186871525-6d170f2fcb1f?w=600",
    thumbs: [
      "https://images.unsplash.com/photo-1611186871525-6d170f2fcb1f?w=600",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600"
    ],
    price: 114900, was: 134900, off: 15, badge: "b-sale", rating: 4.8, reviews: 5600,
    highlights: ["Apple M3 chip","18 hours battery","Liquid Retina display","Fanless design","8/16GB memory"],
    description: "MacBook Air M3 — world's best consumer laptop. Thin, light, all-day battery.",
    specs: [{key:"Chip",val:"Apple M3"},{key:"RAM",val:"8GB / 16GB"},{key:"Storage",val:"256GB – 2TB"},{key:"Display",val:"13.6-inch Retina"},{key:"Battery",val:"18 hours"}],
    userReviews: [{name:"Divya L.",stars:5,date:"2 days ago",text:"Never looking back from Windows.",verified:true}],
    platforms: [{name:"Shopora",price:114900,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Amazon",price:116900,url:"https://www.amazon.in/s?k=macbook+air+m3",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true},{name:"Flipkart",price:118999,url:"https://www.flipkart.com/search?q=macbook+air+m3",emoji:"🔵",color:"#2874f0",delivery:"Free, 2 days",trusted:true}]
  },
  {
    id: 6,
    name: "Instant Pot Duo 7-in-1",
    brand: "Instant Pot",
    category: "Home",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600",
    thumbs: [
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600"
    ],
    price: 6499, was: 9999, off: 35, badge: "b-sale", rating: 4.7, reviews: 6200,
    highlights: ["7-in-1 multi-cooker","70% faster cooking","6-litre capacity","14 programmes","10+ safety features"],
    description: "Instant Pot Duo 7-in-1 — replace 7 appliances. Cook 70% faster.",
    specs: [{key:"Capacity",val:"6 Litres"},{key:"Power",val:"1000W"},{key:"Programmes",val:"14"},{key:"Material",val:"Stainless Steel"}],
    userReviews: [{name:"Sunita R.",stars:5,date:"3 days ago",text:"Dal in 15 mins. Amazing!",verified:true}],
    platforms: [{name:"Shopora",price:6499,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Amazon",price:6999,url:"https://www.amazon.in/s?k=instant+pot+duo",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true},{name:"Flipkart",price:7299,url:"https://www.flipkart.com/search?q=instant+pot+duo",emoji:"🔵",color:"#2874f0",delivery:"Free, 3 days",trusted:true}]
  },
  {
    id: 7,
    name: "Levi's 501 Original Jeans",
    brand: "Levi's",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
    thumbs: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600",
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600"
    ],
    price: 3499, was: 5999, off: 41, badge: "b-sale", rating: 4.6, reviews: 31000,
    highlights: ["Original since 1873","100% cotton","Straight fit","Button fly","Multiple washes"],
    description: "Levi's 501 Original — world's first blue jean. Timeless style.",
    specs: [{key:"Fit",val:"Original Straight"},{key:"Material",val:"100% Cotton"},{key:"Closure",val:"Button Fly"}],
    userReviews: [{name:"Riya S.",stars:5,date:"1 week ago",text:"Perfect fit. Timeless jeans.",verified:true}],
    platforms: [{name:"Shopora",price:3499,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Myntra",price:3799,url:"https://www.myntra.com/levis+501+jeans",emoji:"🩷",color:"#ff3f6c",delivery:"Free, 3 days",trusted:true},{name:"Amazon",price:4199,url:"https://www.amazon.in/s?k=levis+501+jeans",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true}]
  },
  {
    id: 8,
    name: "boAt Airdopes 141",
    brand: "boAt",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600",
    thumbs: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600",
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600",
      "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=600",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600"
    ],
    price: 1299, was: 2990, off: 56, badge: "b-sale", rating: 4.2, reviews: 89000,
    highlights: ["42 hours playback","BEAST Mode gaming","ENx clear calls","IPX4 water resistant","Voice assistant"],
    description: "boAt Airdopes 141 — India's most popular TWS earbuds. 42 hours playback.",
    specs: [{key:"Battery",val:"42 hours"},{key:"Charging",val:"USB-C"},{key:"Connectivity",val:"Bluetooth 5.2"},{key:"Latency",val:"60ms"}],
    userReviews: [{name:"Simran K.",stars:5,date:"1 week ago",text:"42 hours battery is no joke!",verified:true}],
    platforms: [{name:"Shopora",price:1299,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Amazon",price:1399,url:"https://www.amazon.in/s?k=boat+airdopes+141",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true},{name:"Flipkart",price:1349,url:"https://www.flipkart.com/search?q=boat+airdopes+141",emoji:"🔵",color:"#2874f0",delivery:"Free, 2 days",trusted:true}]
  },
  {
    id: 9,
    name: "Maybelline Fit Me Foundation",
    brand: "Maybelline",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600",
    thumbs: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600",
      "https://images.unsplash.com/photo-1631214524020-3c69b2a4b177?w=600",
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600"
    ],
    price: 399, was: 599, off: 33, badge: "b-sale", rating: 4.4, reviews: 45000,
    highlights: ["Natural finish","SPF 18","40 shades","Lightweight","Dermatologist tested"],
    description: "Maybelline Fit Me Foundation — natural coverage for every skin tone.",
    specs: [{key:"Finish",val:"Natural/Matte"},{key:"SPF",val:"18"},{key:"Volume",val:"30ml"},{key:"Shades",val:"40"}],
    userReviews: [{name:"Priya K.",stars:5,date:"3 days ago",text:"Best foundation. Stays all day!",verified:true}],
    platforms: [{name:"Shopora",price:399,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Nykaa",price:429,url:"https://www.nykaa.com/search/result/?q=maybelline+fit+me",emoji:"🩷",color:"#fc2779",delivery:"Free, 3 days",trusted:true},{name:"Amazon",price:449,url:"https://www.amazon.in/s?k=maybelline+fit+me+foundation",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true}]
  },
  {
    id: 10,
    name: "Tata Tea Gold 500g",
    brand: "Tata",
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600",
    thumbs: [
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600",
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600",
      "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=600"
    ],
    price: 299, was: 350, off: 14, badge: "b-fast", rating: 4.5, reviews: 120000,
    highlights: ["Assam & Darjeeling blend","Rich aroma","500g pack","No artificial flavours","India's #1 tea"],
    description: "Tata Tea Gold — premium Assam and Darjeeling blend. India's most trusted tea.",
    specs: [{key:"Weight",val:"500g"},{key:"Type",val:"Black Tea"},{key:"Blend",val:"Assam + Darjeeling"},{key:"Shelf Life",val:"24 months"}],
    userReviews: [{name:"Ramesh P.",stars:5,date:"1 day ago",text:"Nothing beats Tata Gold morning tea.",verified:true}],
    platforms: [{name:"Shopora",price:299,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Blinkit",price:310,url:"https://blinkit.com/s/?q=tata+tea+gold",emoji:"🟡",color:"#ffd000",delivery:"10 min",trusted:true},{name:"Zepto",price:315,url:"https://www.zepto.com/search?query=tata+tea+gold",emoji:"🟣",color:"#8b2cf5",delivery:"10 min",trusted:true},{name:"Amazon",price:329,url:"https://www.amazon.in/s?k=tata+tea+gold",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true}]
  },
  {
    id: 11,
    name: "Boldfit Yoga Mat",
    brand: "Boldfit",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600",
    thumbs: [
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600"
    ],
    price: 699, was: 1499, off: 53, badge: "b-sale", rating: 4.3, reviews: 28000,
    highlights: ["6mm thick anti-slip","183x61cm","Lightweight","Sweat resistant","For yoga & pilates"],
    description: "Boldfit Premium Yoga Mat — anti-slip, sweat resistant. Perfect workout companion.",
    specs: [{key:"Thickness",val:"6mm"},{key:"Size",val:"183cm x 61cm"},{key:"Material",val:"TPE Foam"},{key:"Weight",val:"900g"}],
    userReviews: [{name:"Anjali V.",stars:5,date:"2 days ago",text:"Great mat. Non-slip surface is perfect.",verified:true}],
    platforms: [{name:"Shopora",price:699,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Amazon",price:799,url:"https://www.amazon.in/s?k=boldfit+yoga+mat",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true},{name:"Flipkart",price:749,url:"https://www.flipkart.com/search?q=boldfit+yoga+mat",emoji:"🔵",color:"#2874f0",delivery:"Free, 2 days",trusted:true}]
  },
  {
    id: 12,
    name: "Atomic Habits",
    brand: "James Clear",
    category: "Books",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600",
    thumbs: [
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600"
    ],
    price: 399, was: 799, off: 50, badge: "b-sale", rating: 4.9, reviews: 95000,
    highlights: ["#1 NYT Bestseller","15M copies sold","Build good habits","Practical & actionable","English & Hindi"],
    description: "Atomic Habits by James Clear — the most practical self-improvement book ever written.",
    specs: [{key:"Author",val:"James Clear"},{key:"Pages",val:"320"},{key:"Language",val:"English"},{key:"Publisher",val:"Penguin Random House"}],
    userReviews: [{name:"Vikash T.",stars:5,date:"1 day ago",text:"Life changing. Everyone must read this.",verified:true}],
    platforms: [{name:"Shopora",price:399,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Amazon",price:449,url:"https://www.amazon.in/s?k=atomic+habits",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true},{name:"Flipkart",price:429,url:"https://www.flipkart.com/search?q=atomic+habits",emoji:"🔵",color:"#2874f0",delivery:"Free, 2 days",trusted:true}]
  },
  {
    id: 13,
    name: "OnePlus Nord CE 3",
    brand: "OnePlus",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",
    thumbs: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600"
    ],
    price: 24999, was: 29999, off: 16, badge: "b-new", rating: 4.5, reviews: 12000,
    highlights: ["Snapdragon 782G","108MP camera","80W SuperVOOC charging","5000mAh battery","120Hz AMOLED display"],
    description: "OnePlus Nord CE 3 — flagship features at mid-range price. Fast charging, great camera.",
    specs: [{key:"Display",val:"6.7-inch 120Hz AMOLED"},{key:"Chip",val:"Snapdragon 782G"},{key:"RAM",val:"8GB / 12GB"},{key:"Camera",val:"108MP"},{key:"Battery",val:"5000mAh 80W"}],
    userReviews: [{name:"Karan D.",stars:5,date:"3 days ago",text:"Best mid-range phone right now.",verified:true}],
    platforms: [{name:"Shopora",price:24999,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Amazon",price:25999,url:"https://www.amazon.in/s?k=oneplus+nord+ce+3",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true},{name:"Flipkart",price:26499,url:"https://www.flipkart.com/search?q=oneplus+nord+ce+3",emoji:"🔵",color:"#2874f0",delivery:"Free, 2 days",trusted:true}]
  },
  {
    id: 14,
    name: "L'Oreal Paris Hair Serum",
    brand: "L'Oreal",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600",
    thumbs: [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600"
    ],
    price: 349, was: 499, off: 30, badge: "b-sale", rating: 4.3, reviews: 32000,
    highlights: ["Reduces frizz instantly","UV protection","Non-greasy formula","For all hair types","Salon-like smoothness"],
    description: "L'Oreal Paris Hair Serum — salon-like smooth, frizz-free hair every day.",
    specs: [{key:"Volume",val:"75ml"},{key:"Hair Type",val:"All types"},{key:"UV Protection",val:"Yes"},{key:"Finish",val:"Non-greasy"}],
    userReviews: [{name:"Neha M.",stars:5,date:"5 days ago",text:"Hair stays smooth all day. Love it!",verified:true}],
    platforms: [{name:"Shopora",price:349,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Nykaa",price:379,url:"https://www.nykaa.com/search/result/?q=loreal+hair+serum",emoji:"🩷",color:"#fc2779",delivery:"Free, 3 days",trusted:true},{name:"Amazon",price:399,url:"https://www.amazon.in/s?k=loreal+paris+hair+serum",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true}]
  },
  {
    id: 15,
    name: "Organic Almonds 500g",
    brand: "FreshNuts",
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600",
    thumbs: [
      "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600",
      "https://images.unsplash.com/photo-1574184864703-3487b13f0edd?w=600",
      "https://images.unsplash.com/photo-1595475207225-428b62bda831?w=600",
      "https://images.unsplash.com/photo-1548967341-1a6b2b1b6a22?w=600"
    ],
    price: 499, was: 699, off: 28, badge: "b-fast", rating: 4.6, reviews: 18000,
    highlights: ["100% organic","No preservatives","Rich in Vitamin E","Protein-packed","Resealable pack"],
    description: "Premium organic almonds — healthy snacking, rich in nutrients and Vitamin E.",
    specs: [{key:"Weight",val:"500g"},{key:"Type",val:"Organic"},{key:"Shelf Life",val:"12 months"},{key:"Origin",val:"California"}],
    userReviews: [{name:"Meena S.",stars:5,date:"2 days ago",text:"Fresh and crunchy. Best almonds I've had.",verified:true}],
    platforms: [{name:"Shopora",price:499,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Blinkit",price:519,url:"https://blinkit.com/s/?q=organic+almonds",emoji:"🟡",color:"#ffd000",delivery:"10 min",trusted:true},{name:"Amazon",price:549,url:"https://www.amazon.in/s?k=organic+almonds+500g",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true}]
  },
  {
    id: 16,
    name: "Adidas Running Shoes",
    brand: "Adidas",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    thumbs: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600",
      "https://images.unsplash.com/photo-1556906781-9a412961a28c?w=600"
    ],
    price: 4999, was: 7999, off: 37, badge: "b-sale", rating: 4.5, reviews: 14000,
    highlights: ["Cloudfoam cushioning","Breathable mesh upper","Lightweight design","Anti-slip outsole","All-day comfort"],
    description: "Adidas Running Shoes — responsive cushioning and breathable comfort for every run.",
    specs: [{key:"Type",val:"Running"},{key:"Upper",val:"Breathable mesh"},{key:"Sole",val:"Rubber outsole"},{key:"Cushioning",val:"Cloudfoam"},{key:"Sizes",val:"UK 6 – UK 12"}],
    userReviews: [{name:"Suresh K.",stars:5,date:"1 week ago",text:"Super comfortable. Great for long runs.",verified:true}],
    platforms: [{name:"Shopora",price:4999,url:"#",emoji:"🛍️",color:"#f97316",delivery:"Free, 2 days",trusted:true},{name:"Myntra",price:5499,url:"https://www.myntra.com/adidas+running+shoes",emoji:"🩷",color:"#ff3f6c",delivery:"Free, 3 days",trusted:true},{name:"Amazon",price:5999,url:"https://www.amazon.in/s?k=adidas+running+shoes",emoji:"🟠",color:"#f90",delivery:"Free, 1 day",trusted:true}]
  }
];