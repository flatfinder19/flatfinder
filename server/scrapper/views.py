from django.shortcuts import render

from . models import CityName


def index(request):
    page = request.GET.get("page")
    if page is None:
        page = 1
    else:
        page = int(page)

    display = request.GET.get("display")
    if display is None:
        display = 10
    else:
        display = int(display)

    query = CityName.objects

    total = query.count()
    total_pages = total // display

    # check that the page url is valid
    if page > total_pages or page < 1:
        error = True
    else:
        error = False

    first_page = True if page == 1 else False
    last_page = True if page == total_pages else False

    start = display * (page - 1)
    end = start + display

    cities = query.order_by("name")[start:end]

    # if first_page:
    #   page_links = [{"page_no": page_no, "active": False} for page_no in range(2, 11)]
    # elif last_page:
    #   if total_pages > 8:
    #     linksBefore = total_pages - 10
    #   else:
    #     linksBefore = 0
    #   page_links = [{"page_no": page_no, "active": False}
    #                 for page_no in range(linksBefore, total_pages)]

    context = {
        "cities": cities,
        # "page_links": [p for p in range()]
        "display": display,
        "page": page,
        "first_page": first_page,
        "last_page": last_page,
        "total_pages": total_pages,
        "error": error
    }

    return render(request, 'cities/index.html', context)
