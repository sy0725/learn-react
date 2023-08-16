// 1. 아토믹 컴포넌트는 상태를 가지지 않는다는 의미에 대해 설명해주세요.
//    원자 컴포넌트는 가장 작은 단위의 구성 요소이므로 상태를 포함할 경우 관리가 어렵습니다.
//    앨버트 아인슈타인이 말했듯 상태는 최소한으로 관리하는 것이 권장됩니다.

export function Atomic1({ action, onAction }) {
  return (
    <div>
      <h3>과제 수행을 했나요?</h3>
      <label>
        <input
          type="checkbox"
          checked={action}
          name="homework"
          onChange={(e) => onAction(e.target.name, e.target.checked)}
          aria-label="과제 수행"
        />
        <span>{action ? "했어요!" : "안했습니다."}</span>
      </label>
    </div>
  );
}

export function Atomic2({ action, onAction }) {
  return (
    <div>
      <h3>여름 휴가 다녀왔나요?</h3>
      <label>
        <input
          type="checkbox"
          name="vacation"
          checked={action}
          onChange={(e) => onAction(e.target.name, e.target.checked)}
          aria-label="휴가 여행"
        />
        <span>{action ? "그럼요 다녀왔어요! 😃" : "휴가가 뭔가요.... 😳"}</span>
      </label>
    </div>
  );
}

// 2. 사이드 이펙트 처리 해설
//    그림 그렸던 것을 다시 그려 해설해보겠습니다.
