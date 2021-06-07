from csv_operation import read_csv_to_dict


def remove_accents(input_text):
    strange = 'ŮôῡΒძěἊἦëĐᾇόἶἧзвŅῑἼźἓŉἐÿἈΌἢὶЁϋυŕŽŎŃğûλВὦėἜŤŨîᾪĝžἙâᾣÚκὔჯᾏᾢĠфĞὝŲŊŁČῐЙῤŌὭŏყἀхῦЧĎὍОуνἱῺèᾒῘᾘὨШūლἚύсÁóĒἍŷöὄ' \
              'ЗὤἥბĔõὅῥŋБщἝξĢюᾫაπჟῸდΓÕűřἅгἰშΨńģὌΥÒᾬÏἴქὀῖὣᾙῶŠὟὁἵÖἕΕῨčᾈķЭτἻůᾕἫжΩᾶŇᾁἣჩαἄἹΖеУŹἃἠᾞåᾄГΠКíōĪὮϊὂᾱიżŦИὙἮὖÛĮἳφ' \
              'ᾖἋΎΰῩŚἷРῈĲἁéὃσňİΙῠΚĸὛΪᾝᾯψÄᾭêὠÀღЫĩĈμΆᾌἨÑἑïოĵÃŒŸζჭᾼőΣŻçųøΤΑËņĭῙŘАдὗპŰἤცᾓήἯΐÎეὊὼΘЖᾜὢĚἩħĂыῳὧďТΗἺĬὰὡὬὫÇЩᾧñ' \
              'ῢĻᾅÆßшδòÂчῌᾃΉᾑΦÍīМƒÜἒĴἿťᾴĶÊΊȘῃΟúχΔὋŴćŔῴῆЦЮΝΛῪŢὯнῬũãáἽĕᾗნᾳἆᾥйᾡὒსᾎĆрĀüСὕÅýფᾺῲšŵкἎἇὑЛვёἂΏθĘэᾋΧĉᾐĤὐὴιăąäὺ' \
              'ÈФĺῇἘſგŜæῼῄĊἏØÉПяწДĿᾮἭĜХῂᾦωთĦлðὩზკίᾂᾆἪпἸиᾠώᾀŪāоÙἉἾρаđἌΞļÔβĖÝᾔĨНŀęᾤÓцЕĽŞὈÞუтΈέıàᾍἛśìŶŬȚĳῧῊᾟάεŖᾨᾉςΡმᾊᾸį' \
              'ᾚὥηᾛġÐὓłγľмþᾹἲἔбċῗჰხοἬŗŐἡὲῷῚΫŭᾩὸùᾷĹēრЯĄὉὪῒᾲΜᾰÌœĥტ&-–'

    ascii_replacements = 'UoyBdeAieDaoiiZVNiIzeneyAOiiEyyrZONgulVoeETUiOgzEaoUkyjAoGFGYUNLCiIrOOoqaKyCDOOUniOeiIIOSul' \
                         'EySAoEAyooZoibEoornBSEkGYOapzOdGOuraGisPngOYOOIikoioIoSYoiOeEYcAkEtIuiIZOaNaicaaIZEUZaiIaaG' \
                         'PKioIOioaizTIYIyUIifiAYyYSiREIaeosnIIyKkYIIOpAOeoAgYiCmAAINeiojAOYzcAoSZcuoTAEniIRADypUitii' \
                         'IiIeOoTZIoEIhAYoodTIIIaoOOCSonyKaAsSdoACIaIiFIiMfUeJItaKEISiOuxDOWcRoiTYNLYTONRuaaIeinaaoIo' \
                         'ysACRAuSyAypAoswKAayLvEaOtEEAXciHyiiaaayEFliEsgSaOiCAOEPYtDKOIGKiootHLdOzkiaaIPIIooaUaOUAIr' \
                         'AdAKlObEYiINleoOTEKSOTuTEeiaAEsiYUTiyIIaeROAsRmAAiIoiIgDylglMtAieBcihkoIrOieoIYuOouaKerYAOOi' \
                         'iaMaIoht_-'
    translator = str.maketrans(strange, ascii_replacements)
    return input_text.translate(translator)


def create_category_data(parent_id, old_shop_id, name):
    no_accents_name = remove_accents(name)
    
    category = {
        'parent_id': parent_id,  # int
        'order': 0,  # int
        'translations': {
            'pl_PL': {
                'name': name,
                'description': old_shop_id,
                'description_bottom': "",
                'seo_title': name,
                'seo_description': name,
                'seo_keywords': name,
                'seo_url': no_accents_name.replace(' ', '_'),
                'active': True
            }
        }
    }
    return category


kramp_categories = read_csv_to_dict()


def translate_category_id(kramp_category_id):
    shoper_category = get_shoper_category(kramp_category_id)
    return shoper_category

def create_product_data():
    # """
    # :param data: from parsed json from graphql
    # :return: product data for shoper
    # """
    # # print(data)
    # shoper_category = translate_category_id(data["category_id"])
    
    product = {
        'producer_id': None,
        'category_id': 1, #required
        'unit_id': None,
        'other_price': None,
        'code': "1234", #required
        'dimension_w': None,
        'dimension_h': None,
        'dimension_l': None,
        'ean': None,
        'pkwiu': "1234", #required
        'is_product_of_day': False,
        'vol_weight': None,
        'gauge_id': None,
        'currency_id': None,
        'additional_isbn': None,
        'additional_kgo': None,
        'additional_bloz7': None,
        'additional_bloz12': None,
        'additional_gtu': None,
        'additional_producer': None,
        'related': [
            None
        ],
        'options': [
        ],
        'stock': {
            'price': 125.5,
            'stock': None,
            'warehouses': {
                '(key)': 
                    {
                        '(key)': 'float'
                    }
                },
            'stock_relative': None,
            'warn_level': None,
            'sold': None,
            'sold_relative': None,
            'weight': None,
            'availability_id': None,
            'delivery_id': None,
            'gfx_id': None,
            'package': None,
            'price_wholesale': None,
            'price_special': None,
            'calculation_unit_id': None,
            'calculation_unit_ratio': None
        },
        'translations': {
            'pl_pl': {
                'name': 'Czarna zarowka',
                'short_description': None,
                'description': None,
                'active': True,
                'seo_title': None,
                'seo_description': None,
                'seo_keywords': None,
                'seo_url': None,
                'order': None,
                'main_page': None,
                'main_page_order': None
            }
        },
        'attributes': {
            '(key)': 'string'
        },
        'categories': [
            'integer'
        ],
        'special_offer': {
            'promo_id': 'integer',
            'date_from': 'string',
            'date_to': 'string',
            'discount': 'float',
            'discount_wholesale': 'float',
            'discount_special': 'float'
        },
        'unit_price_calculation': 'boolean',
        'feeds_exludes': [
            'integer'
        ]
    }
    return product

def create_image_data(product_id, image_name, image_url):

    image = {
        'product_id': product_id,
        'name': image_name,
        'file': "",
        'url': image_url,
        'content': "",
        'hidden': False,
        'translations': {
            'pl_pl': {
                'name': image_name
            }
        }
    }

    return image
