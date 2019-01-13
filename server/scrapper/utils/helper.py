import json
from scrapper.models import *

import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
filename = os.path.join(BASE_DIR, "cities.json")

with open(filename) as f:
    data = json.load(f)


def saveCities():
    for item in data:
        latlong = LatitudeLongitude(
            longitude=item["longitude"], latitude=item["latitude"])
        city = CityName(latitude_longitude_id=latlong, name=item["name"], site=item["site"],
                        area_name=item["area_name"], area_key=item["area_key"], state=item["state"],)

        latlong.save()
        city.save()
