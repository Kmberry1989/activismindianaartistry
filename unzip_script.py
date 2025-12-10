import zipfile
import os

zip_path = r"z:\inartact-8f9357d6d7e41612ebf28ccfac3af30428464210-main\_agent\zips\docs\actinart-all-docs.zip"
extract_to = r"z:\inartact-8f9357d6d7e41612ebf28ccfac3af30428464210-main\temp_docs_py"

try:
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(extract_to)
    print("Extraction successful")
except Exception as e:
    print(f"Extraction failed: {e}")
