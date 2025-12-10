import zipfile
import os

base_dir = r"z:\inartact-8f9357d6d7e41612ebf28ccfac3af30428464210-main"
zips_dir = os.path.join(base_dir, "_agent", "zips", "feature batches")
extract_root = os.path.join(base_dir, "temp_features")

batches = [
    "inartact-collections-timeline-educator-batch.zip",
    "inartact-events-share-mapfilters-batch.zip",
    "inartact-map-tours-zine-a11y-community-batch.zip",
    "inartact-search-related-submissions-zinehandoff-batch.zip",
    "inartact-pwa-reflections-markdown-api-docs-batch.zip"
]

if not os.path.exists(extract_root):
    os.makedirs(extract_root)

for batch in batches:
    zip_path = os.path.join(zips_dir, batch)
    # Create subfolder for each batch based on index or name to keep them organized
    batch_name = batch.replace(".zip", "")
    extract_to = os.path.join(extract_root, batch_name)
    
    if os.path.exists(zip_path):
        try:
            with zipfile.ZipFile(zip_path, 'r') as zip_ref:
                zip_ref.extractall(extract_to)
            print(f"Extracted {batch}")
        except Exception as e:
            print(f"Failed to extract {batch}: {e}")
    else:
        print(f"File not found: {zip_path}")
