/**
 * script.css - main script using jquery
 */

// change active class navigation

const sections = $("section"),
  nav = $("nav"),
  nav_height = nav.outerHeight();

$(window).on("scroll", function () {
  let cur_pos = $(this).scrollTop();

  sections.each(function () {
    let top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find("li").removeClass("active");
      sections.removeClass("active");

      $(this).addClass("active");
      nav
        .find('a[href="#' + $(this).attr("id") + '"]')
        .parent("li")
        .addClass("active");
    }
  });
});

nav.find("a").on("click", function () {
  const $el = $(this),
    id = $el.attr("href");

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - nav_height + 100,
    },
    500
  );

  return false;
});
