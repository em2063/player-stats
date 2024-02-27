import requests
import pandas as pd 
from bs4 import BeautifulSoup

standings_url = "https://fbref.com/en/comps/40/Scottish-Premiership-Stats"
data = requests.get(standings_url)
soup = BeautifulSoup(data.text, 'html.parser')
standings_table = soup.select('table.stats_table')[0]

links = [l.get("href") for l in standings_table.find_all('a')]
links = [l for l in links if '/squads/' in l]
team_urls = [f"https://fbref.com/{l}" for l in links]

print(team_urls)