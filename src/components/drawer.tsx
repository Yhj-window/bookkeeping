import "./drawer.css";

export default function Drawer({ data, isOpen, setOpen }:{data:object,isOpen: boolean,setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  console.log("isOpen", isOpen);
  console.log("data", data);
  isOpen ? openDrawer() : "";
  function openDrawer() {
    const drawer = document.getElementById("drawer");
    if(drawer){
      drawer.style.display = "block";
    }
    const t = setTimeout(() => {
      document.querySelector(".drawer_body")!.className = "drawer_body tr";
      clearTimeout(t);
    }, 100);
  }

  function closeDrawer() {
    document.querySelector(".drawer_body")!.className = "drawer_body";
    const t = setTimeout(() => {
      document.getElementById("drawer")!.style.display = "none";
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
