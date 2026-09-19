(function () {
  'use strict';

  document.querySelectorAll('[data-copy]').forEach(function (button) {
    button.hidden = false;
    button.addEventListener('click', async function () {
      var citation = document.getElementById(button.dataset.copy);
      var status = button.nextElementSibling;
      try {
        await navigator.clipboard.writeText(citation.textContent.trim());
        status.textContent = 'Citation copied.';
      } catch (e) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(citation);
        selection.removeAllRanges();
        selection.addRange(range);
        status.textContent = 'Citation selected. Press Ctrl+C or ⌘C to copy.';
      }
    });
  });
}());
