import json
with open("file3.json") as f:
    data = json.load(f)

stateCities = []
for item in data:
    if "area_key" in item:
        n = {
            "name": item["name"],
            "state": item["state"],
            "site": item["site"],
            "area_key": item["area_key"],
            "area_name": item["area_name"].replace("\\", "").replace("/", ""),
            "latitude": item["latitude"],
            "longitude": item["longitude"],
        }
    else:
        n = {
            "name": item["name"],
            "state": item["state"],
            "site": item["site"],
            "area_key": "",
            "area_name": "",
            "latitude": item["latitude"],
            "longitude": item["longitude"],
        }

    stateCities.append(n)


with open("final.json", "w") as file:
    json.dump(stateCities, file)
