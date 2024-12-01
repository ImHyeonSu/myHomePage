---
sidebar_position: 2
---

# AI_prompt_2

**Last updated:** _2024-01-06_

**参照サイト:** _[リンク](https://www.promptingguide.ai/jp)_

## prompt chain

重要な手法の一つとして、タスクを複数のサブタスクに分割すること、これらのサブタスクが特定されると、LLM はそれぞれに対してプロンプトを出し、その回答を次のプロンプトの入力として利用する。

```

あなたは親切なアシスタントです。
あなたの仕事は、文書で与えられた質問に答えるのを助けることです。最初のステップは、####で区切られた文書から質問に関連する引用を抽出することです。
引用のリストは<quotes></quotes>を使って出力してください。関連する引用が見つからなかった場合は「関連する引用は見つかりませんでした。]と返信してください。
####
{{document}}
####

<quotes>
- Chain-of-thought (CoT) prompting[27]
- Generated knowledge prompting[37]
- Least-to-most prompting[38]
- Self-consistency decoding[39]
- Complexity-based prompting[41]
- Self-refine[42]
- Tree-of-thought prompting[43]
- Maieutic prompting[45]
- Directional-stimulus prompting[46]
- Textual inversion and embeddings[59]
- Using gradient descent to search for prompts[61][62][63][64]
- Prompt injection[65][66][67]
</quotes>


ある文書から抽出された関連する引用（<quotes></quotes>で区切られています）と元の文書（###で区切られています）が与えられたら、質問に対する答えを作成してください。
回答は正確で、友好的な口調で、役に立つように聞こえるようにしてください。
####
{{document}}
####
<quotes>
- Chain-of-thought (CoT) prompting[27]
- Generated knowledge prompting[37]
- Least-to-most prompting[38]
- Self-consistency decoding[39]
- Complexity-based prompting[41]
- Self-refine[42]
- Tree-of-thought prompting[43]
- Maieutic prompting[45]
- Directional-stimulus prompting[46]
- Textual inversion and embeddings[59]
- Using gradient descent to search for prompts[61][62][63][64]
- Prompt injection[65][66][67]
</quotes>

文書で言及されているプロンプトのテクニックには、以下のようなものがある：
1. Chain-of-thought (CoT) prompting[27]
2. Generated knowledge prompting[37]
3. Least-to-most prompting[38]
4. Self-consistency decoding[39]
5. Complexity-based prompting[41]
6. Self-refine[42]
7. Tree-of-thought prompting[43]
8. Maieutic prompting[45]
9. Directional-stimulus prompting[46]
10. Textual inversion and embeddings[59]
11. Using gradient descent to search for prompts[61][62][63][64]
12. Prompt injection[65][66][67]
これらの技法はそれぞれ、大規模な言語モデルとの相互作用を強化したり特定したりして、望ましい結果を生み出すための独自の戦略を採用している。
```
