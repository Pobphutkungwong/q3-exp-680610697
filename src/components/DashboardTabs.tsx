import React, { useState } from "react";
import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";


const Card = ({ title, value, subText, icon, colorClass = 'bg-white' }) => (
  <div className={`p-5 rounded-2xl shadow-sm border border-gray-100 ${colorClass} flex flex-col justify-between`}>
    <div className="flex items-center justify-between mb-3">
      <span className="text-sm font-medium text-gray-500">{title}</span>
      {icon && <span className="text-2xl">{icon}</span>}
    </div>
    <div>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      {subText && <p className="text-xs text-gray-400 mt-1">{subText}</p>}
    </div>
  </div>
);

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  return (
    <div className="bg-gray-50  font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-2.5 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('byCategory')}
            className={`py-2.5 px-6 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'byCategory'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            By Category
          </button>
        </div>

        {activeTab === 'overview' && (
          <div>
            <OverviewCards />
          </div>
        )}

        {activeTab === 'byCategory' && (
          <div>
            <CategoryCards />
          </div>
        )}
      </div>
    </div>
  );
}
