// window.addEventListener("load", function () {
//JavaScript
//document.getElementsByTagName("h2")[0].style.backgroundColor = "red";
// const items = document.getElementsByTagName("h2");
// for (let i = 0, max = items.length; i <= max; i++) {
//     items[i].style.backgroundColor = "red";
// }

//jQuery('selectors').css('樣式名稱','樣式的值')
//$('h2').css('background-color', 'lightgreen');
//jQuery('h2').css('backgroundColor', 'silver');
// })

// $(document).ready(function () {
//     $('h2').css('background-color', 'lightgreen');
// })
//$(document).ready()的簡寫
$(function () {
    //const myH2 = $('h2');
    // $('h2').css('background-color', 'pink');
    // $('h2').on('mouseenter', function () {
    //     //this 表示觸發事件的物件
    //     //this 是JavaScript物件
    //     //$(this) 就是轉型成jQuery物件
    //     $(this).css('background-color', 'lightgreen');
    //     //this.style.backgroundColor = "lightgreen";
    // })
    // $('h2').on('mouseleave', function () {
    //     $(this).css('background-color', 'pink');
    // })




    // $('h2').css('background-color', 'pink')
    //     .css('padding', '10px')
    //     .css('width', '500px')
    //     .on('mouseenter', function () {
    //         $(this).css('background-color', 'lightgreen');
    //     }).on('mouseleave', function () {
    //         $(this).css('background-color', 'pink');
    //     })
    //jQuery 鏈式(Chaining)語法
    //jQuery的方法可以傳入物件{}，將同一個方法的多個設定，放進物件中傳入jQuery的方法
    //{key:value,key:value}
    $('h2').css({ 'background-color': 'pink', 'padding': '10px', 'width': '500px' })
        .on({
            'mouseenter': function () {
                $(this).css('background-color', 'lightgreen');
            },
            'mouseleave': function () {
                $(this).css('background-color', 'pink');
            }
        })
})
