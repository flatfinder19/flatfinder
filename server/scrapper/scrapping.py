from craigslist import CraigslistHousing
import user_creteria

# How many of these to scrape at once, default 5


def scrape(MAX_LISTINGS=5):
    """
    Scrapes craigslist using the parameters in user_creteria.py
    :return: A list of results, each as a dictionary.
                Length of dictionary given by MAX_LISTINGS
    """
    filters = {'query': user_creteria.query,
               'search_titles': user_creteria.search_titles,
               'has_image': user_creteria.has_image,
               'posted_today': user_creteria.posted_today,
               'bundle_duplicates': user_creteria.bundle_duplicates,
               'private_room': user_creteria.private_room,
               'private_bath': user_creteria.private_bath,
               'cats_ok': user_creteria.cats_ok,
               'dogs_ok': user_creteria.dogs_ok,
               'min_price': user_creteria.min_price,
               'max_price': user_creteria.max_price,
               'min_ft2': user_creteria.min_ft2,
               'max_ft2': user_creteria.max_ft2,
               'min_bedrooms': user_creteria.min_bedrooms,
               'max_bedrooms': user_creteria.max_bedrooms,
               'min_bathrooms': user_creteria.min_bathrooms,
               'max_bathrooms': user_creteria.max_bathrooms,
               'no_smoking': user_creteria.no_smoking,
               'is_furnished': user_creteria.is_furnished,
               'wheelchair_acccess': user_creteria.wheelchair_acccess,
               'housing_type': user_creteria.housing_type,
               'laundry': user_creteria.laundry,
               'parking': user_creteria.parking,
               }

    cl_h = CraigslistHousing(site=user_creteria.cl_site,
                             category=user_creteria.housing_category,  # Apartments for rent only
                             area=user_creteria.sub_city_area,
                             filters=filters)

    results = []
    gen = cl_h.get_results(sort_by='newest',
                           geotagged=True,
                           limit=MAX_LISTINGS,
                           include_details=True)

    while True:

        try:
            result = next(gen)
        except StopIteration:
            break
        except Exception:
            continue

        # Try parsing the price.
        price = 0
        try:
            price = float(result["price"].replace("$", ""))
        except Exception:
            pass

        results.append(result)

    return results
