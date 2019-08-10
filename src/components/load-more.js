import {getComponent} from './render';
export const getLoadMoreComponent = () => {
  const markup = `
    <button class="load-more" type="button">load more</button>
  `;
  return getComponent(markup);
  // return markup;
};
