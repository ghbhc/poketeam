import os
import requests
from pathlib import Path
from bs4 import BeautifulSoup

'''
Script to web scrape images of the original 151 Pokemon
'''

####################
# Get Pokemon Images
####################

# cd to script dir for relative paths
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# make sure static/images dir exists
img_dir = Path('../assets/static/images')
if not img_dir.exists():
    img_dir.mkdir(parents=True, exist_ok=True)

# move on if images alredy has 151 things in it
if len(os.listdir(img_dir)) == 151:
    print(f'{img_dir} already has images for all 151 Pokemon')
else:
    # get images for each pokemon
    images_base_url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'
    print('getting Pokemon images...')
    for n in range(1,152):
        pic = requests.get(f'{images_base_url}/{n:03}.png')
        with open(f'{img_dir}/{n}.png', 'wb') as f:
            f.write(pic.content)
