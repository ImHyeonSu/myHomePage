---
sidebar_position: 1
---

# Vue_2

**Last updated:** _2024-01-07_

## v-model

- データの変更と反映これを databinding という、v-model は data-binding をやってくれる

```javascript
<template>
  <input v-model="username" />
  <p>username: {{ username }}</p>
</template>

<script>
export default {
  data: () => {
    return {
      username: "username"
    };
  }
}
</script>
```

## bind

- v ー bind の表現式は：を使用
- ：即成名=""データを利用して当てる即成を設定できる

```html
<template>
  <div>
    <h1 :style="titleStyle">Hello, !</h1>
    <button :disabled="isButtonDisabled">Click me</button>
  </div>
</template>
```

## ref

- ref はテンプレート内の要素やコンポーネントの名を指定すること、これを指定することによって method などで使える

```vue
<template>
  <div>
    <input ref="myInput" type="text" />
    <button @click="focusInput">Focus Input</button>
  </div>
</template>

<script>
export default {
  methods: {
    focusInput() {
      this.$refs.myInput.focus();
    },
  },
};
</script>
```
