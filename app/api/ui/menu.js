module.exports = [
  {
    key: 'home',
    name: 'Home',
    icon: 'ios-home-outline',
    child: [
      {
        key: 'dashboard',
        name: 'Dashboard',
        title: true,
      },
      {
        key: 'personal',
        name: 'Teacher',
        link: '/app',
      },
      // {
      //   key: 'crm',
      //   name: 'Student',
      //   link: '/app/crm-dashboard',
      // },
      // {
      //   key: 'crypto',
      //   name: 'Cryptocurrency',
      //   link: '/app/crypto-dashboard'
      // },
    ],
  },
  {
    key: 'widgets',
    name: 'Teacher',
    icon: 'ios-apps-outline',
    child: [
      {
        key: 'infographics_widget',
        name: 'Class',
        link: '/app/widgets/infographics',
      },
      {
        key: 'chat',
        name: 'Chat',
        link: '/app/pages/chat',
        badge: '4',
      },
      {
        key: 'status_widget',
        name: 'Quiz',
        link: '/app/widgets/status',
      },
      // {
      //   key: 'mini_apps_widget',
      //   name: 'Student',
      //   link: '/app/widgets/mini-apps',
      // },
      {
        key: 'analytics_widget',
        name: 'Assessment',
        link: '/app/widgets/analytics',
      },
      {
        key: 'info_updates_widget',
        name: 'Resources',
        link: '/app/pages/resources',
      },
      {
        key: 'calendar',
        name: 'Calendar',
        link: '/app/pages/calendar',
      },
      {
        key: 'task',
        name: 'Task Board',
        link: '/app/pages/taskboard',
      },
      {
        key: 'settings',
        name: 'Settings',
        link: '/app/pages/settings',
      },
    ],
  },
  // {
  //   key: 'layouts',
  //   name: 'Student',
  //   icon: 'ios-photos-outline',
  //   child: [
  //     // {
  //     //   key: 'grid',
  //     //   name: 'Data Analysis',
  //     //   link: '/app/layouts/grid',
  //     // },
  //     {
  //       key: 'grid',
  //       name: 'Courses',
  //       link: '/app/layouts/grid',
  //     },
  //     {
  //       key: 'application_layout',
  //       name: 'Warn-up Activities',
  //       link: '/app/layouts/app-layout',
  //       // app/ui/card-papper
  //     },
  //     {
  //       key: 'responsive',
  //       name: 'Practice Exercises',
  //       link: '/app/student/quiz',
  //     },
  //     // {
  //     //   key: 'responsive',
  //     //   name: 'Students',
  //     //   link: '/app/layouts/responsive',
  //     // },
  //     {
  //       key: 'responsive',
  //       name: 'Assessment',
  //       link: '/app/pages/assessment',
  //     },
  //     // {
  //     //   key: 'responsive',
  //     //   name: 'Resources',
  //     //   link: '/app/layouts/responsive',
  //     // },
  //     {
  //       key: 'responsive',
  //       name: 'Settings',
  //       link: '/app/layouts/responsive',
  //     },
  //   ],
  // },
  // {
  //   key: 'tables',
  //   name: 'Tables',
  //   icon: 'ios-grid-outline',
  //   child: [
  //     {
  //       key: 'common_table',
  //       name: 'Common Table',
  //       title: true,
  //     },
  //     {
  //       key: 'basic_table',
  //       name: 'Basic',
  //       link: '/app/tables/basic-table',
  //     },
  //     {
  //       key: 'data_table',
  //       name: 'Data Tables',
  //       link: '/app/tables/data-table',
  //     },
  //     {
  //       key: 'table_playground',
  //       name: 'Table Playgound',
  //       link: '/app/tables/table-playground',
  //     },
  //     {
  //       key: 'redux_table',
  //       name: 'Redux Table',
  //       title: true,
  //     },
  //     {
  //       key: 'editable_cell',
  //       name: 'Table Edit',
  //       link: '/app/tables/editable-cell',
  //     },
  //     {
  //       key: 'tree_table',
  //       name: 'Tree Table',
  //       link: '/app/tables/tree-table',
  //     },
  //   ],
  // },
  // {
  //   key: 'forms',
  //   name: 'Forms Buttons',
  //   icon: 'ios-list-box-outline',
  //   child: [
  //     {
  //       key: 'buttons_collections',
  //       name: 'Button Collections',
  //       title: true,
  //     },
  //     {
  //       key: 'buttons',
  //       name: 'Buttons',
  //       link: '/app/forms/buttons',
  //     },
  //     {
  //       key: 'toggle_button',
  //       name: 'Toggle Button',
  //       link: '/app/forms/toggle-button',
  //     },
  //     {
  //       key: 'dial_button',
  //       name: 'Dial Button',
  //       link: '/app/forms/dial-button',
  //     },
  //     {
  //       key: 'text_input',
  //       name: 'Text Input',
  //       title: true,
  //     },
  //     {
  //       key: 'textfields',
  //       name: 'Textfields',
  //       link: '/app/forms/textfields',
  //     },
  //     {
  //       key: 'autocomplete',
  //       name: 'Autocomplete & Tag',
  //       link: '/app/forms/autocomplete',
  //     },
  //     {
  //       key: 'datetimepicker',
  //       name: 'Date Time Picker',
  //       link: '/app/forms/date-time-picker',
  //     },
  //     {
  //       key: 'reduxform',
  //       name: 'Redux Form',
  //       link: '/app/forms/reduxform',
  //     },
  //     {
  //       key: 'selection',
  //       name: 'Selection',
  //       title: true,
  //     },
  //     {
  //       key: 'checkbox_radio',
  //       name: 'Checkbox & Radio',
  //       link: '/app/forms/checkbox-radio',
  //     },
  //     {
  //       key: 'switches',
  //       name: 'Switches',
  //       link: '/app/forms/switches',
  //     },
  //     {
  //       key: 'selectbox',
  //       name: 'Select',
  //       link: '/app/forms/selectbox',
  //     },
  //     {
  //       key: 'advanced_input',
  //       name: 'Advanced Input',
  //       title: true,
  //     },
  //     {
  //       key: 'slider',
  //       name: 'Slider Range',
  //       link: '/app/forms/slider-range',
  //     },
  //     {
  //       key: 'upload',
  //       name: 'Upload',
  //       link: '/app/forms/upload',
  //     },
  //     {
  //       key: 'ratting',
  //       name: 'Ratting',
  //       link: '/app/forms/ratting',
  //     },
  //     {
  //       key: 'texteditor',
  //       name: 'WYSIWYG Editor',
  //       link: '/app/forms/wysiwyg-editor',
  //     },
  //   ],
  // },
  // {
  //   key: 'ui',
  //   name: 'UI Collection',
  //   icon: 'ios-flower-outline',
  //   child: [
  //     {
  //       key: 'material_content',
  //       name: 'Block Container',
  //       title: true,
  //     },
  //     {
  //       key: 'card_papper',
  //       name: 'Card & Papper',
  //       link: '/app/ui/card-papper',
  //     },
  //     {
  //       key: 'accordion',
  //       name: 'Accordion',
  //       link: '/app/ui/accordion',
  //     },
  //     {
  //       key: 'material_navigation',
  //       name: 'Navigation',
  //       title: true,
  //     },
  //     {
  //       key: 'tab',
  //       name: 'Tabs Navigation',
  //       link: '/app/ui/tabs',
  //     },
  //     {
  //       key: 'drawer_menu',
  //       name: 'Menu & Drawer',
  //       link: '/app/ui/drawer-menu',
  //     },
  //     {
  //       key: 'breadcrumbs',
  //       name: 'Breadcrumbs',
  //       link: '/app/ui/breadcrumbs',
  //     },
  //     {
  //       key: 'paginations',
  //       name: 'Paginations',
  //       link: '/app/ui/paginations',
  //     },
  //     {
  //       key: 'steppers',
  //       name: 'Steppers',
  //       link: '/app/ui/steppers',
  //     },
  //     {
  //       key: 'material_popup',
  //       name: 'Popup',
  //       title: true,
  //     },
  //     {
  //       key: 'dialog_modal',
  //       name: 'Dialog & Modal',
  //       link: '/app/ui/dialog-modal',
  //     },
  //     {
  //       key: 'popover_tooltip',
  //       name: 'Popover & Tooltip',
  //       link: '/app/ui/popover-tooltip',
  //     },
  //     {
  //       key: 'material_notif',
  //       name: 'Notification',
  //       title: true,
  //     },
  //     {
  //       key: 'badges',
  //       name: 'Badges',
  //       link: '/app/ui/badges',
  //     },
  //     {
  //       key: 'snackbar',
  //       name: 'Messages',
  //       link: '/app/ui/snackbar',
  //     },
  //     {
  //       key: 'material_dividers',
  //       name: 'Dividers',
  //       title: true,
  //     },
  //     {
  //       key: 'list_divider',
  //       name: 'List & Divider',
  //       link: '/app/ui/list',
  //     },
  //     {
  //       key: 'custom_dividers',
  //       name: 'Custom Dividers',
  //       link: '/app/ui/dividers',
  //     },
  //     {
  //       key: 'material_image',
  //       name: 'Images',
  //       title: true,
  //     },
  //     {
  //       key: 'avatars',
  //       name: 'Avatars',
  //       link: '/app/ui/avatars',
  //     },
  //     {
  //       key: 'image_gird',
  //       name: 'Image Grid Gallery',
  //       link: '/app/ui/image-grid',
  //     },
  //     {
  //       key: 'slider_carousel',
  //       name: 'Slider & Carousel',
  //       link: '/app/ui/slider-carousel',
  //     },
  //     {
  //       key: 'material_font_icon',
  //       name: 'Fonts & Icons',
  //       title: true,
  //     },
  //     {
  //       key: 'typography',
  //       name: 'Typography',
  //       link: '/app/ui/typography',
  //     },
  //     {
  //       key: 'icons',
  //       name: 'Material Icons',
  //       link: '/app/ui/icons',
  //     },
  //     {
  //       key: 'ionicons',
  //       name: 'Ion Icons',
  //       link: '/app/ui/ionicons',
  //     },
  //     {
  //       key: 'utilities',
  //       name: 'Utility',
  //       title: true,
  //     },
  //     {
  //       key: 'progress',
  //       name: 'Progress & Spinners',
  //       link: '/app/ui/progress',
  //     },
  //     {
  //       key: 'tags',
  //       name: 'Tags',
  //       link: '/app/ui/tags',
  //     },
  //   ],
  // },
  // {
  //   key: 'apps',
  //   name: 'Applications',
  //   icon: 'ios-appstore-outline',
  //   child: [
  //     {
  //       key: 'communication_apps',
  //       name: 'Communication',
  //       title: true,
  //     },
  //     {
  //       key: 'contact',
  //       name: 'Contact',
  //       link: '/app/pages/contact',
  //     },
  //     {
  //       key: 'email',
  //       name: 'Email',
  //       link: '/app/pages/email',
  //       badge: '2',
  //     },
  //     {
  //       key: 'social_apps',
  //       name: 'Social',
  //       title: true,
  //     },
  //     {
  //       key: 'timeline',
  //       name: 'Timeline',
  //       link: '/app/pages/timeline',
  //     },
  //     {
  //       key: 'chat',
  //       name: 'Chat',
  //       link: '/app/pages/chat',
  //       badge: '4',
  //     },
  //     {
  //       key: 'ecommerce_app',
  //       name: 'Ecommerce',
  //       title: true,
  //     },
  //     {
  //       key: 'Itemlist',
  //       name: 'Product Catalogues',
  //       link: '/app/pages/ecommerce',
  //     },
  //     {
  //       key: 'item_detail',
  //       name: 'Product Detail',
  //       link: '/app/pages/product-detail',
  //     },
  //     {
  //       key: 'checkout',
  //       name: 'Checkout Page',
  //       link: '/app/pages/checkout',
  //     },
  //     {
  //       key: 'dynamic_invoice',
  //       name: 'Dynamic Invoice',
  //       link: '/app/pages/invoice',
  //     },
  //     {
  //       key: 'productivity_app',
  //       name: 'Productivity',
  //       title: true,
  //     },
  //     {
  //       key: 'calendar',
  //       name: 'Calendar',
  //       link: '/app/pages/calendar',
  //     },
  //     {
  //       key: 'task',
  //       name: 'Task Board',
  //       link: '/app/pages/taskboard',
  //     },
  //   ],
  // },
  // {
  //   key: 'pages',
  //   name: 'Pages',
  //   icon: 'ios-paper-outline',
  //   child: [
  //     {
  //       key: 'account_page',
  //       name: 'Auth Page',
  //       title: true,
  //     },
  //     {
  //       key: 'login',
  //       name: 'Login',
  //       link: '/login',
  //     },
  //     {
  //       key: 'login2',
  //       name: 'Login Ver.2',
  //       link: '/login-v2',
  //     },
  //     {
  //       key: 'login3',
  //       name: 'Login Ver.3',
  //       link: '/login-v3',
  //     },
  //     {
  //       key: 'register',
  //       name: 'Register',
  //       link: '/register',
  //     },
  //     {
  //       key: 'register2',
  //       name: 'Register Ver.2',
  //       link: '/register-v2',
  //     },
  //     {
  //       key: 'register3',
  //       name: 'Register Ver.3',
  //       link: '/register-v3',
  //     },
  //     {
  //       key: 'reset',
  //       name: 'Reset Password',
  //       link: '/reset-password',
  //     },
  //     {
  //       key: 'lock',
  //       name: 'Lock Screen',
  //       link: '/lock-screen',
  //     },
  //     {
  //       key: 'generic_page',
  //       name: 'Generic',
  //       title: true,
  //     },
  //     {
  //       key: 'user_profile',
  //       name: 'User Profile',
  //       link: '/app/pages/user-profile',
  //     },
  //     {
  //       key: 'blank',
  //       name: 'Blank Page',
  //       link: '/app/pages/blank-page',
  //     },
  //     {
  //       key: 'pricing',
  //       name: 'Pricing Page',
  //       link: '/app/pages/pricing',
  //     },
  //     {
  //       key: 'gallery',
  //       name: 'Photo Gallery',
  //       link: '/app/pages/photo-gallery',
  //     },
  //     {
  //       key: 'settings',
  //       name: 'Settings',
  //       link: '/app/pages/settings',
  //     },
  //     {
  //       key: 'help_support',
  //       name: 'Help & Support',
  //       link: '/app/pages/help-support',
  //     },
  //     {
  //       key: 'maintenance',
  //       name: 'Maintenance',
  //       link: '/maintenance',
  //     },
  //     {
  //       key: 'coming_soon',
  //       name: 'Coming Soon',
  //       link: '/coming-soon',
  //     },
  //     {
  //       key: 'blog',
  //       name: 'Blog',
  //       title: true,
  //     },
  //     {
  //       key: 'blog_list',
  //       name: 'Blog Home',
  //       link: '/blog',
  //     },
  //     {
  //       key: 'blog_detail',
  //       name: 'Article',
  //       link: '/blog/article',
  //     },
  //     {
  //       key: 'errors',
  //       name: 'Errors',
  //       title: true,
  //     },
  //     {
  //       key: 'not_found_page',
  //       name: 'Not Found Page',
  //       link: '/app/pages/not-found',
  //     },
  //     {
  //       key: 'error_page',
  //       name: 'Error Page',
  //       link: '/app/pages/error',
  //     },
  //   ],
  // },
  // {
  //   key: 'charts',
  //   name: 'Charts',
  //   icon: 'ios-pie-outline',
  //   child: [
  //     {
  //       key: 'svg_chart',
  //       name: 'SVG Chart',
  //       title: true,
  //     },
  //     {
  //       key: 'line_charts',
  //       name: 'Line',
  //       link: '/app/charts/line-charts',
  //     },
  //     {
  //       key: 'bar_charts',
  //       name: 'Bar',
  //       link: '/app/charts/bar-charts',
  //     },
  //     {
  //       key: 'area_charts',
  //       name: 'Area',
  //       link: '/app/charts/area-charts',
  //     },
  //     {
  //       key: 'pie_charts',
  //       name: 'Pie & Doughnut',
  //       link: '/app/charts/pie-charts',
  //     },
  //     {
  //       key: 'radar_charts',
  //       name: 'Radar',
  //       link: '/app/charts/radar-charts',
  //     },
  //     {
  //       key: 'scatter_charts',
  //       name: 'Scatter',
  //       link: '/app/charts/scatter-charts',
  //     },
  //     {
  //       key: 'compossed_charts',
  //       name: 'Compossed',
  //       link: '/app/charts/compossed-chart',
  //     },
  //     {
  //       key: 'canvas_chart',
  //       name: 'Canvas Chart',
  //       title: true,
  //     },
  //     {
  //       key: 'doughnut_pie',
  //       name: 'Doughnut & Pie',
  //       link: '/app/charts/doughnut-pie-charts',
  //     },
  //     {
  //       key: 'bar_canvas_chart',
  //       name: 'Bar Direction',
  //       link: '/app/charts/bar-direction-charts',
  //     },
  //     {
  //       key: 'line_canvas_chart',
  //       name: 'Line and Scatter',
  //       link: '/app/charts/line-scatter-charts',
  //     },
  //     {
  //       key: 'area_canvas_chart',
  //       name: 'Area Filled',
  //       link: '/app/charts/area-filled-charts',
  //     },
  //     {
  //       key: 'radar_canvas_chart',
  //       name: 'Radar and Polar',
  //       link: '/app/charts/radar-polar-chart',
  //     },
  //   ],
  // },
  // {
  //   key: 'maps',
  //   name: 'Maps',
  //   icon: 'ios-navigate-outline',
  //   child: [
  //     {
  //       key: 'map_marker',
  //       name: 'Map Marker',
  //       link: '/app/maps/map-marker',
  //     },
  //     {
  //       key: 'map_direction',
  //       name: 'Map Direction',
  //       link: '/app/maps/map-direction',
  //     },
  //     {
  //       key: 'map_searchbox',
  //       name: 'Map with Searchbox',
  //       link: '/app/maps/map-searchbox',
  //     },
  //     {
  //       key: 'map_traffic',
  //       name: 'Traffic Indicator',
  //       link: '/app/maps/map-traffic',
  //     },
  //     {
  //       key: 'street_view',
  //       name: 'Street View',
  //       link: '/app/maps/street-view',
  //     },
  //   ],
  // },
  // {
  //   key: 'menu_levels',
  //   name: 'Menu Levels',
  //   multilevel: true,
  //   icon: 'ios-menu-outline',
  //   child: [
  //     {
  //       key: 'level_1',
  //       name: 'Level 1',
  //       link: '/#',
  //     },
  //     {
  //       key: 'level_2',
  //       keyParent: 'menu_levels',
  //       name: 'Level 2',
  //       child: [
  //         {
  //           key: 'sub_menu_1',
  //           name: 'Sub Menu 1',
  //           link: '/#',
  //         },
  //         {
  //           key: 'sub_menu_2',
  //           name: 'Sub Menu 2',
  //           link: '/#',
  //         },
  //       ],
  //     },
  //   ],
  // },
];
