## 주요 Tailwind 클래스 설명

| 클래스                            | 설명                                           | 적용 예시                                           | 예상 결과 화면(설명/ASCII)       |
| --------------------------------- | ---------------------------------------------- | --------------------------------------------------- | -------------------------------- |
| `bg-blue-500`                     | 배경색을 파란색(중간톤)으로 설정               | `<button className="bg-blue-500">`                  | 파란색 버튼                      |
| `text-white`                      | 글자색을 흰색으로 지정                         | `<button className="text-white">`                   | 흰 글씨                          |
| `rounded-md`                      | 모서리를 중간 크기로 둥글게                    | `<button className="rounded-md">`                   | ┌─────┐ 둥근 모서리              |
| `px-4 py-2`                       | 좌우/상하 패딩(px = padding-x, py = padding-y) | `<button className="px-4 py-2">`                    | 여유있는 버튼 크기               |
| `shadow`                          | 기본 그림자 효과 부여                          | `<button className="shadow">`                       | 버튼이 약간 떠보임               |
| `transition`, `hover:bg-blue-600` | 부드러운 전환 + 마우스 올릴 때 배경색 어두워짐 | `<button className="transition hover:bg-blue-600">` | 마우스 오버시 색상 부드럽게 변화 |
| `disabled:opacity-50`             | 비활성화(disabled) 시 투명도 50%로 표시        | `<button disabled className="disabled:opacity-50">` | 흐릿한 비활성 버튼               |
| `active:scale-95`                 | 클릭(누름) 상태일 때 살짝 축소                 | `<button className="active:scale-95">`              | 누를 때 버튼이 살짝 작아짐       |

#### 적용 예시 및 ASCII 설명

```jsx
<button className="bg-blue-500 text-white rounded-md px-4 py-2 shadow hover:bg-blue-600 transition">
  기본 버튼
</button>
```

- 파란색 배경, 흰색 글자, 중간 둥근 모서리, 그림자, 마우스 올릴 때 더 진해짐

---
