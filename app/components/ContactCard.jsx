"use client";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactCard({ icon, title, value, color }) {
  const Icon = icon;

  return (
    <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition">
      {/* Icon Box */}
      <div
        className="p-4 rounded-2xl border-2"
        style={{ borderColor: color }}
      >
        <Icon size={28} color={color} />
      </div>

      {/* Info */}
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-lg font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
