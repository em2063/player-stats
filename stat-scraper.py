import requests
import pandas as pd 
from bs4 import BeautifulSoup
import time

all_players = []
standings_url = "https://fbref.com/en/comps/40/Scottish-Premiership-Stats"
data = requests.get(standings_url)
soup = BeautifulSoup(data.text, 'html.parser')
standings_table = soup.select('table.stats_table')[0]

links = [l.get("href") for l in standings_table.find_all('a')]
links = [l for l in links if '/squads/' in l]
team_urls = [f"https://fbref.com/{l}" for l in links]

for team_url in team_urls:
    team_name = team_url.split('/')[-1].replace("-Stats", "").replace("-", " ")
    data = requests.get(team_url)
    players = pd.read_html(data.text, match="Standard Stats")[0]
    remove_cols = ['Per 90 Minutes']
    players = players.drop(columns=remove_cols)
    players["Team"] = team_name
    all_players.append(players)
    time.sleep(2)

player_df = pd.concat(all_players)
print("creating csv...")
player_df.to_csv("players.csv")

    
