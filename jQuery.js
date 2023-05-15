/* eslint-env node */
/* eslint-disable quote-props */

// eslint-disable-next-line import/no-extraneous-dependencies
const spellcheckRule = require('./spell-check').rules['spellcheck/spell-checker'];

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    'ecmaVersion': 2018,
  },
  plugins: [
    'spellcheck',
    'no-only-tests',
  ],
  rules: {
    'spellcheck/spell-checker': (() => {
      Array.prototype.push.apply(spellcheckRule[1].skipWords, [
        'acc', // DXHotelsNetApi\Client\views\currentHotel.js ?
        'accessor',
        'adaptivity',
        'adrs',
        'africa',
        'ajax',
        'antialiasing',
        'api',
        'ar', // arabic
        'arabic',
        'arg',
        'argb', // ExcelJS
        'args',
        'asia',
        'assignee',
        'assignees',
        'async',
        'attr',
        'attrs',
        'aug',
        'autocomplete',
        'backorder',
        'backordered', // DevAV NetCore
        'bing',
        'bkg',
        'bool',
        'bg', // ExcelJS
        'br', // <br> tag in html
        'Cldr',
        'canada',
        'ceil',
        'checkbox',
        'cityid',
        'cluster',
        'cnstl',
        'colorizer',
        'comparer',
        'concat',
        'coord',
        'coords',
        'cordova',
        'cpu',
        'crosshair',
        'ctrl',
        'datebox',
        'de',
        'ru',
        'democase',
        'democases',
        'desc',
        'dest', // gulp
        'dev', // DevAV
        'devexpress',
        'devextremeaddon',
        'dialogs',
        'docurl',
        'draggable',
        'dropzone',
        'dto',
        'dx',
        'dxkey', // for React templates
        'emp',
        'evt',
        'english',
        'etalon',
        'etalons',
        'eurasia',
        'europe',
        'european',
        'exe',
        'expr',
        'fav',
        'faved',
        'femalemiddle',
        'femaleolder',
        'femaleyoung',
        'filename', // DXHotelsNetApi\Client\views\booking.js from db
        'fitted',
        'fg', // ExcelJS
        'formatter',
        'func',
        'gantt',
        'gdp', // gross domestic product
        'geolocation',
        'getter',
        'getters',
        'globals',
        'mapGetters',
        'gif',
        'goto',
        'guid',
        'hotelid',
        'href',
        'html',
        'http',
        'https',
        'ie',
        'iframe',
        'img',
        'init',
        'inited',
        'ity', // DXHotelsNetApi\Client\views\home.js  CIty_Image from db
        'Fmt', // ExcelJS
        'jan',
        'js',
        'jspdf',
        'jszip',
        'jsonp',
        'jsserver',
        'jul',
        'july',
        'jun',
        'june',
        'Kanban',
        'lang',
        'latinamerica',
        'len',
        'li',
        'lng',
        'loc',
        'lookups',
        'longtabs',
        'malemiddle',
        'maleolder',
        'maleyoung',
        'maximumfractiondigits',
        'metadata',
        'mmp',
        'monday',
        'msg',
        'multiline',
        'mvc',
        'na', // NaN
        'namespace',
        'nav',
        'nbsp',
        'nd',
        'nighly', // DXHotelsNetApi\Client\views\booking.js from db
        'noop',
        'northamerica',
        'num',
        'objs',
        'occured',
        'oceania',
        'ok',
        'olympic',
        'onclick',
        'onhashchange',
        'onreadystatechange',
        'orderby',
        'pageview',
        'pangaea',
        'param',
        'params',
        'perc',
        'perf',
        'pdf',
        'pivotgrid',
        'png', // DataGrid CustomEditors for image format
        'popup',
        'popups',
        'pos',
        'postfix',
        'prec',
        'pregrouped',
        'prepend',
        'prev',
        'rangebar',
        'readdir', // node js
        'realtor',
        'rect',
        'req',
        'resellers',
        'resize',
        'resizing',
        'roomid',
        'rowspan',
        'rtl',
        'sankey',
        'sclass', // CSSClass
        'scrollable',
        'scrollbar',
        'setted',
        'skype',
        'smp',
        'sonee',
        'sortable',
        'sparkline',
        'splashscreen',
        'splinearea',
        'sqlite',
        'sqrt',
        'src',
        'stacktrace',
        'startswith',
        'steparea',
        'stepline',
        'str',
        'stringify',
        'strikethrough',
        'submenu',
        'substr',
        'substring',
        'subvalue',
        'subvalues',
        'svg',
        'swfobject',
        'tbody',
        'th',
        'td',
        'theatre',
        'timestamp',
        'tmp',
        'tooltip',
        'tooltips',
        'transpile',
        'transpiler',
        'treeview',
        'ui', // User Interface
        'ul',
        'ungrouped',
        'unlink',
        'unordered',
        'unselect', // unselectAll()
        'unshift',
        'uploader',
        'uri',
        'urlencoded',
        'usa',
        'util',
        'utils',
        'validator',
        'viewport',
        'volumne', // stockMarket, rename to volume
        'vue',
        'winloss',
        'writeable', // knockout
        'xlsx', // ExcelJS
        'xhr',
        'Xmla',
        'xmla',
        'youtube',
        'ytd',
        'zipcode',
        'Serializer', // XMLSerializer
        // VectorMap Demos
        'Kosovo',
        'Macau',
        'Niue',
        'Palau',
      ]);
      return spellcheckRule;
    })(),
    'class-methods-use-this': 0, // TODO warn (was error)
    'func-names': 0, // TODO warn (was warn) >500
    'import/extensions': 0,
    'no-use-before-define': 0,
    'prefer-destructuring': 0,
    'no-param-reassign': ['error', { 'props': false }],
    'no-only-tests/no-only-tests': 'error',
  },
  extends: [
    'eslint:recommended',
    'devextreme/javascript',
    'devextreme/spell-check',
  ],
  overrides: [{
    files: [
      '*.js',
    ],
    globals: {
      System: true,
    },
    rules: {
      'quote-props': ['error', 'consistent'],
      'no-dupe-keys': 0,
    },
  }, {
    files: [
      '*.*',
    ],
    env: {
      jquery: true,
    },
    globals: {
      DevExpress: true,
    },
    overrides: [{
      files: '**/data.js',
      rules: {
        'no-unused-vars': 0,
      },
    }, {
      files: '**/index.js',
      rules: {
        'no-undef': 0,
      },
    }],
  }],
};
