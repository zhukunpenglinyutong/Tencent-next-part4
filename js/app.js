/**
 * 页面渲染函数：render
 */
function render() {
  // TODO: 目前只渲染了一个消息（多图片信息）,需要展示data数组中的所有消息数据。
  let messageHtml;
  data.forEach(item => messageHtml += messageTpl(item))
  $momentsList.html(messageHtml);
}


/**
 * 页面绑定事件函数：bindEvent
 */
function bindEvent() {
  // TODO: 完成页面交互功能事件绑定

  //（难点）点击其他区域，关闭已经出现的 点赞评论
  $('.page-moments').click(function () {
    // console.log('1')
    // closeAvailableUpdate()
  })

  // 点击那个 item-reply-btn 这个div的时候触发，（优化）使用事件冒泡 | 注意，不能使用箭头函数
  // 难点就是：我点击4个item中的任意一个 图标的时候，怎么确定我点击的是那个item?
  // $('.moments-item').delegate('.item-reply-btn', 'click', function (event) {    
  //   console.log($(this).html())
  // });
  $(".item-reply-btn").click(function () {
    closeAvailableUpdate() // 关闭其他3个
    availableUpdate($(this)) // 传给函数具体的DOM对象
  });

  // 点击
}

//（工具类）关闭其他评论点赞
function closeAvailableUpdate() {
  // 同时只能出现一个（先关闭其他的）
  let btns = $(".availableUpdate-p")
  let len = btns.length;
  for (let i =0; i < len; i++) {
    $(btns[i]).hide()
  }
}

/**
 * 页面入口函数：init
 * 1、根据数据页面内容
 * 2、绑定事件
 */
function init() {
  // 渲染页面
  render();
  bindEvent();
}

init();