# Scanquest - AR 기반 관광 탐험 앱 🌏

## 프로젝트 소개

Scanquest는 AR(증강현실) 기술을 활용한 새로운 방식의 관광 탐험 앱입니다. 카메라로 주변 환경을 스캔하면서 역사적 장소, 문화유산, 관광 명소 등을 발견하고 정보를 수집할 수 있습니다.

### 주요 기능
- 📍 실시간 위치 기반 지도
- 📱 AR 카메라를 통한 장소 스캔
- 👤 개인 탐험 기록 대시보드
- ✨ 발견한 장소에 대한 상세 정보 제공

## 개발 환경 설정

### 1. 필수 설치 항목

- Node.js (v18 이상)
- npm (v9 이상)
- Expo CLI
```bash
npm install -g expo-cli
```

### 2. 프로젝트 시작하기

1. 저장소 클론
```bash
git clone [repository-url]
cd scanquest
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npx expo start
```

### 3. 앱 실행 방법

- iOS 시뮬레이터: `i`를 눌러 실행
- 안드로이드 에뮬레이터: `a`를 눌러 실행
- Expo Go 앱: QR 코드 스캔하여 실행

## 프로젝트 구조
```
app/
├── (tabs)/
│ ├── index.tsx # 지도 화면
│ ├── dashboard.tsx # 대시보드 화면
│ ├── camera.tsx # AR 카메라 화면
│ └── layout.tsx # 탭 네비게이션 설정
├── components/ # 재사용 가능한 컴포넌트
└── constants/ # 상수 및 설정 파일
```


## 사용된 주요 기술

- React Native
- Expo
- expo-camera (AR 기능)
- react-native-maps (지도 기능)
- expo-location (위치 서비스)