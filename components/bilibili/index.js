module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    return [{
      title: '直播',
      style: 'category'
    }, {
      title: 'vtb/vup直播间信息',
      /* route: $route('vtbs.moe/liveroom_info') */
      onClick: () => {
        let uid = await $input.prompt({
          title: '输入用户id',
          hint: '不是直播间id',
          value: ''
        })
        if (uid) {
          $router.to($route('vtbs.moe/liveroom_info', { uid: uid }))
        } else {
          $ui.toast(`错误，uid不能为空`)
        }
      }
    }]
  }
}
