import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { problems } from '../data/problems';
import { ArrowLeft, CheckCircle, AlertCircle, Eye, EyeOff, Terminal, RotateCcw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ProblemPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const problem = problems.find(p => p.id === id);

  // Per-step state
  const [inputValues, setInputValues] = useState<Record<number, string>>(() => {
    const init: Record<number, string> = {};
    problem?.steps.forEach((step, i) => { init[i] = step.initialValue || ''; });
    return init;
  });
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [errorSteps, setErrorSteps] = useState<Set<number>>(new Set());
  const [showAnswerSteps, setShowAnswerSteps] = useState<Set<number>>(new Set());

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

  const normalizeMultiline = (str: string) => {
    return str
      .split('\n')
      .map(line => line.trimEnd())
      .filter(line => line !== '')
      .join('\n')
      .trim();
  };

  const completedCount = completedSteps.size;
  const isAllComplete = completedCount === problem.steps.length;

  const handleInputChange = (index: number, value: string) => {
    setInputValues(prev => ({ ...prev, [index]: value }));
    setErrorSteps(prev => { const next = new Set(prev); next.delete(index); return next; });
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number, isMultiLine?: boolean) => {
    if (e.key === 'Enter' && !isMultiLine) {
      checkAnswer(index);
    }
    if (e.key === 'Enter' && e.ctrlKey && isMultiLine) {
      checkAnswer(index);
    }
  };

  const checkAnswer = (index: number) => {
    const step = problem.steps[index];
    if (!step) return;

    const input = inputValues[index] || '';
    let isCorrect = false;

    if (step.isMultiLine) {
      isCorrect = normalizeMultiline(input) === normalizeMultiline(step.command);
    } else {
      isCorrect = input.trim() === step.command.trim();
    }

    if (isCorrect) {
      setCompletedSteps(prev => new Set(prev).add(index));
      setErrorSteps(prev => { const next = new Set(prev); next.delete(index); return next; });
      setShowAnswerSteps(prev => { const next = new Set(prev); next.delete(index); return next; });
    } else {
      setErrorSteps(prev => new Set(prev).add(index));
      setTimeout(() => {
        setErrorSteps(prev => { const next = new Set(prev); next.delete(index); return next; });
      }, 500);
    }
  };

  const toggleShowAnswer = (index: number) => {
    setShowAnswerSteps(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
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

      <main className="max-w-[1732px] mx-auto px-4 md:px-8 py-8 lg:grid lg:grid-cols-[900px_1fr] lg:gap-8 lg:items-start justify-center">

        {/* Scenario & Info */}
        <div className="w-full lg:max-w-[900px] space-y-6 lg:sticky lg:top-24 mb-8 lg:mb-0">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">{problem.title}</h1>
            {problem.titleKo && <h2 className="text-xl font-medium text-slate-500 mb-4">{problem.titleKo}</h2>}

            <div className="text-slate-600 mb-6 prose prose-slate max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({...props}) => <h1 className="text-xl font-bold text-slate-900 mt-6 mb-4 border-b pb-2" {...props} />,
                  h2: ({...props}) => <h2 className="text-lg font-bold text-slate-800 mt-5 mb-3" {...props} />,
                  ul: ({...props}) => <ul className="list-disc pl-5 my-4 space-y-2" {...props} />,
                  ol: ({...props}) => <ol className="list-decimal pl-5 my-4 space-y-2" {...props} />,
                  li: ({...props}) => <li className="text-slate-700" {...props} />,
                  code: ({...props}) => <code className="bg-gray-100 text-slate-800 px-1.5 py-0.5 rounded font-mono text-sm border border-gray-200" {...props} />,
                  p: ({...props}) => <p className="mb-4 leading-relaxed whitespace-pre-wrap" {...props} />,
                }}
              >
                {problem.description}
              </ReactMarkdown>
            </div>

            {problem.descriptionKo && (
              <div className="text-slate-500 text-sm mb-6 border-t pt-4">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({...props}) => <p className="mb-2 whitespace-pre-wrap" {...props} />,
                  }}
                >
                  {problem.descriptionKo}
                </ReactMarkdown>
              </div>
            )}

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
                 <span className="text-sm font-bold text-blue-600">{Math.round((completedCount / problem.steps.length) * 100)}%</span>
               </div>
               <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                 <div
                    className="bg-blue-600 h-full transition-all duration-500"
                    style={{ width: `${(completedCount / problem.steps.length) * 100}%` }}
                 />
               </div>
            </div>
          </div>
        </div>

        {/* Interactive Terminal Steps */}
        <div className="w-full lg:max-w-[700px] space-y-6">
          {problem.steps.map((step, index) => {
            const isCompleted = completedSteps.has(index);
            const hasError = errorSteps.has(index);
            const isShowingAnswer = showAnswerSteps.has(index);

            return (
              <div
                key={step.id}
                className={`transition-all duration-500 ${isCompleted ? 'opacity-60' : 'opacity-100'}`}
              >
                <div className={`
                  border rounded-xl overflow-hidden shadow-sm
                  ${isCompleted ? 'border-emerald-500/50 bg-emerald-50' : 'bg-white border-gray-200'}
                `}>

                  {/* Step Header */}
                  <div className="px-6 py-4 border-b border-gray-100 flex items-start justify-between bg-gray-50/50">
                     <div className="flex items-start">
                       <div className={`mt-0.5 mr-4 shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                         ${isCompleted ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'}
                       `}>
                         {isCompleted ? <CheckCircle size={14} /> : index + 1}
                       </div>
                       <div>
                         <h3 className={`font-medium ${isCompleted ? 'text-slate-500' : 'text-slate-900'}`}>
                           {step.instruction}
                         </h3>
                         {step.instructionKo && (
                           <p className={`text-sm mt-0.5 ${isCompleted ? 'text-slate-400' : 'text-slate-600'}`}>
                             {step.instructionKo}
                           </p>
                         )}
                       </div>
                     </div>
                  </div>

                  {/* Step Input Area */}
                  <div className="p-6">
                    {isCompleted ? (
                      <div>
                        <div className="font-mono text-sm text-emerald-700 bg-emerald-100/50 p-3 rounded-md border border-emerald-200/50 whitespace-pre-wrap">
                          <div className="flex items-center gap-2 mb-1 text-xs uppercase tracking-wide opacity-50 font-bold">
                            <CheckCircle size={12} /> Correct Answer
                          </div>
                          {step.command}
                        </div>
                        <button
                          onClick={() => {
                            setCompletedSteps(prev => { const next = new Set(prev); next.delete(index); return next; });
                            setInputValues(prev => ({ ...prev, [index]: '' }));
                          }}
                          className="mt-3 flex items-center text-sm text-slate-500 hover:text-blue-600 transition-colors"
                        >
                          <RotateCcw size={14} className="mr-1.5" />
                          Retry
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex w-full">
                          <div className={`
                            relative flex items-start bg-white border rounded-lg overflow-hidden transition-colors w-full
                            ${hasError ? 'border-red-500' : 'border-gray-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100'}
                          `}>
                            <div className="pl-4 pt-3.5 text-slate-400">
                               <Terminal size={18} />
                            </div>
                            {step.isMultiLine ? (
                              <textarea
                                value={inputValues[index] || ''}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, index, true)}
                                className="w-full bg-transparent border-none focus:ring-0 text-slate-900 font-mono py-3 px-4 placeholder-slate-400 outline-none min-h-[150px] resize-y"
                                placeholder="Enter file content here... (Ctrl+Enter to submit)"
                                spellCheck="false"
                              />
                            ) : (
                              <input
                                type="text"
                                value={inputValues[index] || ''}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-full bg-transparent border-none focus:ring-0 text-slate-900 font-mono py-3 px-4 placeholder-slate-400 outline-none"
                                placeholder="Type command..."
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false"
                              />
                            )}
                            <button
                               onClick={() => checkAnswer(index)}
                               className={`mr-2 my-2 p-2 bg-gray-100 hover:bg-gray-200 text-slate-600 rounded-md text-sm font-medium transition-colors cursor-pointer ${step.isMultiLine ? 'self-end' : ''}`}
                            >
                              Enter
                            </button>
                          </div>
                        </div>

                        {hasError && (
                          <div className="flex items-center text-red-500 text-sm animate-bounce">
                            <AlertCircle size={16} className="mr-2" />
                            Incorrect.
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => toggleShowAnswer(index)}
                            className="flex items-center text-sm text-slate-500 hover:text-blue-600 transition-colors"
                          >
                             {isShowingAnswer ? <EyeOff size={16} className="mr-2"/> : <Eye size={16} className="mr-2"/>}
                             {isShowingAnswer ? 'Hide' : 'Show'}
                          </button>
                        </div>

                        {isShowingAnswer && (
                           <div className="mt-2 p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm font-mono text-slate-600 break-all select-all shadow-inner w-full whitespace-pre-wrap">
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

          {isAllComplete && (
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle size={32} />
              </div>
              <h2 className="text-3xl font-bold text-emerald-900">Completed!</h2>
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
