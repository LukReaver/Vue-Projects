// -- Basic Settings ---
export const SET_SETTER_ADD_ID_TAB = (state, payload) => {
  state.Setter_name_for_Get_ID = payload;
};
export const SET_SETTER_ADD_ARTICLES_IN_TAB = (state, payload) => {
  state.Seter_name_for_add_Articles_in_Tab = payload;
};
//--------------------------------------------------------------------------
export const ADD_COMENTS = (state, payload) => {
  state.ComentsBox.push(payload);
};
//--------------------------------------------------------------------------

export const ADD_ID_TOP = (state, tab) => {
  state.TopStoriesID = tab;
};
export const ADD_ARTICLES_TOP = (state, tabEl) => {
  //  --- Preloader Off ---
  state.postsReady = true;
  state.TopStoriesArticles.push(tabEl);
};
export const SET_STEP_TOP = (state, payload) => {
  state.step_Top += payload;
};
//--------------------------------------------------------------------------
export const ADD_ID_BEST = (state, tab) => {
  state.BestStoriesID = tab;
};
export const ADD_ARTICLES_BEST = (state, tabEl) => {
  state.postsReady = true;
  state.BestStoriesArticles.push(tabEl);
};
export const SET_STEP_BEST = (state, payload) => {
  state.step_Best += payload;
};
//--------------------------------------------------------------------------
export const ADD_ID_ASC = (state, tab) => {
  state.AscStoriesID = tab;
};
export const ADD_ARTICLES_ASC = (state, tabEl) => {
  state.postsReady = true;
  state.AscStoriesArticles.push(tabEl);
};
export const SET_STEP_ASC = (state, payload) => {
  state.step_Asc += payload;
};
//--------------------------------------------------------------------------
export const ADD_ID_SHOW = (state, tab) => {
  state.ShowStoriesID = tab;
};
export const ADD_ARTICLES_SHOW = (state, tabEl) => {
  state.postsReady = true;
  state.ShowStoriesArticles.push(tabEl);
};
export const SET_STEP_SHOW = (state, payload) => {
  state.step_Show += payload;
};
//--------------------------------------------------------------------------
export const ADD_ID_JOB = (state, tab) => {
  state.JobStoriesID = tab;
};
export const ADD_ARTICLES_JOB = (state, tabEl) => {
  state.postsReady = true;
  state.JobStoriesArticles.push(tabEl);
};
export const SET_STEP_JOB = (state, payload) => {
  state.step_Job += payload;
};
//--------------------------------------------------------------------------
export const ADD_ID_NEWS = (state, tab) => {
  state.NewsStoriesID = tab;
};
export const ADD_ARTICLES_NEWS = (state, tabEl) => {
  state.postsReady = true;
  state.NewsStoriesArticles.push(tabEl);
};
export const SET_STEP_NEWS = (state, payload) => {
  state.step_News += payload;
};
