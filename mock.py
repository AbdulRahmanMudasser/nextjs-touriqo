import requests
import json
import os
from dotenv import load_dotenv

load_dotenv('.env.local')

def search_hotels():
    base_url = os.getenv("NEXT_PUBLIC_API_URL")
    
    endpoint = "/v1/hotel/search"
    url = f"{base_url.rstrip('/')}{endpoint}"
    
    payload = {
        "checkin": "2025-06-05",
        "checkout": "2025-06-07",
        "residency": "gb",
        "language": "en",
        "guests": [
            {
                "adults": 3,
                "children": [10, 10]
            }
        ],
        "longitude": 139.6503,
        "latitude": 35.6762,
        "radius": 150,
        "currency": "EUR"
    }
    
    headers = {
        "Content-Type": "application/json"
    }

    try:
        response = requests.get(url, headers=headers, data=json.dumps(payload), timeout=15)
        response.raise_for_status()
        
        result = response.json()
        print("API Response:")
        print(json.dumps(result, indent=2))
        
    except requests.exceptions.HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
        print("Response Text:", response.text)
    except requests.exceptions.RequestException as req_err:
        print(f"Request error: {req_err}")
    except Exception as err:
        print(f"Unexpected error: {err}")

if __name__ == "__main__":
    search_hotels()