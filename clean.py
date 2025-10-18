import json

def safe_str(value):
    """Convert any value to a clean string (or empty string if None/NaN)."""
    if value is None:
        return ""
    if isinstance(value, float) and (value != value):  
        return ""
    return str(value).strip()


with open("csvjson.json", "r", encoding="utf-8") as f:
    data = json.load(f)

cleaned_data = []

for player in data:

    name = safe_str(player.get("", ""))
    if not name:
        continue

    cleaned_player = {
        "name": name,
        "points_per_game": safe_str(player.get("__3", "")),
        "rebounds_per_game": safe_str(player.get("__4", "")),
        "assists_per_game": safe_str(player.get("__5", "")),
        "win_shares": safe_str(player.get("__6", ""))
    }
    cleaned_data.append(cleaned_player)


with open("players_clean.json", "w", encoding="utf-8") as f:
    json.dump(cleaned_data, f, indent=2)

print(f"✅ Cleaned {len(cleaned_data)} players and saved to players_clean.json")
