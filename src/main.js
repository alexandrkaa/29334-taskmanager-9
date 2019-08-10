import {getMenuComponent} from './components/menu.js';
import {getSearchComponent} from './components/search.js';
import {getFilterComponent} from './components/filter.js';
import {getBoardComponent} from './components/board.js';
import {renderComponent} from './components/render.js';

const mainBlock = document.querySelector(`.main`);
const menuBlock = mainBlock.querySelector(`.main__control`);
renderComponent(menuBlock, getMenuComponent(), `afterend`);
renderComponent(mainBlock, getSearchComponent(), `afterend`);
renderComponent(mainBlock, getFilterComponent(), `afterend`);
renderComponent(mainBlock, getBoardComponent(), `afterend`);

