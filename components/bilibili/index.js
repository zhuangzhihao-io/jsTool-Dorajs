module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    return [{
      title: '直播',
      style: 'category'
    }, {
      title: 'vtb/vup直播间信息',
      route: $route('vtbs.moe/liveroom_info')
    }]
  }
}
