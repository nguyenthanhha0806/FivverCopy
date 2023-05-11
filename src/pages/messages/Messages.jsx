import React from 'react'
import './Messages.scss'
import { Link } from 'react-router-dom'

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true
  }
  const message = 'Jack Ma và diễn viên, đạo diễn tài năng hàng đầu điện ảnh Hoa Ngữ - Châu Tinh Trì đã có dịp ngồi lại để tâm sự cũng như chia sẻ với khán giả. Tại đây, Châu Tinh Trì cũng thẳng thắn bày tỏ luôn mơ ước được gặp tỷ phú Jack Ma ngoài đời thực một lần.'
  return (
    <div className='messages'>
      <div className="container">
        <h1>Messages</h1>
        <table>
          <tr>
            <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Charley Sharp</td>
            <td>
              <Link to="/message/123" className='link'>
                {message.substring(0, 100)}
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>John Doe</td>

            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>2 hours ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>Elinor Good</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>Garner David </td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>2 days ago</td>
          </tr>
          <tr>
            <td>Troy Oliver</td>
            <td>{message.substring(0, 100)}</td>
            <td>1 week ago</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages
