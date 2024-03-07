import {useState} from 'react'
import Button from "./components/button";
import Drawer from "./components/drawer";
interface ListItem{
  id: number,
  time: string,
  use: string,
  money: number,
  type: number
}
const list = [
  {id: 0, time: "2023年5月11日", use: "买手机", money: 3000, type: 2},
  {id: 1, time: "2023年5月11日", use: "不明", money: 3000, type: 2},
  {id: 2, time: "2023年5月18日", use: "还款", money: 1314, type: 1},
  {id: 3, time: "2023年8月15日", use: "不明", money: 3000, type: 2},
  {id: 4, time: "时间不明", use: "还款", money: 200, type: 1},
  {id: 5, time: "2023年11月2日", use: "不明", money: 1500, type: 2},
  {id: 6, time: "不明", use: "不明", money: 109, type: 2},
  {id: 7, time: "不明", use: "不明", money: 300, type: 2},
  {id: 8, time: "2024年3月5日", use: "买裙子", money: 1000, type: 2},
]
//总欠款
let totalDebt = 0;
//已还款
let repaid = 0;

function setTotalDebtAndRepaid() {
  list.forEach((item) => {
    if (item.type === 2) {
      totalDebt += item.money;
    }
    if(item.type === 1){
      repaid += item.money;
    }
  })
}
setTotalDebtAndRepaid();


function App() {
  const [isOpen , setOpen] = useState(false);
  const [data, setData] = useState();
  function open(){
    setOpen(!isOpen)
  }
  function setItem(item:ListItem){
    console.log("item",item);
    setData(item);
    open();
  }
  return (
    <div id="app">
      <h3 className="title">晗晗记账本</h3>
      <button onClick={open}>按钮</button>
      <div className="summarize">
        <span>总欠款：{totalDebt}元</span>
        <span>已还款：{repaid}元</span>
        <span>剩余：{totalDebt - repaid}元</span>
      </div>
      <ul id="uu">
        {list.map((item) => (
          <li className="li" key={item.id}>
            <div>时间：{item.time}</div>
            <div>用途：{item.use}</div>
            <div className="d">
              <div>
                {item.type === 2 ? "借款" : "还款"}：
                <span className={item.type === 2 ? "red" : "green"}>{item.money}</span>
              </div>
              <Button title={'修改'} onClick={()=> setItem(item)}>修改</Button>
            </div>            
          </li>
        ))}
      </ul>
      <Drawer data={data} isOpen={isOpen} setOpen={setOpen}></Drawer>
    </div>
  )
}

export default App
