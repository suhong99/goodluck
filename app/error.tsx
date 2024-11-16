'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body className="WH100">
        <div className="error_wrapper">
          <h1 className="error_title">
            서버에 알 수 없는 오류가 발생하였습니다
          </h1>
          <pre className="error_details">{error.message}</pre>
          <div className="error_buttons">
            <button className="error_button" onClick={reset}>
              다시 시도
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
