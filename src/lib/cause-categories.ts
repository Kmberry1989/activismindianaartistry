// src/lib/cause-categories.ts

export const CAUSE_CATEGORIES = {
    "Racial & Social Justice": [
        "Racial Justice",
        "Civil Rights",
        "Police Brutality",
        "Black Experience",
        "Racial Identity",
        "Cultural Equity",
        "Social Justice",
        "Social Justice (General)",
        "Prison Reform",
        "Anti-Fascism",
        "Holocaust Memory",
        "Historical Reconciliation",
        "Historical Correction",
        "Representation"
    ],
    "Feminism, Gender & Identity": [
        "Women's Suffrage",
        "Gender Equity",
        "Gender & LGBTQ+ Rights",
        "Feminism",
        "Identity Politics",
        "Family"
    ],
    "Immigration & Belonging": [
        "Immigration",
        "Detention Abolition",
        "Inclusive Community",
        "Community Safety",
        "Religious Tolerance",
        "Empathy"
    ],
    "Environment & Nature": [
        "Environmental Justice",
        "Conservation",
        "Nature Connection",
        "Urban Ecology",
        "Zero Waste",
        "Recycling",
        "Environmental Awareness",
        "Environmental Fragility",
        "Environmental Power",
        "Biological Awareness",
        "Indigenous Knowledge"
    ],
    "Community & Place": [
        "Community Building",
        "Public Space",
        "Spatial Justice",
        "Urban Planning",
        "Anti-Gentrification",
        "Beautification",
        "Urban Awareness",
        "Local Economy",
        "Public Joy"
    ],
    "Labor & Workers' Rights": [
        "Labor Rights",
        "Labor Rights for Artists",
        "Socialism",
        "Craft Advocacy",
        "Industrial History"
    ],
    "Health, Spirit & Accessibility": [
        "Mental Health",
        "Spirituality",
        "Spiritual Activism",
        "Disability Rights",
        "Accessibility",
        "Healing"
    ],
    "Culture, Education & Art Advocacy": [
        "Cultural Preservation",
        "Education",
        "STEAM Education",
        "Science Education",
        "Artistic Freedom",
        "Free Speech",
        "Cultural History",
        "Historical Memory",
        "Historical Dialogue",
        "Material Heritage",
        "Cultural Democracy",
        "Cultural Critique",
        "Cultural Dialogue",
        "Perception Awareness",
        "Systems Thinking",
        "Classical Reinterpretation",
        "Literature",
        "Youth Empowerment"
    ],
    "Politics": [
        "Political Change",
        "Political Satire",
        "Activism",
        "Civic Engagement"
    ]
};

// Helper to determine category
export function getCategoryForCause(specificCause: string): string {
    // Normalize input
    const cleanCause = specificCause.trim();

    for (const [category, subcategories] of Object.entries(CAUSE_CATEGORIES)) {
        // Check if the specific cause is in the list OR contained within a string
        if (subcategories.some(sub =>
            cleanCause === sub || cleanCause.includes(sub)
        )) {
            return category;
        }
    }
    return "Other";
}