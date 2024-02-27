import requests
import pandas as pd 
from bs4 import BeautifulSoup
import time

standings_url = "https://fbref.com/en/comps/40/Scottish-Premiership-Stats"
data = requests.get(standings_url)
soup = BeautifulSoup(data.text, 'html.parser')
standings_table = soup.select('table.stats_table')[0]

links = [l.get("href") for l in standings_table.find_all('a')]
links = [l for l in links if '/squads/' in l]
team_urls = [f"https://fbref.com/{l}" for l in links]

team_url = team_urls[0]

data = requests.get(team_url)

players = pd.read_html(data.text, match="Standard Stats")[0]
