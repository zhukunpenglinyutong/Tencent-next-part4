/**
 * 多张图片消息模版 （可参考message.html）
 * @param {Object} pics 多图片消息的图片列表
 * @return {String} 返回html字符串
 */
function multiplePicTpl(pics) {
  let htmlText = [];
  htmlText.push('<ul class="item-pic">');
  for (let i = 0, len = pics.length; i < len; i++) {
    htmlText.push('<img class="pic-item" src="' + pics[i] + '">')
  }
  htmlText.push('</ul>');
  return htmlText.join('');
}

/**
 * 分享
 * @param {Object} 
 * @return {String} 返回html字符串
 */
function sharer(share) {
  return htmlText = `<p class="sharer-content"><img src="${share.pic}" /> ${share.text}</p>`
}

/**
 * 单图片
 * @param {Object} 
 * @return {String} 返回html字符串
 */
function picture(pic) {
  console.log(pic)
  return htmlText = `<img class="picture-img" src="${pic}" />`
}


/**
 * 循环：消息体 
 * @param {Object} messageData 对象
 */ 
function messageTpl(messageData) {
  let user = messageData.user;
  let content = messageData.content;
  let htmlText = [];
  htmlText.push('<div class="moments-item" data-index="0">');
  // 消息用户头像
  htmlText.push('<a class="item-left" href="#">');
  htmlText.push('<img src="' + user.avatar + '" width="42" height="42" alt=""/>');
  htmlText.push('</a>');
  // 消息右边内容
  htmlText.push('<div class="item-right">');
  // 消息内容-用户名称
  htmlText.push('<a href="#" class="item-name">' + user.name + '</a>');
  // 消息内容-文本信息
  htmlText.push('<p class="item-msg">' + content.text + '</p>');
  // 消息内容-图片列表 
  let contentHtml = '';
  // 目前只支持多图片消息，需要补充完成其余三种消息展示
  switch(content.type) {
      // 多图片消息
    case 0:
      contentHtml = multiplePicTpl(content.pics);
      break;
    case 1:
      contentHtml = sharer(content.share);
      break;
      // TODO: 实现分享消息
    case 2:
      contentHtml = picture(content.pics[0]);
      break;
      // TODO: 实现单张图片消息
    case 3:
      // TODO: 实现无图片消息
  }
  htmlText.push(contentHtml);
  // 消息时间和回复按钮
  htmlText.push('<div class="item-ft">');
  htmlText.push('<span class="item-time">' + content.timeString + '</span>');
  htmlText.push('<div class="item-reply-btn">');
  htmlText.push('<span class="item-reply"></span>');
  htmlText.push('</div></div>');
  // 消息回复模块（点赞和评论）
  htmlText.push(replyTpl(messageData.reply));
  htmlText.push('</div></div>');
  return htmlText.join('');
}