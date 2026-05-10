import os
from dotenv import load_dotenv
from pymongo import MongoClient

# Load your secret link
load_dotenv()
MONGO_URI = os.getenv("MONGO_URI")

def wipe_database():
    print("🧹 Connecting to MongoDB Atlas...")
    client = MongoClient(MONGO_URI)
    db = client.shopora
    
    # Delete everything in the products collection
    deleted_count = db.products.delete_many({}).deleted_count
    
    print(f"✅ Success! Deleted {deleted_count} old products from the cloud.")

if __name__ == "__main__":
    wipe_database()