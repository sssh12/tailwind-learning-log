"use client";

interface ProfileCardProps {
  name: string;
  job: string;
  avatarUrl: string;
}

export function ProfileCard({ name, job, avatarUrl }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 w-full max-w-sm flex flex-col items-center gap-3">
      <img
        src={avatarUrl}
        alt={name}
        className="w-24 h-24 object-cover rounded-full border-4 border-blue-200"
      />
      <h3 className="text-lg font-bold text-gray-700">{name}</h3>
      <p className="text-gray-500">{job}</p>
    </div>
  );
}
