const catLink = 'https://www.kramp.com/shop-pl/pl/c/';
var query = {
  operationName: 'Brands',
  variables: { categoryId: 'web1-4045064' },
  query: `query Brands($categoryId: ID!) {
       brandsByCategory(categoryId: $categoryId) {
    id
    name
    __typename
  } 
}`,
};

// https://www.kramp.com/page-data-loader/pl-PL/category/?categoryId=web2-4045759
let catResponse = {
  url:
    '/shop-pl/pl/c/cz%C4%99%C5%9Bci-do-%C5%82adowaczy-czo%C5%82owych--web2-4045759',
  version: '3.0.43',
  pageDataUrl: '/page-data-loader/pl-PL/category/?categoryId=web2-4045759',
  data: {
    documents: [],
    browseType: 'productgroup',
    breadcrumbs: [
      {
        id: 'web1-4045063',
        key: 'web1-4045063',
        text: 'Technika ciągników & Technika pojazdowa',
        href:
          '/shop-pl/pl/c/technika-ci%C4%85gnik%C3%B3w-technika-pojazdowa--web1-4045063',
      },
      {
        id: 'web2-4045759',
        key: 'web2-4045759',
        text: 'Części do ładowaczy czołowych',
        href: null,
      },
    ],
    categoryId: 'web2-4045759',
    displayMode: 'grid',
    pageType: 'category',
    status: 200,
    url:
      '/shop-pl/pl/c/cz%C4%99%C5%9Bci-do-%C5%82adowaczy-czo%C5%82owych--web2-4045759',
  },
};

let c1 = {
  data: {
    category: {
      id: 'web2-4045759',
      name: 'Części do ładowaczy czołowych',
      entries: {
        pagination: {
          page: 1,
          totalPages: 31,
          totalResults: 1822,
          __typename: 'Pagination',
        },
        __typename: 'EntriesInCategory',
      },
      __typename: 'Category',
    },
  },
};

let c2 = {
  data: {
    content: {
      entries: [
        {
          name: 'category_page_generic',
          type: 'category_page_generic',
          contents: {
            category_banner_block: {
              unwrappableEntries: [
                {
                  name: 'Category banner block',
                  type: 'modular_content',
                  contents: {
                    category_banner_guest_bnc: {
                      unwrappableEntries: [
                        {
                          name: 'category_banner_guest_bnc',
                          type: 'category_banner',
                          contents: {
                            call_to_action: {
                              unwrappableEntries: [
                                {
                                  name: 'Call to action',
                                  type: 'modular_content',
                                  contents: {
                                    button_become_new_customer: {
                                      unwrappableEntries: [
                                        {
                                          name: 'button_become_new_customer',
                                          type: 'link_secundair',
                                          contents: {
                                            cta: {
                                              unwrappableEntries: [
                                                {
                                                  name: 'CTA',
                                                  type: 'text',
                                                  text: 'Załóż konto biznesowe',
                                                  dateTime: {},
                                                },
                                              ],
                                            },
                                            url: {
                                              unwrappableEntries: [
                                                {
                                                  name: 'URL',
                                                  type: 'text',
                                                  text:
                                                    'https://www.kramp.com/shop-pl/pl/ms/2682',
                                                  dateTime: {},
                                                },
                                              ],
                                            },
                                          },
                                          dateTime: {},
                                          orderedContentIdentifiers: [
                                            'cta',
                                            'url',
                                          ],
                                        },
                                      ],
                                    },
                                    button_find_a_dealer: {
                                      unwrappableEntries: [
                                        {
                                          name: 'button_find a dealer',
                                          type: 'link_secundair',
                                          contents: {
                                            cta: {
                                              unwrappableEntries: [
                                                {
                                                  name: 'CTA',
                                                  type: 'text',
                                                  text: 'Wyszukiwarka dealerów',
                                                  dateTime: {},
                                                },
                                              ],
                                            },
                                            url: {
                                              unwrappableEntries: [
                                                {
                                                  name: 'URL',
                                                  type: 'text',
                                                  text:
                                                    'https://www.kramp.com/shop-pl/pl/dealers/new-endcustomer',
                                                  dateTime: {},
                                                },
                                              ],
                                            },
                                          },
                                          dateTime: {},
                                          orderedContentIdentifiers: [
                                            'cta',
                                            'url',
                                          ],
                                        },
                                      ],
                                    },
                                  },
                                  dateTime: {},
                                  orderedContentIdentifiers: [
                                    'button_find_a_dealer',
                                    'button_become_new_customer',
                                  ],
                                },
                              ],
                            },
                            header: {
                              unwrappableEntries: [
                                {
                                  name: 'Header',
                                  type: 'text',
                                  text: 'Interesuje Cię zakup produktów?',
                                  dateTime: {},
                                },
                              ],
                            },
                            subheader: {
                              unwrappableEntries: [
                                {
                                  name: 'Subheader',
                                  type: 'text',
                                  text:
                                    'Chcesz dowiedzieć się więcej na temat cen czy interesuje Cię zamawianie bezpośrednie? Jest to możliwe, jeśli jesteś przypisany do dealera w Twoim regionie. Chcesz sprzedawać produkty za pośrednictwem firmy Kramp jako dealer? Zarejestruj się już teraz!',
                                  dateTime: {},
                                },
                              ],
                            },
                            user_status: {
                              unwrappableEntries: [
                                {
                                  name: 'User Status',
                                  type: 'taxonomy',
                                  text: 'logged_out',
                                  dateTime: {},
                                },
                              ],
                            },
                          },
                          dateTime: {},
                          orderedContentIdentifiers: [
                            'header',
                            'subheader',
                            'call_to_action',
                            'user_status',
                          ],
                        },
                      ],
                    },
                  },
                  dateTime: {},
                  orderedContentIdentifiers: ['category_banner_guest_bnc'],
                },
              ],
            },
            user_status: {
              unwrappableEntries: [
                {
                  name: 'User Status',
                  type: 'taxonomy',
                  text: 'logged_out',
                  dateTime: {},
                },
              ],
            },
          },
          dateTime: {},
          orderedContentIdentifiers: ['category_banner_block', 'user_status'],
        },
      ],
    },
  },
};

c3 = {
  data: {
    category: {
      id: 'web2-4045759',
      name: 'Części do ładowaczy czołowych',
      entries: {
        pagination: {
          page: 1,
          totalPages: 31,
          totalResults: 1822,
          __typename: 'Pagination',
        },
        __typename: 'EntriesInCategory',
      },
      __typename: 'Category',
    },
  },
};

c4 = {
  data: {
    category: {
      breadcrumbs: [
        {
          id: 'web1-4045063',
          title: 'Technika ciągników \u0026 Technika pojazdowa',
          __typename: 'Breadcrumb',
        },
        {
          id: 'web2-4045759',
          title: 'Części do ładowaczy czołowych',
          __typename: 'Breadcrumb',
        },
      ],
      __typename: 'Category',
    },
  },
};

