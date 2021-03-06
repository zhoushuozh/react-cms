const menuList = [
  {
    title: '首页',
    key: '/admin'
  },
  {
    title: 'UI',
    key: '/admin/ui',
    children: [
      {
        title: '按钮',
        key: '/admin/ui/buttons'
      },
      {
        title: '弹框',
        key: '/admin/ui/modals',
      },
      {
        title: 'Loading',
        key: '/admin/ui/loadings'
      },
      {
        title: '通知提醒',
        key: '/admin/ui/notifications'
      },
      {
        title: '全局Message',
        key: '/admin/ui/messages'
      },
      {
        title: 'Tab页签',
        key: '/admin/ui/tabs'
      },
      {
        title: '轮播图',
        key: '/admin/ui/carousel'
      }
    ]
  },
  {
    title: '表格',
    key: '/admin/table'
  },
  {
    title: '富文本',
    key: '/admin/richText'
  },
  {
    title: '城市管理',
    key: '/admin/city'
  },
  {
    title: '订单管理',
    key: 'admin/order',
    children: [
      {
        title: '订单详情',
        key: 'admin/order/details'
      },
      {
        title: '结束订单',
        key: 'admin/order/finish'
      }
    ]
  },
  {
    title: '员工管理',
    key: '/admin/user'
  },
  {
    title: '车辆地图',
    key: '/admin/bikeMap'
  },
  {
    title: '图标',
    key: '/admin/charts',
    children: [
      {
        title: '柱形图',
        key: '/admin/charts/bar'
      },
      {
        title: '饼图',
        key: '/admin/charts/pie'
      },
      {
        title: '折线图',
        key: '/admin/charts/polyline'
      },
      {
        title: '柱形图',
        key: '/admin/charts/column'
      },
    ]
  },
  {
    title: '权限设置',
    key: 'admin/permission'
  }
];

export default menuList;