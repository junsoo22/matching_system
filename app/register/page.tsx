"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// 환경변수에서 Supabase URL/KEY 가져오기
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // 폼 상태
  const [form, setForm] = useState({
    name: "",
    department: "",
    contact: "",
    gender: "",
    preferredGender: "",
    interests: [] as string[],
    interestEtc: "",
    loveType: "",
    weekendActivity: "",
    drinking: "",
    smoking: "",
    talkStyle: 3,
    photoAgree: "",
    important: "",
    availableTime: "",
  });

  // 체크박스 핸들러
  const handleInterest = (item: string) => {
    setForm(f =>
      f.interests.includes(item)
        ? { ...f, interests: f.interests.filter(i => i !== item) }
        : { ...f, interests: [...f.interests, item] }
    );
  };

  // 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Supabase에 데이터 저장
    const { error } = await supabase.from("registers").insert([
      {
        name: form.name,
        department: form.department,
        contact: form.contact,
        gender: form.gender,
        preferred_gender: form.preferredGender,
        interests: [...form.interests, form.interestEtc].filter(Boolean),
        love_type: form.loveType,
        weekend_activity: form.weekendActivity,
        drinking: form.drinking,
        smoking: form.smoking,
        talk_style: form.talkStyle,
        photo_agree: form.photoAgree,
        important: form.important,
        available_time: form.availableTime,
      },
    ]);
    setLoading(false);
    if (!error) setSubmitted(true);
    else alert("제출에 실패했습니다. 다시 시도해주세요.");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100 flex items-center justify-center">
      <div className="bg-white/90 rounded-3xl shadow-2xl p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-pink-500 mb-6 text-center">참가 설문 폼</h2>
        {submitted ? (
          <div className="text-center text-green-600 font-semibold py-10">
            설문이 제출되었습니다!<br />매칭 결과를 기다려주세요.
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block font-semibold mb-1 text-gray-800">이름/닉네임</label>
              <input required className="w-full border rounded px-3 py-2 text-gray-800"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-800">학과/학년</label>
              <input required className="w-full border rounded px-3 py-2 text-gray-800"
                value={form.department}
                onChange={e => setForm(f => ({ ...f, department: e.target.value }))}
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-800">연락처(인스타ID/휴대폰)</label>
              <input required className="w-full border rounded px-3 py-2 text-gray-800"
                value={form.contact}
                onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-800">성별</label>
              <select required className="w-full border rounded px-3 py-2 text-gray-800"
                value={form.gender}
                onChange={e => setForm(f => ({ ...f, gender: e.target.value }))}
              >
                <option value="">선택</option>
                <option>남</option>
                <option>여</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-800">원하는 매칭 상대 성별</label>
              <select required className="w-full border rounded px-3 py-2 text-gray-800"
                value={form.preferredGender}
                onChange={e => setForm(f => ({ ...f, preferredGender: e.target.value }))}
              >
                <option value="">선택</option>
                <option>남</option>
                <option>여</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-800">주된 관심사(복수선택)</label>
              <div className="flex flex-wrap gap-2">
                {["스터디","운동","게임","음악","영화","음식","여행","봉사"].map(item => (
                  <label key={item} className="flex items-center gap-1 text-gray-800">
                    <input
                      type="checkbox"
                      checked={form.interests.includes(item)}
                      onChange={() => handleInterest(item)}
                    />
                    {item}
                  </label>
                ))}
                <input
                  placeholder="기타"
                  className="border rounded px-2 py-1 ml-2 text-gray-800"
                  value={form.interestEtc}
                  onChange={e => setForm(f => ({ ...f, interestEtc: e.target.value }))}
                />
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-800">연애성향</label>
              <select required className="w-full border rounded px-3 py-2 text-gray-800"
                value={form.loveType}
                onChange={e => setForm(f => ({ ...f, loveType: e.target.value }))}
              >
                <option value="">선택</option>
                <option>진지한 연애</option>
                <option>편한 만남</option>
                <option>친구부터 시작</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-800">주말 주로 하는 활동</label>
              <select required className="w-full border rounded px-3 py-2 text-gray-800"
                value={form.weekendActivity}
                onChange={e => setForm(f => ({ ...f, weekendActivity: e.target.value }))}
              >
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
              <label className="block font-semibold mb-1 text-gray-800">술/흡연</label>
              <div className="flex gap-4">
                <span className="text-gray-800">
                  술: 
                  <label className="ml-1 mr-2 text-gray-800">
                    <input
                      type="radio"
                      name="drinking"
                      checked={form.drinking === "O"}
                      onChange={() => setForm(f => ({ ...f, drinking: "O" }))}
                    /> O
                  </label>
                  <label className="mr-2 text-gray-800">
                    <input
                      type="radio"
                      name="drinking"
                      checked={form.drinking === "X"}
                      onChange={() => setForm(f => ({ ...f, drinking: "X" }))}
                    /> X
                  </label>
                </span>
                <span className="text-gray-800">
                  흡연: 
                  <label className="ml-1 mr-2 text-gray-800">
                    <input
                      type="radio"
                      name="smoking"
                      checked={form.smoking === "O"}
                      onChange={() => setForm(f => ({ ...f, smoking: "O" }))}
                    /> O
                  </label>
                  <label className="mr-2 text-gray-800">
                    <input
                      type="radio"
                      name="smoking"
                      checked={form.smoking === "X"}
                      onChange={() => setForm(f => ({ ...f, smoking: "X" }))}
                    /> X
                  </label>
                </span>
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-800">대화 성향(1~5점, 활발함→차분함)</label>
              <input
                type="range"
                min={1}
                max={5}
                value={form.talkStyle}
                onChange={e => setForm(f => ({ ...f, talkStyle: Number(e.target.value) }))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-800">사진 공개 동의</label>
              <select required className="w-full border rounded px-3 py-2 text-gray-800"
                value={form.photoAgree}
                onChange={e => setForm(f => ({ ...f, photoAgree: e.target.value }))}
              >
                <option value="">선택</option>
                <option>예</option>
                <option>아니오</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-800">매칭에서 가장 중요하게 생각하는 점(50자 이내)</label>
              <input
                maxLength={50}
                className="w-full border rounded px-3 py-2 text-gray-800"
                value={form.important}
                onChange={e => setForm(f => ({ ...f, important: e.target.value }))}
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-gray-800">참석 가능한 시간대(예: 13:00-15:00)</label>
              <input
                required
                className="w-full border rounded px-3 py-2 text-gray-800"
                value={form.availableTime}
                onChange={e => setForm(f => ({ ...f, availableTime: e.target.value }))}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 to-blue-400 text-white font-semibold py-3 rounded-full shadow-lg hover:scale-105 transition"
              disabled={loading}
            >
              {loading ? "제출 중..." : "제출하기"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}