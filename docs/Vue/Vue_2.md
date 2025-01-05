---
sidebar_position: 2
---

# Vue_2

**Last updated:** _2025-01-05_

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

## v-slot

- これはコンポーネント間のコンテンツ受け渡しを可能にする重要な仕組みであり、特にコンポーネントの再利用性と柔軟性を高める上で重要な役割をする(コンポーネントの構造を柔軟に管理し、再利用可能なコンポーネントを容易に作成することができる)

```html
<!-- 親コンポーネント -->
<child-component>
  <template v-slot:desc>
    ここに記述した内容が子コンポーネントのdescスロットに挿入されます。
  </template>
</child-component>

<!-- 子コンポーネント -->
<template>
  <div>
    <slot name="desc"></slot>
  </div>
</template>
```

## bind

- v-bind の表現式は：を使用
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
