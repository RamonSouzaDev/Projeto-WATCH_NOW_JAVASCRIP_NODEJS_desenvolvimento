var $html;
var $body;
var $menuHamburguer;
var $menuOverlay;
var menuIdTimeout;

function menuOpen() {
	clearTimeout(menuIdTimeout);
	$html.addClass('menu-ativo');
	$menuOverlay.addClass('menu-overlay');
	$menuHamburguer.prop('checked', true);

	
}

function menuClose() {
	$html.removeClass('menu-ativo');
	$menuHamburguer.prop('checked', false);
	
	menuIdTimeout = setTimeout(function () {
		$menuOverlay.removeClass('menu-overlay');
	}, 300);

}

var menuItem = document.querySelectorAll('.barra_nav-menu-principal-item');
for(var i=0; i<menuItem.length; i++){
	menuItem[i].addEventListener("click", function(){
		$html.removeClass('menu-ativo');
		var check = document.getElementById('menu-hamburguer');
		check.checked = false;
	});
}

function menuToggle() {
	if ($menuHamburguer.prop('checked')) {
		menuOpen();
	} else {
		menuClose();
	}
}

$html = $('html');
$body = $('body');
$menuHamburguer = $('#menu-hamburguer');
$menuOverlay = $('<div>');

$body.append($menuOverlay);

$menuHamburguer.click(menuToggle);
$menuOverlay.click(menuClose);
