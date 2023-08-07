export interface IMyService {
  name: string
  icon: string
  path: string
}
export const myServices: IMyService[] = [
  {
    name: '我的优惠券',
    icon: '/static/icons/common/youhuiquan.png',
    path: 'coupon/coupon',
  },
  {
    name: '收货地址',
    icon: '/static/icons/common/shouhuodizhi.png',
    path: 'consignee/consignee',
  },
  {
    name: '售后服务',
    icon: '/static/icons/common/kefu.png',
    path: 'service/service',
  },
  {
    name: '设置',
    icon: '/static/icons/common/shezhi.png',
    path: 'setting/setting',
  },
]

// 0:全部,1:待付款,2:待发货,3:待收货,4:已收货待评价,5:已完成,6:已取消,7:待成团
export const myOrderOptions = [
  {
    icon: '',
    name: '全部',
    value: 0,
  },
  {
    icon: 'daifukuan',
    name: '待付款',
    value: 1,
  },
  {
    icon: 'daifahuo',
    name: '待发货',
    value: 2,
  },
  {
    icon: 'daishouhuo',
    name: '待收货',
    value: 3,
  },
  {
    icon: 'daipingjia',
    name: '待评价',
    value: 4,
  },
  {
    icon: 'tuikuan',
    name: '退款/售后',
    value: 10,
  }]

export const lineBg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII='
