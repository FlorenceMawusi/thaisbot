import { KnowledgeBase } from '@/types/knowledge';

export const knowledgeBase: KnowledgeBase = {
  attachmentStyles: [
    {
      name: 'secure',
      description: 'Comfortable with intimacy and independence. Had consistent, responsive caregivers.',
      characteristics: [
        'High self-worth and positive view of others',
        'Comfortable with emotional intimacy',
        'Good communication skills',
        'Able to regulate emotions effectively',
        'Trusting but not naive'
      ],
      coreWounds: ['Generally minimal core wounds'],
      relationshipPatterns: [
        'Direct communication',
        'Healthy boundaries',
        'Supportive of partner\'s growth',
        'Conflict resolution focused'
      ],
      healingApproaches: [
        'Maintain healthy patterns',
        'Support others in their healing',
        'Continue personal growth'
      ]
    },
    {
      name: 'anxious',
      description: 'Craves closeness but fears abandonment. Had inconsistent caregiving.',
      characteristics: [
        'High anxiety in relationships',
        'Fear of abandonment',
        'Seeks constant reassurance',
        'Emotional dysregulation',
        'People-pleasing tendencies'
      ],
      coreWounds: [
        'I am not worthy of love',
        'People will leave me',
        'I am too much',
        'I am not enough'
      ],
      relationshipPatterns: [
        'Protest behaviors when triggered',
        'Hypervigilance to partner\'s mood',
        'Difficulty with alone time',
        'Overwhelming emotions'
      ],
      healingApproaches: [
        'Nervous system regulation techniques',
        'Self-soothing practices',
        'Building secure relationships',
        'Challenging negative core beliefs',
        'Developing emotional independence'
      ]
    },
    {
      name: 'avoidant',
      description: 'Values independence over intimacy. Had emotionally unavailable caregivers.',
      characteristics: [
        'Discomfort with emotional intimacy',
        'Highly self-reliant',
        'Difficulty expressing emotions',
        'Fear of engulfment',
        'Intellectualizes feelings'
      ],
      coreWounds: [
        'I cannot depend on others',
        'Emotions are dangerous',
        'I must be perfect to be loved',
        'Vulnerability leads to pain'
      ],
      relationshipPatterns: [
        'Emotional withdrawal when stressed',
        'Difficulty with commitment',
        'Avoids deep conversations',
        'Creates distance when triggered'
      ],
      healingApproaches: [
        'Gradual emotional vulnerability practice',
        'Learning to identify and express feelings',
        'Building tolerance for intimacy',
        'Challenging beliefs about independence',
        'Practicing interdependence'
      ]
    },
    {
      name: 'disorganized',
      description: 'Wants closeness but fears it. Often from traumatic or chaotic caregiving. Also called fearful avoidant (FA).',
      characteristics: [
        'Simultaneous fear of abandonment and intimacy',
        'Emotional volatility',
        'Difficulty trusting others',
        'Self-sabotaging behaviors',
        'Intense but unstable relationships'
      ],
      coreWounds: [
        'I am fundamentally flawed',
        'Love is dangerous', 
        'I am helpless',
        'I am trapped',
        'I will be abandoned',
        'I will be betrayed',
        'I cannot trust my own feelings',
        'I will be hurt if I get close'
      ],
      relationshipPatterns: [
        'Push-pull dynamics',
        'Intense emotional reactions',
        'Self-sabotage when things go well',
        'Difficulty maintaining stable connections'
      ],
      healingApproaches: [
        'Trauma-informed therapy',
        'Nervous system regulation',
        'Building emotional safety',
        'Gradual trust-building exercises',
        'Learning healthy relationship skills'
      ]
    }
  ],

  coreWounds: [
    {
      name: 'I am not worthy of love',
      description: 'Deep belief that one is fundamentally unlovable or defective',
      commonTriggers: [
        'Criticism or rejection',
        'Partner seeming distant',
        'Comparison to others',
        'Making mistakes'
      ],
      manifestations: [
        'People-pleasing behaviors',
        'Difficulty accepting compliments',
        'Self-sabotage in relationships',
        'Perfectionism'
      ],
      healingStrategies: [
        'Daily self-compassion practice',
        'Challenge negative self-talk',
        'Seek evidence of worthiness',
        'Practice receiving love'
      ],
      affirmations: [
        'I am worthy of love exactly as I am',
        'My worth is not dependent on others\' approval',
        'I deserve healthy, loving relationships'
      ]
    },
    {
      name: 'I am not safe',
      description: 'Chronic feeling of danger or threat, often from early trauma',
      commonTriggers: [
        'Sudden changes',
        'Loud noises or conflict',
        'Feeling out of control',
        'Past trauma reminders'
      ],
      manifestations: [
        'Hypervigilance',
        'Difficulty relaxing',
        'Control-seeking behaviors',
        'Anxiety and panic'
      ],
      healingStrategies: [
        'Grounding techniques',
        'Creating safety in environment',
        'Nervous system regulation',
        'Trauma therapy'
      ],
      affirmations: [
        'I am safe in this moment',
        'I can handle whatever comes my way',
        'I have the resources to protect myself'
      ]
    },
    {
      name: 'I cannot trust others',
      description: 'Deep skepticism about others\' intentions and reliability',
      commonTriggers: [
        'Broken promises',
        'Inconsistent behavior',
        'Feeling misunderstood',
        'Past betrayals'
      ],
      manifestations: [
        'Difficulty forming close relationships',
        'Testing behaviors',
        'Emotional walls',
        'Assuming worst intentions'
      ],
      healingStrategies: [
        'Start with small acts of trust',
        'Communicate needs clearly',
        'Practice vulnerability gradually',
        'Work on discernment vs. walls'
      ],
      affirmations: [
        'I can learn to trust wisely',
        'Some people are trustworthy',
        'I can protect myself while staying open'
      ]
    },
    {
      name: 'I am not good enough',
      description: 'Deep belief that one is fundamentally inadequate or insufficient',
      commonTriggers: [
        'Criticism or feedback',
        'Comparison to others',
        'Making mistakes',
        'Not meeting expectations'
      ],
      manifestations: [
        'Perfectionism',
        'People-pleasing behaviors',
        'Self-sabotage',
        'Difficulty accepting compliments'
      ],
      healingStrategies: [
        'Audit and inventory your accomplishments',
        'Focus on natural abilities and strengths',
        'Challenge cruel internal dialogue',
        'Practice gratitude for your qualities'
      ],
      affirmations: [
        'I am enough exactly as I am',
        'My worth is not dependent on performance',
        'I have valuable qualities and abilities'
      ]
    },
    {
      name: 'I am helpless',
      description: 'Belief that one has no power or control over their circumstances',
      commonTriggers: [
        'Feeling overwhelmed',
        'Unexpected changes',
        'Authority figures',
        'Complex situations'
      ],
      manifestations: [
        'Learned helplessness',
        'Difficulty making decisions',
        'Seeking others to rescue them',
        'Feeling victimized'
      ],
      healingStrategies: [
        'Identify areas where you do have control',
        'Take small empowering actions daily',
        'Build skills and competencies',
        'Challenge helpless thoughts with evidence'
      ],
      affirmations: [
        'I have the power to influence my life',
        'I can learn and grow from challenges',
        'I am resourceful and capable'
      ]
    }
  ],

  humanNeeds: [
    {
      category: 'emotional',
      name: 'Safety and Security',
      description: 'Feeling protected, stable, and free from harm',
      whenUnmet: [
        'Chronic anxiety',
        'Hypervigilance',
        'Difficulty trusting',
        'Control-seeking behaviors'
      ],
      healthyExpression: [
        'Creating safe environments',
        'Building secure relationships',
        'Establishing routines',
        'Setting healthy boundaries'
      ],
      relationshipImpact: 'When unmet, leads to clinginess, jealousy, or emotional distance'
    },
    {
      category: 'emotional',
      name: 'Love and Belonging',
      description: 'Feeling valued, accepted, and connected to others',
      whenUnmet: [
        'Loneliness',
        'People-pleasing',
        'Identity confusion',
        'Depression'
      ],
      healthyExpression: [
        'Authentic self-expression',
        'Building genuine connections',
        'Joining communities',
        'Practicing self-love'
      ],
      relationshipImpact: 'Essential for healthy bonding and emotional intimacy'
    },
    {
      category: 'emotional',
      name: 'Autonomy and Choice',
      description: 'Having control over one\'s life and decisions',
      whenUnmet: [
        'Resentment',
        'Rebellion',
        'Learned helplessness',
        'Loss of identity'
      ],
      healthyExpression: [
        'Making independent choices',
        'Setting personal boundaries',
        'Pursuing individual interests',
        'Taking responsibility'
      ],
      relationshipImpact: 'Balance between togetherness and individuality is crucial'
    },
    {
      category: 'emotional',
      name: 'Recognition and Validation',
      description: 'Being seen, heard, and acknowledged for who you are',
      whenUnmet: [
        'Attention-seeking behaviors',
        'Low self-esteem',
        'Perfectionism',
        'Emotional numbness'
      ],
      healthyExpression: [
        'Celebrating achievements',
        'Sharing feelings openly',
        'Seeking appropriate feedback',
        'Self-validation practices'
      ],
      relationshipImpact: 'Healthy relationships provide mutual recognition and appreciation'
    }
  ],

  traumaResponses: [
    {
      type: 'fight',
      description: 'Aggressive response to perceived threat, confronting the danger',
      triggers: [
        'Feeling cornered',
        'Injustice or unfairness',
        'Boundary violations',
        'Criticism or blame'
      ],
      bodySignals: [
        'Tense muscles',
        'Clenched jaw or fists',
        'Increased heart rate',
        'Hot or flushed feeling'
      ],
      emotionalSignals: [
        'Anger or rage',
        'Irritability',
        'Feeling defensive',
        'Urge to argue or attack'
      ],
      copingStrategies: [
        'Physical exercise to release energy',
        'Deep breathing exercises',
        'Timeout before responding',
        'Channel energy into productive activities'
      ]
    },
    {
      type: 'flight',
      description: 'Escape response to perceived threat, avoiding the danger',
      triggers: [
        'Overwhelming situations',
        'Conflict or confrontation',
        'Feeling trapped',
        'Performance pressure'
      ],
      bodySignals: [
        'Restless energy',
        'Rapid heartbeat',
        'Shallow breathing',
        'Urge to move or escape'
      ],
      emotionalSignals: [
        'Anxiety or panic',
        'Feeling overwhelmed',
        'Urge to run away',
        'Racing thoughts'
      ],
      copingStrategies: [
        'Grounding techniques',
        'Progressive muscle relaxation',
        'Mindfulness practices',
        'Create safe spaces to retreat'
      ]
    },
    {
      type: 'freeze',
      description: 'Immobilization response, becoming stuck or unable to act',
      triggers: [
        'Overwhelming emotions',
        'Decision paralysis',
        'Feeling powerless',
        'Conflicting demands'
      ],
      bodySignals: [
        'Feeling numb or disconnected',
        'Heavy or sluggish feeling',
        'Difficulty moving',
        'Shallow breathing'
      ],
      emotionalSignals: [
        'Feeling blank or empty',
        'Confusion',
        'Inability to think clearly',
        'Emotional numbness'
      ],
      copingStrategies: [
        'Gentle movement or stretching',
        'Warm baths or showers',
        'Sensory grounding exercises',
        'Start with small, manageable actions'
      ]
    },
    {
      type: 'fawn',
      description: 'People-pleasing response, trying to appease the threat',
      triggers: [
        'Conflict situations',
        'Disappointing others',
        'Authority figures',
        'Rejection or criticism'
      ],
      bodySignals: [
        'Tension in shoulders',
        'Forced smiling',
        'Nervous energy',
        'Stomach discomfort'
      ],
      emotionalSignals: [
        'Anxiety about others\' reactions',
        'Guilt or shame',
        'Fear of abandonment',
        'Loss of personal identity'
      ],
      copingStrategies: [
        'Practice saying no',
        'Identify personal needs and wants',
        'Set small boundaries daily',
        'Develop self-advocacy skills'
      ]
    }
  ],

  relationshipPatterns: [
    {
      name: 'Anxious-Avoidant Trap',
      description: 'Cycle where anxious partner pursues while avoidant partner withdraws',
      commonIn: ['anxious', 'avoidant'],
      redFlags: [
        'Constant pursuit and withdrawal',
        'Escalating emotional intensity',
        'Feeling like you\'re speaking different languages',
        'One person always initiating'
      ],
      healthyAlternatives: [
        'Take breaks during conflicts',
        'Practice self-soothing individually',
        'Communicate needs without demands',
        'Respect each other\'s processing styles'
      ],
      communicationTips: [
        'Use "I" statements',
        'Validate each other\'s feelings',
        'Schedule regular check-ins',
        'Practice active listening'
      ]
    },
    {
      name: 'Trauma Bonding',
      description: 'Unhealthy attachment formed through cycles of abuse and reconciliation',
      commonIn: ['disorganized', 'anxious'],
      redFlags: [
        'Intense highs and lows',
        'Walking on eggshells',
        'Isolation from support system',
        'Normalizing unhealthy behaviors'
      ],
      healthyAlternatives: [
        'Seek professional support',
        'Build external support network',
        'Learn healthy relationship patterns',
        'Practice self-care and boundaries'
      ],
      communicationTips: [
        'Document patterns of behavior',
        'Reach out to trusted friends/family',
        'Focus on actions, not just words',
        'Prioritize your safety and wellbeing'
      ]
    }
  ],

  exercises: [
    {
      name: 'Attachment Style Assessment',
      purpose: 'Identify your primary attachment style and patterns',
      instructions: [
        'Reflect on your typical relationship behaviors',
        'Consider your childhood caregiving experiences',
        'Notice your responses to conflict and intimacy',
        'Identify which attachment style resonates most'
      ],
      timeNeeded: '15-20 minutes',
      category: 'attachment',
      difficulty: 'beginner'
    },
    {
      name: 'Core Wound Identification',
      purpose: 'Discover and understand your deepest emotional wounds',
      instructions: [
        'Notice what triggers intense emotional reactions',
        'Identify recurring negative thoughts about yourself',
        'Explore childhood experiences that shaped these beliefs',
        'Write down your core wound statements',
        'Practice self-compassion around these wounds'
      ],
      timeNeeded: '30-45 minutes',
      category: 'wounds',
      difficulty: 'intermediate'
    },
    {
      name: 'Nervous System Regulation (Thais Gibson Method)',
      purpose: 'Calm your nervous system during activation using Thais Gibson\'s approach',
      instructions: [
        'Notice signs of nervous system activation (fight/flight/freeze/fawn)',
        'Pause and take slow, deep breaths to activate your parasympathetic system',
        'Ask yourself: "What core wound is being triggered right now?"',
        'Use your attachment style awareness to choose appropriate self-soothing',
        'Practice grounding by connecting with your physical environment',
        'Return to the present moment and choose a conscious response'
      ],
      timeNeeded: '10-15 minutes',
      category: 'trauma',
      difficulty: 'beginner'
    },
    {
      name: 'Needs Assessment',
      purpose: 'Identify and understand your fundamental human needs',
      instructions: [
        'Review the list of basic human needs',
        'Rate how well each need is currently being met',
        'Identify which unmet needs affect you most',
        'Brainstorm healthy ways to meet these needs',
        'Create an action plan for addressing unmet needs'
      ],
      timeNeeded: '25-30 minutes',
      category: 'needs',
      difficulty: 'intermediate'
    },
    {
      name: 'Core Wound Reprogramming (Thais Gibson Method)',
      purpose: 'Reprogram core wounds using Thais Gibson\'s evidence-based approach with repetition and emotion',
      instructions: [
        'Ask yourself what your core wounds have cost you in personal and professional life',
        'Become aware of how outdated and cruel your internal dialogue really is',
        'Start reprogramming by looking at your accomplishments that prove the wound wrong',
        'Find things that give you a boost - notice what you\'re capable of',
        'Focus on your natural abilities and feel the emotions in your body',
        'Look at relationships where you show up as enough/safe/worthy',
        'Practice gratitude for the beautiful qualities you\'ve discovered about yourself',
        'Use repetition and emotion daily to rewire neural pathways'
      ],
      timeNeeded: '20-30 minutes daily',
      category: 'wounds',
      difficulty: 'advanced'
    },
    {
      name: 'Inner Child Work (Thais Gibson Approach)',
      purpose: 'Heal childhood wounds by connecting with and nurturing your inner child',
      instructions: [
        'Identify what your inner child needed but didn\'t receive',
        'Visualize your younger self in a safe, loving environment',
        'Speak to your inner child with compassion and validation',
        'Promise to meet those unmet needs now as an adult',
        'Take concrete actions to fulfill those childhood needs',
        'Practice self-parenting with the love you needed then'
      ],
      timeNeeded: '20-30 minutes',
      category: 'wounds',
      difficulty: 'intermediate'
    },
    {
      name: 'Boundary Setting Practice',
      purpose: 'Learn to set and maintain healthy boundaries using Thais Gibson\'s approach',
      instructions: [
        'Identify where you feel resentful or drained in relationships',
        'Recognize what boundaries you need to set',
        'Practice saying no without over-explaining or justifying',
        'Communicate your needs clearly and directly',
        'Follow through consistently on your stated boundaries',
        'Notice how setting boundaries affects your relationships'
      ],
      timeNeeded: '15-20 minutes',
      category: 'relationships',
      difficulty: 'intermediate'
    },
    {
      name: 'Fearful Avoidant Core Wound Healing',
      purpose: 'Specific healing approach for fearful avoidants using Thais Gibson\'s methodology',
      instructions: [
        'Challenge your core wounds\' perceptions by writing down your interpretation',
        'Think of the opposite story of that core wound and find supporting proof',
        'Update your coping strategies - identify your autopilot mechanism when triggered',
        'Replace old coping mechanisms with healthier responses that get you what you want',
        'Start reprogramming rituals: find 10-15 examples of where you are enough/safe/worthy',
        'Check in with seven areas of life to find 1-3 more examples daily',
        'Feel the emotion in your body and anchor it into your nervous system',
        'Practice this daily to reprogram core wounds and reduce triggering'
      ],
      timeNeeded: '25-35 minutes daily',
      category: 'wounds',
      difficulty: 'advanced'
    },
    {
      name: 'Relationship Evaluation Framework (When to Leave)',
      purpose: 'Thais Gibson\'s three-step process for evaluating whether to continue investing in a relationship',
      instructions: [
        'Step 1: Set Clear Boundaries - Define what is acceptable and unacceptable behavior',
        'Communicate your needs and expectations explicitly, don\'t just hope for change',
        'Step 2: Focus on Personal Growth - Work on your own development during this period',
        'Don\'t lose yourself waiting for someone else to change',
        'Step 3: Assess Partner\'s Willingness to Grow - Look for concrete actions, not just words',
        'Set a reasonable deadline to observe genuine commitment to change',
        'Apply the "Needle Isn\'t Moving" test - if no real progress after your deadline, consider leaving',
        'Remember: avoid losing yourself in relationships that aren\'t serving mutual growth'
      ],
      timeNeeded: '30-45 minutes for initial setup, ongoing evaluation',
      category: 'relationships',
      difficulty: 'intermediate'
    },
    {
      name: 'Breakup Healing Framework (Thais Gibson Method)',
      purpose: 'Transform grief into personal growth using Thais Gibson\'s 6-step healing approach',
      instructions: [
        'Understand that breakups are grief - you\'re mourning the person AND the unmet needs they fulfilled',
        'Step 1: Shift Focus to Self-Care - Stop fixating on your ex, redirect to personal well-being',
        'Engage in self-care activities, nurture friendships, pursue personal passions',
        'Step 2: Establish Clear Boundaries - Set limits on communication and social media contact',
        'Decide on frequency/type of contact or implement no contact to protect emotional health',
        'Step 3: Practice Self-Compassion - Accept that sadness and vulnerability are natural',
        'Avoid self-judgment, be patient with yourself, foster positive internal dialogue',
        'Step 4: Identify and Fulfill Unmet Needs - Recognize what needs your ex fulfilled',
        'Find healthy ways to meet these needs (validation, intimacy, protection) independently',
        'Step 5: Emulate Positive Traits - Reflect on admired qualities in your ex',
        'Work on developing these qualities within yourself for personal growth',
        'Step 6: Challenge Negative Self-Narratives - Question self-deprecating thoughts',
        'Recognize these as unfounded assumptions, dismantle emotional chains to your ex'
      ],
      timeNeeded: '45-60 minutes initial setup, daily 15-20 minute practice',
      category: 'relationships',
      difficulty: 'advanced'
    }
  ]
};
