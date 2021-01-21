// attributes.js

response = {
  data: {
    item: {
      __typename: 'Item',
      id: '98510',
      customAttributes: [
        {
          id: 'alexis#custom#item-id-value#98510',
          attribute: {
            id: 'alexis#custom#item-id',
            dataType: 'TEXT',
            description: 'Numer części',
            unit: null,
            __typename: 'Attribute',
          },
          values: ['98510'],
          __typename: 'AttributeValue',
        },
        {
          id: 'alexis#custom#item-quantity-unit-value#98510',
          attribute: {
            id: 'alexis#custom#item-quantity-unit',
            dataType: 'TEXT',
            description: 'Jednostka',
            unit: null,
            __typename: 'Attribute',
          },
          values: ['sztuka'],
          __typename: 'AttributeValue',
        },
        {
          id: 'alexis#custom#item-rounding-quantity-value#98510',
          attribute: {
            id: 'alexis#custom#item-rounding-quantity',
            dataType: 'TEXT',
            description: 'Ilość (zaokrąglenie)',
            unit: null,
            __typename: 'Attribute',
          },
          values: ['100'],
          __typename: 'AttributeValue',
        },
      ],
      variant: {
        id: 'ticItemGroup-52253786',
        displayableAttributes: [
          {
            id: 'ticItemGroup-52253786#attLongDescription#value',
            attribute: {
              id: 'attLongDescription',
              dataType: 'TEXT',
              description: 'Opis produktu',
              unit: null,
              __typename: 'Attribute',
            },
            values: [
              'Nakrętka samohamowna sześciokątna, z pierścieniem nylonowym zapobiegającym odkręcaniu się z powodu drgań/wibracji itp. Norma ISO 10511 zastępuje normę DIN 985; klucze o rozmiarach 16, 18 i 21 są obecnie przeznaczone odpowiednio do rozmiarów M10, M12 i M14.',
            ],
            __typename: 'AttributeValue',
          },
        ],
        groupedAssets: {
          images: [
            { attributeMappings: [], __typename: 'MediaAsset' },
            {
              attributeMappings: [
                {
                  symbol: 's',
                  attributeIds: ['taWrenchSpannerSizeMm', 'taWrenchSizeInch'],
                  __typename: 'AttributeMapping',
                },
                {
                  symbol: 'd',
                  attributeIds: ['taThreadDiameterMm_', 'taThreadDiameterInch'],
                  __typename: 'AttributeMapping',
                },
                {
                  symbol: 'h',
                  attributeIds: ['taNutHeightMm_'],
                  __typename: 'AttributeMapping',
                },
                {
                  symbol: 'm',
                  attributeIds: ['taNutHeightMm_'],
                  __typename: 'AttributeMapping',
                },
              ],
              __typename: 'MediaAsset',
            },
          ],
          __typename: 'GroupedAssets',
        },
        __typename: 'Variant',
      },
      displayableAttributes: [
        {
          id: 'taMeasurementsType#metric',
          attribute: {
            id: 'taMeasurementsType',
            dataType: 'UNKNOWN',
            description: 'Rodzaj wymiarowania',
            unit: null,
            __typename: 'Attribute',
          },
          values: ['Metryczny'],
          __typename: 'AttributeValue',
        },
        {
          id: 'taThreadDiameterMm_#10',
          attribute: {
            id: 'taThreadDiameterMm_',
            dataType: 'UNKNOWN',
            description: 'Średnica gwintu',
            unit: null,
            __typename: 'Attribute',
          },
          values: ['M10'],
          __typename: 'AttributeValue',
        },
        {
          id: 'taPitchOfThreadMm_#1.50',
          attribute: {
            id: 'taPitchOfThreadMm_',
            dataType: 'UNKNOWN',
            description: 'Skok gwintu',
            unit: {
              id: 'unece.unit.MMT',
              content: 'minimetr',
              symbol: 'mm',
              __typename: 'UnitOfMeasurement',
            },
            __typename: 'Attribute',
          },
          values: ['1,5'],
          __typename: 'AttributeValue',
        },
        {
          id: '98510#taWrenchSpannerSizeMm#value',
          attribute: {
            id: 'taWrenchSpannerSizeMm',
            dataType: 'UNKNOWN',
            description: 'Rozmiar klucza',
            unit: {
              id: 'unece.unit.MMT',
              content: 'minimetr',
              symbol: 'mm',
              __typename: 'UnitOfMeasurement',
            },
            __typename: 'Attribute',
          },
          values: ['17'],
          __typename: 'AttributeValue',
        },
        {
          id: '98510#taNutHeightMm_#value',
          attribute: {
            id: 'taNutHeightMm_',
            dataType: 'UNKNOWN',
            description: 'Wysokość',
            unit: {
              id: 'unece.unit.MMT',
              content: 'minimetr',
              symbol: 'mm',
              __typename: 'UnitOfMeasurement',
            },
            __typename: 'Attribute',
          },
          values: ['6,5'],
          __typename: 'AttributeValue',
        },
        {
          id: '98510#taNutTotalHeightMm#value',
          attribute: {
            id: 'taNutTotalHeightMm',
            dataType: 'UNKNOWN',
            description: 'Wysokość całkowita',
            unit: {
              id: 'unece.unit.MMT',
              content: 'minimetr',
              symbol: 'mm',
              __typename: 'UnitOfMeasurement',
            },
            __typename: 'Attribute',
          },
          values: ['10'],
          __typename: 'AttributeValue',
        },
        {
          id: 'taMaterial_2#Steel',
          attribute: {
            id: 'taMaterial_2',
            dataType: 'UNKNOWN',
            description: 'Materiał',
            unit: null,
            __typename: 'Attribute',
          },
          values: ['Stal'],
          __typename: 'AttributeValue',
        },
        {
          id: 'taSurfaceThreatment#Zincplated',
          attribute: {
            id: 'taSurfaceThreatment',
            dataType: 'UNKNOWN',
            description: 'Obróbka powierzchni',
            unit: null,
            __typename: 'Attribute',
          },
          values: ['Ocynk'],
          __typename: 'AttributeValue',
        },
        {
          id: 'taQuality_#8.8',
          attribute: {
            id: 'taQuality_',
            dataType: 'UNKNOWN',
            description: 'Twardość',
            unit: null,
            __typename: 'Attribute',
          },
          values: ['8,8'],
          __typename: 'AttributeValue',
        },
        {
          id: 'taDINStandardNuts#985',
          attribute: {
            id: 'taDINStandardNuts',
            dataType: 'UNKNOWN',
            description: 'Norma DIN',
            unit: null,
            __typename: 'Attribute',
          },
          values: ['985'],
          __typename: 'AttributeValue',
        },
        {
          id: 'taISOStandardNuts#10511',
          attribute: {
            id: 'taISOStandardNuts',
            dataType: 'UNKNOWN',
            description: 'Norma ISO',
            unit: null,
            __typename: 'Attribute',
          },
          values: ['10511'],
          __typename: 'AttributeValue',
        },
        {
          id: 'taThreadType_#metric',
          attribute: {
            id: 'taThreadType_',
            dataType: 'UNKNOWN',
            description: 'Typ gwintu',
            unit: null,
            __typename: 'Attribute',
          },
          values: ['Metryczny'],
          __typename: 'AttributeValue',
        },
        {
          id: '98510#taAmountPerPackageQuantity#value',
          attribute: {
            id: 'taAmountPerPackageQuantity',
            dataType: 'UNKNOWN',
            description: 'Ilość w opakowaniu',
            unit: {
              id: 'unece.unit.KrPcs',
              content: 'sztuk',
              symbol: 'szt.',
              __typename: 'UnitOfMeasurement',
            },
            __typename: 'Attribute',
          },
          values: ['100'],
          __typename: 'AttributeValue',
        },
      ],
      groupedAssets: {
        images: [
          { attributeMappings: [], __typename: 'MediaAsset' },
          { attributeMappings: [], __typename: 'MediaAsset' },
          { attributeMappings: [], __typename: 'MediaAsset' },
          { attributeMappings: [], __typename: 'MediaAsset' },
        ],
        __typename: 'GroupedAssets',
      },
      __typename: 'Item',
    },
  },
};
