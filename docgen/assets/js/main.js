import dropdowns from './dropdowns.js';
import move from './mover.js';
import activateClipboard from './activateClipboard.js';
import bindRunExamples from './bindRunExamples.js';

import {fixSidebar, followSidebarNavigation} from './fix-sidebar.js';

import '../../../src/css/instantsearch.scss';
import '../../../src/css/instantsearch-theme-algolia.scss';

var alg = require('algolia-frontend-components/javascripts.js');

const docSearch = {
  apiKey: '64eb3d69b6fb84f3c04a24224b6268a7',
  indexName: 'instantsearchjs-v2',
  inputSelector: '#searchbox',
};

const header = new alg.communityHeader(docSearch);

const container = document.querySelector('.documentation-container');
const codeSamples = document.querySelectorAll('.code-sample');

dropdowns();
move();
activateClipboard(codeSamples);
bindRunExamples(codeSamples);

const sidebarContainer = document.querySelector('.sidebar');
if(sidebarContainer) {
  const headerHeight = document.querySelector('.algc-navigation').getBoundingClientRect().height;
  const contentContainer = document.querySelector('.documentation-container');
  fixSidebar({sidebarContainer, topOffset: headerHeight});
  followSidebarNavigation(sidebarContainer.querySelectorAll('a'), contentContainer.querySelectorAll('h2'));
}

// The Following function will make the '.sidebar-opener'
// clickable and it will open/close the sidebar on the
// documentations

function toggleDocumentationSidebar() {
  const sidebarNav = document.querySelector('nav.sidebar');
  const trigger = document.querySelector('.sidebar-opener');

  function init() {
    const bodySize = document.body.clientWidth;
    if (bodySize <= 960 && sidebarNav) {
      trigger.addEventListener('click', () => {
        sidebarNav.classList.toggle('Showed');
        trigger.classList.toggle('Showed');
      });
    }
  }
  init();
}
toggleDocumentationSidebar();

window.addEventListener('resize', () => {
  toggleDocumentationSidebar();
});
