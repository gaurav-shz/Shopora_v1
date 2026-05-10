import requests
import time

API_URL = "https://shopora-v1.onrender.com/api/products"

mega_products = [
    # --- MOBILES ---
    {"name": "iPhone 16 Pro Max", "brand": "Apple", "category": "Mobiles", "price": 144900, "was": 154900, "off": "6%", "rating": 4.9, "reviews": 12500, "badge": "b-hot", "image": "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500&q=80"},
    {"name": "Galaxy S24 Ultra", "brand": "Samsung", "category": "Mobiles", "price": 129999, "was": 139999, "off": "7%", "rating": 4.8, "reviews": 8430, "badge": "", "image": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80"},
    {"name": "Pixel 8 Pro", "brand": "Google", "category": "Mobiles", "price": 94999, "was": 106999, "off": "11%", "rating": 4.7, "reviews": 3200, "badge": "", "image": "https://images.unsplash.com/photo-1598327105666-5b89351cb315?w=500&q=80"},
    {"name": "OnePlus 12", "brand": "OnePlus", "category": "Mobiles", "price": 64999, "was": 69999, "off": "7%", "rating": 4.6, "reviews": 4100, "badge": "b-hot", "image": "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=500&q=80"},

    # --- ELECTRONICS ---
    {"name": "MacBook Air M3", "brand": "Apple", "category": "Electronics", "price": 114900, "was": 134900, "off": "15%", "rating": 4.8, "reviews": 5600, "badge": "", "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80"},
    {"name": "Sony WH-1000XM5", "brand": "Sony", "category": "Electronics", "price": 29990, "was": 34990, "off": "14%", "rating": 4.7, "reviews": 9200, "badge": "b-hot", "image": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80"},
    {"name": "iPad Pro 11-inch", "brand": "Apple", "category": "Electronics", "price": 79900, "was": 89900, "off": "11%", "rating": 4.9, "reviews": 4300, "badge": "", "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80"},
    {"name": "LG 27\" 4K Monitor", "brand": "LG", "category": "Electronics", "price": 24500, "was": 32000, "off": "23%", "rating": 4.5, "reviews": 1150, "badge": "", "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80"},

    # --- FASHION ---
    {"name": "Air Jordan 1 Retro", "brand": "Nike", "category": "Fashion", "price": 16500, "was": 20000, "off": "17%", "rating": 4.9, "reviews": 22000, "badge": "b-hot", "image": "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500&q=80"},
    {"name": "Classic Chronograph Watch", "brand": "Fossil", "category": "Fashion", "price": 8995, "was": 14995, "off": "40%", "rating": 4.6, "reviews": 3100, "badge": "", "image": "https://images.unsplash.com/photo-1524592094714-a57ee11c5b16?w=500&q=80"},
    {"name": "Aviator Sunglasses", "brand": "Ray-Ban", "category": "Fashion", "price": 5500, "was": 7500, "off": "26%", "rating": 4.7, "reviews": 8900, "badge": "", "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80"},
    {"name": "Vintage Leather Jacket", "brand": "Levis", "category": "Fashion", "price": 12000, "was": 18000, "off": "33%", "rating": 4.8, "reviews": 650, "badge": "b-hot", "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80"},

    # --- HOME ---
    {"name": "Velvet Lounge Sofa", "brand": "UrbanHome", "category": "Home", "price": 32000, "was": 55000, "off": "41%", "rating": 4.8, "reviews": 420, "badge": "", "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80"},
    {"name": "Minimalist Floor Lamp", "brand": "Lumina", "category": "Home", "price": 4500, "was": 7000, "off": "35%", "rating": 4.4, "reviews": 890, "badge": "", "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80"},
    {"name": "Matte Ceramic Vase", "brand": "DecorAI", "category": "Home", "price": 1200, "was": 2500, "off": "52%", "rating": 4.6, "reviews": 150, "badge": "", "image": "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=500&q=80"},
    {"name": "Indoor Bamboo Plant", "brand": "Greenify", "category": "Home", "price": 850, "was": 1200, "off": "29%", "rating": 4.9, "reviews": 3400, "badge": "b-hot", "image": "https://images.unsplash.com/photo-1597055181300-e3633a20751a?w=500&q=80"},

    # --- GROCERY ---
    {"name": "Organic Almonds 500g", "brand": "NutriChoice", "category": "Grocery", "price": 450, "was": 600, "off": "25%", "rating": 4.5, "reviews": 4500, "badge": "", "image": "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=500&q=80"},
    {"name": "Fresh Avocados (Pack of 3)", "brand": "FarmFresh", "category": "Grocery", "price": 300, "was": 450, "off": "33%", "rating": 4.3, "reviews": 1200, "badge": "", "image": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&q=80"},
    {"name": "Extra Virgin Olive Oil", "brand": "Figaro", "category": "Grocery", "price": 890, "was": 1100, "off": "19%", "rating": 4.8, "reviews": 8800, "badge": "", "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80"},
    {"name": "Arabica Coffee Beans", "brand": "Blue Tokai", "category": "Grocery", "price": 450, "was": 550, "off": "18%", "rating": 4.9, "reviews": 11200, "badge": "b-hot", "image": "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&q=80"}
]

def seed_database():
    print(f"🚀 Initializing Mega-Upload to {API_URL}...")
    success_count = 0
    
    for product in mega_products:
        try:
            response = requests.post(API_URL, json=product)
            if response.status_code == 200:
                print(f"✅ Uploaded: {product['name']} ({product['category']})")
                success_count += 1
            else:
                print(f"❌ Failed: {product['name']} - Server rejected")
            # Small delay to not overwhelm the free Render server
            time.sleep(0.5) 
        except Exception as e:
            print(f"❌ Connection Error for {product['name']}: {e}")
            
    print(f"\n🎉 Done! Successfully added {success_count} new products across all categories.")

if __name__ == "__main__":
    seed_database()