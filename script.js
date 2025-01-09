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
    text: "Phòng thí nghiệm chứa những tài liệu bị bỏ dở và những mẫu vật lạ. Bạn nhận ra rằng có một sự kiện kỳ lạ đã xảy ra ở đây. Trên bàn, có một chiếc hộp bí ẩn bị khóa.",
    choices: [
      { text: "Mở chiếc hộp", next: "box" },
      { text: "Tìm kiếm thêm trong phòng thí nghiệm", next: "searchLab" },
      { text: "Rời đi", next: "leave" }
    ]
  },
  box: {
    text: "Bạn mở chiếc hộp và phát hiện ra một chiếc chìa khóa rỉ sét cùng với một cuốn nhật ký. Nhật ký chứa những ghi chép rời rạc về các thí nghiệm kỳ lạ liên quan đến việc kéo dài sự sống.",
    choices: [
      { text: "Sử dụng chìa khóa", next: "key" },
      { text: "Đọc thêm nhật ký", next: "diary" },
      { text: "Bỏ qua và rời đi", next: "leave" }
    ]
  },
  key: {
    text: "Bạn dùng chìa khóa để mở một cánh cửa bên trong phòng thí nghiệm. Căn phòng mới hé lộ chứa các thiết bị hiện đại và một cỗ máy lớn với ánh sáng nhấp nháy.",
    choices: [
      { text: "Khởi động cỗ máy", next: "machine" },
      { text: "Quay trở lại và tiếp tục tìm kiếm", next: "lab" },
      { text: "Rời khỏi bệnh viện", next: "leave" }
    ]
  },
  diary: {
    text: "Nhật ký mô tả một dự án bí mật nhằm hồi sinh những bệnh nhân tử vong bằng cách lưu trữ ký ức của họ trong một máy chủ. Tuy nhiên, dự án đã bị hủy bỏ do các tai nạn đáng sợ.",
    choices: [
      { text: "Tìm hiểu thêm về máy chủ", next: "server" },
      { text: "Rời khỏi phòng thí nghiệm", next: "leave" }
    ]
  },
  machine: {
    text: "Bạn khởi động cỗ máy, và ngay lập tức căn phòng rung chuyển. Một hình ảnh ba chiều hiện ra trước mặt bạn, đó là một nhân vật kỳ bí, tự xưng là ‘Quản lý dự án’.",
    choices: [
      { text: "Nói chuyện với nhân vật ảo", next: "aiConversation" },
      { text: "Tắt máy ngay lập tức", next: "leave" }
    ]
  },
  server: {
    text: "Bạn tìm thấy máy chủ chính của phòng thí nghiệm. Trên màn hình, bạn thấy những tệp dữ liệu chứa các ký ức bị lưu trữ. Một tệp được đánh dấu ‘CẢNH BÁO’.",
    choices: [
      { text: "Mở tệp dữ liệu cảnh báo", next: "warningFile" },
      { text: "Tìm kiếm thêm tệp khác", next: "searchFiles" },
      { text: "Thoát khỏi máy chủ", next: "leave" }
    ]
  },
  aiConversation: {
    text: "‘Quản lý dự án’ bắt đầu kể về những thí nghiệm thất bại của bệnh viện. Ông ta nói rằng bệnh viện bị ám bởi những ký ức không thể bị xóa bỏ.",
    choices: [
      { text: "Tiếp tục nghe câu chuyện", next: "aiReveal" },
      { text: "Tắt máy và rời đi", next: "leave" }
    ]
  },
  warningFile: {
    text: "Tệp dữ liệu mở ra, tiết lộ rằng bệnh viện này từng thực hiện thí nghiệm nhân bản ký ức trên con người. Một số ký ức đã biến thành những thực thể độc lập và cực kỳ nguy hiểm.",
    choices: [
      { text: "Tắt máy chủ ngay lập tức", next: "leave" },
      { text: "Tiếp tục khám phá bệnh viện", next: "lab" }
    ]
  },
  aiReveal: {
    text: "‘Quản lý dự án’ tiết lộ rằng bạn và nhóm bạn đã bị nhắm đến từ khi bước chân vào bệnh viện. Ông ta yêu cầu bạn giúp giải phóng linh hồn của những bệnh nhân bị mắc kẹt.",
    choices: [
      { text: "Chấp nhận lời đề nghị", next: "freeSouls" },
      { text: "Từ chối và rời đi", next: "leave" }
    ]
  },
  freeSouls: {
    text: "Bạn đồng ý giúp đỡ. Nhân vật ảo hướng dẫn bạn kích hoạt một chuỗi quy trình trên máy chủ để giải phóng linh hồn. Khi hoàn tất, bạn cảm nhận được không gian bệnh viện trở nên nhẹ nhõm hơn.",
    choices: [
      { text: "Rời khỏi bệnh viện", next: "leave" },
      { text: "Tiếp tục điều tra sâu hơn", next: "end" }
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
