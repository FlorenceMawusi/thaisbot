// Types for Thais Gibson's psychological frameworks and knowledge base

export interface AttachmentStyle {
  name: 'secure' | 'anxious' | 'avoidant' | 'disorganized';
  description: string;
  characteristics: string[];
  coreWounds: string[];
  relationshipPatterns: string[];
  healingApproaches: string[];
}

export interface CoreWound {
  name: string;
  description: string;
  commonTriggers: string[];
  manifestations: string[];
  healingStrategies: string[];
  oppositeEvidence: string[];
  imagery: string;
}

export interface HumanNeed {
  category: 'emotional' | 'physical' | 'social' | 'spiritual';
  name: string;
  description: string;
  whenUnmet: string[];
  healthyExpression: string[];
  relationshipImpact: string;
}

export interface TraumaResponse {
  type: 'fight' | 'flight' | 'freeze' | 'fawn';
  description: string;
  triggers: string[];
  bodySignals: string[];
  emotionalSignals: string[];
  copingStrategies: string[];
}

export interface RelationshipPattern {
  name: string;
  description: string;
  commonIn: string[]; // which attachment styles
  redFlags: string[];
  healthyAlternatives: string[];
  communicationTips: string[];
}

export interface TherapeuticExercise {
  name: string;
  purpose: string;
  instructions: string[];
  timeNeeded: string;
  category: 'attachment' | 'trauma' | 'wounds' | 'needs' | 'relationships' | 'emotional_processing' | 'communication' | 'boundaries';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface EmotionalProcessingTechnique {
  name: string;
  description: string;
  whenToUse: string[];
  steps: string[];
  duration: string;
  benefits: string[];
}

export interface CommunicationStrategy {
  name: string;
  description: string;
  situation: string;
  framework: string[];
  examples: string[];
  commonMistakes: string[];
}

export interface CoreWoundReprogramming {
  woundType: string;
  oldBelief: string;
  newBelief: string;
  reprogrammingSteps: string[];
  dailyPractices: string[];
  evidenceBuilding: string[];
}

export interface BoundaryTechnique {
  name: string;
  type: 'physical' | 'emotional' | 'mental' | 'time' | 'digital';
  description: string;
  howToImplement: string[];
  whenNeeded: string[];
  scripts: string[];
}

export interface KnowledgeBase {
  attachmentStyles: AttachmentStyle[];
  coreWounds: CoreWound[];
  humanNeeds: HumanNeed[];
  traumaResponses: TraumaResponse[];
  relationshipPatterns: RelationshipPattern[];
  exercises: TherapeuticExercise[];
}
