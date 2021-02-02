from shoper_api import create_category_api, GenericApiException
from shoper_dicts import create_category_data
from csv_operation import append_dict_as_row


MAX_RETRIES = 6


def create_category(old_id, name, parent_id, session=None):
    global urs_err
    retry_request = MAX_RETRIES

    if type(parent_id) is not int:
        parent_id = 0

    end_cat = create_category_data(parent_id=parent_id, name=name, old_shop_id=old_id)
    while retry_request >= 0:
        try:
            new_id = create_category_api(end_cat, session=None)
            new_old_id_dict = {"old_id": old_id, "new_id": new_id}
            append_dict_as_row(file_name="odl_new_category_id.csv",
                            dict_of_elem=new_old_id_dict,
                            field_names=["old_id", "new_id"]
                            )
            return new_id  # zwraca new_category_id, żeby podłączać podrzędne kategorie

        except GenericApiException as exception:
            print(exception)
            data['translations']['pl_PL']['seo_url'] += str("_" + str(urs_err))
            urs_err += 1
            print("creating product:", "\n")
            retry_request -= 1