setInterval(()=>{
  const current = $('.carousel-input:checked');
  const next = current.next('.carousel-input');
  current.removeAttr('checked');
  if (next.length) {
    next.attr('checked', true);
  } else {
    $('.carousel .carousel-input:first-child').attr('checked', true);
  }
}, 4000);
