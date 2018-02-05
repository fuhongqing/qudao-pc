$(function(){
   var page1=1,page2=2,page3=3,page4=4;
   $('#pages').on('click','.next',function(){
       page1++;
       page2++;
       page3++;
       page4++;
       var pageHtml=`
        <li>${page1}</li>
        <li>${page2}</li>
        <li>${page3}</li>
        <li>${page4}</li>
        <li>...</li>
        <li>10</li>
   `;
    if(page1<7){
        $('#pageNum').html(pageHtml);
    }else{
        return;
    }

   });
});