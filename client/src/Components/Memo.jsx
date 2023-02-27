import React, { useEffect, useState } from 'react'

import '../App.css';
function Memo({state}) {

  const [memos,setMemos] =useState([]);
  const {contract}= state;

  useEffect (()=>{
    const memosMessage =async()=>{
      const memos=await contract.getMemos();
      setMemos(memos);
    };
    contract && memosMessage();
  },[contract]);
  return (
<>

<p style={{ textAlign: "center", marginTop: "10px" }}>Messages</p>
      {memos.map((memo) => {
        return (
          <div
            className="container-fluid"
            style={{ width: "100%" }}
            key={Math.random()}
          >
            <table
              style={{
                marginBottom: "1px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      backgroundColor: "rgba(255, 255, 255, .4)",
                      boxShadow: "0px 0px 2px 2px rgba(37, 37, 37, 0.342)",
                      fontFamily: "'Cutive Mono', monospace",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}
                  >
                    {memo.name}
                  </td>
                  <td
                    style={{
                      backgroundColor: "rgba(255, 255, 255, .4)",
                      boxShadow: "0px 0px 2px 2px rgba(37, 37, 37, 0.342)",
                      fontFamily: "'Cutive Mono', monospace",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}
                  >
                    {new Date(memo.timestamp * 1000).toLocaleString()}
                  </td>
                  <td
                    style={{
                      backgroundColor: "rgba(255, 255, 255, .4)",
                      boxShadow: "0px 0px 2px 2px rgba(37, 37, 37, 0.342)",
                      fontFamily: "'Cutive Mono', monospace",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "300px",
                    }}
                  >
                    {memo.message}
                  </td>
                  <td
                    style={{
                      backgroundColor: "rgba(255, 255, 255, .4)",
                      boxShadow: "0px 0px 2px 2px rgba(37, 37, 37, 0.342)",
                      fontFamily: "'Cutive Mono', monospace",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "400px",
                    }}
                  >
                    {memo.from}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    );
  })}
</>
  )
}

export default Memo