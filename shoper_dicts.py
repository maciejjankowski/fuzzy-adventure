

def remove_accents(input_text):
    strange = 'ŮôῡΒძěἊἦëĐᾇόἶἧзвŅῑἼźἓŉἐÿἈΌἢὶЁϋυŕŽŎŃğûλВὦėἜŤŨîᾪĝžἙâᾣÚκὔჯᾏᾢĠфĞὝŲŊŁČῐЙῤŌὭŏყἀхῦЧĎὍОуνἱῺèᾒῘᾘὨШūლἚύсÁóĒἍŷöὄ' \
              'ЗὤἥბĔõὅῥŋБщἝξĢюᾫაπჟῸდΓÕűřἅгἰშΨńģὌΥÒᾬÏἴქὀῖὣᾙῶŠὟὁἵÖἕΕῨčᾈķЭτἻůᾕἫжΩᾶŇᾁἣჩαἄἹΖеУŹἃἠᾞåᾄГΠКíōĪὮϊὂᾱიżŦИὙἮὖÛĮἳφ' \
              'ᾖἋΎΰῩŚἷРῈĲἁéὃσňİΙῠΚĸὛΪᾝᾯψÄᾭêὠÀღЫĩĈμΆᾌἨÑἑïოĵÃŒŸζჭᾼőΣŻçųøΤΑËņĭῙŘАдὗპŰἤცᾓήἯΐÎეὊὼΘЖᾜὢĚἩħĂыῳὧďТΗἺĬὰὡὬὫÇЩᾧñ' \
              'ῢĻᾅÆßшδòÂчῌᾃΉᾑΦÍīМƒÜἒĴἿťᾴĶÊΊȘῃΟúχΔὋŴćŔῴῆЦЮΝΛῪŢὯнῬũãáἽĕᾗნᾳἆᾥйᾡὒსᾎĆрĀüСὕÅýფᾺῲšŵкἎἇὑЛვёἂΏθĘэᾋΧĉᾐĤὐὴιăąäὺ' \
              'ÈФĺῇἘſგŜæῼῄĊἏØÉПяწДĿᾮἭĜХῂᾦωთĦлðὩზკίᾂᾆἪпἸиᾠώᾀŪāоÙἉἾρаđἌΞļÔβĖÝᾔĨНŀęᾤÓцЕĽŞὈÞუтΈέıàᾍἛśìŶŬȚĳῧῊᾟάεŖᾨᾉςΡმᾊᾸį' \
              'ᾚὥηᾛġÐὓłγľмþᾹἲἔбċῗჰხοἬŗŐἡὲῷῚΫŭᾩὸùᾷĹēრЯĄὉὪῒᾲΜᾰÌœĥტ&'

    ascii_replacements = 'UoyBdeAieDaoiiZVNiIzeneyAOiiEyyrZONgulVoeETUiOgzEaoUkyjAoGFGYUNLCiIrOOoqaKyCDOOUniOeiIIOSul' \
                         'EySAoEAyooZoibEoornBSEkGYOapzOdGOuraGisPngOYOOIikoioIoSYoiOeEYcAkEtIuiIZOaNaicaaIZEUZaiIaaG' \
                         'PKioIOioaizTIYIyUIifiAYyYSiREIaeosnIIyKkYIIOpAOeoAgYiCmAAINeiojAOYzcAoSZcuoTAEniIRADypUitii' \
                         'IiIeOoTZIoEIhAYoodTIIIaoOOCSonyKaAsSdoACIaIiFIiMfUeJItaKEISiOuxDOWcRoiTYNLYTONRuaaIeinaaoIo' \
                         'ysACRAuSyAypAoswKAayLvEaOtEEAXciHyiiaaayEFliEsgSaOiCAOEPYtDKOIGKiootHLdOzkiaaIPIIooaUaOUAIr' \
                         'AdAKlObEYiINleoOTEKSOTuTEeiaAEsiYUTiyIIaeROAsRmAAiIoiIgDylglMtAieBcihkoIrOieoIYuOouaKerYAOOi'\
                         'iaMaIoht'
    translator = str.maketrans(strange, ascii_replacements)
    return input_text.translate(translator)


def get_end_category(parent_id, old_shop_id, name):
    no_accents_name = remove_accents(name)
    no_accents_name = no_accents_name.replace("-", "_")
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


