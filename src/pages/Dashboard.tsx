import React from 'react';
import { useNavigate } from 'react-router-dom';
import { problems } from '../data/problems';
import { Terminal, ArrowRight, Server } from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-gray-50 text-slate-900 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            RHCSA Master
          </h1>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">
            Interactive command-line practice environment for Red Hat Certified System Administrator exam.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.id}
              onClick={() => navigate(`/problem/${problem.id}`)}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden ring-0 hover:ring-2 ring-blue-500 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-slate-900">
                <Terminal size={100} />
              </div>

              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <Server size={24} />
                </div>
                
                {/* Category Badge */}
                {problem.category && (
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-md">
                    {problem.category}
                  </span>
                )}

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {problem.title}
                  </h2>
                  {problem.titleKo && (
                     <p className="text-slate-500 font-medium mt-1 text-lg">
                       {problem.titleKo}
                     </p>
                  )}
                </div>
                
                <div className="space-y-1">
                  <p className="text-slate-600 line-clamp-2">
                    {problem.description}
                  </p>
                  {problem.descriptionKo && (
                    <p className="text-slate-500 text-sm line-clamp-2">
                      {problem.descriptionKo}
                    </p>
                  )}
                </div>

                <div className="pt-4 flex items-center text-sm font-medium text-slate-500 group-hover:text-blue-600 transition-colors">
                  Start Practice 
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Decorative gradient blob */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            </div>
          ))}

          {/* Coming Soon Placeholder */}
          <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-gray-400 space-y-2 select-none bg-gray-50/50">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl text-gray-400">+</span>
            </div>
            <p className="font-medium">More scenarios coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
