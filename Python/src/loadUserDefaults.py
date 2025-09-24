import json

def loadUserDefaults():
    try:
        with open('.\config\config.json', 'r') as f:
            user_defaults = json.load(f)
            return user_defaults
    except FileNotFoundError:
        print("User defaults file not found. Using default settings.")
        return {}