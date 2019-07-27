// =============================================================================
// Shared JS Code
// =============================================================================


import {Browser, $body, $} from '@mathigon/boost';

let showTeachingNotes = !!(+Browser.getCookie('show_teaching_notes'));
if (showTeachingNotes) $body.addClass('show-teaching-notes');

$('.toggle-teacher-notes').on('click', () => {
  showTeachingNotes = !showTeachingNotes;
  Browser.setCookie('show_teaching_notes', showTeachingNotes ? '1' : '0');
  $body.setClass('show-teaching-notes', showTeachingNotes);
});
