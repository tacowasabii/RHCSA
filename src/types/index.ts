export interface Step {
  id: number;
  instruction: string;
  instructionKo?: string;
  command: string;
  hint?: string;
  output?: string; // Optional simulated output to show after success
  isMultiLine?: boolean; // If true, rendering a textarea instead of input
}

export interface Problem {
  id: string;
  category?: string; // e.g., 'Server A', 'Server B'
  title: string;
  titleKo?: string;
  description: string;
  descriptionKo?: string;
  scenarios: string[]; // List of scenario details (e.g. IP, Hostname)
  steps: Step[];
}
