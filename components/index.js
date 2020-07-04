module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    return [
      {
        style: 'simple',
        title: 'Hello World',
        onClick: item => {
          $ui.toast(`Clicked ${item.title}`)
        }
      }
    ]
  }
}
