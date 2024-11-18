export default function PostNew() {
    return (
        <form action="/posts" method="POST" className="form">
            <div className="form__block">
                <label htmlFor="title">제목</label>
                <input type="text" name="title" id="summary" required />
            </div>
            <div className="form__block">
                <label htmlFor="title">요약</label>
                <input type="text" name="summary" id="summary" required />
            </div>
            <div className="form__block">
                <label htmlFor="title">내용</label>
                <textarea name="content" id="content" required />
            </div>
            <div className="form__block">
                <input type="submit" value="제출" className="form-btn--submit" />
            </div>
        </form>
    )
}
