import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient


# 1. Try to load the .env file
load_dotenv()

app = FastAPI()

# Allow your frontend to talk to this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2. THE SAFETY NET: Try to get the URI from .env, otherwise use the string directly
MONGO_URI = os.getenv("MONGO_URI")

try:
    client = MongoClient(MONGO_URI)
    db = client.shopora
    products_col = db.products
    print("✅ Successfully connected to MongoDB Atlas")
except Exception as e:
    print(f"❌ Connection error: {e}") 

@app.get("/")
def read_root():
    return {"message": "Shopora AI Backend is running!"}

@app.get("/api/products")
def get_all_products():
    # Fetch all products from MongoDB
    products_from_db = list(products_col.find({}, {"_id": 0}))
    return {"products": products_from_db}

@app.post("/api/products")
def add_product(product: dict = Body(...)):
    # This takes the data from your seed_ai.py and saves it to the cloud
    result = products_col.insert_one(product)
    return {"status": "success", "id": str(result.inserted_id)}

@app.get("/api/products/seed")
def seed_database():
    # Push your initial data into MongoDB with a live web image
    initial_products = [
        {
            "id": 1, 
            "name": "iPhone 15 Pro", 
            "brand": "Apple", 
            "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692846360186",
            "price": 124999, 
            "was": 134999, 
            "off": "7%", 
            "badge": "b-hot", 
            "rating": 4.8, 
            "reviews": 2341,
            "category": "Electronics",
            "platforms": [
                {"name": "Shopora", "price": 124999, "url": "#", "trusted": True},
                {"name": "Amazon", "price": 126999, "url": "https://www.amazon.in/s?k=iphone+15+pro", "trusted": True},
                {"name": "Flipkart", "price": 128499, "url": "https://www.flipkart.com/search?q=iphone+15+pro", "trusted": True},
                {"name": "Croma", "price": 131000, "url": "https://www.croma.com/searchB?q=iphone+15+pro", "trusted": True}
            ]
        }
    ]
    
    # Clean the database and insert new data
    products_col.delete_many({})
    products_col.insert_many(initial_products)
    
    return {"message": "Database seeded successfully with initial products!"}