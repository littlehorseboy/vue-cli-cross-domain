import Vue from 'vue';
import * as types from './mutations_type';

export const state = {
  count: 5,
  todos: [
    { key: 0, content: 'vue.js 2.0', done: true },
    { key: 1, content: 'vuex 2.0', done: false },
    { key: 2, content: 'vue-route 2.0', done: false },
    { key: 3, content: 'vue-resource 2.0', done: false },
    { key: 4, content: 'webpack', done: false },
  ],
};

let todoKey = state.todos.length;

export const mutations = {
  // action 發出 commit 會對應到 mutation 使用的是 Object key 方式
  [types.INCREASE](state, num) {
    // 在 mutation 改變 state (只有 mutation 可以改變!)
    state.count += num;
    console.log(`INCREASE ${num} state? ${state.count}`);
  },
  [types.DECREASE](state, num) {
    state.count -= num;
    console.log(`DECREASE ${num} state? ${state.count}`);
  },
  [types.COUNT_RESET](state) {
    state.count = 0;
    console.log(`COUNT_RESET - state? ${state.count}`);
  },
  [types.ADD_TODO](state, newTodo) {
    state.todos.push({
      key: todoKey,
      content: newTodo,
      done: false,
    });

    todoKey += 1;
  },

  [types.TOGGLE_TODO](state, key) {
    for (let i in state.todos) {
      var item = state.todos[i];
      if (item.key === key) {
        item.done = !item.done;
        console.log('TOGGLE_TODO:', item.content, 'done?', item.done);
        break;
      }
    }
  },

  [types.DELETE_TODO](state, key) {
    for(let i in state.todos) {
      var item = state.todos[i];
      if (item.key === key) {
        console.log('DELETE_TODO:', item.content, ', index?', i);
        state.todos.splice(i, 1);
        break;
      }
    }
  },
};
