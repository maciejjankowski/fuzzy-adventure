from csv import DictWriter
import csv


def append_dict_as_row(file_name, dict_of_elem, field_names):
    # Open file in append mode
    with open(file_name, 'a+', encoding="utf-8", newline='') as write_obj:
        # Create a writer object from csv module
        dict_writer = DictWriter(write_obj, fieldnames=field_names)
        # Add dictionary as wor in the csv
        dict_writer.writerow(dict_of_elem)


def read_csv_to_dict(file_name='category_map.csv'):
    """

    :param file_name: file name.csv
    :return: {'old_id': 'id in shoper', }
    """
    with open(file_name, 'r') as csv_file:
        old_now_id_dict = {}
        read_csv = csv.reader(csv_file, delimiter=',')
        for row in read_csv:
            old_now_id_dict[row[0]] = row[1]
        return old_now_id_dict
