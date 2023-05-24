import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

// 실제 렌더링 안하고 단순 연습용 예제
function CommentEx(props) {
  return (
    <>
      <div className="comment">
        {/* 1) 아바타 이미지를 컴포넌트로 추출 */}
        {/* 2) 사용자 정보를 컴포넌트로 추출 */}
        {/* <div className="user-info">
          <Avatar user={props.author} />
          <div className="user-info-name">
            {props.author.name}
          </div>
        </div> */}
        <UserInfo user={props.author} />

        <div className="comment-text">
          {props.text}
        </div>

        <div className="comment-date">
          {props.date}
        </div>
      </div>
    </>
    // <> 기존 내용
    //   <div className="comment">
    //     <div className="user-info">
    //       <img className="avatar"
    //         src={props.author.avatarUrl}
    //         alt={props.author.name}
    //       />
    //       <div className="user-info-name">
    //         {props.author.name}
    //       </div>
    //     </div>

    //     <div className="comment-text">
    //       {props.text}
    //     </div>

    //     <div className="comment-date">
    //       {props.date}
    //     </div>
    //   </div>
    // </>
  );
}

export default CommentEx;