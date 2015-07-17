var premierDay = moment('18/12/2015', 'DD/MM/YYYY'),
    now        = moment();

$().ready(function () {
  if (now.isBefore(premierDay)) {
    $('.answer').append('<p>No</p>');
  } else {
    $('.answer').append('<p>Yes</p>');
  }
});
