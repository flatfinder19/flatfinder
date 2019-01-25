import math
import statistics

def coord_distance(lat1, lon1, lat2, lon2):
    """
    Finds the distance between two pairs of latitude and longitude.
    :param lat1: Point 1 latitude.
    :param lon1: Point 1 longitude.
    :param lat2: Point two latitude.
    :param lon2: Point two longitude.
    :return: Kilometer distance.
    """
    lon1, lat1, lon2, lat2 = map(math.radians, [lon1, lat1, lon2, lat2])
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = math.sin(dlat/2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon/2)**2
    c = 2 * math.asin(math.sqrt(a))
    miles = c * 3957.116
    return miles

def mean_geometric_distance(geotag, location_list):
    """
    Calculate the mean distance from an apartment geotag to a list of locations

    :param geotag: The geotag field of a Craigslist result.
    :param location_list: A list of locations chosen by the user, each as a (lat, lon) tuple
    
    :return: The mean distance to all the locations.
    """
    distances = []
    for loc in location_list:
        dist = coord_distance(loc[0], loc[1], geotag[0], geotag[1])
        distances.append(dist)

    return statistics.mean(distances)