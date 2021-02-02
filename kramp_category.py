def get_category_by_id(cat_id: str):
    query_text = """query GetChildCategories($id: ID!) {\n  category(id: $id) {\n    id\n    name\n    childCategories {\n      id\n      name\n      image {\n        src\n        alt\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n """
    query = gql(query_text)
    print(cat_id)
    params = {
        "id": cat_id,
        "isAuthenticated": false,
        "pageSize": 60,
        "page": 1,
        "facetValues": {
            "multi": [],
            "range": [],
            "single": []
        }
    }

    result = client.execute(query, variable_values=params)  # , variable_values=variables
    return result

