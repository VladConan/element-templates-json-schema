export const template = {
  'name': 'InvalidCamundaPropertyType',
  'id': 'com.camunda.example.InvalidCamundaPropertyType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'Text',
      'binding': {
        'type': 'camunda:property',
        'name': 'foo'
      }
    },
    {
      'label': 'bar',
      'type': 'String',
      'binding': {
        'type': 'camunda:property',
        'name': 'bar'
      }
    }
  ]
};

export const errors = [
  {
    'keyword': 'errorMessage',
    'dataPath': '/properties/0/type',
    'schemaPath': '#/properties/properties/items/allOf/3/then/properties/type/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'enum',
          'dataPath': '/properties/0/type',
          'schemaPath': '#/properties/properties/items/allOf/3/then/properties/type/enum',
          'params': {
            'allowedValues': [
              'String',
              'Hidden',
              'Dropdown'
            ]
          },
          'message': 'should be equal to one of the allowed values'
        }
      ]
    },
    'message': 'invalid property type "Text" for binding type "camunda:property"; must be any of { String, Hidden, Dropdown }'
  },
  {
    'keyword': 'if',
    'dataPath': '/properties/0',
    'schemaPath': '#/properties/properties/items/allOf/3/if',
    'params': {
      'failingKeyword': 'then'
    },
    'message': 'should match "then" schema'
  }
];