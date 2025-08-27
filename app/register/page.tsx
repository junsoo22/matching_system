"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100 flex items-center justify-center">
      <div className="bg-white/90 rounded-3xl shadow-2xl p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-pink-500 mb-6 text-center">참가 설문 폼</h2>
        {submitted ? (
          <div className="text-center text-green-600 font-semibold py-10">
            설문이 제출되었습니다!<br />매칭 결과를 기다려주세요.
          </div>
        ) : (
          <form
            className="space-y-4"
            onSubmit={e => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div>
              <label className="block font-semibold mb-1">이름/닉네임</label>
              <input required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">학과/학년</label>
              <input required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">연락처(인스타ID/휴대폰)</label>
              <input required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">성별</label>
              <select required className="w-full border rounded px-3 py-2">
                <option value="">선택</option>
                <option>남</option>
                <option>여</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">원하는 매칭 상대 성별</label>
              <select required className="w-full border rounded px-3 py-2">
                <option value="">선택</option>
                <option>남</option>
                <option>여</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">주된 관심사(복수선택)</label>
              <div className="flex flex-wrap gap-2">
                {["스터디","운동","게임","음악","영화","음식","여행","봉사"].map(item => (
                  <label key={item} className="flex items-center gap-1">
                    <input type="checkbox" name="interests" value={item} />
                    {item}
                  </label>
                ))}
                <input placeholder="기타" className="border rounded px-2 py-1 ml-2" />
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1">연애성향</label>
              <select required className="w-full border rounded px-3 py-2">
                <option value="">선택</option>
                <option>진지한 연애</option>
                <option>편한 만남</option>
                <option>친구부터 시작</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">주말 주로 하는 활동</label>
              <select required className="w-full border rounded px-3 py-2">
                <option value="">선택</option>
                <option>집콕</option>
                <option>외출(카페/술집)</option>
                <option>운동</option>
                <option>스터디</option>
                <option>아르바이트</option>
                <option>기타</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">술/흡연</label>
              <div className="flex gap-4">
                <span>
                  술: <input type="checkbox" /> O <input type="checkbox" /> X
                </span>
                <span>
                  흡연: <input type="checkbox" /> O <input type="checkbox" /> X
                </span>
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1">대화 성향(1~5점, 활발함→차분함)</label>
              <input type="range" min={1} max={5} defaultValue={3} className="w-full" />
            </div>
            <div>
              <label className="block font-semibold mb-1">사진 공개 동의</label>
              <select required className="w-full border rounded px-3 py-2">
                <option value="">선택</option>
                <option>예</option>
                <option>아니오</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">매칭에서 가장 중요하게 생각하는 점(50자 이내)</label>
              <input maxLength={50} className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">참석 가능한 시간대(예: 13:00-15:00)</label>
              <input required className="w-full border rounded px-3 py-2" />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 to-blue-400 text-white font-semibold py-3 rounded-full shadow-lg hover:scale-105 transition"
            >
              제출하기
            </button>
          </form>
        )}
      </div>
    </main>
  );
}