# 회사 프로젝트
## 와이폴라리스 (2020 - 현재)
### [Server] Ketsup API 서버
    Express(Node.js), AWS, sequelize, passport, mariaDB, github 등
- Node.js 기반 REST API 서버 신규 프로젝트
- 시스템 기획 및 개발 전략 문서화, 개발 환경 구축, 서버 및 백엔드 개발 등
- 기존 DB를 그대로 활용해야해서 Sequelize Model 을 이용해 각 테이블을 매핑
- jwt 를 이용한 인증 및 Naver, Kakao OAuth 로그인 기능.
- KaKao Pay 등을 이용한 결제 시스템

### [Web Service] 와이폴라리스 홈페이지
    React.js, Next.js, Material-UI, styled-components, AWS SES, nodemailer
- 스태틱 홈페이지 개발 및 유지보수 
- 애니메이션 및 동영상효과
- SEO를 적용하여 검색엔진 상단에 노출
- PC, 모바일 환경을 아우르는 반응형 웹

### [Web Service] Ketsup Snackbar 관리자 사이트
    php, code igniter, nginx
- 무인 매장 서비스 Ketsup 의 관리자 사이트
- 버그픽스 및 기능(API) 추가

## Youyishou  (2019 - 2020)
### 디어유 프로젝트
    2019. 12. - 2020. 05.
    Express(Node.js), AWS, sequelize, passport, mariaDB, github

- 기존 시스템이 사업구조 와 맞지 않고, 또 보안이나 적법성 등의 치명적인 문제점들이 있어 개선된 버전의 개발을 제안
- docker-compose.yml 을 이용한 개발 환경 공유
- express 기반의 백앤드 프로젝트와 React 기반의 프론트앤드의 프로젝트를 구분한 구조
- 여러 사용자들의 상황을 고려한 DB 설계 및 ERD 작성
- sequelize를 이용한 테이블 스키마 버전관리(마이그레이션 스크립트) 및 ORM을 이용한 쿼리

### 유이수 통합 유통 관리 시스템
    python,Flask, mySQL, git, Zapier, AWS(EC2, Lambda, API gateway, Route 53 등) 등.
- 중국 수출을 위한 유통 관리 서비스
- 데이터베이스 분석, 보안 문제 해결, 시스템 유지 보수 및 기능 추가

### 유이수 배송 정보 관리 시스템
    2019. 10. - 2020. 06.
    python,Flask, mySQL, git, Zapier, AWS(EC2, Lambda, API gateway, Route 53 등) 등.
- 재고 등록, 판매자, 주문 등을 입력하고 처리하는 통합 유통 관리 시스템
- 우커머스(쇼핑몰용 위챗 미니 프로그램에서 백앤드로 사용함)에서 발생한 주문 정보를 Zapier와 AWS Lambda 를 이용하여 자동으로 수집함
- 보안 및 데이터 적법성 위반 등 치명적인 문제점들이 있었음
- 지속적인 기능 개선 및 버그/데이터 불일치 수정 등의 요구사항을 수행

### 네트워크/서버 시스템 개편
    AWS VPC, SSL, Linux
- 사용자 증가 및 보안을 대비하기 위한 시스템 개편작업
- 서버 보안강화 및 네트워크 서비스 정리

### 미니앱 관리 시스템
    php, wordpress, mysql, Lambda, Zapier
- 위챗 위에서 서비스되는 미니앱을 관리하는 시스템
- 미니앱 관리 시스템 데이터베이스 분석, 시스템 유지 보수 및 기능 추가

## Weisure (2018 - 2019)
### [Chatbot / Web Service] 의사소통
    2018.02 - 2019.05
    php, Laravel, AWS, docker-compose, python, javascript, Vue.js, node.js, mariaDB, git, Ubuntu, bash

- 의료서비스 특화 챗봇 서비스
- 웨저의 주요 프로젝트. 서비스의 2.0 개발이 결정되어 초창기부터 참여함
- 카카오톡, 네이버 톡톡 및 웹에서 채팅이 가능한 챗봇
- Docker, AWS 등을 이용하여 각 개발자들의 개발 환경과 배포 환경을 통일함.
- 주로 챗봇의 데이터를 관리, 수집, 추가하는 기능을 개발함. (API, 크롤링, 학습 및 라벨링 도구 등)
- 데이터 입력자들의 편의성을 위한 도구들을 다수 개발함.
- Vue.js 를 이용하여 데이터를 관리하고 동적으로 변하는 뷰를 개발함.
- 웹 채팅 위젯을 개발.

URL: http://drsotong.com

### [Web Service] 의사소통 회사 소개 홈페이지
    2018.05
    php, html, css, AWS, docker-compose, javascript, git, Ubuntu, bash

- 의료서비스 특화 챗봇 서비스인 의사소통의 소개 페이지

URL: http://drsotong.com

### [Web Service] 경성바이크
    2018.02 - 2018.03
    php, XE, docker-compose, git

- 자전거 정보 공유 및 교육 서비스를 제공하는 커뮤니티 홈페이지
- 평범한 스팩의 커뮤니티형 사이트. 요구사항이 단순하여 XE를 사용하여 틀을 만들고 특이 기능들은 php를 이용하여 개발
- docker-compose 를 이용하여 개발 환경 설정

URL: http://kyungsungbike.com

### [Android App] Gotcha
    2018.01 - 2018.03
    Java, Android, git

