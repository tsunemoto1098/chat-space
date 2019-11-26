$(function(){ 
  function buildHTML(post){
   var img = post.image.url ? `<img src=${post.image.url} >` : "";
     var html =
      `<div class="post" data-post-id=${post.id}>
         <div class="upper-post">
           <div class="upper-post__user-name">
             ${post.user_name}
           </div>
           <div class="upper-post__date">
             ${post.created_at}
           </div>
         </div>
         <div class="lower-post">
           <p class="lower-post__content">
             ${post.content}
           </p>
           ${img}
         </div>
       </div>`
     return html;
 }

$('#new_post').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.posts').append(html);
    $('.posts').animate({scrollTop: $('.posts')[0].scrollHeight}, 'fast');   
    $('form')[0].reset();
  })
   .fail(function(){
     alert('error');
   });
   return false;
 });
var reloadposts = function () {
  if (window.location.href.match(/\/groups\/\d+\/posts/)){
    var href = 'api/posts#index {:format=>"json"}'
    var last_post_id = $('.post:last').data("post-id");

    $.ajax({
      url: "api/posts",
      type: 'get',
      dataType: 'json',
      data: {last_id: last_post_id}
    })
    .done(function (posts) {
      var insertHTML = '';
      posts.forEach(function (post) {
        insertHTML = buildHTML(post);
        $('.posts').append(insertHTML);
      })
      $('.posts').animate({scrollTop: $('.posts')[0].scrollHeight}, 'fast');
    })
    .fail(function () {
      alert('自動更新に失敗しました');
    });
  }
};
setInterval(reloadposts, 5000);

});

