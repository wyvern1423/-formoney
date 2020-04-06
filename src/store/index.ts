import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[]
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]]') as RecordItem[];

    },
    createRecord(state, record) {
      const recordDeepCopy = clone(record);
      recordDeepCopy.createdAt = new Date();
      state.recordList && state.recordList.push(recordDeepCopy);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
  }
});

export default store;
