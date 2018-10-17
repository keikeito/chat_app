$(function(){
  function buildHTML(message){
    var html = `<li class =  "chat__main__message__name"> ${messages.user_name}</li>
                <li class = "chat__main__message__date">${messages.created_at}</li>
                <li class = "chat__main__message__comment">${messages.body}</li>
                <li class = "content_message--image>${messages.image}</li>`
    return html;
  }
  $(".new_message").on('submit', function(e){
    e.preventDefault();
    console.log(this)
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
      $('.chat__main__message').append(html);
      $('.textbox').val('');
    })
    .fail(function(){
      alert('error');
    });
  });
});
