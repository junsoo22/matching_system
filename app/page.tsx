export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100 flex items-center justify-center">
      <div className="bg-white/90 rounded-3xl shadow-2xl p-10 max-w-xl w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-500 mb-4 drop-shadow">
          💌 교우관계 증진 매칭 이벤트
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          새로운 인연, 설레는 만남!<br />
          설문을 작성하고 나에게 꼭 맞는 친구/인연을 찾아보세요.<br />
          <span className="inline-block mt-2 text-sm text-gray-500">
            참가비: 3,000원 | 운영시간: 13:00~17:00
          </span>
        </p>
        <a
          href="/register"
          className="inline-block bg-gradient-to-r from-pink-400 to-blue-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition"
        >
          등록/참가하기
        </a>
        <div className="mt-8 text-left text-gray-600 text-sm bg-pink-50/60 rounded-xl p-4">
          <b>진행 절차</b>
          <ol className="list-decimal ml-5 mt-2 space-y-1">
            <li>등록 및 동의</li>
            <li>참가비 결제</li>
            <li>설문 작성</li>
            <li>자동 매칭</li>
            <li>결과 통보 및 만남</li>
            <li>사후 설문</li>
          </ol>
        </div>
      </div>
    </main>
  );
}