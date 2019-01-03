from craigslist import CraigslistHousing
import settings

def scrape():
    """
    Scrapes craigslist using the parameters in settings.py
    :return: A list of results, each as a dictionary.
                Length of dictionary given by MAX_LISTINGS, below
    """
    # How many of these to scrape at once.
    MAX_LISTINGS = 5

    filters = {'query':settings.query,
                 'search_titles':settings.search_titles,
                 'has_image':settings.has_image,
                 'posted_today':settings.posted_today,
                 'bundle_duplicates':settings.bundle_duplicates,
                 'private_room':settings.private_room,
                 'private_bath':settings.private_bath,
                 'cats_ok':settings.cats_ok,
                 'dogs_ok':settings.dogs_ok,
                 'min_price':settings.min_price,
                 'max_price':settings.max_price,
                 'min_ft2':settings.min_ft2,
                 'max_ft2':settings.max_ft2,
                 'min_bedrooms':settings.min_bedrooms,
                 'max_bedrooms':settings.max_bedrooms,
                 'min_bathrooms':settings.min_bathrooms,
                 'max_bathrooms':settings.max_bathrooms,
                 'no_smoking':settings.no_smoking,
                 'is_furnished':settings.is_furnished,
                 'wheelchair_acccess':settings.wheelchair_acccess,
                 'housing_type':settings.housing_type,
                 'laundry':settings.laundry,
                 'parking':settings.parking,
                 }
    
    
    cl_h = CraigslistHousing(site=settings.cl_site, 
                             category=settings.housing_category, # Apartments for rent only
                             area=settings.sub_city_area,
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