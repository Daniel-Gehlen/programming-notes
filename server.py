import os

def get_doc_structure():
    base_path = 'docs'
    structure = {}

    for root, dirs, files in os.walk(base_path):
        rel_path = os.path.relpath(root, base_path)
        if rel_path == '.':
            continue

        folder = rel_path.replace('\\', '/')
        md_files = [f for f in files if f.endswith('.md')]
        if md_files:
            structure[folder] = md_files

    return structure
