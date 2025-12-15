// 랜덤으로 나올 이미지 파일 이름 목록 (49개)
// 파일 이름이 'random (1).png' 부터 'random (49).png'까지 이어져야 합니다.
const imageList = [];
for (let i = 1; i <= 49; i++) {
    // 새로운 형식: images/random (1).png, images/random (2).png, ...
    // i는 1부터 49까지 숫자를 나타냅니다.
    imageList.push(`images/random (${i}).png`);
}

// 모든 Roll 버튼에 클릭 이벤트 리스너 추가 (나머지 로직은 동일합니다.)
document.querySelectorAll('.roll-button').forEach(button => {
    button.addEventListener('click', function() {
        // 클릭된 버튼이 어느 칸인지 확인 (data-index: 1, 2, 또는 3)
        const itemIndex = this.getAttribute('data-index'); 
        // 해당 칸의 <img> 요소를 가져옴
        const targetImage = document.getElementById(`image-${itemIndex}`);

        // 1. imageList에서 랜덤 인덱스 선택
        const randomIndex = Math.floor(Math.random() * imageList.length);
        
        // 2. 랜덤 이미지 경로 가져오기
        const randomImagePath = imageList[randomIndex];

        // 3. 이미지 요소의 src를 랜덤 경로로 변경하여 이미지를 표시
        targetImage.src = randomImagePath;
    });
});