/*
 *  Pureincubation Responsive UI Design
 * 
 *  Created by:  Jing Daradal
 *  Date: 8.1.2018
 * 
 *  Requirements:
 *      Jquery 3+
 *      Bootstrap 3
 *      Animate Css
 * 
 *  Revision by         Date            Description
 *  -----------         -----------     -------------------------------------------------------------------
 *  
 *  
 *  
 */

(function ($) {
    "use strict";
    var _element_to_hide = {};
    var _size_sidebar_large = "239px";
    var _size_sidebar_medium = "85px";
    var _sidebar = $("#sidebar");
    var _togglebtn = $(".sidebar-toggle-btn");
    var _pagecontent = $(".page-content");
    var _sidebarSpan = $(_sidebar).find("ul li.navbar-list span");
    var _sidebarLink = $(_sidebar).find("ul li > a");
    var _sidebarUL = $(_sidebar).find("ul");
    var _sidebarList = $(_sidebar).find("ul li.navbar-list");
    var _sidebarTitles = $(_sidebar).find("ul li span");
    var _headerSubmenus = $("header div.navbar .navbar-content .navbar-header-right ul#nav li div.dropdown div.dropdown-menu");
    var _sidebarSubmenus = $("div.wrapper nav#sidebar ul li.navbar-list div.nav-dropdown");
    var menu = $("header div.navbar .navbar-content .navbar-header-right ul#nav li:last-child div.dropdown div.dropdown-menu");

    $(".sidebar-toggle-btn").click(function () {
        $(_sidebarSubmenus).hide();

        var _windowSize = $(window).width();

        if ($(_sidebar).hasClass('sidebar-large')) {
            $(_sidebar).removeClass("sidebar-large");
            $(_sidebar).addClass("sidebar-small");

            $(_togglebtn).removeClass("sidebar-toggle-btn-large");
            $(_togglebtn).addClass("sidebar-toggle-btn-small")

            $(_pagecontent).removeClass("page-content-large");
            $(_pagecontent).addClass("page-content-medium");
        }
        else {
            $(_sidebar).removeClass("sidebar-small");
            $(_sidebar).addClass("sidebar-large");

            $(_togglebtn).removeClass("sidebar-toggle-btn-small");
            $(_togglebtn).addClass("sidebar-toggle-btn-large");

            $(_pagecontent).removeClass("page-content-medium");
            $(_pagecontent).addClass("page-content-large");

        }

        if ($(_sidebar).hasClass("sidebar-small")) {
            sidebar_medium();
        } else {
            $(_sidebarSpan).removeAttr('style')
            $(_sidebarLink).removeAttr('style')

            sidebar_large();
        }

    });

    $("#menu-toggle-btn").click(function () {

        $(_sidebarSubmenus).hide();

        $(_sidebar).toggleClass("sidebar-mobile-menu");

        if ($(_sidebar).hasClass("sidebar-mobile-menu")) {
            $(_sidebar).removeClass("sidebar-large");
            $(_sidebar).removeClass("sidebar-small");
            $(_sidebarSubmenus).css("left", _size_sidebar_medium);
            $(_sidebarSubmenus).parent().find("div.nav-dropdown > a").css("text-align", "left");
        }
        else {
            $(_sidebar).addClass("sidebar-large");
        }

    });

    $("#linkUserProfile").click(function (e) {

        var dropdown = $(this).parent("div.dropdown");

        if ($(dropdown).hasClass("open")) {
            //$(dropdown).find("div.dropdown-menu").css("opacity", "0");
            $(dropdown).find("div.dropdown-menu").hide();
        }
        else {
            $(dropdown).find("div.dropdown-menu").addClass("animated flipInX");
            $(dropdown).find("div.dropdown-menu").show();
            //$(dropdown).find("div.dropdown-menu").css("opacity", "1");
        }

        e.preventDefault();


    });


    $('a.scroll-to-top').click(function (e) {
        var $anchor = $(this);


        $('html, body').stop().animate({
            scrollTop: 0 }, 'slow');

        e.preventDefault();
    });

    $("li.navbar-list > a.has-dropdown").click(function () {
        var offset = $(this).offset();

        $("li.navbar-list > a.has-dropdown").parent().find("div.nav-dropdown").hide();

        var dropdown = $(this).parent().find("div.nav-dropdown");

        _element_to_hide = dropdown;

        $(dropdown).css("top", offset.top.toString() + "px");
        $(dropdown).addClass("animated flipInX");
        $(dropdown).show();

    });

    $("li.navbar-list > div.nav-dropdown > a").click(function (e) {
        $(this).parent().hide();

        var href = $(this).attr("href");
        var target = $(this).attr("target");

        if (href) {
            if (target === '_blank') {
                window.open(href, target);
            }
            else {
                window.location = href;
            }
        }
        e.preventDefault();
    });

    $(_headerSubmenus).find("a").click(function (e) {
        $(this).parent().hide();
        var href = $(this).attr("href");
        var target = $(this).attr("target");

        if (href) {
            if (target === '_blank') {
                window.open(href, target);
            }
            else {
                window.location = href;
            }
        }
        e.preventDefault();
    });

    $("li.navbar-list > div.nav-dropdown").on('focusout', function () {
        $(this).hide();
    });
    
    $('[data-toggle="tooltip"]').tooltip();

    $('[data-toggle="tooltip"]').on('shown.bs.tooltip', function () {
        $('.tooltip').addClass('animated swing');
    })

    var sidebar_medium = function () {
        $(_sidebarSpan).css("width", _size_sidebar_medium);
        $(_sidebarTitles).css("display", "block");
        $(_sidebarTitles).css("font-size", "8px");
        $(_sidebarTitles).css("line-height", "1.5em");
        $(_sidebarTitles).css("text-align", "center");


        $(_sidebarLink).css("width", _size_sidebar_medium);
        $(_sidebarLink).css("padding-left", "2px");
        $(_sidebarUL).css("width", _size_sidebar_medium);
        //$(_sidebarUL).css("text-align", "center");


        $(_sidebarList).css("width", _size_sidebar_medium);
        $(_sidebarList).css("font-size", "25px");
        $(_sidebarList).css("text-align", "center");

        $(_sidebarSubmenus).css("left", _size_sidebar_medium);
        $(_sidebarSubmenus).parent().find("div.nav-dropdown > a").css("text-align", "left");
    }

    var sidebar_large = function () {

        $(_sidebarSpan).removeAttr('style')
        $(_sidebarLink).removeAttr('style')

        $(_sidebarUL).css("width", _size_sidebar_large);
        $(_sidebarLink).css("padding-left", '20px');
        $(_sidebarList).css("width", _size_sidebar_large);
        $(_sidebarList).css("font-size", "16px");
        $(_sidebarList).css("text-align", "left");

        $(_sidebarSubmenus).css("left", _size_sidebar_large);

        $(_togglebtn).removeClass("sidebar-toggle-btn-small");
        $(_togglebtn).addClass("sidebar-toggle-btn-large");

        $(_pagecontent).removeClass("page-content-medium");
        $(_pagecontent).addClass("page-content-large");
    };

    $(document).mouseup(function (e) {
        var _sidebar_container = $(_sidebarSubmenus);
        var _header_container = $(_headerSubmenus);

        if (!_sidebar_container.is(e.target) && _sidebar_container.has(e.target).length === 0) {
            _sidebar_container.hide();
        }

        if (!_header_container.is(e.target) && _header_container.has(e.target).length === 0) {
            _header_container.hide();
        }
    });


    $(window).resize(function () {
        var _windowSize = $(window).width();
        _sidebarSubmenus.css("display", "none");


        if (_windowSize < 1100) {
            $(menu).addClass("dropdown-menu-right");
        }
        else {
            $(menu).removeClass("dropdown-menu-right");
        }

        if (_windowSize < 768) {
            $(_sidebarList).removeAttr('style');
            $(_sidebarUL).removeAttr('style');
            $(_sidebarLink).removeAttr('style');

            if ($(_sidebar).hasClass("sidebar-small")) {
                sidebar_medium();
            }

            if ($(_sidebar).hasClass("sidebar-mobile-menu")) {
                $(_sidebar).removeClass("sidebar-mobile-menu");
                $(_sidebar).addClass("sidebar-large");

                sidebar_large();
            }

        }
        else {
            if ($(_sidebar).hasClass("sidebar-small")) {
                sidebar_medium();
            }

            if ($(_sidebar).hasClass("sidebar-mobile-menu")) {
                $(_sidebar).removeClass("sidebar-mobile-menu");
                $(_sidebar).addClass("sidebar-large");

                sidebar_large();
            }
        }

    });

    // Scroll to top button appear
    $(document).scroll(function () {
        var scrollDistance = $(this).scrollTop();


        _sidebarSubmenus.css("display", "none");

        if (scrollDistance > 120) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });
})(jQuery);