// =============================================================================
// Shared JS Code
// =============================================================================


import {Browser, $body, $} from '@mathigon/boost';

// By default the Teaching notes are OFF
/*
let showTeachingNotes = !!(+Browser.getCookie('show_teaching_notes'));
if (showTeachingNotes) $body.addClass('show-teaching-notes');

$('.toggle-teacher-notes').on('click', () => {
  showTeachingNotes = !showTeachingNotes;
  Browser.setCookie('show_teaching_notes', showTeachingNotes ? '1' : '0');
  $body.setClass('show-teaching-notes', showTeachingNotes);
});*/


// By default the Teaching notes are ON

let hideTeachingNotes = !!(+Browser.getCookie('hide_teaching_notes'));

$body.addClass('show-teaching-notes');
if (hideTeachingNotes)  $body.setClass('show-teaching-notes', !hideTeachingNotes);

$('.toggle-teacher-notes').on('click', () => {
  hideTeachingNotes = !hideTeachingNotes;
  Browser.setCookie('hide_teaching_notes', hideTeachingNotes ? '1' : '0');
  $body.setClass('show-teaching-notes', !hideTeachingNotes);
});