# def create_products_list(data):
#     for i in range(len(data)):
#         product = {
#             'product_id': data[i][''], # integer,
#             'type': data[i][''], # integer,
#             'producer_id': data[i][''],  # null|integer,
#             'group_id': data[i][''],  # integer,
#             'tax_id': data[i][''],  # integer,
#             'category_id': data[i][''],  # integer,
#             'unit_id': data[i][''], #integer,
#             'add_date': data[i][''], #string,
#             'edit_date': data[i][''], #string,
#             'other_price': data[i][''], #float,
#             'promo_price': data[i][''], #float,
#             'code': data[i][''], #tring,
#             'dimension_w': data[i][''], #float,
#             'dimension_h': data[i][''], #float,
#             'dimension_l': data[i][''], #float,
#             'ean': data[i][''], #string,
#             'pkwiu': data[i][''], #string,
#             'is_product_of_day': data[i][''], #boolean,
#             'loyalty_score': data[i][''], #null|integer,
#             'loyalty_price': data[i][''], #null|integer,
#             'in_loyalty': data[i][''], #boolean,
#             'bestseller': data[i][''], #boolean,
#             'newproduct': data[i][''], #boolean,
#             'vol_weight': data[i][''], #float,
#             'gauge_id': data[i][''], #null|integer,
#             'currency_id': data[i][''], #integer,
#             'additional_isbn': data[i][''], #string,
#             'additional_kgo': data[i][''], #string,
#             'additional_bloz7': data[i][''], #integer,
#             'additional_bloz12': data[i][''], #integer,
#             'additional_producer': data[i][''], #string,
#             'related': [
#                 data[i][''],  # integer
#             ],
#             'options': [
#                 data[i][''],  # integer
#             ],
#             'main_image': data[i][''], {  # or null
#                 'gfx_id': data[i][''], # integer,
#                 'order': data[i][''],  # integer,
#                 'name': data[i][''],  # string,
#                 'unic_name': data[i][''],  # string,
#                 'hidden': data[i][''],  # boolean
#             },
#             'stock': {
#                 'stock_id': data[i][''], # integer,
#                 'product_id': data[i][''], #  integer,
#                 'extended': data[i][''], # boolean,
#                 'price': data[i][''], # float,
#                 'active': data[i][''], # boolean,
#                 'default': data[i][''], # boolean,
#                 'stock': data[i][''], # float,
#                 'warn_level': data[i][''], # null|float,
#                 'sold': data[i][''], # float,
#                 'code': data[i][''], # string,
#                 'ean': data[i][''], # string,
#                 'weight': data[i][''], # float,
#                 'weight_type': data[i][''], # integer,
#                 'availability_id': data[i][''], # integer,
#                 'delivery_id': data[i][''], # integer,
#                 'gfx_id': data[i][''], # null|integer,
#                 'package': data[i][''], # float,
#                 'price_wholesale': data[i][''], # float,
#                 'price_special': data[i][''], # float,
#                 'calculation_unit_id': data[i][''], # integer,
#                 'calculation_unit_ratio': data[i][''], # float
#             },
#             'translations': {
#                 '(pl_PL)': {
#                     'translation_id':  data[i][''], # integer,
#                     'product_id': data[i][''], # integer,
#                     'name': data[i][''], # string,
#                     'short_description': data[i][''], # string,
#                     'description': data[i][''], # string,
#                     'active': data[i][''], # boolean,
#                     'isdefault': data[i][''], # boolean,
#                     'lang_id': data[i][''], # integer,
#                     'seo_title': data[i][''], # string,
#                     'seo_description': data[i][''], # string,
#                     'seo_keywords': data[i][''], # string,
#                     'seo_url': data[i][''], # string|null,
#                     'permalink': data[i][''], # string,
#                     'order': data[i][''], # integer,
#                     'main_page': data[i][''], # boolean,
#                     'main_page_order': data[i][''], # integer
#                 },
#             },
#             'attributes': {
#                 '(key)': {
#                     '(key)': data[i][''], # string
#                 }
#             },
#             'categories': [
#                 data[i][''],  #
#                 integer
#             ],
#             'special_offer': {
#                 'promo_id':  data[i][''], #integer,
#                 'date_from':  data[i][''], #string,
#                 'date_to': data[i][''], # string,
#                 'discount': data[i][''], # float,
#                 'discount_wholesale': data[i][''], # float,
#                 'discount_special': data[i][''], # float
#             },
#             'unit_price_calculation': data[i][''], # boolean,
#             'children': {
#                 'id': data[i][''], # integer,
#                 'bundle_id': data[i][''], # integer,
#                 'stock_id': data[i][''], # integer,
#                 'product_id': data[i][''], # integer,
#                 'stock': data[i][''], # float,
#                 'order': data[i][''], # integer
#             },
#         },
#         return data
