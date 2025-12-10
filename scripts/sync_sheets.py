import sys
import csv
import json
import urllib.request
import os

# Centralized Cause Constants (to match the TS file structure)
# We won't use these directly in the JSON generation but we'll include them in the file header
CONSTANTS_BLOCK = """import { Artist } from './types';

// Centralized Cause Constants to ensure consistency across filters
const CAUSES = {
  RACIAL_JUSTICE: "Racial Justice",
  CIVIL_RIGHTS: "Civil Rights",
  ENVIRONMENT: "Environmental Justice",
  WOMENS_RIGHTS: "Women's Suffrage",
  IMMIGRATION: "Immigration",
  LABOR: "Labor Rights",
  COMMUNITY: "Community Building",
  MENTAL_HEALTH: "Mental Health",
  PUBLIC_ART: "Public Space",
  POLITICAL: "Political Change/Satire"
} as const;
"""

def read_local_csv(file_path):
    print(f"Reading data from: {file_path}")
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f"Error reading local CSV file: {e}")
        sys.exit(1)

def parse_csv(csv_text):
    lines = csv_text.splitlines()
    reader = csv.DictReader(lines)
    
    artists = []
    for i, row in enumerate(reader):
        # Skip empty rows
        if not row.get('Artist Name'):
            continue
            
        def split_list(val):
            if not val:
                return []
            return [x.strip() for x in val.split(',')]

        def parse_bool(val):
            return str(val).upper() == 'TRUE'

        name = row.get('Artist Name', '')
        title = row.get('Title of Work', '')
        bio = row.get('Notes:', '')
        location = row.get('Where Located in Indiana?', '')
        cause = row.get('Social Cause Description', '')
        
        search_index = f"{name} {title} {bio} {location} {cause}".strip()

        artist_entry = {
            "id": str(i + 1),
            "artist": {
                "name": name,
                "isAlive": parse_bool(row.get('Still Alive? (Check means yes)')),
                "bio": bio,
                "website": row.get('Website') or None,
                "social_media": split_list(row.get('Handle/Link'))
            },
            "artwork": {
                "title": title,
                "description": "",
                "medium": row.get('Medium', ''),
                "date": row.get('Date of Creation', ''),
                "location": location,
                "cause": cause,
                "imageUrl": f"/artist-{i + 1}.jpg", # Placeholder
                "credit": row.get('Photo Credit') or None,
                "latitude": None,
                "longitude": None,
                "categories": [],
                "searchQuery": search_index 
            }
        }
        
        def clean_dict(d):
            # clean dictionary of empty values
            return {k: v for k, v in d.items() if v is not None and v != ''}
            
        artist_entry["artist"] = clean_dict(artist_entry["artist"])
        artist_entry["artwork"] = clean_dict(artist_entry["artwork"])
        
        artists.append(artist_entry)
        
    return artists

def generate_ts_file(artists):
    # Convert python dict to JSON string
    json_data = json.dumps(artists, indent=2)
    
    # Create the full file content
    file_content = f"{CONSTANTS_BLOCK}\nexport const artists: Artist[] = {json_data};\n"
    
    return file_content

def main():
    path_or_url = 'Art Activist Inventory Sheet - Information for Website.csv'
    csv_text = read_local_csv(path_or_url)
    artists = parse_csv(csv_text)
    ts_content = generate_ts_file(artists)
    output_path = os.path.join(os.getcwd(), 'src', 'lib', 'artists-data.ts')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print(f"Successfully updated {output_path} with {len(artists)} artists.")

if __name__ == "__main__":
    main()