// practice.js
$(document).ready(function(){
  $.getJSON("https://api.github.com/repos/vchs6/MyCourse/contents/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/%E7%BB%83%E4%B9%A0%E9%A2%98",function(json){
    var html = '';
    for(var i=0;i<json.length;i++)
    {
      var html  = html + "<li ><span class='text-danger'>"+json[i].name+"</span><a href="+json[i].download_url+">下载</a></li>" 
    }
    $("#content").find("ul").append(html);
  });
})
