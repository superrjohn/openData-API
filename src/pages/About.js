import React from 'react'

export default function Home(){
  return(
    <div>
      <h4>1.使用工具:react﹑react-router﹑react-chartjs-2(統計圖插件)﹑react-bootstrap﹑axios。</h4>
      <h4>2.開發思路:根據用戶點擊地區,請求該地區的數據,來設置統計圖的值。</h4>
      <h4>3.開發困難:用useParams獲得地區,用switch確定地區再請求數據,
        但Chart組件創立好,數據還未請求出來,導致Chart沒有值。
      </h4>
      <h4>4.解決方法:在Chart組件中再隨便請求東西,請求後再將早前請求的Chart的值設置。缺點比較慢顯示。</h4>
      <h4>5.更好辦法:每個地區設置子路由,即12個子路由,進入路由後用axios請求數據,然後在then
        中進行Chart數據的設置,最後再渲染頁面。
      </h4>
      <br></br>
      <br></br>
      <br></br>
     一開始的Cors錯誤,因為我一直往Header﹑cookie方向想,結果看到你說政府API不會那麼難,我開始
     超認真看他的說明文件,最終成功找出。
    <br></br>
    <br></br>
    <h6>關於我:我是一個來自澳門的僑生,正如我自傳寫的,畢業後開始自學程式找工作,但因為不是本科﹑又是僑生﹑
      而且沒有經驗,導致一路而來都很多挫折。正因為我喜歡台灣,所以我一直努力堅持著。雖然現實總是事與願違,
      但很感謝每次的面試邀請,因為每次都能磨練心智和多做出一個作品。所以謝謝拋出橄欖枝的人:)
    </h6>
    </div>
  )
}