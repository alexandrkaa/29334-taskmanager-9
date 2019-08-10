import {getComponent} from './render';
export const getSearchComponent = () => {
  const markup = `
    <section class="main__search search container">
      <input
        type="text"
        id="search__input"
        class="search__input"
        placeholder="START TYPING — SEARCH BY WORD, #HASHTAG OR DATE"
      />
      <label class="visually-hidden" for="search__input">Search</label>
    </section>
  `;
  return getComponent(markup);
  // return markup;
};
