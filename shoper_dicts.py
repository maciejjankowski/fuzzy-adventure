from csv_operation import read_csv_to_dict


def remove_accents(input_text):
    strange = 'ŮôῡΒძěἊἦëĐᾇόἶἧзвŅῑἼźἓŉἐÿἈΌἢὶЁϋυŕŽŎŃğûλВὦėἜŤŨîᾪĝžἙâᾣÚκὔჯᾏᾢĠфĞὝŲŊŁČῐЙῤŌὭŏყἀхῦЧĎὍОуνἱῺèᾒῘᾘὨШūლἚύсÁóĒἍŷöὄ' \
              'ЗὤἥბĔõὅῥŋБщἝξĢюᾫაπჟῸდΓÕűřἅгἰშΨńģὌΥÒᾬÏἴქὀῖὣᾙῶŠὟὁἵÖἕΕῨčᾈķЭτἻůᾕἫжΩᾶŇᾁἣჩαἄἹΖеУŹἃἠᾞåᾄГΠКíōĪὮϊὂᾱიżŦИὙἮὖÛĮἳφ' \
              'ᾖἋΎΰῩŚἷРῈĲἁéὃσňİΙῠΚĸὛΪᾝᾯψÄᾭêὠÀღЫĩĈμΆᾌἨÑἑïოĵÃŒŸζჭᾼőΣŻçųøΤΑËņĭῙŘАдὗპŰἤცᾓήἯΐÎეὊὼΘЖᾜὢĚἩħĂыῳὧďТΗἺĬὰὡὬὫÇЩᾧñ' \
              'ῢĻᾅÆßшδòÂчῌᾃΉᾑΦÍīМƒÜἒĴἿťᾴĶÊΊȘῃΟúχΔὋŴćŔῴῆЦЮΝΛῪŢὯнῬũãáἽĕᾗნᾳἆᾥйᾡὒსᾎĆрĀüСὕÅýფᾺῲšŵкἎἇὑЛვёἂΏθĘэᾋΧĉᾐĤὐὴιăąäὺ' \
              'ÈФĺῇἘſგŜæῼῄĊἏØÉПяწДĿᾮἭĜХῂᾦωთĦлðὩზკίᾂᾆἪпἸиᾠώᾀŪāоÙἉἾρаđἌΞļÔβĖÝᾔĨНŀęᾤÓцЕĽŞὈÞუтΈέıàᾍἛśìŶŬȚĳῧῊᾟάεŖᾨᾉςΡმᾊᾸį' \
              'ᾚὥηᾛġÐὓłγľмþᾹἲἔбċῗჰხοἬŗŐἡὲῷῚΫŭᾩὸùᾷĹēრЯĄὉὪῒᾲΜᾰÌœĥტ&-'

    ascii_replacements = 'UoyBdeAieDaoiiZVNiIzeneyAOiiEyyrZONgulVoeETUiOgzEaoUkyjAoGFGYUNLCiIrOOoqaKyCDOOUniOeiIIOSul' \
                         'EySAoEAyooZoibEoornBSEkGYOapzOdGOuraGisPngOYOOIikoioIoSYoiOeEYcAkEtIuiIZOaNaicaaIZEUZaiIaaG' \
                         'PKioIOioaizTIYIyUIifiAYyYSiREIaeosnIIyKkYIIOpAOeoAgYiCmAAINeiojAOYzcAoSZcuoTAEniIRADypUitii' \
                         'IiIeOoTZIoEIhAYoodTIIIaoOOCSonyKaAsSdoACIaIiFIiMfUeJItaKEISiOuxDOWcRoiTYNLYTONRuaaIeinaaoIo' \
                         'ysACRAuSyAypAoswKAayLvEaOtEEAXciHyiiaaayEFliEsgSaOiCAOEPYtDKOIGKiootHLdOzkiaaIPIIooaUaOUAIr' \
                         'AdAKlObEYiINleoOTEKSOTuTEeiaAEsiYUTiyIIaeROAsRmAAiIoiIgDylglMtAieBcihkoIrOieoIYuOouaKerYAOOi' \
                         'iaMaIoht_'
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


def translate_category_id(cat_id):
    shoper_category = kramp_categories[cat_id]
    return shoper_category


def create_product_data(data):
    """

    :param data: from parsed json from graphql
    :return: product data for shoper
    """
    print(data)
    shoper_category = translate_category_id(data["category_id"])

    product = {
        # 'product_id': int,
        'type': int,
        'producer_id': 'null | integer',
        'group_id': int,
        'tax_id': int,
        'category_id': shoper_category,
        'unit_id': 'integer',
        'add_date': 'string',
        'edit_date': 'string',
        'other_price': 'float',
        'promo_price': 'float',
        'code': 'string',
        'dimension_w': 'float',
        'dimension_h': 'float',
        'dimension_l': 'float',
        'ean': 'string',
        'pkwiu': 'string',
        'is_product_of_day': 'boolean',
        'loyalty_score': 'null | integer',
        'loyalty_price': 'null | integer',
        'in_loyalty': 'boolean',
        'bestseller': 'boolean',
        'newproduct': 'boolean',
        'vol_weight': float,
        'gauge_id': 'null | integer',
        'currency_id': 'integer',
        'additional_isbn': 'string',
        'additional_kgo': string,
        'additional_bloz7': integer,
        'additional_bloz12': integer,
        'additional_producer': string,
        'related': [
            integer
        ],
        'options': [
            integer
        ],
        'main_image': null | {
            'gfx_id': integer,
            'order': integer,
            'name': string,
            'unic_name': string,
            'hidden': boolean
        },
        'stock': {
            'stock_id': integer,
            'product_id': integer,
            'extended': boolean,
            'price': float,
            'active': boolean,
            'default': boolean,
            'stock': float,
            'warn_level': null | float,
            'sold': float,
            'code': string,
            'ean': string,
            'weight': float,
            'weight_type': integer,
            'availability_id': integer,
            'delivery_id': integer,
            'gfx_id': null | integer,
            'package': float,
            'price_wholesale': float,
            'price_special': float,
            'calculation_unit_id': integer,
            'calculation_unit_ratio': float
        },
        'translations': {
            'pl_pl': {
                'translation_id': 0,
                # 'product_id': integer, potrzebne czy samo nada?
                'name': data['name'],
                'short_description': data['description'],
                'description': data['description'],
                'active': True,
                'isdefault': boolean,
                'lang_id': integer,
                'seo_title': string,
                'seo_description': data['description'],
                'seo_keywords': string,
                'seo_url': string | null,
                'permalink': string,
                'order': integer,
                'main_page': boolean,
                'main_page_order': integer
            }
        },
        'attributes': {
            '(key)':
                {
                    '(key)': str
                }
        },
        'categories': [
            int
        ],
        'special_offer': {
            'promo_id': int,
            'date_from': str,
            'date_to': str,
            'discount': float,
            'discount_wholesale': float,
            'discount_special': float
        },
        'unit_price_calculation': boolean,
        'children': {
            'id': int,
            'bundle_id': int,
            'stock_id': int,
            'product_id': int,
            'stock': float,
            'order': int
        },
        'feeds_exludes': [
            int
        ]
    }
    return product