import {getMenuComponent} from './components/menu';
import {getSearchComponent} from './components/search';
import {getFilterComponent} from './components/filter';
import {getBoardComponent} from './components/board';
import {renderComponent} from './components/render';

const mainBlock = document.querySelector(`.main`);
const menuBlock = mainBlock.querySelector(`.main__control`);
renderComponent(menuBlock, getMenuComponent());
renderComponent(mainBlock, getSearchComponent());
renderComponent(mainBlock, getFilterComponent());
renderComponent(mainBlock, getBoardComponent());

