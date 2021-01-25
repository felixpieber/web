// ==UserScript==
// @name         Pinterest Smasher
// @namespace    http://tampermonkey.net/
// @version      1.1
// @author       Felix Pieber
// @description  Allows to browse Pinterest without login/registration.
// @icon         https://images-na.ssl-images-amazon.com/images/I/41suDQeNN5L.png
// @website      https://felixpieber.github.com/web
// @updateURL    https://felixpieber.github.io/web/js/Pinterest.Smasher.user.js/
// @include      http://*.pinterest.com/*
// @include      https://*.pinterest.com/*
// @include      https://*.pinterest.*/*
// @require      http://code.jquery.com/jquery-latest.min.js
// @grant        GM_addStyle
// ==/UserScript==

$(document).ready(function () {
	if(location.pathname == "/")
		location.href = "https://www.pinterest.com/search/pins/?q=pin&rs=typed";

    GM_addStyle(`
    .UnauthBanner, body>.Modal, .ModalManager>.Modal, .Closeup__wrapper>div[style*='fixed'], iframe[src*=smartlock], div[data-test-id=signup] {
        display: none !important;
    }

    .noScroll {
        overflow: auto !important;
    }

    div[style*='cubic-bezier'], div[style*='fixed']>div[style*='opacity: 0.5'], div[style*='background-color: rgba(0, 0, 0, 0.6);'], .FullPageModal__scroller {
        display: none !important;
    }

    div.gridContainer>div, .Grid {
        height: auto !important;
    }

    :root body { overflow-y: auto !important; }
    `);
});