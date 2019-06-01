import Vue from 'vue';

// test directive
Vue.directive('test', {
  bind(el, binding, vnode) {
    Object.assign(el, { innerHTML: `${JSON.stringify(binding)}<br>
name: ${JSON.stringify(binding.name)}<br>
expression: ${JSON.stringify(binding.expression)}<br>
argument:${JSON.stringify(binding.arg)}<br>
modifiers:${JSON.stringify(binding.modifiers)}<br>
vnode keys:${Object.keys(vnode).join(', ')}<br>`,
    });
  },
});

function togglePassword(val) {
  return val ? 'text' : 'password';
}

// custom toggle password
Vue.directive('toggle-password', {
  bind(el, binding) {
    Object.assign(el, { type: togglePassword(binding.value) });
  },
  update(el, binding) {
    Object.assign(el, { type: togglePassword(binding.value) });
  },
});
