from csv import DictWriter
import csv


def append_dict_as_row(file_name, dict_of_elem, field_names):
    # Open file in append mode
    with open(file_name, 'a+', encoding="utf-8", newline='') as write_obj:
        # Create a writer object from csv module
        dict_writer = DictWriter(write_obj, fieldnames=field_names)
        # Add dictionary as wor in the csv
        dict_writer.writerow(dict_of_elem)


def read_csv_to_dict(file_name):
    with open(file_name, 'r', newline='') as data:
        return