- 방문 새차 서비스 Gotcha 의 지점, 직원, 고객 관리를 위한 어플리케이션
- 방문 새차를 하는 직원들이 고객 관리를 편리하게 하도록 개발된 태블릿 어플리케이션
- 처음으로 개발한 안드로이드 어플리케이션
- API문서 작성 및 안드로이드 앱 개발을 담당
- 기획서는 작성되었으나 개발이 되지 않은 채 방치되어 시간이 촉박했던 프로젝트. 웨저 입사 후 급하게 해결해 줄 것을 요구받아 개발.

## Mr, Mention (2017)
### [Web Service] 미스터 트립 버틀러
    2017.12
    node.js, firebase, firebase cli, html, css, javascript, git

- Firebase 기반의 운영자와 사용자 간 1:1 웹 채팅 서비스.
- 미스터멘션과 별개의 DB를 사용하는 채팅 서비스를 빠르게 개발할 것을 요구 받아서 Firebase를 선택함
- Firebase Javascript SDK 를 이용하여 웹 채팅 기능 개발
- 사용자가 SNS 로그인을 한 뒤, 채팅을 시도하면 해당 유저의 uid가 를 key로 하고 메시지들이 value로 저장되는 기능을 개발함
- 관리자 페이지를 만들어, 관리자가 채팅을 시도한 사용자들의 목록을 확인할 수 있도록 함(각 uid에 해당하는 회원 이름 및 최신 메시지를 출력). 목록에서 사용자를 선택하면 해당 사용자와 채팅할 수 있도록 함
- 기능 개발 이후 팀원에게 전달, 프로젝트에 적용됨.

### [Server] 미스터멘션 AWS 서버 아키텍팅
    2017.09 - 2017.10
    AWS, Ubuntu, server settings, nginx, tomcat, mariaDB, bash, scheduler

- 버전 2 홈페이지 서비스를 위해 AWS 기반으로 서버 아키텍팅 및 세팅 작업 진행
- 순간적으로 사용자가 많이 접속 했을 때 서비스가 멈춰버리거나, 제대로 DB백업이 되지 않거나, 트래픽 한계를 계속해서 넘어가는 등 기존 서버의 한계를 극복하기 위해 AWS 서비스를 이용하기로 결정됨 사내에 서버기술을 아는 인원이 없어 문제 해결을 위해 지원함
- apt-get 등 기본적인 Linux 사용법을 파악 한 뒤 AWS EC2에 Nginx, Tomcat 등을 설정함. 버전2 홈페이지는 Java Spring으로 개발되고 있었으므로 Tomcat을 주 포트(80)로 설정함
- EC2, RDS, S3, Route53, Auto Scaling, Load Balancer 등을 사용하여 서버 구성을 계획함
- 정적인 데이터는 S3에, DB는 RDS - mariaDB를 사용하고 서비스는 Multi AZ 구성의 EC2를 사용하며 Load Balancer 와 Route53을 이용하여 사용자와의 통신을 제어. 이때 EC2의 cpu사용량을 기준으로 Auto Scaling 을 적용해 최대 6개의 EC2가 작동할 수 있도록 설계함

### [iOS App] 미스터멘션 어플리케이션
    2017.07 - 2017.08
    Swift, cocoapod, php, git, postman, ftp

- 회사의 요구에 따라 iOS 네이티브 앱 개발을 기획부터 개발까지 담당
- 처음으로 개발한 iOS 어플리케이션
- 3일 가량 Swift3 를 학습한 뒤 개발 착수. 홈페이지 유지보수와 동시에 진행
- 게스트 사용자의 기능에 집중하여 개발됨. 회원가입 및 인증, 방 검색, 방 목록보기, 예약진행, 결제진행 등의 기능을 포함
- php 를 이용하여 mySQL과 json 통신하는 API 를 개발하여 적용함.

URL: https://apps.apple.com/kr/app/%EB%AF%B8%EC%8A%A4%ED%84%B0%EB%A9%98%EC%85%98/id1296156335

### [Web Service] 미스터멘션
    2017.02 - 2017.12
    php, Laravel, MySQL, javascript, git, vagrant, Linux(CentOS), Server Settings

- 플랫폼 홈페이지 유지보수, 기능 개선 및 추가
- 코드 리팩토링, 이미지 처리 방식 개선 등으로 접속 속도 최적화
- 기능상의 문제, UI/UX 관련 문제, 버그 등을 파악하여 개선
- GIt을 이용한 코드 관리 - Local, Bare, Test, Service 로 나누어 서비스에 적용하기 전에 동일 환경의 서버에서 확인 한 뒤 적용
- 가격 정보 입력 폼 변경, 디자인 변경, 방 자세히보기 페이지 기능 변경, 관리자 페이지 기능 추가 등 지속적인 기능 추가

URL: https://mrmention.co.kr

## Venditz (2016)
### [Web Service] 이사모아 관리자 페이지 기능 추가
    2016.11  
    php, Laravel, MySQL, javascript, git, postman    

- 매출관리, 마케팅 비용(ROAS)관리, 견적 및 사용자 통계, 유입 경로 통계 페이지 생성
- MySQL 을 이용한 RUID(read, update, insert, delete)
- Laravel 프레임워크기반으로 MVC 패턴으로 개발
- raw query를 이용해 json 형식으로 데이터를 리턴하는 API를 만들어 사용
- Axisj를 이용해 API의 정보를 리스트로 마늘고, ajax로 임의의 학목을 클릭하면 해당 업체의 상세 정보가 하단에 설정한 레이어에 표현됨
- google visualization을 이용하여 API의 정보를 그래프로 표현

URL: https://www.app24moa.com
