0. 반응형 처리 포함

1. Navi-bar는 Side에 fixed 된 상태 anchor 이용해서 특정 부분으로 바로 내려갈수있
   게 세팅

2. 메인 페이지 내용 구성

   - About -> 완료!
   - Tech Skills -> 완료!
   - Projects -> 완료!

3. 메인 페이지 내용 구성 후 추가적으로 고려해볼만한 내용

- Main Banner
- Contact -> 완료!
- Footer -> 완료

1. a 태그 anchor 걸어서 해당 위치로 이동시키기 -> 완료 || window객체의 scroll
   property 이용해서 해당위치로 올라가거나 내려가는 효과를보여주는 것이 더 괜찮
   을 것 같다. -> 완료 animation 효과 주고 싶음 (이 경우 Top Button 추가해서 편
   의성 추가 필요) -> scrollTo 에 option객체를 인자로 주고 그안에 behavior 값을
   'smooth'로 넣어주어 구현
2. 포트폴리오 page로 넘어가는 a태그 target="\_blank" 걸어서 새창으로 보여주기 ->
   완료

- 해야할 것들

0. Main Banner - Swiper 처리 -> Content 부분 범용적으로 처리하는 것보다 따로 만
   드는게 더 깔끔하게 만들듯 -> 완료
1. 컴포넌트들 AOS로 animation 효과 주기 -> 완료 (aos animation 한 번 적용후 적용
   안되게도 처리 완료)
2. 반응형 처리 -> 완료
3. Top Button 추가 -> + 반응형 부분까지 수정완료
4. 프로필 사진 -> 이력서 사진으로 change 필요(다 끝났을때)
5. 빌드 -> 배포 완료 (Favicon 수정 하면 끝)
6. 이력서 Portfolio란에 추가

- data-aos-once: true 값줘서 한번 실행후 다시 실행되지 않게 하기
