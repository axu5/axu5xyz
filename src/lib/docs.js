const docs = {
    beginner: {
        "1_access_to_the_internet": "Access to the Internet",
        "2_email": "Email",
        "3_creating_passwords": "Creating passwords",
        "4_google_search_skills": "Google search skills",
        "5_google_docs": "Google docs",
        "6_how_to_print_documents": "How to print documents",
        "7_kami": "Kami",
    },

    intermediate: {
        "1_advanced_google_search": "Advanced Google skills",
        "2_google_calendar": "Google Sheets",
        "3_google_sheets": "Google Slides",
        "4_google_slides": "Google Calendar",
    },

    advanced: {
        "1_todo": "Todo",
    },
};

export function getAllDocs() {
    return docs;
}

export function getDocBySlug(slug) {
    const [first, second] = slug.split(/\//g);
    return docs[first][second];
}
