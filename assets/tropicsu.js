// =============================================================================
// TropicsU Calculus CO2
// =============================================================================


import {$$} from '@mathigon/boost';


const $filterInputs = $$('.filter-option input');
const $filterTargets = $$('.filterable');

const filters = {};

for (const $f of $filterInputs) {
  const category = $f.data.category;
  const value = $f.attr('value');
  if (!filters[category]) filters[category] = [];

  $f.on('change', () => {
    if ($f._el.checked) {
      filters[category].push(value);
    } else {
      filters[category] = filters[category].filter(f => f !== value);
    }

    for (let $el of $filterTargets) checkFilter($el);
  });
}

function checkFilter($el) {
  const search = $el.data.filter || '';
  for (let type of Object.keys(filters)) {
    if (!filters[type].length) continue;
    for (let item of filters[type]) {
      if (search.indexOf(item) < 0) {
        $el.hide();
        return;
      }
    }
  }
  $el.show();
}
