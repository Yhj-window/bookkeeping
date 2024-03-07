import "./drawer.css";

export default function Drawer({ data, isOpen, setOpen }) {
  console.log("isOpen", isOpen);
  console.log("data", data);
  isOpen ? openDrawer() : "";
  function openDrawer() {
    document.querySelector("#drawer")!.style.display = "block";
    const t = setTimeout(() => {
      document.querySelector(".drawer_body")!.classList = "drawer_body tr";
      clearTimeout(t);
    }, 100);
  }
  
  function closeDrawer() {
    document.querySelector(".drawer_body")!.classList = "drawer_body";
    const t = setTimeout(() => {
      document.querySelector("#drawer")!.style.display = "none";
      clearTimeout(t);
      setOpen(false)
    }, 410);
  }
  return (
    <div
      id="drawer"
      style={isOpen ? { display: "block" } : { display: "none" }}
    >
      <div className="mask_box">
        <div className="drawer_body">
          <div className="drawer_title">
            <div className="drawer_title_content">标题</div>
            <div className="drawer_title_icon" onClick={closeDrawer}>
              X
            </div>
          </div>
          <div className="drawer_content">我是drawer的内容</div>
        </div>
      </div>
    </div>
  );
}
