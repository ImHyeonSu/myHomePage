---
sidebar_position: 3
---

# Vue_3

**Last updated:** _2024-02-04_

## package.json

- Project のメータデータ、依存性管理のための設定ファイル
- npm install するとき、package.json ファイルを元にして実行される。
- package.json を基準にして　 package-lock.json がアップデートされる。
- 手動で編集できる

## package-lock.json

- npm が Project を設置するとき作られるファイル、依存性などを正確に記録する
- npm ci をするとき、package-lock.json ファイルをモドにして実行される。

## Composition API

- vue2 からあった Option API 形式の短所を補足するため Vue3 から出た新し書き方
  既存の option API の書き方

```Vue
<template>
	<div>
		<button @click="increment">Counter: {{ counter }}</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			counter: 0,
		};
	},
	methods: {
		increment() {
			this.counter++;
		},
	},
	mounted() {
		console.log('mounted');
	},
};
</script>

<style lang="scss" scoped></style>
```

- Composition API の書き方

```Vue
<template>
	<div>
		<button>Counter: {{ counter }}</button>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
	setup() {
		const counter = ref(0);

		const increment = () => counter.value++;

		onMounted(() => {
			console.log('Mounted');
		});

		return {
			counter,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
```

- Composition API は setup という関数がある、この setup 関数が既存の data,methodsm,mounted などを全部カバーする。
- setup 関数の中では this を使えない
- 公式サイトでは以下みたいな書き方をお薦めしている

```Vue
<script setup>
</script>
```

- ライフサイクルを別に宣言可能

### ref, reactive

- reactive reference という意味、vue2 では Vue template、Dom または component を示す属性だったが、Vue3 の composition API では違う
- ref または reactive という coponent とは別な形式で使える property を設定可能

#### ref

- ref は type の制限がない
- ref は.value という property から接近できる。template には value をつける必要はない。

```Vue
<script>
import {ref} from "vue";
export default{
    setup(){
    const name = ref("test");

    const updateName = () => {
        name.value = "update";
    }
    return {
        name,
        updateName,
    }
    }
}
</script>
<script setup>
import {ref} from "vue";
const name = ref("test");

function updateName() {
    name.value = "update";
}
</script>
```

#### reactive

- reactive は Object, array, Map, Set などの type だけに使える。
- reactive は.value をつけなくても使える

```Vue
<script>
import {reactive} from "vue";
export default{
    setup(){
        const name = reactive({
            id: 1,
        });

        const updateName = () => {
            name.id = 2;
        }
        return{
            name,
            updateName,
        }
    }
}
</script>
<script setup>
import {reactive} from "vue";

const name = reactive({
    id: 1,
});
function updateName() {
    name.id = 2;
}
</script>
```

### defineProps()

```Vue
<script setup>
const props = defineProps(){
    imtes: {
        type: Array,
        default: () => [],
    }
}
</script>
```

### defineEmits()

- $emit という機能は template 内では使えるけど、javascript のコードでは使えない、それを使えるようにしてくれる書き方が defineEmits()

```Vue
<script setup>
const emit = defineEmits(["hideFn"]);
</script>
```

### computed()

- template を手伝うための書き方

```Vue
<div>
{{selection}}
</div>
<script>
import {computed} from 'vue'
const selection = computed(() =>{
    return state.selectedItem || props.placeHolder
})
</script>
```

### provide,inject

- 親と子供の間のデータのやり取り
  - 親から子供までて帰郷してあげるのが Provide
  - 子供が親のデータを使えるためは inject を使う

```Vue
// provide
app.provide('globalProperties', app.config.globalProperties);

const globalProperties = inject("globalProperties");
```
