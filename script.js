// script.js
$(function(){
  // populate current year
  $('#year, #year2, #year3').text(new Date().getFullYear());

  // theme toggle (persist in localStorage)
  function setTheme(t){
    $('body').removeClass('light dark').addClass(t);
    localStorage.setItem('siteTheme', t);
  }
  const saved = localStorage.getItem('siteTheme') || 'light';
  setTheme(saved);

  $('#themeToggle').on('click', function(){
    const newTheme = $('body').hasClass('light') ? 'dark' : 'light';
    setTheme(newTheme);
  });

  // Print buttons
  $('#printResume').on('click', function(){ window.print(); });
  $('#printBiodata').on('click', function(){ window.print(); });

  // mobile nav toggle
  $('.nav-toggle').on('click', function(){
    const $nav = $('#nav-list');
    const expanded = $(this).attr('aria-expanded') === 'true';
    $(this).attr('aria-expanded', !expanded);
    $nav.toggleClass('show');
  });

  // close mobile nav on link click
  $('#nav-list a').on('click', function(){ $('#nav-list').removeClass('show'); $('.nav-toggle').attr('aria-expanded', 'false'); });
});
