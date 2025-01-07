let storyText = document.getElementById("story-text");
let choicesContainer = document.getElementById("choices");

let story = {
  start: {
    text: "Nhóm bạn đang đứng trước cửa chính của bệnh viện bỏ hoang. Cánh cửa bị khóa, nhưng có một cửa sổ phía bên cạnh có thể mở được. Một bóng đen lóe lên từ cửa sổ, như thể có ai đó đang nhìn chằm chằm vào họ.",
    choices: [
      { text: "Lội vào cửa sổ", next: "window" },
      { text: "Thử mở cửa chính", next: "door" },
      { text: "Rút lui một chút", next: "leave" }
    ]
  },
  window: {
    text: "Bạn quyết định mở cửa sổ và vào bên trong. Không gian bên trong lạnh lẽo và tối tăm. Tiếng động lạ vang lên từ một phòng khám gần đó.",
    choices: [
      { text: "Đi về phía tiếng động", next: "noise" },
      { text: "Ra ngoài ngay lập tức", next: "leave" }
    ]
  },
  door: {
    text: "Cánh cửa mở ra một cách khó khăn. Không gian bên trong bệnh viện rất tĩnh mịch. Một tiếng động phát ra từ một phòng khám gần đó.",
    choices: [
      { text: "Đi về phía tiếng động", next: "noise" },
      { text: "Ra ngoài ngay lập tức", next: "leave" }
    ]
  },
  noise: {
    text: "Tiếng động càng lúc càng rõ ràng, giống như ai đó đang di chuyển trong phòng khám. Bạn tiếp cận gần hơn.",
    choices: [
      { text: "Vào phòng khám", next: "room" },
      { text: "Lùi lại và chạy ra ngoài", next: "leave" }
    ]
  },
  room: {
    text: "Bạn bước vào phòng khám, và ngay lập tức một ánh sáng mờ ảo chiếu sáng căn phòng. Bạn phát hiện ra một phòng thí nghiệm cũ với nhiều dấu vết kỳ lạ.",
    choices: [
      { text: "Tìm hiểu thêm về phòng thí nghiệm", next: "lab" },
      { text: "Rời đi ngay lập tức", next: "leave" }
    ]
  },
  lab: {
    text: "Phòng thí nghiệm chứa những tài liệu bị bỏ dở và những mẫu vật lạ. Bạn nhận ra rằng có một sự kiện kỳ lạ đã xảy ra ở đây.",
    choices: [
      { text: "Tiếp tục điều tra", next: "end" },
      { text: "Rời đi", next: "leave" }
    ]
  },
  leave: {
    text: "Bạn quyết định rời khỏi bệnh viện. Cuộc phiêu lưu kết thúc tại đây.",
    choices: []
  },
  end: {
    text: "Bạn đã khám phá ra những bí mật tối tăm trong bệnh viện bỏ hoang. Một sự kiện kỳ bí đã được hé lộ. Câu chuyện kết thúc tại đây.",
    choices: []
  }
};

function startStory() {
  showStory("start");
}

function showStory(scene) {
  storyText.textContent = story[scene].text;
  choicesContainer.innerHTML = "";
  
  story[scene].choices.forEach(choice => {
    let button = document.createElement("button");
    button.textContent = choice.text;
    button.onclick = () => showStory(choice.next);
    choicesContainer.appendChild(button);
  });
}

startStory();