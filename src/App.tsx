import { useState, useEffect } from "react";
import Button from "./components/button";
import Drawer from "./components/drawer";

import { ListItem } from "./types/index";

function getList(): Promise<ListItem[]> {
  console.log("getList");
  return new Promise((resolve) => {
    const t = setTimeout(() => {
      resolve([
        { id: 0, time: "2023年5月11日", use: "买手机", money: 3000, type: 2 },
        { id: 1, time: "2023年5月11日", use: "不明", money: 3000, type: 2 },
        { id: 2, time: "2023年5月18日", use: "还款", money: 1314, type: 1 },
        { id: 3, time: "2023年8月15日", use: "不明", money: 3000, type: 2 },
        { id: 4, time: "时间不明", use: "还款", money: 200, type: 1 },
        { id: 5, time: "2023年11月2日", use: "不明", money: 1500, type: 2 },
        { id: 6, time: "不明", use: "不明", money: 109, type: 2 },
        { id: 7, time: "不明", use: "不明", money: 300, type: 2 },
        { id: 8, time: "2024年3月5日", use: "买裙子", money: 1000, type: 2 },
      ]);
      clearTimeout(t);
    }, 500);
  });
}

function App() {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState({} as ListItem);
  const [list, setList] = useState([] as ListItem[]);
  //总欠款
  // const [totalDebt, setTotalDebt] = useState(0);
  let totalDebt = 0;
  //已还款
  // const [repaid, setRepaid] = useState(0);
  let repaid = 0;

  useEffect(() => {
    getList().then((res: ListItem[]) => {
      setList(res);
    });
    return () => {
      setList([]);
    };
  }, []);
  function setTotalDebtAndRepaid() {
    if(list.length === 0) return;
    totalDebt = 0;
    repaid = 0;
    list.forEach((item) => {
      if (item.type === 2) {
        totalDebt += item.money;
      }
      if (item.type === 1) {
        repaid += item.money;
      }
    });
  }
  setTotalDebtAndRepaid();
  // useEffect(() => {
  //   list.forEach((item) => {
  //     if (item.type === 2) {
  //       setTotalDebt((totalDebt) => totalDebt + item.money);
  //     }
  //     if (item.type === 1) {
  //       setRepaid((repaid) => repaid + item.money);
  //     }
  //   });
  //   return () => {
  //     setTotalDebt(0);
  //     setRepaid(0);
  //   }
  // }, [list]);
  function open() {
    setOpen(!isOpen);
  }
  function setItem(item: ListItem) {
    console.log("item", item);
    setData(item);
    open();
  }
  return (
    <div id="app">
      <div className="header">
        <h3 className="title text-blue-50">晗晗记账本</h3>
        <div className="summarize">
          <span>总欠款：{totalDebt}元</span>
          <span>已还款：{repaid}元</span>
          <span>剩余：{totalDebt - repaid}元</span>
        </div>
      </div>
      {list.length > 0 && (
        <ul id="uu">
          {list.map((item) => (
            <li className="li" key={item.id}>
              <div>时间：{item.time}</div>
              <div>用途：{item.use}</div>
              <div className="d">
                <div>
                  {item.type === 2 ? "借款" : "还款"}：
                  <span className={item.type === 2 ? "red" : "green"}>
                    {item.money}
                  </span>
                </div>
                <Button title={"修改"} onClick={() => setItem(item)}>
                  修改
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {list.length <= 0 && (
        <div style={{ textAlign: "center" }}>No Content</div>
      )}
      { isOpen && <Drawer data={data} isOpen={isOpen} setOpen={setOpen}></Drawer> }
    </div>
  );
}

export default App;