c5 = {
  data: {
    category: {
      id: 'web2-4045759',
      breadcrumbs: [
        {
          id: 'web1-4045063',
          title: 'Technika ciągników \u0026 Technika pojazdowa',
          __typename: 'Breadcrumb',
        },
        {
          id: 'web2-4045759',
          title: 'Części do ładowaczy czołowych',
          __typename: 'Breadcrumb',
        },
      ],
      entries: {
        active_filters: [
          {
            field: 'sales_category',
            value: {
              __typename: 'ValueFilter',
              value: 'web2-4045759',
              __typename: 'ValueFilter',
            },
            __typename: 'Filter',
          },
        ],
        facets: [
          {
            name: 'Marka',
            type: 'TERM',
            id: 'brand',
            values: {
              values: [
                {
                  key: '',
                  score: 42,
                  label: '',
                  __typename: 'ValueFacetValue',
                },
                {
                  key: 'Agreto',
                  score: 1,
                  label: 'Agreto',
                  __typename: 'ValueFacetValue',
                },
                {
                  key: 'Battista Porteri',
                  score: 23,
                  label: 'Battista Porteri',
                  __typename: 'ValueFacetValue',
                },
                {
                  key: 'Brand not known',
                  score: 3,
                  label: 'Brand not known',
                  __typename: 'ValueFacetValue',
                },
                {
                  key: 'Fella',
                  score: 2,
                  label: 'Fella',
                  __typename: 'ValueFacetValue',
                },
                {
                  key: 'Forges du saut du tarn',
                  score: 30,
                  label: 'Forges du saut du tarn',
                  __typename: 'ValueFacetValue',
                },
                {
                  key: 'Kramp',
                  score: 37,
                  label: 'Kramp',
                  __typename: 'ValueFacetValue',
                },
                {
                  key: 'Kverneland',
                  score: 31,
                  label: 'Kverneland',
                  __typename: 'ValueFacetValue',
                },
                {
                  key: 'Non Original',
                  score: 11,
                  label: 'Non Original',
                  __typename: 'ValueFacetValue',
                },
                {
                  key: 'SHW',
                  score: 36,
                  label: 'SHW',
                  __typename: 'ValueFacetValue',
                },
                {
                  key: 'Stoll',
                  score: 9,
                  label: 'Stoll',
                  __typename: 'ValueFacetValue',
                },
                {
                  key: 'Trioliet-Mullos',
                  score: 3,
                  label: 'Trioliet-Mullos',
                  __typename: 'ValueFacetValue',
                },
                {
                  key: 'Unbranded',
                  score: 4,
                  label: 'Unbranded',
                  __typename: 'ValueFacetValue',
                },
                {
                  key: 'Vicon',
                  score: 3,
                  label: 'Vicon',
                  __typename: 'ValueFacetValue',
                },
                {
                  key: 'gopart',
                  score: 17,
                  label: 'gopart',
                  __typename: 'ValueFacetValue',
                },
              ],
              __typename: 'ValueFacetValues',
              __typename: 'ValueFacetValues',
            },
            __typename: 'Facet',
          },
          {
            name: 'Kategoria',
            type: 'SINGLE_SELECT',
            id: 'sales_category',
            values: {
              values: [
                {
                  key: 'web3-24045009',
                  score: 1595,
                  label: 'Wyszukiwanie wg producenta/typu',
                  __typename: 'ValueFacetValue',
                },
                {
                  key: 'web3-4055490',
                  score: 2,
                  label: 'Ładowacz czołowy',
                  __typename: 'ValueFacetValue',
                },
                {
                  key: 'web3-4055493',
                  score: 53,
                  label: 'Narzędzia',
                  __typename: 'ValueFacetValue',
                },
                {
                  key: 'web3-4055491',
                  score: 171,
                  label: 'Zęby',
                  __typename: 'ValueFacetValue',
                },
                {
                  key: 'web3-4055492',
                  score: 1,
                  label: 'Akcesoria',
                  __typename: 'ValueFacetValue',
                },
              ],
              __typename: 'ValueFacetValues',
              __typename: 'ValueFacetValues',
            },
            __typename: 'Facet',
          },
        ],
        __typename: 'EntriesInCategory',
      },
      __typename: 'Category',
    },
  },
};

c6 = {
  data: {
    category: {
      id: 'web2-4045759',
      name: 'Części do ładowaczy czołowych',
      childCategories: [
        {
          id: 'web3-24045009',
          name: 'Wyszukiwanie wg producenta/typu',
          image: {
            src:
              'https://images.kramp.com/images/ec/cc/l_search_make_model.jpg?profile=kramps',
            alt: 'L_SEARCH_MAKE_MODEL',
            __typename: 'Image',
          },
          __typename: 'Category',
        },
        {
          id: 'web3-4055490',
          name: 'Ładowacz czołowy',
          image: {
            src:
              'https://images.kramp.com/images/ec/cc/l_search_make_model.jpg?profile=kramps',
            alt: 'L_SEARCH_MAKE_MODEL',
            __typename: 'Image',
          },
          __typename: 'Category',
        },
        {
          id: 'web3-4055493',
          name: 'Narzędzia',
          image: {
            src:
              'https://images.kramp.com/images/e0/76/tl150853.jpg?profile=kramps',
            alt: 'TL150853',
            __typename: 'Image',
          },
          __typename: 'Category',
        },
        {
          id: 'web3-4055491',
          name: 'Zęby',
          image: {
            src:
              'https://images.kramp.com/images/d2/2e/ft29.jpg?profile=kramps',
            alt: 'FT29',
            __typename: 'Image',
          },
          __typename: 'Category',
        },
        {
          id: 'web3-4055492',
          name: 'Akcesoria',
          image: {
            src:
              'https://images.kramp.com/images/d1/13/flds2003_2.jpg?profile=kramps',
            alt: 'FLDS2003_2',
            __typename: 'Image',
          },
          __typename: 'Category',
        },
      ],
      __typename: 'Category',
    },
  },
};

