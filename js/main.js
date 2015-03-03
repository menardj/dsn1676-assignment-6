var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

$btnShowHide.on('click', function () {
	$box.toggleClass('js-show-hide');
})

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

$btnMove.on('click', function () {
	$diamond.toggleClass('js-move');
})

var $btnCollapseExpand = $('.btn-collapse-expand');
var $panel = $('.panel');

$btnCollapseExpand.on('click', function (){
	$panel.toggleClass ('js-collapse-expand');
})

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');

$btnBounce.on('click', function () {
	$circle.addClass('js-circle-bounce');
})

$circle.on('animationend', function (){
	$circle.removeClass('js-circle-bounce');
})

var $btnAppend = $('.btn-append');
var $list = $('.list');

$btnAppend.on('click', function (e) {
	var $li = $('<li>');
	$list.append($li);
	$li.addClass ('js-stack')
	$li.append('New List Item');
})
