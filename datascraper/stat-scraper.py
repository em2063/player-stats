import requests
import pandas as pd 
from bs4 import BeautifulSoup
import time

all_players = []
id = 1
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

    players.columns = players.columns.get_level_values(1)
    players = players[["Player", "Nation", "Pos", "Age", "MP", "Starts", "Min", "90s", "Gls", "Ast", "G+A", "G-PK", "PK", "PKatt", "CrdY", "CrdR"]]
    players = players.fillna(0)
    players["Team"] = team_name

    players["id"] = range(id, id + len(players))
    id += len(players)
    
    all_players.append(players)
    time.sleep(2)

player_df = pd.concat(all_players)
print("creating csv...")
player_df.to_csv("players.csv", encoding="utf-8")

    
