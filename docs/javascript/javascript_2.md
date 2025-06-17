---
sidebar_position: 2
---

# javascript_2

**Last updated:** _2024-01-08_

## async/await

- 非同期処理の順番を元にして実行する関数
  - async
    - keyword を関数の前に付けると、疲れた関数は Promise 関数を返却する
    - async 関数は非同期を処理する、その中で awaitKeyword を使用して PromiseObject の解決を待つ。
  - await
    - async 関数内でしか使えない、非同期処理が終わるまで待つ
    - await を利用して順番を制御する
    - await 関数は PromiseObject が解決されるまで、関数の実行止めって、該当 Promise 結果を返却する

```javascript
export default{
	data() {
		return {
			result; null
		};
	},
methods: {
	async fetchData(){
		try {
			const responce = await this.fechDataFromServer();
			// fechDataFromServerが成功した時
			this.result = responce.data;
		} catch (error) {
			// fechDataFromServerが失敗した時
				console.error("", error);
		}
	},
fetchDataFromServer() {
	return fetch();
}
}
};
```

## promise

- Promise Object は resolve, reject を返却する JavaScript 非同期処理
  - 非同期処理が終わった後完了、失敗を表す Javascript の Object
  - pending, Fulfilled, Rejected の三つの状態がある
    - pendingからFulfilledに変わったら、resolve は promiseObject が成功した時呼び出される、try catchのthen
    - pendingからRejectedに変わったら、reject は promiseObject が失敗した時呼び出される、try catchのcatch

```javascript
const fetchData = new Promise((resolve, reject) => {
	const data = fetchSomeData();
		if (data){
			resolve(data);
		}else{
			reject("error");
		}
)
-> try,catch例
const fetchData = new Promise((resolve, reject) => {
	try{
	const data = fetchSomeData();
		if (data){
			resolve(data);
		}else{
			reject("error");
		}
	}catch(error){
		reject(error);
}
)
```
