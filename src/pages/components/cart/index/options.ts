import type { LoadmoreText, SwipeActionItemOption } from '@tuniao/tnui-vue3-uniapp'

export const swipeOptions: SwipeActionItemOption = [
  {
    text: '删除',
    icon: 'delete',
    bgColor: 'tn-red',
    // disabled: true,
    round: true,
  },
]

export const customLoadMoreText: LoadmoreText = {
  loadmore: '还有内容呢',
  loading: '等等，数据正在赶来',
  nomore: '哎呀，没有啦',
  empty: '空空的呀',
}
