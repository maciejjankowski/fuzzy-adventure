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

def create_product_data(category_id, price, unique_product_code, calculation_unit_id = 1, calculation_unit_ratio = 1):
    # """
    # :param data: from parsed json from graphql
    # :return: product data for shoper
    # """
    # # print(data)
    # shoper_category = translate_category_id(data["category_id"])
    
    product = {
        'producer_id': None,
        'category_id': category_id, #required
        'unit_id': None,
        'other_price': None,
        'code': unique_product_code, #required and unique
        'dimension_w': None,
        'dimension_h': None,
        'dimension_l': None,
        'ean': None,
        'pkwiu': None, 
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
        'stock': {
            'price': price,
            'stock': None,
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
            'calculation_unit_id': calculation_unit_id, #required
            'calculation_unit_ratio': calculation_unit_ratio, #required
        },
        'translations': {
            'pl_pl': {
                'name': 'Test zarowka',
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
