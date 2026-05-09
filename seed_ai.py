import requests

# Your Live Render URL
API_URL = "https://shopora-v1.onrender.com/api/products"

# The "Vast Categories" Data
# In the future, we can have an AI generate this list automatically!
vast_products = [
    {
        "id": 101,
        "name": "Mechanical Gaming Keyboard",
        "brand": "Razer",
        "image": "https://m.media-amazon.com/images/I/71xp8h7A6EL._AC_SL1500_.jpg",
        "price": 8500,
        "was": 12000,
        "off": "30%",
        "rating": 4.8,
        "reviews": 1250,
        "badge": "b-hot"
    },
    {
        "id": 102,
        "name": "Minimalist Ceramic Vase",
        "brand": "HomeDecor AI",
        "image": "https://m.media-amazon.com/images/I/61S8n2v1S1L._AC_SL1500_.jpg",
        "price": 1200,
        "was": 2500,
        "off": "52%",
        "rating": 4.5,
        "reviews": 85,
        "badge": ""
    }
    # We can add 100s more here!
]

def seed_database():
    print(f"🚀 AI Agent starting upload to {API_URL}...")
    for product in vast_products:
        response = requests.post(API_URL, json=product)
        if response.status_code == 200:
            print(f"✅ Successfully uploaded: {product['name']}")
        else:
            print(f"❌ Failed: {product['name']} - {response.text}")
        
if __name__ == "__main__":
    seed_database()