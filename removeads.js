console.log('remove ads from results')

// 消除搜索结果中的广告
const removeAds = () => {
  // 拿到页面中所有搜索结果，并转成array，因为NodeList没有过滤方法
  const items = Array.from(document.querySelectorAll('div.c-container'))
  // 根据两个形式的"广告"span找出所有广告项
  const ads = items.filter(d => d.querySelector('span.ec_tuiguang_pplink,span[data-tuiguang]'))
  // 逐条删除
  ads.forEach(d => d.remove())

  // 每秒执行一次
  setTimeout(removeAds, 1000)
}

removeAds()

