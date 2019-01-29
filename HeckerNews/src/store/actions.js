import axios from 'axios';

export async function getIdPosts({ commit }, payload) {
  commit(
    `${this.state.Setter_name_for_Get_ID}`,
    await axios.get(`${this.state.url}${payload}.json`)
    .then(res => res.data)
    .catch(err=>console.warn(err))
  );
}
//----------------------------------------------------
export function getArticlesTop({ commit }) {
  this.state.TopStoriesID.slice(
    0 + this.state.step_Top * 10,
    10 + this.state.step_Top * 10,
  ).forEach(
    async el => await axios
      .get(`${this.state.url}item/${el}.json`)
      .then(res => commit(`${this.state.Seter_name_for_add_Articles_in_Tab}`, res.data))
      .catch(err=>console.warn(err))
  );
}
//----------------------------------------------------
export function getArticlesBest({ commit, dispatch }) {
  this.state.BestStoriesID.slice(
    0 + this.state.step_Best * 10,
    10 + this.state.step_Best * 10,
  ).forEach(
    async el => await axios
      .get(`${this.state.url}item/${el}.json`)
      .then(async res => commit(`${this.state.Seter_name_for_add_Articles_in_Tab}`, res.data))
      .catch(err=>console.warn(err))
  );
}
//----------------------------------------------------
export function getArticlesAsc({ commit, dispatch }) {
  this.state.AscStoriesID.slice(
    0 + this.state.step_Asc * 10,
    10 + this.state.step_Asc * 10,
  ).forEach(
    async el => await axios
      .get(`${this.state.url}item/${el}.json`)
      .then(async res => commit(`${this.state.Seter_name_for_add_Articles_in_Tab}`, res.data))
      .catch(err=>console.warn(err))
  );
}
//----------------------------------------------------
export function getArticlesShow({ commit, dispatch }) {
  this.state.ShowStoriesID.slice(
    0 + this.state.step_Show * 10,
    10 + this.state.step_Show * 10,
  ).forEach(
    async el => await axios
      .get(`${this.state.url}item/${el}.json`)
      .then(async res => commit(`${this.state.Seter_name_for_add_Articles_in_Tab}`, res.data))
      .catch(err=>console.warn(err))
  );
}
//----------------------------------------------------
export function getArticlesJob({ commit, dispatch }) {
  this.state.JobStoriesID.slice(
    0 + this.state.step_Job * 10,
    10 + this.state.step_Job * 10,
  ).forEach(
    async el => await axios
      .get(`${this.state.url}item/${el}.json`)
      .then(async res => commit(`${this.state.Seter_name_for_add_Articles_in_Tab}`, res.data))
      .catch(err=>console.warn(err))
  );
}
//----------------------------------------------------
export function getArticlesNews({ commit, dispatch }) {
  this.state.NewsStoriesID.slice(
    0 + this.state.step_News * 10,
    10 + this.state.step_News * 10,
  ).forEach(
    async el => await axios
      .get(`${this.state.url}item/${el}.json`)
      .then(async res => commit(`${this.state.Seter_name_for_add_Articles_in_Tab}`, res.data)).catch(err=>console.warn(err))
  );
}
//----------------------------------------------------
export function getComents({ commit }, payload) {
  payload.map(async (el) => {
    // payload.slice(0,10).map(async el => {
    await axios
      .get(`${this.state.url}item/${el}.json`)
      .then(res => commit('ADD_COMENTS', res.data))
      .catch(err=>console.warn(err))
  });
}
