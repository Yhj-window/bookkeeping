// import {useState} from 'react'

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

function a() {
  list.forEach((item) => {
    if (item.type === 2) {
      totalDebt += item.money;
    }
    if(item.type === 1){
      repaid += item.money;
    }
  })
}
a();
function App() {

  return (
    <div id="app">
      <h3 className="title">晗晗记账本</h3>
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
            <div>{item.type === 2 ? "借款" : "还款"}：
              <span className={item.type === 2 ? "red" : "green"}>{item.money}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
