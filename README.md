# 배컴 프론트엔드 직무 사전과제

## 🔍 프로젝트 정보
- `React 18` 버전을 사용한 Create-React-App(CRA)로 생성된 프로젝트입니다.
- 프로젝트 실행에 `Node.js 14` 버전 이상을 권장합니다.
- CRA외에 추가 설치된 패키지는 다음과 같습니다.
    - React Router 패키지
        - `react-router-dom`
    - CSS-in-JS 관련 패키지
        - `styled-components`
        - `styled-reset`
    - 상태 관리 패키지
        - `recoil`

## 🚀 프로젝트 실행

- 개발 서버 실행
```bash
npm start
```

- 빌드 후 실행 (serve 패키지 전역 설치 필요)
```bash
npm run build

serve -s build
```

## 📁 폴더 구조
### `src/pages`
 - `React Router`에 의해 렌더링 되는 컴포넌트가 모여있는 폴더입니다.
 - 라우팅 정보는 `src/Router.tsx`를 참고해주세요.

### `src/components`
 - 재사용성이 높거나 코드 분리를 위해 사용된 컴포넌트가 모여있는 폴더입니다.

### `src/interfaces`
 - 재사용성이 높은 TypeScript의 `type` 혹은 `interface` 정의 파일이 모여있는 폴더입니다.


### `src/styles`
 - `styled components`로 작성된 컴포넌트가 모여있는 폴더입니다.

### `src/utils`
 - 개발 편의를 위해 작성된 모듈들이 모여있는 폴더입니다.
 - API와 통신하는 모듈이 이 폴더에 작성되어 있습니다.

## 🔥 핵심 코드

#### `src/components/ProductCardList.tsx`

```typescript
type FetchFunction = <T extends keyof IProduct>(
    limit: number,
    skip: number,
    select?: T[]
) => Promise<IProductList<Pick<IProduct, T>> | undefined>;
```

- 개발자가 안전한 프로그래밍을 할 수 있도록 타입 지정에 더욱 신경썼습니다.
- 이번 과제에 주어진 API에서 데이터를 가져올 때, Query String을 통해 가져올 컬럼을 줄여 서버의 부담을 줄일 수 있다는 것을 발견하였습니다.
- 하지만 가져오는 컬럼의 수를 변화시키면 가져온 데이터가 기존에 설정하였던 타입과 불일치 할 수 있습니다.
- 그래서 서버의 부담을 줄이면서도 엄격한 타입 제한을 유지하고 싶어 위의 코드 처럼 제네릭을 통한 강력한 타입 지정을 적용하였고 코드 안정성과 보다 세세한 타입 추론 힌트를 받을 수 있었습니다.