c7 = {
  data: {
    category: {
      id: 'web2-4045759',
      entries: {
        pagination: {
          page: 1,
          totalPages: 31,
          totalResults: 1822,
          __typename: 'Pagination',
        },
        entries: [
          {
            __typename: 'Variant',
            id: 'ticItemGroup-110850449',
            name: 'Elementy montażowe do ładowacza czołowego FT2060 _',
            description: 'Elementy montażowe do ładowacza czołowego FT2060 _',
            brand: { id: 'xx', name: 'xx', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: 'FT2062',
                  description: 'FT2062',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/6e/e5/ft2062.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/6e/e5/ft2062.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/6e/e5/ft2062.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/6e/e5/ft2062.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-110850450',
            name: 'Elementy montażowe - ładowacz czołowy FT2065 _',
            description: 'Elementy montażowe - ładowacz czołowy FT2065 _',
            brand: { id: 'xx', name: 'xx', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: 'FT2066',
                  description: 'FT2066',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/4f/e0/ft2066.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/4f/e0/ft2066.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/4f/e0/ft2066.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/4f/e0/ft2066.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-111142120',
            name: 'Zabezpieczenia łyżek przed ścieraniem typu Chocky',
            description: 'Zabezpieczenia łyżek przed ścieraniem typu Chocky',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'ticItemGroup-111142120',
                  description: '',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/84/13/ticitemgroup-111142120.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/84/13/ticitemgroup-111142120.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/84/13/ticitemgroup-111142120.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/84/13/ticitemgroup-111142120.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-111328493',
            name: 'SHW',
            description: 'SHW',
            brand: { id: 'SHW', name: 'SHW', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: 'RT1',
                  description: 'RT1',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/3d/e2/rt1.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/3d/e2/rt1.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/3d/e2/rt1.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/3d/e2/rt1.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'UNIVERSAL_BIGBALLS_TINES_TD',
                  description: 'UNIVERSAL_BIGBALLS_TINES_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/f5/40/universal_bigballs_tines_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/f5/40/universal_bigballs_tines_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/f5/40/universal_bigballs_tines_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/f5/40/universal_bigballs_tines_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'UNIVERSAL_CURVED_TINES_TD',
                  description: 'UNIVERSAL_CURVED_TINES_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/9b/c4/universal_curved_tines_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/9b/c4/universal_curved_tines_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/9b/c4/universal_curved_tines_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/9b/c4/universal_curved_tines_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-111328494',
            name: 'Gopart',
            description: 'Gopart',
            brand: { id: 'Gopart', name: 'gopart', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: '5193-FT68N',
                  description: '5193-FT68N',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/3e/ce/5193-ft68n.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/3e/ce/5193-ft68n.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/3e/ce/5193-ft68n.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/3e/ce/5193-ft68n.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'UNIVERSAL_CURVED_TINES_TD',
                  description: 'UNIVERSAL_CURVED_TINES_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/9b/c4/universal_curved_tines_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/9b/c4/universal_curved_tines_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/9b/c4/universal_curved_tines_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/9b/c4/universal_curved_tines_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-24157717',
            name: 'Tuleja',
            description: 'Tuleja',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: '5191-1250_h',
                  description: '5191-1250_h',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/39/46/5191-1250_h.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/39/46/5191-1250_h.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/39/46/5191-1250_h.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/39/46/5191-1250_h.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47639948',
            name: 'Tłumik drgań ładowaczy czołowych FLSD 2002 Kramp',
            description: 'Tłumik drgań ładowaczy czołowych FLSD 2002 Kramp',
            brand: { id: 'Kramp', name: 'Kramp', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: 'FLDS2002',
                  description: 'FLDS2002',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/c1/6e/flds2002.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/c1/6e/flds2002.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/c1/6e/flds2002.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/c1/6e/flds2002.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47640045',
            name: 'Nakrętka stożkowa',
            description: 'Nakrętka stożkowa',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: '127306',
                  description: '127306',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/04/7f/127306.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/04/7f/127306.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/04/7f/127306.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/04/7f/127306.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47641204',
            name: 'Ząb ładowacza czołowego',
            description: 'Ząb ładowacza czołowego',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT46',
                  description: 'FT46',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/b4/39/ft46.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/b4/39/ft46.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/b4/39/ft46.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/b4/39/ft46.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'STOLL_CURVED_TINES_TD',
                  description: 'STOLL_CURVED_TINES_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/27/cb/stoll_curved_tines_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/27/cb/stoll_curved_tines_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/27/cb/stoll_curved_tines_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/27/cb/stoll_curved_tines_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47641243',
            name: 'Forges du saut du tarn',
            description: 'Forges du saut du tarn',
            brand: {
              id: 'Forges du saut du tarn',
              name: 'Forges du saut du tarn',
              __typename: 'Brand',
            },
            groupedAssets: {
              images: [
                {
                  id: 'FT66043',
                  description: 'FT66043',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/43/2d/ft66043.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/43/2d/ft66043.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/43/2d/ft66043.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/43/2d/ft66043.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47641246',
            name: 'Ząb ładowacza czołowego',
            description: 'Ząb ładowacza czołowego',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT55331',
                  description: 'FT55331',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/68/7c/ft55331.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/68/7c/ft55331.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/68/7c/ft55331.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/68/7c/ft55331.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'FT55331_TD',
                  description: 'FT55331_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/a9/da/ft55331_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/a9/da/ft55331_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/a9/da/ft55331_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/a9/da/ft55331_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47641247',
            name: 'Ząb ładowacza czołowego - Zaokrąglone',
            description: 'Ząb ładowacza czołowego - Zaokrąglone',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT66043',
                  description: 'FT66043',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/43/2d/ft66043.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/43/2d/ft66043.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/43/2d/ft66043.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/43/2d/ft66043.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47664547',
            name: 'Elementy montażowe do ładowacza czołowego FT2060',
            description: 'Elementy montażowe do ładowacza czołowego FT2060',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT2062',
                  description: 'FT2062',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/6e/e5/ft2062.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/6e/e5/ft2062.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/6e/e5/ft2062.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/6e/e5/ft2062.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47664549',
            name: 'Elementy montażowe - ładowacz czołowy FT2065',
            description: 'Elementy montażowe - ładowacz czołowy FT2065',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT2066',
                  description: 'FT2066',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/4f/e0/ft2066.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/4f/e0/ft2066.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/4f/e0/ft2066.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/4f/e0/ft2066.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47669638',
            name: 'Mechanizm blokujący przednich wideł wóżka widłowego',
            description: 'Mechanizm blokujący przednich wideł wóżka widłowego',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'AR1A',
                  description: 'AR1A',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/af/2d/ar1a.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/af/2d/ar1a.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/af/2d/ar1a.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/af/2d/ar1a.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47688038',
            name: 'Ząb ładowacza czołowego',
            description: 'Ząb ładowacza czołowego',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT43',
                  description: 'FT43',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/d9/02/ft43.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/d9/02/ft43.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/d9/02/ft43.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/d9/02/ft43.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'UNIVERSAL_CURVED_2_TD',
                  description: 'UNIVERSAL_CURVED_2_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/76/0c/universal_curved_2_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/76/0c/universal_curved_2_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/76/0c/universal_curved_2_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/76/0c/universal_curved_2_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'UNIVERSAL_CURVED_3_TD',
                  description: 'UNIVERSAL_CURVED_3_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/d4/c3/universal_curved_3_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/d4/c3/universal_curved_3_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/d4/c3/universal_curved_3_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/d4/c3/universal_curved_3_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47688044',
            name: 'Ząb ładowacza czołowego',
            description: 'Ząb ładowacza czołowego',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT43',
                  description: 'FT43',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/d9/02/ft43.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/d9/02/ft43.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/d9/02/ft43.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/d9/02/ft43.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'UNIVERSAL_CURVED_2_TD',
                  description: 'UNIVERSAL_CURVED_2_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/76/0c/universal_curved_2_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/76/0c/universal_curved_2_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/76/0c/universal_curved_2_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/76/0c/universal_curved_2_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'UNIVERSAL_CURVED_3_TD',
                  description: 'UNIVERSAL_CURVED_3_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/d4/c3/universal_curved_3_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/d4/c3/universal_curved_3_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/d4/c3/universal_curved_3_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/d4/c3/universal_curved_3_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47688046',
            name: 'Battista Porteri',
            description: 'Battista Porteri',
            brand: {
              id: 'Battista Porteri',
              name: 'Battista Porteri',
              __typename: 'Brand',
            },
            groupedAssets: {
              images: [
                {
                  id: 'RT1100Z',
                  description: 'RT1100Z',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/ed/e7/rt1100z.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/ed/e7/rt1100z.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/ed/e7/rt1100z.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/ed/e7/rt1100z.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'UNIVERSAL_BIGBALLS_TINES_TD',
                  description: 'UNIVERSAL_BIGBALLS_TINES_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/f5/40/universal_bigballs_tines_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/f5/40/universal_bigballs_tines_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/f5/40/universal_bigballs_tines_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/f5/40/universal_bigballs_tines_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'UNIVERSAL_CURVED_TINES_TD',
                  description: 'UNIVERSAL_CURVED_TINES_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/9b/c4/universal_curved_tines_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/9b/c4/universal_curved_tines_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/9b/c4/universal_curved_tines_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/9b/c4/universal_curved_tines_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47688047',
            name: 'Ząb ładowacza czołowego',
            description: 'Ząb ładowacza czołowego',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT484326',
                  description: 'FT484326',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/6f/d1/ft484326.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/6f/d1/ft484326.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/6f/d1/ft484326.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/6f/d1/ft484326.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'KVERNELAND_STR_TINES_TD',
                  description: 'KVERNELAND_STR_TINES_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/4c/d2/kverneland_str_tines_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/4c/d2/kverneland_str_tines_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/4c/d2/kverneland_str_tines_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/4c/d2/kverneland_str_tines_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47696321',
            name: 'Lemiesz łyżki profil półstrzałkowy',
            description: 'Lemiesz łyżki profil półstrzałkowy',
            brand: { id: 'Unbranded', name: 'Unbranded', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: 'KT1513_2',
                  description: 'KT1513_2',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/5c/34/kt1513_2.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/5c/34/kt1513_2.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/5c/34/kt1513_2.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/5c/34/kt1513_2.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'KT1016_TD',
                  description: 'KT1016_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/3f/c4/kt1016_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/3f/c4/kt1016_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/3f/c4/kt1016_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/3f/c4/kt1016_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47696322',
            name: 'Lemiesz boczny - profil szyny',
            description: 'Lemiesz boczny - profil szyny',
            brand: { id: 'Unbranded', name: 'Unbranded', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: 'KT7022100',
                  description: 'KT7022100',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/fd/73/kt7022100.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/fd/73/kt7022100.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/fd/73/kt7022100.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/fd/73/kt7022100.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'FT702_TD',
                  description: 'FT702_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/a9/0d/ft702_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/a9/0d/ft702_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/a9/0d/ft702_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/a9/0d/ft702_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47699934',
            name: 'Zestawy haków do ram szybkowymiennych Euro-Norm',
            description: 'Zestawy haków do ram szybkowymiennych Euro-Norm',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT2000GROUP',
                  description: 'FT2000GROUP',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/68/23/ft2000group.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/68/23/ft2000group.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/68/23/ft2000group.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/68/23/ft2000group.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'FT2020',
                  description: 'FT2020',
                  usage: 'asrAlternativeImage',
                  customSizes: [
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/ea/10/ft2020.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/ea/10/ft2020.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/ea/10/ft2020.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/ea/10/ft2020.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'FT2020A',
                  description: 'FT2020A',
                  usage: 'asrAlternativeImage',
                  customSizes: [
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/c8/06/ft2020a.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/c8/06/ft2020a.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/c8/06/ft2020a.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/c8/06/ft2020a.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47699942',
            name: 'Płyta spawana',
            description: 'Płyta spawana',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT940',
                  description: 'FT940',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/a2/40/ft940.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/a2/40/ft940.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/a2/40/ft940.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/a2/40/ft940.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'FT950',
                  description: 'FT950',
                  usage: 'asrAlternativeImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/3d/cc/ft950.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/3d/cc/ft950.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/3d/cc/ft950.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/3d/cc/ft950.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47699943',
            name: 'Zestaw płyt',
            description: 'Zestaw płyt',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT2001',
                  description: 'FT2001',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/d4/6e/ft2001.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/d4/6e/ft2001.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/d4/6e/ft2001.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/d4/6e/ft2001.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47704066',
            name: 'Siłownik hydrauliczny do ładowacza FT20',
            description: 'Siłownik hydrauliczny do ładowacza FT20',
            brand: { id: 'Kramp', name: 'Kramp', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: 'D3570300FT2070',
                  description: 'D3570300FT2070',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/be/e8/d3570300ft2070.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/be/e8/d3570300ft2070.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/be/e8/d3570300ft2070.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/be/e8/d3570300ft2070.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47705646',
            name: 'Rura nasadzana ładowacza',
            description: 'Rura nasadzana ładowacza',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT3010',
                  description: 'FT3010',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/9a/28/ft3010.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/9a/28/ft3010.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/9a/28/ft3010.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/9a/28/ft3010.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'FT3030',
                  description: 'FT3030',
                  usage: 'asrAlternativeImage',
                  customSizes: [
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/41/26/ft3030.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/41/26/ft3030.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/41/26/ft3030.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/41/26/ft3030.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'PROD252832_TD',
                  description: 'PROD252832_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47705649',
            name: 'Hydrauliczny chwytak górny do wideł do palet',
            description: 'Hydrauliczny chwytak górny do wideł do palet',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'SETHOLZGREIFER_5',
                  description: 'SETHOLZGREIFER_5',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/c5/be/setholzgreifer_5.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/c5/be/setholzgreifer_5.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/c5/be/setholzgreifer_5.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/c5/be/setholzgreifer_5.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47705650',
            name: 'Zestaw montażowy Big-Bag, uchwyt na widły do palet',
            description: 'Zestaw montażowy Big-Bag, uchwyt na widły do palet',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT3158_WI',
                  description: 'FT3158_WI',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/6d/3b/ft3158_wi.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/6d/3b/ft3158_wi.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/6d/3b/ft3158_wi.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/6d/3b/ft3158_wi.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'PROD1651947_TD',
                  description: 'PROD1651947_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/cd/61/prod1651947_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/cd/61/prod1651947_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/cd/61/prod1651947_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/cd/61/prod1651947_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47705651',
            name: 'Zestaw hydrauliczny do ładowacza czołowego',
            description: 'Zestaw hydrauliczny do ładowacza czołowego',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT2070_1',
                  description: 'FT2070_1',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/04/49/ft2070_1.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/04/49/ft2070_1.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/04/49/ft2070_1.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/04/49/ft2070_1.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'FT2070_2',
                  description: 'FT2070_2',
                  usage: 'asrAlternativeImage',
                  customSizes: [
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/fc/eb/ft2070_2.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/fc/eb/ft2070_2.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/fc/eb/ft2070_2.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/fc/eb/ft2070_2.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47706685',
            name: 'Płyty kpl.',
            description: 'Płyty kpl.',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT2001A',
                  description: 'FT2001A',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/a6/40/ft2001a.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/a6/40/ft2001a.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/a6/40/ft2001a.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/a6/40/ft2001a.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47706686',
            name: 'Płytki proste do systemu Trima, Berg \u0026 Luntberg',
            description: 'Płytki proste do systemu Trima, Berg \u0026 Luntberg',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT2007_WI',
                  description: 'FT2007_WI',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/21/ab/ft2007_wi.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/21/ab/ft2007_wi.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/21/ab/ft2007_wi.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/21/ab/ft2007_wi.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47706687',
            name: 'Płytki proste',
            description: 'Płytki proste',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT2008_WI',
                  description: 'FT2008_WI',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/15/9f/ft2008_wi.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/15/9f/ft2008_wi.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/15/9f/ft2008_wi.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/15/9f/ft2008_wi.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47707615',
            name: 'Listwa do pługów śnieżnych',
            description: 'Listwa do pługów śnieżnych',
            brand: { id: 'Unbranded', name: 'Unbranded', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: 'SL100015020G',
                  description: 'SL100015020G',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/c0/3b/sl100015020g.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/c0/3b/sl100015020g.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/c0/3b/sl100015020g.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/c0/3b/sl100015020g.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47710881',
            name: 'Listwa Robalon',
            description: 'Listwa Robalon',
            brand: { id: 'Unbranded', name: 'Unbranded', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: 'SLSNEEUWSCHUIFSLIJTSTRIPI',
                  description: 'SLSNEEUWSCHUIFSLIJTSTRIPI',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/f1/59/slsneeuwschuifslijtstripi.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/f1/59/slsneeuwschuifslijtstripi.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/f1/59/slsneeuwschuifslijtstripi.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/f1/59/slsneeuwschuifslijtstripi.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47710885',
            name: 'Listwa do pługów śnieżnych',
            description: 'Listwa do pługów śnieżnych',
            brand: { id: 'Unbranded', name: 'Unbranded', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: 'SL100015020P',
                  description: 'SL100015020P',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/10/15/sl100015020p.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/10/15/sl100015020p.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/10/15/sl100015020p.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/10/15/sl100015020p.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47713527',
            name: 'Widełki do bel',
            description: 'Widełki do bel',
            brand: { id: 'Unbranded', name: 'Unbranded', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: 'TL150853',
                  description: 'TL150853',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/e0/76/tl150853.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/e0/76/tl150853.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/e0/76/tl150853.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/e0/76/tl150853.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47713528',
            name: 'Widły do bel składane',
            description: 'Widły do bel składane',
            brand: { id: 'Unbranded', name: 'Unbranded', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: 'TL150850',
                  description: 'TL150850',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/c4/76/tl150850.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/c4/76/tl150850.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/c4/76/tl150850.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/c4/76/tl150850.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47713530',
            name: 'Widły do bel składane',
            description: 'Widły do bel składane',
            brand: { id: 'Unbranded', name: 'Unbranded', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: 'FT2091_WI',
                  description: 'FT2091_WI',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/f0/55/ft2091_wi.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/f0/55/ft2091_wi.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/f0/55/ft2091_wi.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/f0/55/ft2091_wi.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47715127',
            name: 'Widły wózka widłowego',
            description: 'Widły wózka widłowego',
            brand: { id: 'Unbranded', name: 'Unbranded', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: 'FT3043',
                  description: 'FT3043',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/a9/0d/ft3043.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/a9/0d/ft3043.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/a9/0d/ft3043.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/a9/0d/ft3043.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'PROD252832_TD',
                  description: 'PROD252832_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47716651',
            name: 'Rama ładowacza szybkowymienna Euro',
            description: 'Rama ładowacza szybkowymienna Euro',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT2065',
                  description: 'FT2065',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/20/3e/ft2065.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/20/3e/ft2065.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/20/3e/ft2065.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/20/3e/ft2065.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47716652',
            name: 'Widły do transportowania bel',
            description: 'Widły do transportowania bel',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT2060',
                  description: 'FT2060',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/36/d1/ft2060.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/36/d1/ft2060.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/36/d1/ft2060.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/36/d1/ft2060.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47716653',
            name: 'Rama główna wideł ładowacza',
            description: 'Rama główna wideł ładowacza',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT3155_A',
                  description: 'FT3155_A',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/4c/82/ft3155_a.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/4c/82/ft3155_a.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/4c/82/ft3155_a.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/4c/82/ft3155_a.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'FT3155_B',
                  description: 'FT3155_B',
                  usage: 'asrAlternativeImage',
                  customSizes: [
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/5b/1a/ft3155_b.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/5b/1a/ft3155_b.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/5b/1a/ft3155_b.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/5b/1a/ft3155_b.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'PROD252832_TD',
                  description: 'PROD252832_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47716654',
            name: 'Rama główna ładowacza',
            description: 'Rama główna ładowacza',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT3160_NEW1',
                  description: 'FT3160_NEW1',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/e5/00/ft3160_new1.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/e5/00/ft3160_new1.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/e5/00/ft3160_new1.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/e5/00/ft3160_new1.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'FT3160_01',
                  description: 'FT3160_01',
                  usage: 'asrAlternativeImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/7f/be/ft3160_01.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/7f/be/ft3160_01.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/7f/be/ft3160_01.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/7f/be/ft3160_01.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'FT3160_02',
                  description: 'FT3160_02',
                  usage: 'asrAlternativeImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/30/c0/ft3160_02.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/30/c0/ft3160_02.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/30/c0/ft3160_02.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/30/c0/ft3160_02.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'FT3160_03',
                  description: 'FT3160_03',
                  usage: 'asrAlternativeImage',
                  customSizes: [
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/fa/30/ft3160_03.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/fa/30/ft3160_03.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/fa/30/ft3160_03.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/fa/30/ft3160_03.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'FT3160_NEW2',
                  description: 'FT3160_NEW2',
                  usage: 'asrAlternativeImage',
                  customSizes: [
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/2e/f2/ft3160_new2.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/2e/f2/ft3160_new2.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/2e/f2/ft3160_new2.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/2e/f2/ft3160_new2.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'FT3160_TD',
                  description: 'FT3160_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/6b/af/ft3160_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/6b/af/ft3160_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/6b/af/ft3160_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/6b/af/ft3160_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'PROD252832_TD',
                  description: 'PROD252832_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47716655',
            name: 'Rama ładowacza z prostą płytą',
            description: 'Rama ładowacza z prostą płytą',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT3137',
                  description: 'FT3137',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/6e/e7/ft3137.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/6e/e7/ft3137.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/6e/e7/ft3137.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/6e/e7/ft3137.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'PROD252832_TD',
                  description: 'PROD252832_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47716656',
            name: 'Rama wideł',
            description: 'Rama wideł',
            brand: { id: 'Unbranded', name: 'Unbranded', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: 'FT2082',
                  description: 'FT2082',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/0c/8b/ft2082.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/0c/8b/ft2082.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/0c/8b/ft2082.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/0c/8b/ft2082.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'PROD252832_TD',
                  description: 'PROD252832_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47716658',
            name: 'Element szybkowymienny Euro',
            description: 'Element szybkowymienny Euro',
            brand: { id: 'Unbranded', name: 'Unbranded', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: 'FT2064',
                  description: 'FT2064',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/b0/cc/ft2064.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/b0/cc/ft2064.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/b0/cc/ft2064.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/b0/cc/ft2064.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47716660',
            name: 'Widły do transportowania bel',
            description: 'Widły do transportowania bel',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT2052_WI',
                  description: 'FT2052_WI',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/f3/62/ft2052_wi.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/f3/62/ft2052_wi.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/f3/62/ft2052_wi.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/f3/62/ft2052_wi.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47716661',
            name: 'Rama główna ładowacza',
            description: 'Rama główna ładowacza',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT3151_WI',
                  description: 'FT3151_WI',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/c1/93/ft3151_wi.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/c1/93/ft3151_wi.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/c1/93/ft3151_wi.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/c1/93/ft3151_wi.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
                {
                  id: 'PROD252832_TD',
                  description: 'PROD252832_TD',
                  usage: 'asrTechnicalDrawing',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/7d/88/prod252832_td.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47716662',
            name:
              'Widły do bel zgodne z normą Euro, mocowanie do ramy szybkowymienne',
            description:
              'Widły do bel zgodne z normą Euro, mocowanie do ramy szybkowymienne',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT2053_WI',
                  description: 'FT2053_WI',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/23/43/ft2053_wi.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/23/43/ft2053_wi.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/23/43/ft2053_wi.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/23/43/ft2053_wi.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47716891',
            name: 'Trójpunktowy adapter do normy Euro',
            description: 'Trójpunktowy adapter do normy Euro',
            brand: { id: 'Unbranded', name: 'Unbranded', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: 'TL150852',
                  description: 'TL150852',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/8b/bb/tl150852.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/8b/bb/tl150852.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/8b/bb/tl150852.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/8b/bb/tl150852.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47716966',
            name: 'Wspornik palców',
            description: 'Wspornik palców',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT1207',
                  description: 'FT1207',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/75/e0/ft1207.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/75/e0/ft1207.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/75/e0/ft1207.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/75/e0/ft1207.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47716967',
            name: 'Zestaw szyn',
            description: 'Zestaw szyn',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT3138',
                  description: 'FT3138',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/75/f0/ft3138.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/75/f0/ft3138.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/75/f0/ft3138.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/75/f0/ft3138.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47720821',
            name: 'Forges du saut du tarn',
            description: 'Forges du saut du tarn',
            brand: {
              id: 'Forges du saut du tarn',
              name: 'Forges du saut du tarn',
              __typename: 'Brand',
            },
            groupedAssets: {
              images: [
                {
                  id: 'FT21',
                  description: 'FT21',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/08/17/ft21.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/08/17/ft21.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/08/17/ft21.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/08/17/ft21.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47755731',
            name: 'Chwytak łyżko-krokodyl',
            description: 'Chwytak łyżko-krokodyl',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT3120',
                  description: 'FT3120',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/f2/1f/ft3120.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/f2/1f/ft3120.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/f2/1f/ft3120.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/f2/1f/ft3120.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47755778',
            name: 'Adapter do John Deere (Euro)',
            description: 'Adapter do John Deere (Euro)',
            brand: null,
            groupedAssets: {
              images: [
                {
                  id: 'FT61225',
                  description: 'FT61225',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/35/a1/ft61225.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/35/a1/ft61225.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/35/a1/ft61225.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/35/a1/ft61225.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47781164',
            name: 'Płyta wtyku sprzęgu',
            description: 'Płyta wtyku sprzęgu',
            brand: { id: 'Stoll', name: 'Stoll', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: '1439100',
                  description: '1439100',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/ca/6e/1439100.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/ca/6e/1439100.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/ca/6e/1439100.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/ca/6e/1439100.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Variant',
            id: 'ticItemGroup-47781168',
            name: 'Śruba płaska M16 x 60',
            description: 'Śruba płaska M16 x 60',
            brand: { id: 'Stoll', name: 'Stoll', __typename: 'Brand' },
            groupedAssets: {
              images: [
                {
                  id: '0463370',
                  description: '0463370',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/7d/d9/0463370.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/7d/d9/0463370.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/7d/d9/0463370.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/7d/d9/0463370.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Variant',
          },
          {
            __typename: 'Component',
            id: 'apcComposedProduct-24890070',
            name: 'Siłownik jednostronnego działania 2492410,',
            groupedAssets: {
              images: [
                {
                  id: '165_CYL_F1530_2492410_01_EV',
                  description: '165_CYL_F1530_2492410_01_EV',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/d4/ec/165_cyl_f1530_2492410_01_ev.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/d4/ec/165_cyl_f1530_2492410_01_ev.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/d4/ec/165_cyl_f1530_2492410_01_ev.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/d4/ec/165_cyl_f1530_2492410_01_ev.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Component',
          },
          {
            __typename: 'Component',
            id: 'apcComposedProduct-24890072',
            name: 'Siłownik dwustronnego działania 2477140',
            groupedAssets: {
              images: [
                {
                  id: '165_CYLINDER_F15_2477140_EV',
                  description: '165_CYLINDER_F15_2477140_EV',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/7e/46/165_cylinder_f15_2477140_ev.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/7e/46/165_cylinder_f15_2477140_ev.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/7e/46/165_cylinder_f15_2477140_ev.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/7e/46/165_cylinder_f15_2477140_ev.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Component',
          },
          {
            __typename: 'Component',
            id: 'apcComposedProduct-24890074',
            name: 'Siłownik dwustronnego działania 2477190',
            groupedAssets: {
              images: [
                {
                  id: '165_CYLINDER_F15_2477190_EV',
                  description: '165_CYLINDER_F15_2477190_EV',
                  usage: 'asrPrimaryImage',
                  customSizes: [
                    {
                      key: 'tiny',
                      value:
                        'https://images.kramp.com/images/09/54/165_cylinder_f15_2477190_ev.jpg?profile=small_thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'small',
                      value:
                        'https://images.kramp.com/images/09/54/165_cylinder_f15_2477190_ev.jpg?profile=thumb',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'normal',
                      value:
                        'https://images.kramp.com/images/09/54/165_cylinder_f15_2477190_ev.jpg?profile=kramps',
                      __typename: 'KeyValue',
                    },
                    {
                      key: 'large',
                      value:
                        'https://images.kramp.com/images/09/54/165_cylinder_f15_2477190_ev.jpg?profile=krampd_rd',
                      __typename: 'KeyValue',
                    },
                  ],
                  __typename: 'MediaAsset',
                },
              ],
              __typename: 'GroupedAssets',
            },
            __typename: 'Component',
          },
        ],
        __typename: 'EntriesInCategory',
      },
      __typename: 'Category',
    },
  },
};

c8 = {
  data: {
    category: {
      id: 'web2-4045759',
      groupAssets: {
        videos: [],
        documents: [],
        safetySheets: [],
        __typename: 'GroupedAssets',
      },
      __typename: 'Category',
    },
  },
};

brandsByCategory = {
  data: {
    brandsByCategory: [
      { id: 'Kramp', name: 'Kramp', __typename: 'Brand' },
      {
        id: 'Briggs \u0026 Stratton',
        name: 'Briggs \u0026 Stratton',
        __typename: 'Brand',
      },
      { id: 'Honda', name: 'Honda', __typename: 'Brand' },
      { id: 'MTD', name: 'MTD', __typename: 'Brand' },
      { id: 'Stiga', name: 'Stiga', __typename: 'Brand' },
      { id: 'Castelgarden', name: 'Castelgarden', __typename: 'Brand' },
      { id: 'gopart', name: 'gopart', __typename: 'Brand' },
      { id: 'Solo', name: 'Solo', __typename: 'Brand' },
      { id: 'AL-KO', name: 'AL-KO', __typename: 'Brand' },
      { id: 'Stihl', name: 'Stihl', __typename: 'Brand' },
      { id: 'Unbranded', name: 'Unbranded', __typename: 'Brand' },
      { id: 'Non Original', name: 'Non Original', __typename: 'Brand' },
      { id: 'Kohler', name: 'Kohler', __typename: 'Brand' },
      { id: 'Murray', name: 'Murray', __typename: 'Brand' },
      { id: 'Etesia', name: 'Etesia', __typename: 'Brand' },
      {
        id: 'Simplicity - Snapper',
        name: 'Simplicity - Snapper',
        __typename: 'Brand',
      },
      { id: 'Kawasaki', name: 'Kawasaki', __typename: 'Brand' },
      { id: 'Agri-Fab', name: 'Agri-Fab', __typename: 'Brand' },
      { id: 'NGK', name: 'NGK', __typename: 'Brand' },
      { id: 'Oregon', name: 'Oregon', __typename: 'Brand' },
      {
        id: 'Honda machinery parts',
        name: 'Honda machinery parts',
        __typename: 'Brand',
      },
      { id: 'Optibelt', name: 'Optibelt', __typename: 'Brand' },
      { id: 'Sabo', name: 'Sabo', __typename: 'Brand' },
      { id: 'Wolf-Garten', name: 'Wolf-Garten', __typename: 'Brand' },
      { id: 'Greenworks', name: 'Greenworks', __typename: 'Brand' },
      { id: 'AS-Motor', name: 'AS-Motor', __typename: 'Brand' },
      { id: 'Flymo', name: 'Flymo', __typename: 'Brand' },
      { id: 'Alpina', name: 'Alpina', __typename: 'Brand' },
      { id: 'Gardena', name: 'Gardena', __typename: 'Brand' },
      { id: 'John Deere', name: 'John Deere', __typename: 'Brand' },
      { id: 'Lombardini', name: 'Lombardini', __typename: 'Brand' },
      { id: 'Gloria', name: 'Gloria', __typename: 'Brand' },
      { id: 'Tecomec', name: 'Tecomec', __typename: 'Brand' },
      { id: 'Zama', name: 'Zama', __typename: 'Brand' },
      { id: 'HiKOKI', name: 'HiKOKI', __typename: 'Brand' },
      { id: 'AYP', name: 'AYP', __typename: 'Brand' },
      { id: 'Tuff Torq', name: 'Tuff Torq', __typename: 'Brand' },
      { id: 'Tillotson', name: 'Tillotson', __typename: 'Brand' },
      { id: 'Bahco', name: 'Bahco', __typename: 'Brand' },
      { id: 'Ochsenkopf', name: 'Ochsenkopf', __typename: 'Brand' },
      { id: 'Viking', name: 'Viking', __typename: 'Brand' },
      { id: 'Champion', name: 'Champion', __typename: 'Brand' },
      { id: 'GGP', name: 'GGP', __typename: 'Brand' },
      { id: 'ESM', name: 'ESM', __typename: 'Brand' },
      { id: 'Vapormatic', name: 'Vapormatic', __typename: 'Brand' },
      { id: 'Walbro', name: 'Walbro', __typename: 'Brand' },
      { id: 'Marolex', name: 'Marolex', __typename: 'Brand' },
      { id: 'Agria', name: 'Agria', __typename: 'Brand' },
      { id: 'Donaldson', name: 'Donaldson', __typename: 'Brand' },
      { id: 'Partner', name: 'Partner', __typename: 'Brand' },
      { id: 'Perkins', name: 'Perkins', __typename: 'Brand' },
      { id: 'V-Coil', name: 'V-Coil', __typename: 'Brand' },
      { id: 'Ogród Start', name: 'Ogród Start', __typename: 'Brand' },
      { id: 'Cartec', name: 'Cartec', __typename: 'Brand' },
      { id: 'Birchmeier', name: 'Birchmeier', __typename: 'Brand' },
      { id: 'Peerless', name: 'Peerless', __typename: 'Brand' },
      { id: 'Mc-Culloch', name: 'Mc-Culloch', __typename: 'Brand' },
      { id: 'HiFi Filter', name: 'HiFi Filter', __typename: 'Brand' },
      { id: 'Husqvarna', name: 'Husqvarna', __typename: 'Brand' },
      { id: 'Toro', name: 'Toro', __typename: 'Brand' },
      { id: 'INA/FAG', name: 'INA/FAG', __typename: 'Brand' },
      { id: 'Vallorbe', name: 'Vallorbe', __typename: 'Brand' },
      { id: 'Alfagomma', name: 'Alfagomma', __typename: 'Brand' },
      { id: 'Xtreme', name: 'Xtreme', __typename: 'Brand' },
      { id: 'Hatz', name: 'Hatz', __typename: 'Brand' },
      { id: 'Cellfast', name: 'Cellfast', __typename: 'Brand' },
      { id: 'Fiskars', name: 'Fiskars', __typename: 'Brand' },
      { id: 'Optima', name: 'Optima', __typename: 'Brand' },
      { id: 'MA.RI.NA.', name: 'MA.RI.NA.', __typename: 'Brand' },
      { id: 'Matabi', name: 'Matabi', __typename: 'Brand' },
      { id: 'AGS', name: 'AGS', __typename: 'Brand' },
      { id: 'McBULL', name: 'McBULL', __typename: 'Brand' },
      { id: 'Kubota', name: 'Kubota', __typename: 'Brand' },
      { id: 'Mitsuboshi', name: 'Mitsuboshi', __typename: 'Brand' },
      { id: 'Brill', name: 'Brill', __typename: 'Brand' },
      { id: 'Köppl', name: 'Köppl', __typename: 'Brand' },
      { id: 'Mitsubishi', name: 'Mitsubishi', __typename: 'Brand' },
      { id: 'Lenko', name: 'Lenko', __typename: 'Brand' },
      { id: 'Tallas', name: 'Tallas', __typename: 'Brand' },
      { id: 'MANN-FILTER', name: 'MANN-FILTER', __typename: 'Brand' },
      { id: 'Maxigrip', name: 'Maxigrip', __typename: 'Brand' },
      { id: 'Snapper', name: 'Snapper', __typename: 'Brand' },
      { id: 'Vortex', name: 'Vortex', __typename: 'Brand' },
      { id: 'Bunkowski', name: 'Bunkowski', __typename: 'Brand' },
      { id: 'Wisconsin', name: 'Wisconsin', __typename: 'Brand' },
      { id: 'Yanmar', name: 'Yanmar', __typename: 'Brand' },
      { id: 'Gutbrod', name: 'Gutbrod', __typename: 'Brand' },
      { id: 'NorthStar', name: 'NorthStar', __typename: 'Brand' },
      { id: 'Soppec', name: 'Soppec', __typename: 'Brand' },
      { id: 'Bleispitz', name: 'Bleispitz', __typename: 'Brand' },
      { id: 'Hydrogear', name: 'Hydrogear', __typename: 'Brand' },
      { id: 'Lyra', name: 'Lyra', __typename: 'Brand' },
      { id: 'Ramex', name: 'Ramex', __typename: 'Brand' },
      { id: 'ALBA-Krapf', name: 'ALBA-Krapf', __typename: 'Brand' },
      { id: 'Good Vibrations', name: 'Good Vibrations', __typename: 'Brand' },
      { id: 'Jonsered', name: 'Jonsered', __typename: 'Brand' },
      { id: 'Kramp Blister', name: 'Kramp Blister', __typename: 'Brand' },
      { id: 'Maschio', name: 'Maschio', __typename: 'Brand' },
      { id: 'Bosch Rexroth', name: 'Bosch Rexroth', __typename: 'Brand' },
      { id: 'GDI', name: 'GDI', __typename: 'Brand' },
      { id: 'Lemken', name: 'Lemken', __typename: 'Brand' },
      { id: 'Simplicity', name: 'Simplicity', __typename: 'Brand' },
      { id: 'Timken', name: 'Timken', __typename: 'Brand' },
      { id: 'Tricoflex', name: 'Tricoflex', __typename: 'Brand' },
      { id: 'Adler', name: 'Adler', __typename: 'Brand' },
      { id: 'Fleetguard', name: 'Fleetguard', __typename: 'Brand' },
      { id: 'Atlas', name: 'Atlas', __typename: 'Brand' },
      { id: 'Brennenstuhl', name: 'Brennenstuhl', __typename: 'Brand' },
      { id: 'Daye', name: 'Daye', __typename: 'Brand' },
      { id: 'Spencer', name: 'Spencer', __typename: 'Brand' },
      { id: 'Tielbürger', name: 'Tielbürger', __typename: 'Brand' },
      { id: 'Tukan', name: 'Tukan', __typename: 'Brand' },
      { id: 'Ergo-Schnitt', name: 'Ergo-Schnitt', __typename: 'Brand' },
      { id: 'Kabat', name: 'Kabat', __typename: 'Brand' },
      { id: 'Mahle', name: 'Mahle', __typename: 'Brand' },
      { id: 'Marma', name: 'Marma', __typename: 'Brand' },
      { id: 'Reinz', name: 'Reinz', __typename: 'Brand' },
      { id: 'WILE', name: 'WILE', __typename: 'Brand' },
      {
        id: 'Atco/Qualcast/Suffolk',
        name: 'Atco/Qualcast/Suffolk',
        __typename: 'Brand',
      },
      { id: 'Nilos', name: 'Nilos', __typename: 'Brand' },
      { id: 'Amazone', name: 'Amazone', __typename: 'Brand' },
      { id: 'BKT', name: 'BKT', __typename: 'Brand' },
      { id: 'Brand not known', name: 'Brand not known', __typename: 'Brand' },
      { id: 'Claas', name: 'Claas', __typename: 'Brand' },
      { id: 'Fella', name: 'Fella', __typename: 'Brand' },
      { id: 'VARTA', name: 'VARTA', __typename: 'Brand' },
      { id: 'Voss', name: 'Voss', __typename: 'Brand' },
      { id: 'Zetor', name: 'Zetor', __typename: 'Brand' },
      { id: 'Carlton', name: 'Carlton', __typename: 'Brand' },
      { id: 'Cliplift', name: 'Cliplift', __typename: 'Brand' },
      { id: 'DAB Pumps', name: 'DAB Pumps', __typename: 'Brand' },
      { id: 'Erasure', name: 'Erasure', __typename: 'Brand' },
      { id: 'Fuel Manager', name: 'Fuel Manager', __typename: 'Brand' },
      { id: 'Hella', name: 'Hella', __typename: 'Brand' },
      { id: 'Howard', name: 'Howard', __typename: 'Brand' },
      { id: 'Link Belt', name: 'Link Belt', __typename: 'Brand' },
      { id: 'Niemeyer', name: 'Niemeyer', __typename: 'Brand' },
      { id: 'Ryobi', name: 'Ryobi', __typename: 'Brand' },
      { id: 'Schumacher', name: 'Schumacher', __typename: 'Brand' },
      { id: 'Timberline', name: 'Timberline', __typename: 'Brand' },
      { id: 'Weed Lover', name: 'Weed Lover', __typename: 'Brand' },
      { id: '3M', name: '3M', __typename: 'Brand' },
      { id: 'Annovi Reverberi', name: 'Annovi Reverberi', __typename: 'Brand' },
      { id: 'Arnetoli', name: 'Arnetoli', __typename: 'Brand' },
      { id: 'Banjo', name: 'Banjo', __typename: 'Brand' },
      { id: 'Battioni Pagani', name: 'Battioni Pagani', __typename: 'Brand' },
      { id: 'Blount', name: 'Blount', __typename: 'Brand' },
      { id: 'Borelli', name: 'Borelli', __typename: 'Brand' },
      { id: 'Bosma', name: 'Bosma', __typename: 'Brand' },
      { id: 'Busatis', name: 'Busatis', __typename: 'Brand' },
      { id: 'Case IH', name: 'Case IH', __typename: 'Brand' },
      { id: 'DNP', name: 'DNP', __typename: 'Brand' },
      { id: 'Danfoss', name: 'Danfoss', __typename: 'Brand' },
      { id: 'Dankre', name: 'Dankre', __typename: 'Brand' },
      { id: 'Delphi', name: 'Delphi', __typename: 'Brand' },
      { id: 'Duravis', name: 'Duravis', __typename: 'Brand' },
      { id: 'Emak', name: 'Emak', __typename: 'Brand' },
      { id: 'Ering', name: 'Ering', __typename: 'Brand' },
      { id: 'F\u0026S', name: 'F\u0026S', __typename: 'Brand' },
      { id: 'Gedore', name: 'Gedore', __typename: 'Brand' },
      { id: 'Greensward', name: 'Greensward', __typename: 'Brand' },
      { id: 'Grene Værksted', name: 'Grene Værksted', __typename: 'Brand' },
      { id: 'Groz', name: 'Groz', __typename: 'Brand' },
      { id: 'Haemmerlin', name: 'Haemmerlin', __typename: 'Brand' },
      { id: 'Horsch', name: 'Horsch', __typename: 'Brand' },
      { id: 'Hultafors', name: 'Hultafors', __typename: 'Brand' },
      { id: 'Kerbl', name: 'Kerbl', __typename: 'Brand' },
      { id: 'Kuhn', name: 'Kuhn', __typename: 'Brand' },
      { id: 'Kverneland', name: 'Kverneland', __typename: 'Brand' },
      {
        id: 'Kverneland / Accord',
        name: 'Kverneland / Accord',
        __typename: 'Brand',
      },
      {
        id: 'Kverneland / Maletti',
        name: 'Kverneland / Maletti',
        __typename: 'Brand',
      },
      { id: 'Lucas', name: 'Lucas', __typename: 'Brand' },
      { id: 'Massey Ferguson', name: 'Massey Ferguson', __typename: 'Brand' },
      { id: 'Midlock', name: 'Midlock', __typename: 'Brand' },
      { id: 'Moultrie', name: 'Moultrie', __typename: 'Brand' },
      { id: 'Osram', name: 'Osram', __typename: 'Brand' },
      { id: 'Rex Pro', name: 'Rex Pro', __typename: 'Brand' },
      {
        id: 'Roques et Lecoeur',
        name: 'Roques et Lecoeur',
        __typename: 'Brand',
      },
      { id: 'Scepter', name: 'Scepter', __typename: 'Brand' },
      { id: 'Sonnenschein', name: 'Sonnenschein', __typename: 'Brand' },
      { id: 'Starco', name: 'Starco', __typename: 'Brand' },
      { id: 'Starlock', name: 'Starlock', __typename: 'Brand' },
      { id: 'Stoll', name: 'Stoll', __typename: 'Brand' },
      { id: 'Trioliet-Mullos', name: 'Trioliet-Mullos', __typename: 'Brand' },
      { id: 'Väderstad', name: 'Väderstad', __typename: 'Brand' },
      { id: 'Walterscheid', name: 'Walterscheid', __typename: 'Brand' },
    ],
  },
};

categoryQuery = {
  operationName: 'CategoryPagination',
  variables: {
    id: 'web2-4045758',
    pageSize: 60,
    page: 1,
    facetValues: { multi: [], range: [], single: [] },
    hasEntries: true,
    hasItems: false,
  },
  query:
    'query CategoryPagination($id: ID!, $page: Int!, $pageSize: Int!, $hasItems: Boolean!, $hasEntries: Boolean!, $facetValues: FacetValuesInput) {\n  category(id: $id) {\n    id\n    name\n    entries(page: $page, pageSize: $pageSize, facetValues: $facetValues) @include(if: $hasEntries) {\n      pagination {\n        page\n        totalPages\n        totalResults\n        __typename\n      }\n      __typename\n    }\n    items(page: $page, pageSize: $pageSize, facetValues: $facetValues) @include(if: $hasItems) {\n      pagination {\n        page\n        totalPages\n        totalResults\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n',
};


{"operationName":"Brands","variables":{"categoryId":"web1-4045066"},"query":"query Brands($categoryId: ID!) {\n  brandsByCategory(categoryId: $categoryId) {\n    id\n    name\n    __typename\n  }\n}\n"}



curl 'https://www.kramp.com/graphql/checkout-app' \
  -H 'authority: www.kramp.com' \
  -H 'pragma: no-cache' \
  -H 'cache-control: no-cache' \
  -H 'sec-ch-ua: "Google Chrome";v="87", " Not;A Brand";v="99", "Chromium";v="87"' \
  -H 'dnt: 1' \
  -H 'ctx-corporate-identity: kramp' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36' \
  -H 'content-type: application/json' \
  -H 'accept: */*' \
  -H 'ctx-locale: pl_PL' \
  -H 'origin: https://www.kramp.com' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://www.kramp.com/' \
  -H 'accept-language: pl,en-US;q=0.9,en;q=0.8' \
  -H 'cookie: _csrf-buyer-journey-secret=_Wg3zUSplRwI8iag5vX157RB; USER_LOCALE=pl_PL; GDPR_COOKIES_ACCEPT=STANDARD; CAT_BROWSING_TYPE=product; KWS_LANGCOUNTRY=pl-pl; _csrf-buyer-journey-value=QAhlUoxr-xoiDgOd9sqWMOu2yDKODe9MKujY' \
  --data-binary $'{"operationName":"Brands","query":"query Brands($categoryId: ID\u0021) {\\n  brandsByCategory(categoryId: $categoryId) {\\n    id\\n    name\\n    __typename\\n  }\\n}\\n"}' \
  --compressed