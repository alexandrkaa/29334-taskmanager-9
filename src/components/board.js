import {getTaskCardComponent} from './card.js';
import {getEditCardComponent} from './card-edit.js';
import {getLoadMoreComponent} from './load-more.js';
import {renderComponent} from './render';

export const getBoardComponent = () => {
  const markup = `
    <section class="board container">
      <div class="board__filter-list">
        <a href="#" class="board__filter">SORT BY DEFAULT</a>
        <a href="#" class="board__filter">SORT BY DATE up</a>
        <a href="#" class="board__filter">SORT BY DATE down</a>
      </div>
      <div class="board__tasks">
      </div>
    </section>
  `;
  // const board = getComponent(markup);
  const board = markup;
  const taskContainer = board.querySelector(`.board__tasks`);
  renderComponent(taskContainer, getEditCardComponent());
  for (let i = 1; i <= 3; i++) {
    renderComponent(taskContainer, getTaskCardComponent(), `afterend`);
  }
  renderComponent(board, getLoadMoreComponent());
  return board;
};
