export type ResourceArticle = {
  slug: string;
  title: string;
  summary: string;
  sections: { heading: string; paragraphs: string[] }[];
  checklistHref?: string;
};

export const resourceArticles: ResourceArticle[] = [
  {
    slug: 'medication-safety',
    title: 'Medication Safety',
    summary:
      'Practical guidance for organizing prescriptions, avoiding errors, and talking with providers about your medication list.',
    checklistHref: '/resources/checklists/medication-safety',
    sections: [
      {
        heading: 'Know every medication you take',
        paragraphs: [
          'Keep a current list of all prescriptions, over-the-counter medicines, vitamins, and supplements. Include the name, dose, how often you take it, and why it was prescribed.',
          'Bring this list to every appointment and share it with your pharmacist and care team. After hospitalizations or specialist visits, update the list immediately.',
        ],
      },
      {
        heading: 'Reduce the risk of mix-ups',
        paragraphs: [
          'Use one pharmacy when possible so interactions can be screened consistently. Store medications in a cool, dry place away from children and pets, and never share prescriptions.',
          'Set reminders for doses, and ask your nurse or pharmacist about pill organizers if your regimen is complex. If a pill looks different than usual, call the pharmacy before taking it.',
        ],
      },
      {
        heading: 'When to call for help',
        paragraphs: [
          'Contact your provider or pharmacist if you experience unexpected side effects, miss multiple doses, or are unsure whether two medicines can be taken together.',
          'This information is educational and is not a substitute for personalized medical advice. Prestwell Continuum can help review medications as part of concierge nursing care.',
        ],
      },
    ],
  },
  {
    slug: 'preventing-falls',
    title: 'Preventing Falls',
    summary:
      'Home safety tips and daily habits that help older adults stay steady, confident, and independent.',
    checklistHref: '/resources/checklists/preventing-falls',
    sections: [
      {
        heading: 'Make the home safer',
        paragraphs: [
          'Remove loose rugs, clear clutter from walkways, and ensure stairways and bathrooms have sturdy handrails or grab bars. Keep frequently used items within easy reach.',
          'Improve lighting in hallways, bedrooms, and outdoor paths. Nightlights in bathrooms and bedrooms reduce risk during overnight trips.',
        ],
      },
      {
        heading: 'Support strength and balance',
        paragraphs: [
          'Ask your clinician about appropriate activity, including balance and strength exercises. Wear supportive, non-slip footwear indoors and outdoors.',
          'Stand up slowly after sitting or lying down. If dizziness is frequent, report it promptly—medication side effects and blood pressure changes are common contributors.',
        ],
      },
      {
        heading: 'Have a plan',
        paragraphs: [
          'Keep a phone within reach and consider a medical alert device if you live alone. After any fall—even without obvious injury—tell your healthcare provider.',
          'Prestwell Continuum offers fall risk assessment and home safety evaluation as part of concierge nursing services.',
        ],
      },
    ],
  },
  {
    slug: 'healthy-aging',
    title: 'Healthy Aging',
    summary:
      'Everyday habits that support independence, wellness, and quality of life as you age.',
    sections: [
      {
        heading: 'Stay connected and engaged',
        paragraphs: [
          'Meaningful relationships, routines, and purpose support both physical and emotional health. Schedule regular contact with family, friends, faith communities, or local programs.',
          'Keep up with preventive care—vision, hearing, dental, vaccinations, and recommended screenings—so small issues are addressed early.',
        ],
      },
      {
        heading: 'Nourish body and mind',
        paragraphs: [
          'Aim for balanced meals, adequate hydration, and sleep that leaves you rested. Limit alcohol and avoid tobacco. Ask your provider before starting supplements.',
          'Cognitive wellness benefits from reading, hobbies, gentle learning, and managing chronic conditions consistently between appointments.',
        ],
      },
      {
        heading: 'Partner in your care',
        paragraphs: [
          'Write down questions before visits and bring a trusted person when decisions feel complex. Personalized nursing oversight can help translate care plans into daily life.',
          'Educational content only—discuss changes with your healthcare providers. Prestwell Continuum is here to support healthy aging at home.',
        ],
      },
    ],
  },
  {
    slug: 'hospital-discharge-checklist',
    title: 'Hospital Discharge Checklist',
    summary:
      'A clear checklist to prepare for leaving the hospital and recovering safely at home.',
    checklistHref: '/resources/checklists/hospital-discharge',
    sections: [
      {
        heading: 'Before you leave',
        paragraphs: [
          'Confirm your discharge diagnosis, new and stopped medications, follow-up appointments, and warning signs that require urgent care or a return to the hospital.',
          'Ask who to call with questions after hours. Make sure you have written instructions and understand diet, activity, wound care, and therapy recommendations.',
        ],
      },
      {
        heading: 'First days at home',
        paragraphs: [
          'Fill new prescriptions promptly and reconcile them with your previous medication list. Arrange transportation to follow-up visits and support for meals, mobility, and personal care if needed.',
          'Track symptoms, vital signs if instructed, and any confusion or sudden decline. Share updates with family members who help coordinate care.',
        ],
      },
      {
        heading: 'How Prestwell can help',
        paragraphs: [
          'Hospital-to-home support—including post-discharge visits, medication reconciliation, and family education—can reduce readmission risk and ease the transition.',
          'This checklist is educational. Follow your discharging provider’s instructions and call 911 for emergencies.',
        ],
      },
    ],
  },
  {
    slug: 'caregiver-resources',
    title: 'Caregiver Resources',
    summary:
      'Guidance for family caregivers balancing work, distance, and the desire to support a loved one well.',
    sections: [
      {
        heading: 'You are part of the care team',
        paragraphs: [
          'Caregiving often includes appointment logistics, medication tracking, emotional support, and advocacy. Clarify roles among family members so responsibilities are shared when possible.',
          'Ask for written updates and permission so providers can communicate with you. Long-distance caregivers benefit from a single point of clinical contact.',
        ],
      },
      {
        heading: 'Protect your own wellbeing',
        paragraphs: [
          'Burnout is common. Build in rest, accept help, and watch for signs of overwhelm. Local respite, adult day programs, and support groups can provide relief.',
          'Keep important documents organized: medication lists, insurance cards, advance directives, and emergency contacts.',
        ],
      },
      {
        heading: 'Support from Prestwell Continuum',
        paragraphs: [
          'We offer family updates, care conferences, and long-distance caregiver support with client authorization—so families stay informed without carrying every clinical detail alone.',
          'Educational guidance only; your loved one’s care plan should always be directed by their licensed providers.',
        ],
      },
    ],
  },
  {
    slug: 'blood-pressure-education',
    title: 'Blood Pressure Education',
    summary:
      'Understand blood pressure readings, home monitoring basics, and when to seek help.',
    sections: [
      {
        heading: 'Why blood pressure matters',
        paragraphs: [
          'Blood pressure reflects the force of blood against artery walls. Consistently high readings increase risk for heart disease, stroke, and kidney problems; very low readings can cause dizziness and falls.',
          'Your personal targets should come from your physician. Bring home readings to appointments so decisions are based on real patterns—not a single office measurement.',
        ],
      },
      {
        heading: 'Measuring at home',
        paragraphs: [
          'Use a validated upper-arm cuff when possible. Sit quietly for five minutes, feet flat, arm supported at heart level. Avoid caffeine and exercise beforehand.',
          'Record the date, time, and readings. Note symptoms such as headache, chest pain, shortness of breath, or sudden weakness—these require urgent evaluation.',
        ],
      },
      {
        heading: 'Working with your care team',
        paragraphs: [
          'Medication adherence, sodium awareness, activity, and stress management all influence blood pressure. Never stop prescribed medicine without clinician guidance.',
          'Prestwell Continuum provides vital sign monitoring and chronic disease oversight as part of concierge nursing. This page is educational, not medical advice.',
        ],
      },
    ],
  },
  {
    slug: 'diabetes-education',
    title: 'Diabetes Education',
    summary:
      'Foundational tips for living well with diabetes between provider visits.',
    sections: [
      {
        heading: 'Daily foundations',
        paragraphs: [
          'Consistent meals, prescribed medications or insulin, glucose monitoring as directed, foot checks, and movement all support stable diabetes management.',
          'Know your target ranges and what to do for high or low readings according to your provider’s plan. Keep glucose tablets or a quick sugar source available if you are at risk for lows.',
        ],
      },
      {
        heading: 'Appointments and complications',
        paragraphs: [
          'Routine eye, kidney, foot, and A1C monitoring help catch complications early. Bring your meter or log to visits and ask about medication adjustments when patterns change.',
          'Illness, travel, and new prescriptions can affect glucose—call your care team before making major changes on your own.',
        ],
      },
      {
        heading: 'Concierge support',
        paragraphs: [
          'RN-led wellness visits can reinforce education, review logs, and coordinate with physicians so day-to-day management feels clearer for clients and families.',
          'Educational content only. Follow your diabetes care plan and seek emergency care for severe symptoms.',
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return resourceArticles.find((a) => a.slug === slug);
}
