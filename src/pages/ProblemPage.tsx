import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { problems } from '../data/problems';
import { ArrowLeft, CheckCircle, AlertCircle, Eye, EyeOff, Terminal } from 'lucide-react';

const ProblemPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const problem = problems.find(p => p.id === id);
  
  // State
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on step change
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentStepIndex]);

  if (!problem) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Problem not found</h2>
          <button onClick={() => navigate('/')} className="text-blue-400 hover:underline">Return Home</button>
        </div>
      </div>
    );
  }

  const currentStep = problem.steps[currentStepIndex];
  const isComplete = currentStepIndex >= problem.steps.length;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };

  const checkAnswer = () => {
    if (!currentStep) return;

    // Normalize comparison (trim spaces)
    const normalizedInput = inputValue.trim();
    const normalizedCommand = currentStep.command.trim();

    if (normalizedInput === normalizedCommand) {
      // Correct
      setInputValue('');
      setError(false);
      setShowAnswer(false);
      setCurrentStepIndex(prev => prev + 1);
    } else {
      // Incorrect
      setError(true);
      
      // Shake animation trigger could go here
      setTimeout(() => setError(false), 500); 
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans">
      {/* Navbarish header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Dashboard
          </button>
          <div className="font-mono text-sm text-slate-400">
            {problem.id}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Panel: Scenario & Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">{problem.title}</h1>
            {problem.titleKo && <h2 className="text-xl font-medium text-slate-500 mb-4">{problem.titleKo}</h2>}
            
            <p className="text-slate-600 mb-2">{problem.description}</p>
            {problem.descriptionKo && <p className="text-slate-500 text-sm mb-6">{problem.descriptionKo}</p>}
            
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                {problem.category ? `${problem.category} Information` : 'Parameters'}
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm space-y-2 text-slate-700 border border-gray-100 shadow-inner">
                {problem.scenarios.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-sm font-medium text-slate-500">Progress</span>
                 <span className="text-sm font-bold text-blue-600">{Math.round((currentStepIndex / problem.steps.length) * 100)}%</span>
               </div>
               <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                 <div 
                    className="bg-blue-600 h-full transition-all duration-500"
                    style={{ width: `${(currentStepIndex / problem.steps.length) * 100}%` }}
                 />
               </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Interactive Terminal Steps */}
        <div className="lg:col-span-2 space-y-6">
          {problem.steps.map((step, index) => {
            const isPast = index < currentStepIndex;
            const isCurrent = index === currentStepIndex;
            const isFuture = index > currentStepIndex;

            if (isFuture) return null; // Or render as hidden/disabled

            return (
              <div 
                key={step.id}
                className={`transition-all duration-500 ${isCurrent ? 'opacity-100 scale-100' : 'opacity-60'}`}
              >
                <div className={`
                  border rounded-xl overflow-hidden shadow-sm
                  ${isCurrent ? 'bg-white border-blue-500 ring-2 ring-blue-100' : 'bg-white/50 border-gray-200'}
                  ${isPast ? 'border-emerald-500/50 bg-emerald-50' : ''}
                `}>
                  
                  {/* Step Header */}
                  <div className="px-6 py-4 border-b border-gray-100 flex items-start justify-between bg-gray-50/50">
                     <div className="flex items-start">
                       <div className={`mt-0.5 mr-4 shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                         ${isPast ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'}
                         ${isCurrent ? 'bg-blue-600 text-white animate-pulse' : ''}
                       `}>
                         {isPast ? <CheckCircle size={14} /> : index + 1}
                       </div>
                       <div>
                         <h3 className={`font-medium ${isCurrent ? 'text-slate-900' : 'text-slate-500'}`}>
                           {step.instruction}
                         </h3>
                         {step.instructionKo && (
                           <p className={`text-sm mt-0.5 ${isCurrent ? 'text-slate-600' : 'text-slate-400'}`}>
                             {step.instructionKo}
                           </p>
                         )}
                       </div>
                     </div>
                  </div>

                  {/* Step Input Area */}
                  <div className="p-6">
                    {isPast ? (
                      <div className="font-mono text-sm text-emerald-700 bg-emerald-100/50 p-3 rounded-md border border-emerald-200/50">
                        <div className="flex items-center gap-2 mb-1 text-xs uppercase tracking-wide opacity-50 font-bold">
                          <CheckCircle size={12} /> Correct Answer
                        </div>
                        {step.command}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className={`
                          relative flex items-center bg-white border rounded-lg overflow-hidden transition-colors
                          ${error ? 'border-red-500' : 'border-gray-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100'}
                        `}>
                          <div className="pl-4 text-slate-400">
                             <Terminal size={18} />
                          </div>
                          <input
                            ref={isCurrent ? inputRef : null}
                            type="text"
                            value={inputValue}
                            onChange={(e) => {
                              setInputValue(e.target.value);
                              setError(false);
                            }}
                            onKeyDown={handleKeyDown}
                            className="w-full bg-transparent border-none focus:ring-0 text-slate-900 font-mono py-3 px-4 placeholder-slate-400 outline-none"
                            placeholder="Type command here..."
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                          />
                          <button 
                             onClick={checkAnswer}
                             className="mr-2 p-2 bg-gray-100 hover:bg-gray-200 text-slate-600 rounded-md text-sm font-medium transition-colors cursor-pointer"
                          >
                            Enter
                          </button>
                        </div>

                        {error && (
                          <div className="flex items-center text-red-500 text-sm animate-bounce">
                            <AlertCircle size={16} className="mr-2" />
                            Incorrect command. Try again or check the answer.
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => setShowAnswer(!showAnswer)}
                            className="flex items-center text-sm text-slate-500 hover:text-blue-600 transition-colors"
                          >
                             {showAnswer ? <EyeOff size={16} className="mr-2"/> : <Eye size={16} className="mr-2"/>}
                             {showAnswer ? 'Hide Answer' : 'Show Answer'}
                          </button>
                        </div>

                        {showAnswer && (
                           <div className="mt-2 p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm font-mono text-slate-600 break-all select-all shadow-inner">
                             {step.command}
                           </div>
                        )}
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}

          {isComplete && (
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle size={32} />
              </div>
              <h2 className="text-3xl font-bold text-emerald-900">Scenario Completed!</h2>
              <p className="text-emerald-700">You have successfully configured the network settings.</p>
              <button 
                onClick={() => navigate('/')}
                className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-emerald-200"
              >
                Return to Dashboard
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProblemPage;
