# 라벨 자동생성 오프라인

엑셀 주문 데이터를 업로드한 뒤 관리 데이터를 기반으로 라벨을 자동 생성하고, 필요한 값만 수정해서 바로 인쇄할 수 있는 Electron 데스크톱 앱입니다.

## Windows 다운로드

GitHub 저장소 연결 후 Releases 링크를 이 위치에 넣으면 됩니다.

예정 링크 형식:

```text
https://github.com/<owner>/<repo>/releases/latest/download/LabelMakerOffline-1.0.0-Setup.exe
```

현재 빌드 산출물 파일명:

```text
LabelMakerOffline-1.0.0-Setup.exe
```

## 주요 기능

- 엑셀 파일에서 핵심 주문 데이터만 추출
- 관리 데이터 기반 자동 매핑
- 라벨 생성 후 필드별 직접 수정
- 수동 수정 시 관리 데이터 추가/수정 반영
- 인쇄 전 검수 후 바로 출력

## 실행 방법

```bash
npm install
npm run start
```

## 빌드

윈도우 설치 파일 빌드:

```bash
npm run build:win
```

디렉터리 빌드 확인:

```bash
npm run build:dir
```

## 프로젝트 구조

- `main.js`: Electron 메인 프로세스
- `preload.js`: IPC 브리지
- `renderer/index.html`: 앱 UI 구조
- `renderer/app.js`: 상태, 파싱, 매핑, 라벨 편집 로직
- `renderer/styles.css`: 전체 스타일

## 문서

- [기획서.md](./기획서.md)
- [라벨_자동생성_요청원문.md](./라벨_자동생성_요청원문.md)
