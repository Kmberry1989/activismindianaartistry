"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Trophy, ArrowRight, RotateCcw } from "lucide-react";

export interface Question {
    id: string;
    text: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export interface QuizProps {
    title: string;
    questions: Question[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function QuizModal({ title, questions, open, onOpenChange }: QuizProps) {
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const currentQ = questions[currentQIndex];

    const handleOptionClick = (index: number) => {
        if (isAnswered) return;
        setSelectedOption(index);
        setIsAnswered(true);

        if (index === currentQ.correctIndex) {
            setScore((prev) => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentQIndex < questions.length - 1) {
            setCurrentQIndex((prev) => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResults(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQIndex(0);
        setScore(0);
        setShowResults(false);
        setSelectedOption(null);
        setIsAnswered(false);
    };

    const scorePercentage = Math.round((score / questions.length) * 100);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{showResults ? "Quiz Results" : `Quiz: ${title}`}</DialogTitle>
                </DialogHeader>

                {!showResults ? (
                    <div className="space-y-4">
                        {/* Progress Bar */}
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary transition-all duration-300"
                                style={{ width: `${((currentQIndex) / questions.length) * 100}%` }}
                            />
                        </div>

                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            Question {currentQIndex + 1} of {questions.length}
                        </div>

                        <h3 className="text-lg font-bold leading-tight min-h-[3.5rem]">
                            {currentQ.text}
                        </h3>

                        <div className="space-y-2">
                            {currentQ.options.map((option, idx) => {
                                let btnStyle = "justify-start text-left h-auto py-3 px-4 w-full border";

                                if (isAnswered) {
                                    if (idx === currentQ.correctIndex) {
                                        btnStyle += " bg-green-100 border-green-500 text-green-900 hover:bg-green-100 hover:text-green-900 dark:bg-green-900/30 dark:border-green-500 dark:text-green-100";
                                    } else if (idx === selectedOption) {
                                        btnStyle += " bg-red-100 border-red-500 text-red-900 hover:bg-red-100 hover:text-red-900 dark:bg-red-900/30 dark:border-red-500 dark:text-red-100";
                                    } else {
                                        btnStyle += " opacity-50";
                                    }
                                } else {
                                    btnStyle += " hover:border-primary hover:bg-accent/50";
                                }

                                return (
                                    <Button
                                        key={idx}
                                        variant="ghost"
                                        className={btnStyle}
                                        onClick={() => handleOptionClick(idx)}
                                        disabled={isAnswered}
                                    >
                                        <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-background text-xs font-semibold text-muted-foreground">
                                            {String.fromCharCode(65 + idx)}
                                        </span>
                                        {option}
                                        {isAnswered && idx === currentQ.correctIndex && (
                                            <CheckCircle2 className="ml-auto h-4 w-4 text-green-600" />
                                        )}
                                        {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                                            <XCircle className="ml-auto h-4 w-4 text-red-600" />
                                        )}
                                    </Button>
                                );
                            })}
                        </div>

                        {isAnswered && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 mt-4 rounded-lg bg-muted/50 p-3 text-sm">
                                <p className="font-semibold mb-1">
                                    {selectedOption === currentQ.correctIndex ? "Correct!" : "Incorrect"}
                                </p>
                                <p className="opacity-90">{currentQ.explanation}</p>
                            </div>
                        )}

                        <DialogFooter className="pt-2">
                            <Button onClick={handleNext} disabled={!isAnswered} className="w-full sm:w-auto">
                                {currentQIndex < questions.length - 1 ? (
                                    <>Next Question <ArrowRight className="ml-2 h-4 w-4" /></>
                                ) : "See Results"}
                            </Button>
                        </DialogFooter>
                    </div>
                ) : (
                    // RESULTS SCREEN
                    <div className="text-center space-y-6 py-4">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/30">
                            <Trophy className="h-10 w-10 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold">{scorePercentage}% Score</div>
                            <p className="text-muted-foreground mt-1">
                                You got {score} out of {questions.length} correct!
                            </p>
                        </div>

                        <div className="p-4 bg-muted rounded-xl text-sm">
                            {scorePercentage >= 80 ? (
                                <p>🎉 Amazing job! You&apos;ve mastered this topic.</p>
                            ) : scorePercentage >= 60 ? (
                                <p>👍 Good effort! Review the material and try again to improve.</p>
                            ) : (
                                <p>📚 Keep studying! Review the lesson plan and give it another shot.</p>
                            )}
                        </div>

                        <DialogFooter className="sm:justify-center">
                            <Button onClick={resetQuiz} variant="outline" className="gap-2">
                                <RotateCcw className="h-4 w-4" /> Retry Quiz
                            </Button>
                            <Button onClick={() => onOpenChange(false)}>Close</Button>
                        </DialogFooter>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
