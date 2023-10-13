const Main2 = () => {
  const iframeSrc = "https://p2-1-s-facebook.vercel.app"; // Thay đổi URL thành trang web bạn muốn nhúng

  const iframeStyle = {
    width: "100%", // Chiều rộng 100% của parent container
    height: "100vh", // Chiều cao 100% của viewport (toàn màn hình)
    position: "absolute", // Thiết lập vị trí tuyệt đối
    top: 0,
    left: 0,
    border: "none", // Loại bỏ viền nếu bạn muốn
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <iframe src={iframeSrc} style={iframeStyle} title="p2"></iframe>
    </div>
  );
};

export default Main2;
