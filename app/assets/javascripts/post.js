$(function(){ 
  function buildHTML(post){
   if ( post.image ) {
     var html =
      `<div class="post" data-post-id=${post.id}>
         <div class="upper-post">
           <div class="upper-post__user-name">
             ${post.user_name}
           </div>
           <div class="upper-post__date">
             ${post.date}
           </div>
         </div>
         <div class="lower-post">
           <p class="lower-post__content">
             ${post.content}
           </p>
         </div>
         <img src=${post.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="post" data-post-id=${post.id}>
         <div class="upper-post">
           <div class="upper-post__user-name">
             ${post.user_name}
           </div>
           <div class="upper-post__date">
             ${post.date}
           </div>
         </div>
         <div class="lower-post">
           <p class="lower-post__content">
             ${post.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('form').on('submit', function(e){
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
});