from craigslist import CraigslistHousing
from dateutil.parser import parse
import time
import settings


def scrape():
    """
    Scrapes craigslist for a certain geographic area, and finds the latest listings.
    :param area:
    :return: A list of results.
    """
    cl_h = CraigslistHousing(site=settings.CRAIGSLIST_SITE, category=settings.CRAIGSLIST_HOUSING_SECTION,
                             filters={'max_price': settings.MAX_PRICE, "min_price": settings.MIN_PRICE})

    results = []
    gen = cl_h.get_results(sort_by='newest', 
                           geotagged=True, 
                           limit=settings.MAX_LISTINGS,
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

listings = scrape()
listings